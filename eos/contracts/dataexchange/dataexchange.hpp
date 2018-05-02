/**
 *  @file
 *  @copyright defined in eos/LICENSE.txt
 */

#include <afc/afc.hpp>
/**
 *  @defgroup safe
 *  @brief 数据交易智能合约
 *  @ingroup contractapi
 *
 */
#ifndef AFC
#define AFC afc
#endif
#ifndef DATAEXECHANGE
#define DATAEXECHANGE dataexechange
#endif

namespace DATAEXECHANGE {

class DataExException;



typedef eosio::name data_str; //字符串类型
typedef uint64_t data_num; //数字类型



/**
 * 支付$quantity afc 给$account_name
 */
//@abi table
struct PACKED(bill){
	account_name name;
	AFC::afc_tokens quantity;
};

//@abi table
struct PACKED( bid ) {
	data_str tx_id;			//<一般交给客户端生成，否则可能无法提价成功,每次请求的唯一标识
	data_str order_name;		//<order名称,标识其业务属性
	data_str item_id;		//<标的物id
	account_name buyer;		//<购买服务的人
	data_str req_checksum;	//<请求的校验和
	uint8_t done = 0;//<是否结算
};
static_assert( sizeof(bid) == 3*sizeof(data_str)+sizeof(account_name)+sizeof(uint8_t), "unexpected padding" );

//@abi table
struct PACKED( ask ) {
	data_str tx_id;			//<一般交给客户端生成，否则可能无法提价成功,每次请求的唯一标识
	data_str order_name;		//<order名称,标识其业务属性
	data_str item_id;		//<标的物id
	account_name buyer;		//<购买服务的人
	data_str req_checksum;	//<请求的校验和
	data_str resp_checksum;	//<返回结果的校验和
	bill bill_of_seller;//<给数据供应方的支付清单
	bill bill_of_miner;//<给查询代理的支付清单
};
static_assert( sizeof(ask) == 4*sizeof(data_str)+sizeof(account_name)+2*sizeof(bill), "unexpected padding" );

//@abi action buy
struct buy_order : public bid { };
//@abi action sell
struct sell_order : public ask { };

//@abi table i64
struct PACKED( account ) {
   account( account_name o = account_name() ):owner(o){}
   account_name owner;
   AFC::afc_tokens afc_balance;
   bool is_empty() const { return ! ( bool(afc_balance) ); }
};
//账户存储
using accounts = eosio::table<N(dataexchange),N(dataexchange),N(account),account,uint64_t>;
using bids = eosio::table<N(dataexchange),N(dataexchange),N(bid),bid,uint64_t>;
using asks = eosio::table<N(dataexchange),N(dataexchange),N(ask),ask,uint64_t>;

} /// @} /// dataexchangeapi
