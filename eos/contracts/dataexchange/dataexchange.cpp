/**
 *  @file
 *  @copyright defined in eos/LICENSE.txt
 */

#include <dataexchange/dataexchange.hpp> /// defines transfer struct (abi)
#include <eoslib/print.hpp>

using namespace DATAEXECHANGE;
using namespace eosio;
namespace DATAEXECHANGE {


///  When storing accounts, check for empty balance and remove account
void store_account(account_name account_to_store, const account& a) {
	if (a.is_empty()) {
		///               value, scope
		accounts::remove(a, account_to_store);
	} else {
		///              value, scope
		accounts::store(a, account_to_store);
	}
}



inline void save(const account& a) {
	if (a.is_empty()) {
		accounts::remove(a);
	} else {
		accounts::store(a);
	}
}

inline account get_account(account_name owner) {
	account owned_account(owner);
	///      scope, record
	accounts::get(owned_account);
	return owned_account;
}

template<typename Lambda>
inline void modify_account(account_name a, Lambda&& modify) {
	auto acnt = get_account(a);
	modify(acnt);
	save(acnt);
}
/**
 * 查询方广播需求
 */
void apply_buy( buy_order t) {
	require_auth(t.buyer);
	bid & data_bid = t;
	assert( !bids::get(t.tx_id, data_bid) , "data bid is already exist!" );
	data_bid.done = 0u;
	bids::store(data_bid);
}
/**
 * 给查询结果做存证并完成结算
 */
void apply_sell( sell_order t) {

	require_auth(t.bill_of_miner.name);//矿工交付

	assert( int(t.bill_of_seller.quantity > AFC::afc_tokens(0u)), "invalid quantity" );

	bid data_bid;
	ask & data_ask = t;
	assert(bids::get(t.tx_id, data_bid), "data bid dose not exist!");
	assert(!data_bid.done , "data bid is already done.");
	assert(data_bid.req_checksum == t.req_checksum &&
			data_bid.order_name == t.order_name &&
			data_bid.buyer == t.buyer &&
			data_bid.item_id == t.item_id,
			"bid dose not match");
	asks::store(data_ask);
	account buyer = get_account(t.buyer);
	assert( int(buyer.afc_balance >= t.bill_of_miner.quantity + t.bill_of_seller.quantity), "buyer balance is lower than ask." );
	account seller = get_account(t.bill_of_seller.name);
	account miner = get_account(t.bill_of_miner.name);
	buyer.afc_balance -= t.bill_of_miner.quantity + t.bill_of_seller.quantity;
	seller.afc_balance += t.bill_of_seller.quantity;
	miner.afc_balance += t.bill_of_miner.quantity;
	save(buyer);
	save(seller);
	save(miner);
	asks::store(data_ask);
	data_bid.done = 1u; //完成交易
	bids::store(data_bid);
}

/**
 * 当afc合约中某账户向dataexchange或者从dataexchange向afc账户转账时触发
 * afc对数据交易所的转账和体现操作
 */
void apply_afc_transfer(const afc::transfer & transfer) {
	if (transfer.to == N(dataexchange)) {
		modify_account(transfer.from, [&]( account & mod_account ) {
			mod_account.afc_balance += transfer.quantity;
		});
	} else if (transfer.from == N(dataexchange)) {
		require_auth(transfer.to); /// require the receiver of funds (account owner) to authorize this transfer
		modify_account(transfer.to, [&]( account& mod_account ) {
			mod_account.afc_balance -= transfer.quantity;
		});
	} else {
		assert(false, "notified on transfer that is not relevant to this dataexchange");
	}
}
}

using namespace DATAEXECHANGE;

extern "C" {

    void init()  {

    }//init

    void apply(uint64_t code, uint64_t action) {
    	eosio::print( "exec contract dataexchange code=", eosio::name(code), " action=", eosio::name(action), "\n" );
    	if (code == N(dataexchange)) {
    		if (action == N(buy)) {
    			apply_buy( eosio::current_message<buy_order>() );
    		} else if (action == N(sell)) {
    			apply_sell( eosio::current_message<sell_order>() );
    		}
    	} else if( code == N(afc) ) {
            if( action == N(transfer) )
               apply_afc_transfer( eosio::current_message<afc::transfer>() );
        }
    }//apply
}
