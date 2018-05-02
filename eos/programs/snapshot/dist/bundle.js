const CROWDSALE_ABI = [{ "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "address" }], "name": "claimed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "owner_", "type": "address" }], "name": "setOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "time", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint128" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "foundersAllocation", "outputs": [{ "name": "", "type": "uint128" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "day", "type": "uint256" }], "name": "claim", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "foundersKey", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "address" }], "name": "userBuys", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "day", "type": "uint256" }], "name": "createOnDay", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "freeze", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "keys", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "startTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "authority_", "type": "address" }], "name": "setAuthority", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "dailyTotals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "buy", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [], "name": "openTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "EOS", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "today", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "authority", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "eos", "type": "address" }], "name": "initialize", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "createFirstDay", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "claimAll", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "timestamp", "type": "uint256" }], "name": "dayFor", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "day", "type": "uint256" }, { "name": "limit", "type": "uint256" }], "name": "buyWithLimit", "outputs": [], "payable": true, "type": "function" }, { "constant": false, "inputs": [], "name": "collect", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "numberOfDays", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "key", "type": "string" }], "name": "register", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "createPerDay", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "inputs": [{ "name": "_numberOfDays", "type": "uint256" }, { "name": "_totalSupply", "type": "uint128" }, { "name": "_openTime", "type": "uint256" }, { "name": "_startTime", "type": "uint256" }, { "name": "_foundersAllocation", "type": "uint128" }, { "name": "_foundersKey", "type": "string" }], "payable": false, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "window", "type": "uint256" }, { "indexed": false, "name": "user", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "LogBuy", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "window", "type": "uint256" }, { "indexed": false, "name": "user", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "LogClaim", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }, { "indexed": false, "name": "key", "type": "string" }], "name": "LogRegister", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "LogCollect", "type": "event" }, { "anonymous": false, "inputs": [], "name": "LogFreeze", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "authority", "type": "address" }], "name": "LogSetAuthority", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }], "name": "LogSetOwner", "type": "event" }];
const TOKEN_ABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "stop", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "owner_", "type": "address" }], "name": "setOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint128" }], "name": "push", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "name_", "type": "bytes32" }], "name": "setName", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint128" }], "name": "mint", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "src", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "stopped", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "authority_", "type": "address" }], "name": "setAuthority", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "wad", "type": "uint128" }], "name": "pull", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint128" }], "name": "burn", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "start", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "authority", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "src", "type": "address" }, { "name": "guy", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "inputs": [{ "name": "symbol_", "type": "bytes32" }], "payable": false, "type": "constructor" }, { "anonymous": true, "inputs": [{ "indexed": true, "name": "sig", "type": "bytes4" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": true, "name": "foo", "type": "bytes32" }, { "indexed": true, "name": "bar", "type": "bytes32" }, { "indexed": false, "name": "wad", "type": "uint256" }, { "indexed": false, "name": "fax", "type": "bytes" }], "name": "LogNote", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "authority", "type": "address" }], "name": "LogSetAuthority", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }], "name": "LogSetOwner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }];
const UTILITY_ABI = [{ "constant": true, "inputs": [{ "name": "user", "type": "address" }], "name": "userBuys", "outputs": [{ "name": "result", "type": "uint256[351]" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "sale", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "dailyTotals", "outputs": [{ "name": "result", "type": "uint256[351]" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "user", "type": "address" }], "name": "userClaims", "outputs": [{ "name": "result", "type": "bool[351]" }], "payable": false, "type": "function" }, { "inputs": [{ "name": "_sale", "type": "address" }], "payable": false, "type": "constructor" }];
//For debugging and repurposed for gui
const calculator = function () {

  let debug = {};

  debug.tests = {};

  debug.registry = {
    total: 0 // Total Users found in LogRegister
    , accepted: 0 // Registrants with valid keys and balance
    , rejected: 0 // Registrants with invalid keys or zero balances
  };

  debug.reclaimable = {
    total: 0
  };

  debug.rejected = {
    balance_is_zero: 0 // Registrants with no balance
    , key_is_empty: 0 // key===""
    , key_is_eth: 0 // Ethereum key 0x...
    , key_is_malformed: 0 // Starts with EOS... but isn't a key
    , key_is_junk: 0 // Garbage
    , total: 0,
    $key_is_empty: web3.toBigNumber(0),
    $key_is_eth: web3.toBigNumber(0),
    $key_is_malformed: web3.toBigNumber(0),
    $key_is_junk: web3.toBigNumber(0),
    $total: web3.toBigNumber(0) // ^^^^^^ sum
  };

  debug.distribution = {
    $total_supply: web3.toBigNumber(0) // 2M(periods-1)+200M (not static for testnet snapshot)
    , $snapshot_supply: web3.toBigNumber(0) // 2M(periods-1)+200M (not static for testnet snapshot)
    , $balance_wallets: web3.toBigNumber(0) // sum(tokens in registrant walthis.balances)
    , $balance_unclaimed: web3.toBigNumber(0) // sum(tokens still locked in contract)
    , $balance_reclaimable: web3.toBigNumber(0) // crowdsale contract EOS token balance + token contract EOS token balance
    , $balance_reclaimed: web3.toBigNumber(0) // crowdsale contract EOS token balance + token contract EOS token balance
    , $balance_rejected: web3.toBigNumber(0) // sum(tokens in registrant walthis.balances)
    , $balances_found: web3.toBigNumber(0) // sum(wallet, unclaimed, reclaimable)
    , $balances_missing: web3.toBigNumber(0) // (tokens_supply-balances_found)/totens_total
  };

  debug.rates = {
    registrant_acceptance: null // registrants.accepted / registrants.total
    , balance_wallets: null // distribution.balance_wallets / distribution.balances_found
    , balance_unclaimed: null // 
    , balance_reclaimable: null //
    , balance_reclaimed: null //
    , balances_found: null // sum(wallet, unclaimed, reclaimable)
    , balances_missing: null // (tokens_supply-balances_found)/totens_total
  };

  debug.update = function () {
    //registrants
    this.registry.total = registrants.length;
    this.registry.accepted = get_registrants_accepted().length;
    this.registry.rejected = get_registrants_rejected().length;

    //Rejection Token Value
    this.rejected.$key_is_empty = this.sum_rejection("key_is_empty");
    this.rejected.$key_is_eth = this.sum_rejection("key_is_eth");
    this.rejected.$key_is_malformed = this.sum_rejection("key_is_malformed");
    this.rejected.$key_is_junk = this.sum_rejection("key_is_junk");
    this.rejected.$total = get_registrants_rejected().filter(reject => {
      return reject.rejected != "balance_is_zero";
    }).map(reject => {
      return reject.balance.total;
    }).reduce((acc, balance) => balance.plus(acc), web3.toBigNumber(0));

    //Rejection Occurences
    this.rejected.balance_is_zero = this.sum_rejection_occurences("balance_is_zero");
    this.rejected.key_is_empty = this.sum_rejection_occurences("key_is_empty");
    this.rejected.key_is_eth = this.sum_rejection_occurences("key_is_eth");
    this.rejected.key_is_malformed = this.sum_rejection_occurences("key_is_malformed");
    this.rejected.key_is_junk = this.sum_rejection_occurences("key_is_junk");

    //Distribution 1

    this.distribution.$total_supply = web3.toBigNumber(get_supply()).div(WAD);
    this.distribution.$snapshot_supply = web3.toBigNumber(get_supply(period_for(SS_LAST_BLOCK_TIME))).div(WAD);

    this.distribution.$balances_found = this.sum_balance_all();
    this.distribution.$balance_wallets = this.sum_balance('wallet');
    this.distribution.$balance_unclaimed = this.sum_balance('unclaimed');
    this.distribution.$balance_reclaimed = this.sum_balance('reclaimed');

    //Distribution
    this.distribution.$balances_missing = this.distribution.$snapshot_supply.minus(this.distribution.$balances_found);
    this.distribution.$balance_reclaimable = get_transactions_reclaimable().reduce((sum, tx) => {
      return tx.amount.div(WAD).plus(sum);
    }, web3.toBigNumber(0));
    this.reclaimable.total = get_transactions_reclaimable().length;

    //Rates
    this.rates.percent_complete = to_percent((this.registry.accepted + this.registry.rejected) / this.registry.total);
    this.rates.balances_found = to_percent(this.distribution.$balances_found.div(this.distribution.$snapshot_supply).toFixed(2));
    this.rates.registrant_acceptance = to_percent(this.registry.accepted / (this.registry.accepted + this.registry.rejected));
    this.rates.balance_wallets = to_percent(this.distribution.$balance_wallets.div(this.distribution.$balances_found).toFixed(2));
    this.rates.balance_unclaimed = to_percent(this.distribution.$balance_unclaimed.div(this.distribution.$balances_found).toFixed(2));
    this.rates.balance_reclaimed = to_percent(this.distribution.$balance_reclaimed.div(this.distribution.$balances_found).toFixed(2));
    this.rates.balance_reclaimable = to_percent(this.distribution.$balance_reclaimable.div(this.distribution.$snapshot_supply).toFixed(2));
    this.rates.balance_reclaimed_success = to_percent(this.distribution.$balance_reclaimed.div(this.distribution.$balance_reclaimable.plus(this.distribution.$balance_reclaimed)).toFixed(2));
    this.rates.balance_reclaimable_total = to_percent(this.distribution.$balance_reclaimable.div(this.distribution.$total_supply).toFixed(2));

    //Tests
    this.tests.balances = this.distribution.$balance_wallets.plus(this.distribution.$balance_unclaimed).plus(this.distribution.$balance_reclaimed).eq(this.distribution.$balances_found) ? "PASS" : `FAIL ${sum.toFixed(4)} != ${this.distribution.$balances_found.toFixed(4)}`;
    this.tests.precision_loss = this.distribution.$balance_wallets.plus(this.distribution.$balance_unclaimed).plus(this.distribution.$balance_reclaimed).minus(this.distribution.$balances_found);

    let _registrants = new Set();
    this.tests.unique = !registrants.some(registrant => _registrants.size === _registrants.add(registrant.eth).size) ? "PASS" : "FAIL";
  };

  debug.find = function (group, key) {
    return typeof this[group] === 'object' && typeof this[type][key] !== 'undefined' ? this[type][key] : web3.toBigNumber(0);
  };

  debug.set = function (group, key, value) {
    typeof this[group] === 'object' && typeof this[type][key] === 'undefined' ? this[type][key] = value : false;
  };

  debug.refresh = function () {
    return registrants && transactions ? (this.update(), this) : this;
  };

  debug.sum_balance = function (balance) {
    return get_registrants_accepted().map(registrant => {
      return registrant.balance[balance];
    }).filter(balance => {
      return web3.toBigNumber(balance).gt(0);
    }).reduce((sum, balance) => {
      return balance.plus(sum);
    }, web3.toBigNumber(0));
  };

  debug.sum_balance_all = function () {
    return get_registrants_accepted().filter(registrant => registrant.accepted).map(registrant => {
      return registrant.balance.total;
    }).filter(balance => {
      return web3.toBigNumber(balance).gt(0);
    }).reduce((sum, balance) => {
      return web3.toBigNumber(balance).plus(sum);
    }, web3.toBigNumber(0));
  };

  debug.sum_rejection = function (type) {
    return get_registrants_rejected().filter(reject => {
      return reject.error == type;
    }).map(reject => {
      return reject.balance.total;
    }).reduce((acc, balance) => balance.plus(acc), web3.toBigNumber(0));
  };

  debug.sum_rejection_occurences = function (type) {
    return get_registrants_rejected().filter(reject => {
      return reject.error == type;
    }).length;
  };

  debug.output = function () {

    this.refresh();

    let _registry = new AsciiTable('Registry');

    _registry.setAlign(0, AsciiTable.RIGHT).setAlign(1, AsciiTable.RIGHT).addRow('% Complete', this.rates.percent_complete + '%').addRow('Accepted', this.registry.accepted).addRow('Rejected', this.registry.rejected).addRow('Total', this.registry.total).setJustify();

    log("info", _registry.toString());

    let _distribution = new AsciiTable('Token Sums');
    _distribution.setAlign(0, AsciiTable.RIGHT).setAlign(1, AsciiTable.RIGHT).addRow('Total Supply', this.distribution.$total_supply.toFormat(4)).addRow('Snapshot Supply', this.distribution.$snapshot_supply.toFormat(4)).addRow(' -------------- ', ' -------------- ').addRow('Unclaimed', this.distribution.$balance_unclaimed.toFormat(4)).addRow('In Wallets', this.distribution.$balance_wallets.toFormat(4)).addRow('Reclaimed', this.distribution.$balance_reclaimed.toFormat(4)).addRow(' ------------- ', ' -------------- ').addRow('Total Rejected', this.rejected.$total.toFormat(4)).addRow('Total Included', this.distribution.$balances_found.toFormat(4)).addRow('Total Excluded', this.distribution.$balances_missing.toFormat(4)).addRow('Total Reclaimable', this.distribution.$balance_reclaimable.toFormat(4));

    log("info", _distribution.toString());

    let _rates = new AsciiTable('Overview');
    _rates.setAlign(0, AsciiTable.RIGHT).setAlign(1, AsciiTable.RIGHT).addRow('% Registrants Accepted', this.rates.registrant_acceptance + '%').addRow('% of Tokens Found', this.rates.balances_found + '%').addRow('% of Snapshot Supply Reclaimable', this.rates.balance_reclaimable + '%').addRow('% of Found in Wallets', this.rates.balance_wallets + '%').addRow('% of Found is Unclaimed', this.rates.balance_unclaimed + '%').addRow('% of Found is Reclaimed', this.rates.balance_reclaimed + '%').addRow('% of Reclaimed Success', this.rates.balance_reclaimed_success + '%');

    log("info", _rates.toString());

    let _sanity = new AsciiTable('Sanity');
    _sanity.setAlign(0, AsciiTable.RIGHT).setAlign(1, AsciiTable.RIGHT).addRow('Balances Totaled', `${this.tests.balances}`).addRow('Precision Loss', `${this.tests.precision_loss}`).addRow('Registrants Unique', `${this.tests.unique}`);

    log("info", _sanity.toString());

    if (get_transactions_reclaimed().length) {
      let _reclaimed = new AsciiTable('Recovered');
      _reclaimed.setHeading(`ETH Address`, `EOS Key`, `Amount`, `TX`);
      for (let tx of get_transactions_reclaimed()) {
        _reclaimed.addRow(tx.eth, tx.eos, tx.amount.div(WAD).toFormat(4), `http://etherscan.io/tx/${tx.hash}`);
      }
      log("info", _reclaimed.toString());
    }
  };

  return debug;
};
class Balance {

  constructor() {
    this.wallet = web3.toBigNumber(0);
    this.unclaimed = web3.toBigNumber(0);
    this.reclaimed = web3.toBigNumber(0);
    this.total = web3.toBigNumber(0);
  }

  set(type, balance) {
    this[type] = balance;
    return this; //chaining
  }

  readable(type = 'total') {
    this[type] = formatEOS(this[type]);
  }

  exists(type) {
    return typeof this[type] !== "undefined" && this[type].gt(0);
  }

  get(type) {
    return typeof this[type] !== "undefined" && this[type].gt(0) ? this[type] : false;
  }

  sum() {
    this.total = this.wallet.plus(this.unclaimed).plus(this.reclaimed);
    return this; //chaining
  }

  from_wei() {
    //Save some dust, higher accuracy. 
    this.total = this.total.div(WAD);
    this.wallet = this.wallet.div(WAD);
    this.unclaimed = this.unclaimed.div(WAD);
    this.reclaimed = this.reclaimed.div(WAD);
  }
}
class Genesis {

  constructor(snapshot) {
    this.json = {
      "initial_timestamp": "2017-03-30T12:00:00",
      "initial_parameters": {
        "maintenance_interval": 86400,
        "maintenance_skip_slots": 3,
        "maximum_transaction_size": 2048,
        "maximum_block_size": 2048000000,
        "maximum_time_until_expiration": 86400,
        "maximum_producer_count": 1001
      },
      "immutable_parameters": {
        "min_producer_count": 21
      },
      "initial_accounts": []
    };

    if (snapshot) {
      this.json.initial_accounts = snapshot.map(registrant => {
        return { "name": registrant.eth, "owner_key": registrant.eos, "active_key": registrant.eos, "liquid_balance": `${registrant.balance} EOS` };
      });
    }
  }

}
class Registrant {

  constructor(eth, eos = "", balance = 0) {
    this.eth = eth;
    this.eos = eos;
    this.balance = typeof balance == 'object' ? balance : new Balance();

    this.index = null;
    this.accepted = null;
    this.error = false;
  }

  accept(callback) {
    this.accepted = true;
    log("message", `[#${this.index}] accepted ${this.eth} => ${this.eos} => ${this.balance.total.toFormat(4)}`);
  }

  reject() {
    this.accepted = false;
    let msg = "";
    if (this.balance.exists('reclaimed')) log("reject", `[#${this.index}] rejected ${this.eth} => ${this.eos} => ${this.balance.total.toFormat(4)} => ${this.error} ( ${this.balance.reclaimed.toFormat(4)} reclaimed EOS tokens moved back to Reclaimable )`);else log("reject", `[#${this.index}] rejected ${this.eth} => ${this.eos} => ${this.balance.total.toFormat(4)} => ${this.error}`);
  }

  judgement() {
    return this.valid() ? this.accept() : this.reject();
  }

  set(key, value) {
    return typeof this[`set_${key}`] === "function" ? this[`set_${key}`](value) : this;
  }

  set_index(index) {
    this.index = index;
    return this; //chaining
  }

  set_key(eos_key) {
    //remove whitespace
    eos_key = eos_key.trim();

    //Might be hex, try to convert it.
    if (eos_key.length == 106) {
      let eos_key_from_hex = web3.toAscii(eos_key);
      if (eos_key_from_hex.startsWith('EOS') && eos_key_from_hex.length == 53) {
        eos_key = eos_key_from_hex;
      }
    }
    //Might be user error
    else if (eos_key.startsWith('key')) {
        let eos_key_mod = eos_key.substring(3);
        if (eos_key_mod.startsWith('EOS') && eos_key_mod.length == 53) {
          eos_key = eos_key_mod;
        }
      }
      //Convert something that looks like a key to EOS key (STM, BTS, ETC)
      else if (!eos_key.startsWith('EOS') && !/[^a-zA-Z0-9]/.test(eos_key)) {
          let eos_key_test = `EOS${eos_key.slice(3, eos_key.length)}`;
          eos_key = PublicKey.fromString(eos_key_test) != null ? eos_key_test : eos_key;
        }

    this.eos = eos_key;
    return this; //chaining
  }

  // Reject bad keys and zero balances, elseif was fastest? :/
  valid() {

    //Reject balances lt 1
    if (this.balance.total.lt(1)) {
      this.error = 'balance_insufficient';
    }

    //Key Validation
    else if (PublicKey.fromString(this.eos) == null) {

        //It's an empty key
        if (this.eos.length == 0) {
          this.error = 'key_is_empty';
        }

        //It may be an EOS private key
        else if (this.eos.startsWith('5')) {
            this.error = 'key_is_private';
          }

          // It almost looks like an EOS key
          else if (this.eos.startsWith('EOS')) {
              this.error = 'key_is_malformed';
            }

            // ETH address
            else if (this.eos.startsWith('0x')) {
                this.error = 'key_is_eth';
              }

              //Reject everything else with junk label
              else {
                  this.error = 'key_is_junk';
                }
      }

    return !this.error ? true : false;
  }
}
class Transaction {

  constructor(eth, tx, type = "transfer", amount) {
    this.eth = eth;
    this.eos = null;
    this.hash = tx;
    this.amount = amount;
    this.claimed = false;
    this.type = type;
  }

  claim(eth) {
    return eth == this.eth ? (this.claimed = true, log("success", `reclaimed ${this.eth} => ${this.eos} => ${this.amount.div(WAD).toFormat(4)} EOS <<< tx: https://etherscan.io/tx/${this.hash}`)) : log("error", `${eth} should't be claiming ${this.eth}'s transaction`);
  }

}
//Change if needed
const NODE = "http://127.0.0.1:8545"; //Default Host

//testnet || mainnet
const SNAPSHOT_ENV = "testnet";

//User Options
let CONSOLE_LOGGING = true; // Push activity to developer console, WARNING: unstable in Firefox and Safari
let OUTPUT_LOGGING = true; // Generate an output log file (±6MB), WARNING: degrades browser performance significantly.
let VERBOSE_REGISTRY_LOGS = false; // Generate a log entry based on LogRegistry events, WARNING: degrades performance
let UI_SHOW_STATUS_EVERY = 150; // Shows some status information in console every X logs, useful for debugging.

// Needs to be set so all snapshots generated are the somewhat the same 
// Caveat: testnet snapshots will rarely be the same because wallet balances can still change, but setting last block *will* provide consistent registry totals.
const SS_FIRST_BLOCK = 3904416; //Block EOS Contract was deployed at
const SS_LAST_BLOCK = 4217886; //TESTNET: Up to last block of period 62, Last block to honor ethereum transactions [NOT FINAL]

//Test Case: Quick, Has orphaned TX, Has a Reclaimed Registrant and has two types of rejects.
// const SS_FIRST_BLOCK            = 4146970    //Block EOS Contract was deployed at
// const SS_LAST_BLOCK             = 4148293    //Last block to honor ethereum transactions

//For Web3 Init
const CROWDSALE_ADDRESS = "0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf"; //for Mapping
const TOKEN_ADDRESS = "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0"; //for balanceOf()
const UTILITY_ADDRESS = "0x860fd485f533b0348e413e65151f7ee993f93c02"; //Useful functions

//Crowdsale Figures
const WAD = 1000000000000000000;
const SS_BLOCK_ONE_DIST = 100000000 * WAD; //100m
let SS_PERIOD_ETH;
let SS_LAST_BLOCK_TIME;

const CS_NUMBER_OF_PERIODS = 350;
const CS_CREATE_FIRST_PERIOD = 200000000 * WAD;
const CS_CREATE_PER_PERIOD = 2000000 * WAD;
const CS_START_TIME = 1498914000;
// Snapshot: CSVs
const download_reclaimable_csv = data => {
  let headers = {
    eth: "eth_address",
    tx: "tx",
    balance: "amount"
  };
  export_csv(headers, data, generate_filename('reclaimable-tx'));
};

const download_reclaimed_csv = data => {
  let headers = {
    eth: "eth_address",
    eos: "eos_key",
    tx: "tx",
    amount: "amount"
  };
  export_csv(headers, data, generate_filename('successfully-reclaimed-tx'));
};

const download_snapshot_csv = data => {
  let headers = {
    eth: "eth_address",
    eos: "eos_key",
    balance: "balance"
  };
  export_csv(headers, data, generate_filename('snapshot'));
};

const download_rejects_csv = data => {
  let headers = {
    rejected: "error",
    eth: "eth_address",
    eos: "eos_key",
    balance: "balance"
  };
  export_csv(headers, data, generate_filename('rejections'));
};

// Snapshot: JSON
const download_reclaimable_json = data => export_json(data, generate_filename('reclaimable-tx'));
const download_reclaimed_json = data => export_json(data, generate_filename('successfully-reclaimed-tx'));
const download_snapshot_json = data => export_json(data, generate_filename('snapshot'));
const download_rejects_json = data => export_json(data, generate_filename('rejections'));

// Logs
const download_logs = data => export_log(data, generate_filename('logs'));

// Genesis JSON
const download_genesis_json = data => export_json(data, 'genesis');

// Helper
const generate_filename = type => `eos-${type}_${SNAPSHOT_ENV}_${SS_LAST_BLOCK}-${SS_FIRST_BLOCK}`;

//https://codepen.io/danny_pule/pen/WRgqNx
const convert_to_csv = objArray => {
  let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  let str = '';
  for (let i = 0; i < array.length; i++) {
    let line = '';
    for (let index in array[i]) {
      if (line != '') line += ',';
      line += array[i][index];
    }
    str += line + '\r\n';
  }
  return str;
};

const export_csv = (headers, items, filename) => {
  filename = filename + '.csv' || 'export.csv';
  if (headers) {
    items.unshift(headers);
  }
  let jsonObject = JSON.stringify(items);
  let csv = convert_to_csv(jsonObject);
  let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    let link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      let url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

const export_json = (items, filename) => {
  filename = filename + '.json' || 'export.csv';
  let json = JSON.stringify(items, null, '\t');
  let blob = new Blob([json], { type: 'application/json;charset=utf-8;' });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    let link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      let url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

const export_log = (logs, filename) => {
  filename = filename + '.log' || 'export.log';
  let log = logs.reduce((acc, log) => {
    return `${acc}${log}\r\n`;
  });
  let blob = new Blob([log], { type: 'text/plain;charset=utf-8;' });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    let link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      let url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
// For processing
let registrants = [],
    transactions = [];

// For Export
let output = {};
output.snapshot = [];
output.rejects = [];
output.reclaimable = [];
output.reclaimed = [];
output.logs = [];
output.genesis = {};

//ecc
let PublicKey;

// Web3
const Web3 = require('web3');
let web3;
let contract = {};

// Debugging
let debug;

window.onload = () => init();

const init = () => {
  console.clear();
  log("large_text", 'EOS Token Distribution (testnet)');
  if (typeof console.time === 'function') console.time('Generated Snapshot');

  web3 = new Web3(new Web3.providers.HttpProvider(NODE));

  PublicKey = eosjs_ecc.PublicKey;

  document.body.className += ' ' + SNAPSHOT_ENV;

  if (!web3.isConnected()) log("error", 'web3 is disconnected'), log("info", 'Please make sure you have a local ethereum node runnning on localhost:8345'), disconnected(init);else if (!is_synced()) log("error", `web3 is still syncing, retrying in 10 seconds. Current block: ${web3.eth.syncing.currentBlock}, Required Height: ${SS_LAST_BLOCK}`), node_syncing(init);else debug = new calculator(), contract.$crowdsale = web3.eth.contract(CROWDSALE_ABI).at(CROWDSALE_ADDRESS), contract.$token = web3.eth.contract(TOKEN_ABI).at(TOKEN_ADDRESS), contract.$utilities = web3.eth.contract(UTILITY_ABI).at(UTILITY_ADDRESS), SS_PERIOD_ETH = period_eth_balance(), SS_LAST_BLOCK_TIME = get_last_block_time(), async.series([scan_registry, find_reclaimables, distribute_tokens, verify, exporter], (error, results) => {
    if (!error) {
      log("success", 'Distribution List Complete');
      log('block', 'CSV Downloads Ready');
      if (typeof console.timeEnd === 'function') console.timeEnd('Generated Snapshot');
      setTimeout(() => {
        // Makes downloads less glitchy
        // clearInterval(ui_refresh)
        registrants = undefined, transactions = undefined; //object literals have been generated, unset array of resource consuming referenced objects.
      }, 5000);
    } else {
      log("error", error);
    }
    debug.refresh().output();
  });
};

//Sets balances, validates registrant, adds to distribution if good  
const distribute_tokens = finish => {
  log('group', 'Distribution List');
  let index = 0;
  const total = registrants.length;
  const iterate = () => {
    if (!web3.isConnected()) return disconnected(reconnect = iterate);
    try {
      let registrant = registrants[index];

      registrant.set("index", index).set("key", contract.$crowdsale.keys(registrant.eth))
      // Every registrant has three different balances, 
      // Wallet:      Tokens in Wallet
      // Unclaimed:   Tokens in contract
      // Reclaimed:   Tokens sent to crowdsale/token contracts
      .balance
      // Ask token contract what this user's EOS balance is
      .set('wallet', web3.toBigNumber(contract.$token.balanceOf(registrant.eth)))
      // Loop through periods and calculate unclaimed
      .set('unclaimed', web3.toBigNumber(sum_unclaimed(registrant)))
      // Check reclaimable index for ethereum user, loop through tx
      .set('reclaimed', web3.toBigNumber(maybe_reclaim_tokens(registrant)))
      // wallet+unclaimed+reclaimed
      .sum()
      //Convert from wei after sum to save dust
      .from_wei();

      // Reject or Accept
      registrant.judgement();

      status_log();

      // Runaway loops, calls iterate again or calls finish() callback from async
      setTimeout(() => {
        index++, index < total ? iterate() : (console.groupEnd(), finish(null, true));
      }, 1);
    }
    // This error is web3 related, try again and resume if successful
    catch (e) {
      log("error", e);
      if (!web3.isConnected()) {
        log("message", `Attempting reconnect once per second, will resume from registrant ${index}`);
        disconnected(reconnect = iterate);
      }
    } finally {}
  };

  const sum_unclaimed = registrant => {
    //Find all Buys
    let buys = contract.$utilities.userBuys(registrant.eth).map(web3.toBigNumber);
    //Find Claimed Balances
    let claims = contract.$utilities.userClaims(registrant.eth);
    //Compile the periods, and user parameters for each period for later reduction
    const periods = iota(Number(CS_NUMBER_OF_PERIODS) + 1).map(i => {
      let period = {};
      period.tokens_available = web3.toBigNumber(period == 0 ? CS_CREATE_FIRST_PERIOD : CS_CREATE_PER_PERIOD);
      period.total_eth = SS_PERIOD_ETH[i];
      period.buys = buys[i] && buys[i];
      period.share = !period.buys || period.total_eth.equals(0) ? web3.toBigNumber(0) : period.tokens_available.div(period.total_eth).times(period.buys);
      period.claimed = claims && claims[i];
      return period;
    });

    return web3.toBigNumber(periods
    //Get periods by unclaimed and lte last block
    .filter((period, i) => {
      return i <= period_for(SS_LAST_BLOCK_TIME) && !period.claimed;
    })
    //Sum the pre-calculated EOS balance of each resulting period
    .reduce((sum, period) => period.share.plus(sum), web3.toBigNumber(0)));
  };

  // Some users mistakenly sent their tokens to the contract or token address. Here we recover them if it is the case. 
  const maybe_reclaim_tokens = registrant => {
    let reclaimed_balance = web3.toBigNumber(0);
    let reclaimable_transactions = get_registrant_reclaimable(registrant.eth);
    if (reclaimable_transactions.length) {
      for (let tx of reclaimable_transactions) {
        reclaimed_balance = tx.amount.plus(reclaimed_balance);
        tx.eos = registrant.eos;
        tx.claim(registrant.eth);
      }
      if (reclaimable_transactions.length > 1) log("info", `Reclaimed ${reclaimed_balance.div(WAD).toFormat(4)} EOS from ${reclaimable_transactions.length} tx for ${registrant.eth} => ${registrant.eos}`);
    }
    return reclaimed_balance;
  };

  const status_log = () => {
    if (index % UI_SHOW_STATUS_EVERY == 0 && index != 0) debug.refresh(), console.group("Snapshot Status"), log("success", `Progress:      ${debug.rates.percent_complete}% `), log("success", `---------------------------------`), log("success", `Unclaimed:     EOS ${debug.distribution.$balance_unclaimed.toFormat(4)}`), log("success", `In Wallets:    EOS ${debug.distribution.$balance_wallets.toFormat(4)}`), log("success", `Reclaimed:     EOS ${debug.distribution.$balance_reclaimed.toFormat(4)}`), log("success", `Total:         EOS ${debug.distribution.$balances_found.toFormat(4)}`), log("error", `Rejected:      EOS ${debug.rejected.$total.toFormat(4)}`), log("error", `Reclaimable:   EOS ${debug.distribution.$balance_reclaimable.toFormat(4)}`), log("error", `Not Included:  EOS ${debug.distribution.$balances_missing.toFormat(4)}`), console.groupEnd();
  };

  iterate();
};

// Crowdsale contract didnt store registrants in an array, so we need to scrap LogRegister using a polling function :/ 

// Builds Registrants List
const scan_registry = on_complete => {

  console.group('EOS Registrant List');

  let registry_logs = [];
  let message_freq = 10000;
  let last_message = Date.now();

  let group_index = 1;

  const on_result = log_register => {
    //Since this is a watcher, we need to be sure the result isn't new. 
    if (log_register.blockNumber <= SS_LAST_BLOCK) {

      //check that registrant isn't already in array
      if (!registrants.filter(registrant => {
        return registrant.eth == log_register.args.user;
      }).length) {

        let registrant = new Registrant(log_register.args.user);
        registrants.push(registrant);
        registry_logs.push(`${registrant.eth} => ${log_register.args.key} (pending) => https://etherscan.io/tx/${log_register.transactionHash}`);

        //now all your snowflakes are urine...
        maybe_log();
      }
    }
  };

  const on_success = () => {
    debug.refresh(), log_group(), console.groupEnd(), log("block", `${registrants.length} Total Registrants`), { found: Object.keys(registrants).length };
  };

  const on_error = () => "Web3's watcher misbehaved while chugging along in the registry";

  let maybe_log = () => Date.now() - message_freq > last_message ? (log_group(), true) : false;

  //...and you can’t even find the cat.
  let log_group = () => {
    let group_msg = `${group_index}. ... ${registry_logs.length} Found, Total: ${registrants.length}`;
    log("groupCollapsed", group_msg), OUTPUT_LOGGING ? output.logs.push(group_msg) : null, registry_logs.forEach(_log => {
      if (VERBOSE_REGISTRY_LOGS) log("message", _log);
      if (OUTPUT_LOGGING) output.logs.push(_log);
    }), registry_logs = [], console.groupEnd(), group_index++, last_message = Date.now();
  };

  let async_watcher = LogWatcher(SS_FIRST_BLOCK, SS_LAST_BLOCK, contract.$crowdsale.LogRegister, null, on_complete, on_result, on_success, on_error, 2500, 2500);
};

//Builds list of EOS tokens sent to EOS crowdsale or token contract.

const find_reclaimables = on_complete => {
  log('group', 'Finding Reclaimable EOS Tokens');
  let index = 0;
  const query = { to: ['0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0', '0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf'] };

  const on_result = reclaimable_tx => {
    if (reclaimable_tx.blockNumber <= SS_LAST_BLOCK && reclaimable_tx.args.value.gt(web3.toBigNumber(0))) {
      let tx = new Transaction(reclaimable_tx.args.from, reclaimable_tx.transactionHash, 'transfer', reclaimable_tx.args.value);
      transactions.push(tx);
      log("error", `${tx.eth} => ${web3.toBigNumber(tx.amount).div(WAD)} https://etherscan.io/tx/${tx.hash}`);
    }
  };

  const on_success = () => {
    let result_total = get_transactions_reclaimable().length;
    debug.refresh(), console.groupEnd(), log("block", `${result_total || 0} reclaimable transactions found`), { found: result_total };
  };

  const on_error = () => "Something bad happened while finding reclaimables";

  let async_watcher = LogWatcher(SS_FIRST_BLOCK, SS_LAST_BLOCK, contract.$token.Transfer, query, on_complete, on_result, on_success, on_error, 2500, 5000);
};

const verify = callback => {
  let valid = true;
  if (![...new Set(get_registrants_accepted().map(registrant => registrant.eth))].length == get_registrants_accepted().length) log("error", 'Duplicate Entry Found'), valid = false;
  return valid ? callback(null, valid) && true : callback(true) && false;
};

const exporter = callback => {
  if (typeof console.time === 'function') console.time('Compiled Data to Output Arrays');

  //Snapshot and Logging Output
  output.reclaimable = get_transactions_reclaimable().map(tx => {
    return { eth: tx.eth, tx: tx.hash, amount: formatEOS(web3.toBigNumber(tx.amount).div(WAD)) };
  });
  output.reclaimed = get_transactions_reclaimed().map(tx => {
    return { eth: tx.eth, eos: tx.eos, tx: tx.hash, amount: formatEOS(web3.toBigNumber(tx.amount).div(WAD)) };
  });
  output.snapshot = get_registrants_accepted().map(registrant => {
    return { eth: registrant.eth, eos: registrant.eos, balance: formatEOS(registrant.balance.total) };
  });
  output.rejects = get_registrants_rejected().map(registrant => {
    return { error: registrant.error, eth: registrant.eth, eos: registrant.eos, balance: formatEOS(registrant.balance.total) };
  });

  //Genesis Block
  let genesis = new Genesis(output.snapshot);
  output.genesis = genesis.json;

  if (typeof console.timeEnd === 'function') console.timeEnd('Compiled Data to Output Arrays');

  callback(null, true);
};
const unhex = data => data.replace(/^0x/, "");
const hex = data => `0x${unhex(data)}`;
const bytes4 = data => hex(unhex(data).slice(0, 8));
const sighash = sig => bytes4(web3.sha3(sig));
const parts = (data, n) => data.match(new RegExp(`.{${n}}`, "g")) || [];
const hexparts = (data, n) => parts(unhex(data), n).map(hex);
const words32 = data => hexparts(data, 64);
const bytes = data => hexparts(data, 2);
const hexcat = (...data) => hex(data.map(unhex).join(""));
const word = data => hex(unhex(data).padStart(64, "0"));
const calldata = (sig, ...words) => hexcat(sig, ...words.map(word));
const toAsync = promise => $ => promise.then(x => $(null, x), $);
const byId = id => document.getElementById(id);
const formatWad = wad => String(wad).replace(/\..*/, "");
const formatEOS = wad => wad ? wad.toFormat(4).replace(/,/g, "") : "0";
const formatETH = wad => wad ? wad.toFormat(2).replace(/,/g, "") : "0";
const getValue = id => byId(id).value;
const show = id => byId(id).classList.remove("hidden");
const hide = id => byId(id).classList.add("hidden");
const iota = n => repeat("x", n).split("").map((_, i) => i);
const repeat = (x, n) => new Array(n + 1).join("x");
const getTime = () => new Date().getTime() / 1000;

// Getters

// Transactions
const get_transactions_reclaimable = () => transactions.filter(tx => tx.type == 'transfer' && tx.amount.gt(0) && (!tx.claimed || tx.claimed && get_registrants_rejected().filter(registrant => registrant.eth == tx.eth).length));
const get_transactions_reclaimed = () => transactions.filter(tx => tx.claimed && get_registrants_accepted().filter(registrant => registrant.eth == tx.eth).length);

// Registrant Collection
const get_registrants_accepted = () => registrants.filter(registrant => registrant.accepted);
const get_registrants_rejected = () => registrants.filter(registrant => registrant.accepted === false);
const get_registrants_unprocessed = () => registrants.filter(registrant => registrant.accepted === null);

// Registrant
const get_registrant_reclaimed = eth => transactions.filter(tx => tx.type == 'transfer' && tx.claimed && eth == tx.eth);
const get_registrant_reclaimable = eth => transactions.filter(tx => tx.type == 'transfer' && !tx.claimed && eth == tx.eth && tx.amount.gt(0));

// Web3
const node_syncing = (callback = () => {}) => setTimeout(() => {
  is_synced() ? callback() : node_syncing(callback);
}, 3000);
const disconnected = (callback = () => {}) => setTimeout(() => {
  is_listening() ? callback() : disconnected(callback);
}, 3000);
const is_synced = () => !web3.eth.syncing ? true : web3.eth.syncing.currentBlock > SS_LAST_BLOCK ? true : false;

// Crowdsale Helpers
const period_for = timestamp => timestamp < CS_START_TIME ? 0 : Math.min(Math.floor((timestamp - CS_START_TIME) / 23 / 60 / 60) + 1, 350);
const period_eth_balance = () => contract.$utilities.dailyTotals().map(web3.toBigNumber);
const get_last_block_time = () => web3.eth.getBlock(SS_LAST_BLOCK).timestamp;
const get_supply = (periods = 350) => web3.toBigNumber(CS_CREATE_PER_PERIOD).times(periods).plus(web3.toBigNumber(CS_CREATE_FIRST_PERIOD)).plus(web3.toBigNumber(SS_BLOCK_ONE_DIST));
const to_percent = result => Math.floor(result * 100);

// Check if everything is working
const is_listening = () => {
  let listening = true;
  try {
    web3.isConnected();
  } catch (e) {
    listening = false;
  }
  return listening;
};

//logger helper
const log = (type, msg = "") => {
  if (msg.length && OUTPUT_LOGGING) output.logs.push(msg);
  if (console && console.log && CONSOLE_LOGGING && typeof logger[type] !== 'undefined') logger[type](msg);
};

const logger = {};
logger.success = msg => console.log(`%c ${msg}`, 'font-weight:bold; color:green; background:#DEF6E6; ');
logger.error = msg => console.log(`%c ${msg}`, 'font-weight:bold; color:red;');
logger.bold = msg => console.log(`%c ${msg}`, 'font-weight:bold;');
logger.info = msg => console.log(`%c ${msg}`, 'font-style:italic; color:#888;');
logger.block_error = msg => console.log(`%c ${msg}`, 'width:100%; background-color:red; color:#FFF; font-weight:bold; letter-spacing:0.5px; display:inline-block; padding:3px 10px; font-size:9pt');
logger.block_success = msg => console.log(`%c ${msg}`, 'width:100%; background-color:green; color:#FFF; font-weight:bold; letter-spacing:0.5px; display:inline-block; padding:3px 10px; font-size:9pt');
logger.debug = msg => console.log(`%c ${msg}`, log_style_debug);
logger.message = msg => console.log(`%c ${msg}`, 'color:#666');
logger.reject = msg => console.log(`%c ${msg}`, 'color:#b0b0b0; text-decoration:line-through; font-style:italic; ');
logger.block = msg => console.log(`%c ${msg}`, 'width:100%; background-color:black; color:#FFF; font-weight:bold; line-height:30px; letter-spacing:0.5px; display:inline-block; padding:3px 10px; font-size:10pt');
logger.largest_text = msg => console.log(`%c ${msg}`, 'line-height:45px; font-size:33pt; color:#dedede; font-weight:100; display:inline-block ');
logger.large_text = msg => console.log(`%c ${msg}`, 'line-height:45px; font-size:14pt; color:#c0c0c0; font-weight:100; display:inline-block ');
logger.group = msg => console.group(msg);
logger.groupCollapsed = msg => console.groupCollapsed(msg);
logger.groupEnd = () => console.groupEnd();
//minimal UI for now calls for vanilla js and some helpers for cleaner business logic
let ui_refresh;
let current_step;

// document.title updates
const update_title_bar_progress = (stage = "") => {
  let title;
  switch (stage) {

    case 'distribute':
      title = `EOS | Snapshot ${debug.rates.percent_complete}% | ${debug.registry.accepted + debug.registry.rejected}/${debug.registry.total}`;
      break;
    case 'registry':
      title = `EOS | Building Registry | ${registrants.length}`;
      break;
    case 'reclaimer':
      title = `EOS | Reclaimable TXs | ${debug.reclaimable.total}`;
      break;
    case 'complete':
      title = `EOS | Snapshot Complete`;
      break;
    default:
      title = `EOS | Welcome`;
      break;
  }
  document.title = title;
};

const display_text = text => {
  let elem = document.getElementById(current_step);
  elem ? elem.getElementsByClassName('status')[0].innerHTML = text : false;
};

const download_buttons = () => {
  let buttons = `
    Snapshot Inspection
    <div>
    <span class="output"><span>Snapshot &nbsp;</span><a href="#" class="btn snapshot-csv" onclick="download_snapshot_csv(output.snapshot)">CSV</a><a href="#" class="btn" onclick="download_snapshot_json(output.snapshot)">JSON</a></span>
    <span class="output"><span>Rejects &nbsp;</span><a href="#" class="btn" onclick="download_rejects_csv(output.rejects)">CSV</a><a href="#" class="btn" onclick="download_rejects_json(output.rejects)">JSON</a></span>
    <span class="output"><span>Reclaimable TXs &nbsp;</span><a href="#" class="btn" onclick="download_reclaimable_csv(output.reclaimable)">CSV</a><a href="#" class="btn" onclick="download_reclaimable_json(output.reclaimable)">JSON</a></span>
    <span class="output"><span>Reclaimed TXs &nbsp;</span><a href="#" class="btn" onclick="download_reclaimed_csv(output.reclaimed)">CSV</a><a href="#" class="btn" onclick="download_reclaimed_json(output.reclaimed)">JSON</a></span>`;

  buttons += OUTPUT_LOGGING ? `<span class="output"><span>Output Log &nbsp;</span><a href="#" class="btn" onclick="download_logs(output.logs)">LOG</a></span>` : "";
  buttons += "</div>";
  buttons += `
  Genesis Block
  <div>
  <span class="output"><a href="#" class="genesis btn" onclick="download_genesis_json(output.genesis)">genesis.json</a></span>
  </div>`;
  display_text(buttons);
};

if (typeof console === 'object') {
  try {
    if (typeof console.on === 'undefined') console.on = () => {
      return CONSOLE_LOGGING = true;
    };
    if (typeof console.off === 'undefined') console.off = () => {
      return CONSOLE_LOGGING = false;
    };
  } catch (e) {}
}

//quick, ugly, dirty GUI >_<
ui_refresh = setInterval(() => {

  let disconnected = false,
      syncing = false;

  if (!web3.isConnected()) document.body.id = "disconnected", disconnected = true;else if (!is_synced()) document.body.id = "syncing", syncing = true;else document.body.id = "ready", debug.refresh();

  if (disconnected) {
    let current_url = window.location.href.replace("127.0.0.1", "localhost");
    document.getElementsByClassName('disconnected')[0].innerHTML = `
      <p>Cannot connect to node at ${NODE}. Please verify the following:
      <ul>
        <li>You have started parity or geth with <br/><code>--rpccorsdomain '${current_url}'</code></li>
        <li>You have an ethereum node running at <code>${NODE}</code></li>
      </ul>
      See <a href="https://github.com/EOSIO/eos/blob/master/programs/snapshot/readme.md">Readme</a> for more information
      </p>
      <p>Script will continue after it has accessed a running node.</p>
    `;
  } else if (syncing) {
    document.getElementsByClassName('syncing')[0].innerHTML = `
      <p>It looks as though your node is still syncing, in order to run this script, your node will need to be synced up to block #${SS_LAST_BLOCK}, 
      which means you have ${SS_LAST_BLOCK - web3.eth.syncing.currentBlock} blocks to go. <em>Currently synced up to block ${web3.eth.syncing.currentBlock}</em>
      <p>Script will continue after your blockchain is synced.</p>
    `;
  }

  // Complete
  else if (debug.rates.percent_complete == 100) {
      display_text(`Snapshot <span>${debug.rates.percent_complete}%</span> Complete`);
      current_step = 'complete';
      download_buttons();
      clearInterval(ui_refresh);
    }

    // Dist
    else if (get_registrants_accepted().length) {
        current_step = "distribute";
        display_text(`Snapshot <span>${debug.rates.percent_complete}% <span>${debug.registry.accepted + debug.registry.rejected}/${debug.registry.total}</span></span>`);
      }

      // Reclaimables
      else if (debug.reclaimable.total) {
          current_step = "reclaimer";
          display_text(`Found <span>${debug.reclaimable.total}</span> Reclaimable TXs`);
        }

        // Registry
        else if (registrants.length) {
            current_step = "registry";
            display_text(`Found <span>${registrants.length}</span> Registrants`);
          }

          // Page just loaded
          else {
              current_step = "welcome";
              display_text(`<a href="#" class="btn big" onclick="init()">Generate Snapshot<a/>`);
            }

  update_title_bar_progress(current_step);
  if (!document.body.className.includes(current_step)) document.body.className += ' ' + current_step;
}, 1000);

// Enable navigation prompt
window.onbeforeunload = function () {
  return true;
};
(function (s) {
  var w,
      f = {},
      o = window,
      l = console,
      m = Math,
      z = 'postMessage',
      x = 'HackTimer.js by turuslan: ',
      v = 'Initialisation failed',
      p = 0,
      r = 'hasOwnProperty',
      y = [].slice,
      b = o.Worker;function d() {
    do {
      p = 0x7FFFFFFF > p ? p + 1 : 0;
    } while (f[r](p));return p;
  }if (!/MSIE 10/i.test(navigator.userAgent)) {
    try {
      s = o.URL.createObjectURL(new Blob(["var f={},p=postMessage,r='hasOwnProperty';onmessage=function(e){var d=e.data,i=d.i,t=d[r]('t')?d.t:0;switch(d.n){case'a':f[i]=setInterval(function(){p(i)},t);break;case'b':if(f[r](i)){clearInterval(f[i]);delete f[i]}break;case'c':f[i]=setTimeout(function(){p(i);if(f[r](i))delete f[i]},t);break;case'd':if(f[r](i)){clearTimeout(f[i]);delete f[i]}break}}"]));
    } catch (e) {}
  }if (typeof b !== 'undefined') {
    try {
      w = new b(s);o.setInterval = function (c, t) {
        var i = d();f[i] = { c: c, p: y.call(arguments, 2) };w[z]({ n: 'a', i: i, t: t });return i;
      };o.clearInterval = function (i) {
        if (f[r](i)) delete f[i], w[z]({ n: 'b', i: i });
      };o.setTimeout = function (c, t) {
        var i = d();f[i] = { c: c, p: y.call(arguments, 2), t: !0 };w[z]({ n: 'c', i: i, t: t });return i;
      };o.clearTimeout = function (i) {
        if (f[r](i)) delete f[i], w[z]({ n: 'd', i: i });
      };w.onmessage = function (e) {
        var i = e.data,
            c,
            n;if (f[r](i)) {
          n = f[i];c = n.c;if (n[r]('t')) delete f[i];
        }if (typeof c == 'string') try {
          c = new Function(c);
        } catch (k) {
          l.log(x + 'Error parsing callback code string: ', k);
        }if (typeof c == 'function') c.apply(o, n.p);
      };w.onerror = function (e) {
        l.log(e);
      };l.log(x + 'Initialisation succeeded');
    } catch (e) {
      l.log(x + v);l.error(e);
    }
  } else l.log(x + v + ' - HTML5 Web Worker is not supported');
})('HackTimerWorker.min.js');
var f = {},
    p = postMessage,
    r = 'hasOwnProperty';onmessage = function (e) {
  var d = e.data,
      i = d.i,
      t = d[r]('t') ? d.t : 0;switch (d.n) {case 'a':
      f[i] = setInterval(function () {
        p(i);
      }, t);break;case 'b':
      if (f[r](i)) {
        clearInterval(f[i]);delete f[i];
      }break;case 'c':
      f[i] = setTimeout(function () {
        p(i);if (f[r](i)) delete f[i];
      }, t);break;case 'd':
      if (f[r](i)) {
        clearTimeout(f[i]);delete f[i];
      }break;}
};
!function () {
  "use strict";
  function t(t, e) {
    this.options = e || {}, this.reset(t);
  }var e = Array.prototype.slice,
      i = Object.prototype.toString;t.VERSION = "0.0.8", t.LEFT = 0, t.CENTER = 1, t.RIGHT = 2, t.factory = function (e, i) {
    return new t(e, i);
  }, t.align = function (e, i, r, n) {
    return e === t.LEFT ? t.alignLeft(i, r, n) : e === t.RIGHT ? t.alignRight(i, r, n) : e === t.CENTER ? t.alignCenter(i, r, n) : t.alignAuto(i, r, n);
  }, t.alignLeft = function (t, e, i) {
    if (!e || 0 > e) return "";(void 0 === t || null === t) && (t = ""), "undefined" == typeof i && (i = " "), "string" != typeof t && (t = t.toString());var r = e + 1 - t.length;return 0 >= r ? t : t + Array(e + 1 - t.length).join(i);
  }, t.alignCenter = function (e, i, r) {
    if (!i || 0 > i) return "";(void 0 === e || null === e) && (e = ""), "undefined" == typeof r && (r = " "), "string" != typeof e && (e = e.toString());var n = e.length,
        o = Math.floor(i / 2 - n / 2),
        s = Math.abs(n % 2 - i % 2),
        i = e.length;return t.alignRight("", o, r) + e + t.alignLeft("", o + s, r);
  }, t.alignRight = function (t, e, i) {
    if (!e || 0 > e) return "";(void 0 === t || null === t) && (t = ""), "undefined" == typeof i && (i = " "), "string" != typeof t && (t = t.toString());var r = e + 1 - t.length;return 0 >= r ? t : Array(e + 1 - t.length).join(i) + t;
  }, t.alignAuto = function (e, r, n) {
    (void 0 === e || null === e) && (e = "");var o = i.call(e);if (n || (n = " "), r = +r, "[object String]" !== o && (e = e.toString()), e.length < r) switch (o) {case "[object Number]":
        return t.alignRight(e, r, n);default:
        return t.alignLeft(e, r, n);}return e;
  }, t.arrayFill = function (t, e) {
    for (var i = new Array(t), r = 0; r !== t; r++) i[r] = e;return i;
  }, t.prototype.reset = t.prototype.clear = function (e) {
    return this.__name = "", this.__nameAlign = t.CENTER, this.__rows = [], this.__maxCells = 0, this.__aligns = [], this.__colMaxes = [], this.__spacing = 1, this.__heading = null, this.__headingAlign = t.CENTER, this.setBorder(), "[object String]" === i.call(e) ? this.__name = e : "[object Object]" === i.call(e) && this.fromJSON(e), this;
  }, t.prototype.setBorder = function (t, e, i, r) {
    return this.__border = !0, 1 === arguments.length && (e = i = r = t), this.__edge = t || "|", this.__fill = e || "-", this.__top = i || ".", this.__bottom = r || "'", this;
  }, t.prototype.removeBorder = function () {
    return this.__border = !1, this.__edge = " ", this.__fill = " ", this;
  }, t.prototype.setAlign = function (t, e) {
    return this.__aligns[t] = e, this;
  }, t.prototype.setTitle = function (t) {
    return this.__name = t, this;
  }, t.prototype.getTitle = function () {
    return this.__name;
  }, t.prototype.setTitleAlign = function (t) {
    return this.__nameAlign = t, this;
  }, t.prototype.sort = function (t) {
    return this.__rows.sort(t), this;
  }, t.prototype.sortColumn = function (t, e) {
    return this.__rows.sort(function (i, r) {
      return e(i[t], r[t]);
    }), this;
  }, t.prototype.setHeading = function (t) {
    return (arguments.length > 1 || "[object Array]" !== i.call(t)) && (t = e.call(arguments)), this.__heading = t, this;
  }, t.prototype.getHeading = function () {
    return this.__heading.slice();
  }, t.prototype.setHeadingAlign = function (t) {
    return this.__headingAlign = t, this;
  }, t.prototype.addRow = function (t) {
    return (arguments.length > 1 || "[object Array]" !== i.call(t)) && (t = e.call(arguments)), this.__maxCells = Math.max(this.__maxCells, t.length), this.__rows.push(t), this;
  }, t.prototype.getRows = function () {
    return this.__rows.slice().map(function (t) {
      return t.slice();
    });
  }, t.prototype.addRowMatrix = function (t) {
    for (var e = 0; e < t.length; e++) this.addRow(t[e]);return this;
  }, t.prototype.addData = function (t, e, r) {
    if ("[object Array]" !== i.call(t)) return this;for (var n = 0, o = t.length; o > n; n++) {
      var s = e(t[n]);r ? this.addRowMatrix(s) : this.addRow(s);
    }return this;
  }, t.prototype.clearRows = function () {
    return this.__rows = [], this.__maxCells = 0, this.__colMaxes = [], this;
  }, t.prototype.setJustify = function (t) {
    return 0 === arguments.length && (t = !0), this.__justify = !!t, this;
  }, t.prototype.toJSON = function () {
    return { title: this.getTitle(), heading: this.getHeading(), rows: this.getRows() };
  }, t.prototype.parse = t.prototype.fromJSON = function (t) {
    return this.clear().setTitle(t.title).setHeading(t.heading).addRowMatrix(t.rows);
  }, t.prototype.render = t.prototype.valueOf = t.prototype.toString = function () {
    for (var e, i = this, r = [], n = this.__maxCells, o = t.arrayFill(n, 0), s = 3 * n, h = this.__rows, a = this.__border, l = this.__heading ? [this.__heading].concat(h) : h, _ = 0; _ < l.length; _++) for (var u = l[_], g = 0; n > g; g++) {
      var p = u[g];o[g] = Math.max(o[g], p ? p.toString().length : 0);
    }this.__colMaxes = o, e = this.__justify ? Math.max.apply(null, o) : 0, o.forEach(function (t) {
      s += e ? e : t + i.__spacing;
    }), e && (s += o.length), s -= this.__spacing, a && r.push(this._seperator(s - n + 1, this.__top)), this.__name && (r.push(this._renderTitle(s - n + 1)), a && r.push(this._seperator(s - n + 1))), this.__heading && (r.push(this._renderRow(this.__heading, " ", this.__headingAlign)), r.push(this._rowSeperator(n, this.__fill)));for (var _ = 0; _ < this.__rows.length; _++) r.push(this._renderRow(this.__rows[_], " "));a && r.push(this._seperator(s - n + 1, this.__bottom));var f = this.options.prefix || "";return f + r.join("\n" + f);
  }, t.prototype._seperator = function (e, i) {
    return i || (i = this.__edge), i + t.alignRight(i, e, this.__fill);
  }, t.prototype._rowSeperator = function () {
    var e = t.arrayFill(this.__maxCells, this.__fill);return this._renderRow(e, this.__fill);
  }, t.prototype._renderTitle = function (e) {
    var i = " " + this.__name + " ",
        r = t.align(this.__nameAlign, i, e - 1, " ");return this.__edge + r + this.__edge;
  }, t.prototype._renderRow = function (e, i, r) {
    for (var n = [""], o = this.__colMaxes, s = 0; s < this.__maxCells; s++) {
      var h = e[s],
          a = this.__justify ? Math.max.apply(null, o) : o[s],
          l = a,
          _ = this.__aligns[s],
          u = r,
          g = "alignAuto";"undefined" == typeof r && (u = _), u === t.LEFT && (g = "alignLeft"), u === t.CENTER && (g = "alignCenter"), u === t.RIGHT && (g = "alignRight"), n.push(t[g](h, l, i));
    }var p = n.join(i + this.__edge + i);return p = p.substr(1, p.length), p + i + this.__edge;
  }, ["Left", "Right", "Center"].forEach(function (i) {
    var r = t[i.toUpperCase()];["setAlign", "setTitleAlign", "setHeadingAlign"].forEach(function (n) {
      t.prototype[n + i] = function () {
        var t = e.call(arguments).concat(r);return this[n].apply(this, t);
      };
    });
  }), "undefined" != typeof exports ? module.exports = t : this.AsciiTable = t;
}.call(this);
!function (n, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(n.async = n.async || {});
}(this, function (n) {
  "use strict";
  function t(n, t) {
    t |= 0;for (var e = Math.max(n.length - t, 0), r = Array(e), u = 0; u < e; u++) r[u] = n[t + u];return r;
  }function e(n) {
    var t = typeof n;return null != n && ("object" == t || "function" == t);
  }function r(n) {
    setTimeout(n, 0);
  }function u(n) {
    return function (e) {
      var r = t(arguments, 1);n(function () {
        e.apply(null, r);
      });
    };
  }function o(n) {
    return it(function (t, r) {
      var u;try {
        u = n.apply(this, t);
      } catch (n) {
        return r(n);
      }e(u) && "function" == typeof u.then ? u.then(function (n) {
        i(r, null, n);
      }, function (n) {
        i(r, n.message ? n : new Error(n));
      }) : r(null, u);
    });
  }function i(n, t, e) {
    try {
      n(t, e);
    } catch (n) {
      at(c, n);
    }
  }function c(n) {
    throw n;
  }function f(n) {
    return lt && "AsyncFunction" === n[Symbol.toStringTag];
  }function a(n) {
    return f(n) ? o(n) : n;
  }function l(n) {
    return function (e) {
      var r = t(arguments, 1),
          u = it(function (t, r) {
        var u = this;return n(e, function (n, e) {
          a(n).apply(u, t.concat(e));
        }, r);
      });return r.length ? u.apply(this, r) : u;
    };
  }function s(n) {
    var t = dt.call(n, gt),
        e = n[gt];try {
      n[gt] = void 0;var r = !0;
    } catch (n) {}var u = mt.call(n);return r && (t ? n[gt] = e : delete n[gt]), u;
  }function p(n) {
    return jt.call(n);
  }function h(n) {
    return null == n ? void 0 === n ? kt : St : (n = Object(n), Lt && Lt in n ? s(n) : p(n));
  }function y(n) {
    if (!e(n)) return !1;var t = h(n);return t == wt || t == xt || t == Ot || t == Et;
  }function v(n) {
    return "number" == typeof n && n > -1 && n % 1 == 0 && n <= At;
  }function d(n) {
    return null != n && v(n.length) && !y(n);
  }function m() {}function g(n) {
    return function () {
      if (null !== n) {
        var t = n;n = null, t.apply(this, arguments);
      }
    };
  }function b(n, t) {
    for (var e = -1, r = Array(n); ++e < n;) r[e] = t(e);return r;
  }function j(n) {
    return null != n && "object" == typeof n;
  }function S(n) {
    return j(n) && h(n) == It;
  }function k() {
    return !1;
  }function L(n, t) {
    return t = null == t ? Wt : t, !!t && ("number" == typeof n || Nt.test(n)) && n > -1 && n % 1 == 0 && n < t;
  }function O(n) {
    return j(n) && v(n.length) && !!de[h(n)];
  }function w(n) {
    return function (t) {
      return n(t);
    };
  }function x(n, t) {
    var e = Pt(n),
        r = !e && zt(n),
        u = !e && !r && $t(n),
        o = !e && !r && !u && Le(n),
        i = e || r || u || o,
        c = i ? b(n.length, String) : [],
        f = c.length;for (var a in n) !t && !we.call(n, a) || i && ("length" == a || u && ("offset" == a || "parent" == a) || o && ("buffer" == a || "byteLength" == a || "byteOffset" == a) || L(a, f)) || c.push(a);return c;
  }function E(n) {
    var t = n && n.constructor,
        e = "function" == typeof t && t.prototype || xe;return n === e;
  }function A(n, t) {
    return function (e) {
      return n(t(e));
    };
  }function T(n) {
    if (!E(n)) return Ee(n);var t = [];for (var e in Object(n)) Te.call(n, e) && "constructor" != e && t.push(e);return t;
  }function B(n) {
    return d(n) ? x(n) : T(n);
  }function F(n) {
    var t = -1,
        e = n.length;return function () {
      return ++t < e ? { value: n[t], key: t } : null;
    };
  }function I(n) {
    var t = -1;return function () {
      var e = n.next();return e.done ? null : (t++, { value: e.value, key: t });
    };
  }function _(n) {
    var t = B(n),
        e = -1,
        r = t.length;return function () {
      var u = t[++e];return e < r ? { value: n[u], key: u } : null;
    };
  }function M(n) {
    if (d(n)) return F(n);var t = Ft(n);return t ? I(t) : _(n);
  }function U(n) {
    return function () {
      if (null === n) throw new Error("Callback was already called.");var t = n;n = null, t.apply(this, arguments);
    };
  }function z(n) {
    return function (t, e, r) {
      function u(n, t) {
        if (f -= 1, n) c = !0, r(n);else {
          if (t === Tt || c && f <= 0) return c = !0, r(null);o();
        }
      }function o() {
        for (; f < n && !c;) {
          var t = i();if (null === t) return c = !0, void (f <= 0 && r(null));f += 1, e(t.value, t.key, U(u));
        }
      }if (r = g(r || m), n <= 0 || !t) return r(null);var i = M(t),
          c = !1,
          f = 0;o();
    };
  }function P(n, t, e, r) {
    z(t)(n, a(e), r);
  }function V(n, t) {
    return function (e, r, u) {
      return n(e, t, r, u);
    };
  }function q(n, t, e) {
    function r(n, t) {
      n ? e(n) : ++o !== i && t !== Tt || e(null);
    }e = g(e || m);var u = 0,
        o = 0,
        i = n.length;for (0 === i && e(null); u < i; u++) t(n[u], u, U(r));
  }function D(n) {
    return function (t, e, r) {
      return n(Fe, t, a(e), r);
    };
  }function R(n, t, e, r) {
    r = r || m, t = t || [];var u = [],
        o = 0,
        i = a(e);n(t, function (n, t, e) {
      var r = o++;i(n, function (n, t) {
        u[r] = t, e(n);
      });
    }, function (n) {
      r(n, u);
    });
  }function C(n) {
    return function (t, e, r, u) {
      return n(z(e), t, a(r), u);
    };
  }function $(n, t) {
    for (var e = -1, r = null == n ? 0 : n.length; ++e < r && t(n[e], e, n) !== !1;);return n;
  }function W(n) {
    return function (t, e, r) {
      for (var u = -1, o = Object(t), i = r(t), c = i.length; c--;) {
        var f = i[n ? c : ++u];if (e(o[f], f, o) === !1) break;
      }return t;
    };
  }function N(n, t) {
    return n && Ve(n, t, B);
  }function Q(n, t, e, r) {
    for (var u = n.length, o = e + (r ? 1 : -1); r ? o-- : ++o < u;) if (t(n[o], o, n)) return o;return -1;
  }function G(n) {
    return n !== n;
  }function H(n, t, e) {
    for (var r = e - 1, u = n.length; ++r < u;) if (n[r] === t) return r;return -1;
  }function J(n, t, e) {
    return t === t ? H(n, t, e) : Q(n, G, e);
  }function K(n, t) {
    for (var e = -1, r = null == n ? 0 : n.length, u = Array(r); ++e < r;) u[e] = t(n[e], e, n);return u;
  }function X(n) {
    return "symbol" == typeof n || j(n) && h(n) == De;
  }function Y(n) {
    if ("string" == typeof n) return n;if (Pt(n)) return K(n, Y) + "";if (X(n)) return $e ? $e.call(n) : "";var t = n + "";return "0" == t && 1 / n == -Re ? "-0" : t;
  }function Z(n, t, e) {
    var r = -1,
        u = n.length;t < 0 && (t = -t > u ? 0 : u + t), e = e > u ? u : e, e < 0 && (e += u), u = t > e ? 0 : e - t >>> 0, t >>>= 0;for (var o = Array(u); ++r < u;) o[r] = n[r + t];return o;
  }function nn(n, t, e) {
    var r = n.length;return e = void 0 === e ? r : e, !t && e >= r ? n : Z(n, t, e);
  }function tn(n, t) {
    for (var e = n.length; e-- && J(t, n[e], 0) > -1;);return e;
  }function en(n, t) {
    for (var e = -1, r = n.length; ++e < r && J(t, n[e], 0) > -1;);return e;
  }function rn(n) {
    return n.split("");
  }function un(n) {
    return Je.test(n);
  }function on(n) {
    return n.match(hr) || [];
  }function cn(n) {
    return un(n) ? on(n) : rn(n);
  }function fn(n) {
    return null == n ? "" : Y(n);
  }function an(n, t, e) {
    if (n = fn(n), n && (e || void 0 === t)) return n.replace(yr, "");if (!n || !(t = Y(t))) return n;var r = cn(n),
        u = cn(t),
        o = en(r, u),
        i = tn(r, u) + 1;return nn(r, o, i).join("");
  }function ln(n) {
    return n = n.toString().replace(gr, ""), n = n.match(vr)[2].replace(" ", ""), n = n ? n.split(dr) : [], n = n.map(function (n) {
      return an(n.replace(mr, ""));
    });
  }function sn(n, t) {
    var e = {};N(n, function (n, t) {
      function r(t, e) {
        var r = K(u, function (n) {
          return t[n];
        });r.push(e), a(n).apply(null, r);
      }var u,
          o = f(n),
          i = !o && 1 === n.length || o && 0 === n.length;if (Pt(n)) u = n.slice(0, -1), n = n[n.length - 1], e[t] = u.concat(u.length > 0 ? r : n);else if (i) e[t] = n;else {
        if (u = ln(n), 0 === n.length && !o && 0 === u.length) throw new Error("autoInject task functions require explicit parameters.");o || u.pop(), e[t] = u.concat(r);
      }
    }), qe(e, t);
  }function pn() {
    this.head = this.tail = null, this.length = 0;
  }function hn(n, t) {
    n.length = 1, n.head = n.tail = t;
  }function yn(n, t, e) {
    function r(n, t, e) {
      if (null != e && "function" != typeof e) throw new Error("task callback must be a function");if (l.started = !0, Pt(n) || (n = [n]), 0 === n.length && l.idle()) return at(function () {
        l.drain();
      });for (var r = 0, u = n.length; r < u; r++) {
        var o = { data: n[r], callback: e || m };t ? l._tasks.unshift(o) : l._tasks.push(o);
      }at(l.process);
    }function u(n) {
      return function (t) {
        i -= 1;for (var e = 0, r = n.length; e < r; e++) {
          var u = n[e],
              o = J(c, u, 0);o >= 0 && c.splice(o, 1), u.callback.apply(u, arguments), null != t && l.error(t, u.data);
        }i <= l.concurrency - l.buffer && l.unsaturated(), l.idle() && l.drain(), l.process();
      };
    }if (null == t) t = 1;else if (0 === t) throw new Error("Concurrency must not be zero");var o = a(n),
        i = 0,
        c = [],
        f = !1,
        l = { _tasks: new pn(), concurrency: t, payload: e, saturated: m, unsaturated: m, buffer: t / 4, empty: m, drain: m, error: m, started: !1, paused: !1, push: function (n, t) {
        r(n, !1, t);
      }, kill: function () {
        l.drain = m, l._tasks.empty();
      }, unshift: function (n, t) {
        r(n, !0, t);
      }, remove: function (n) {
        l._tasks.remove(n);
      }, process: function () {
        if (!f) {
          for (f = !0; !l.paused && i < l.concurrency && l._tasks.length;) {
            var n = [],
                t = [],
                e = l._tasks.length;l.payload && (e = Math.min(e, l.payload));for (var r = 0; r < e; r++) {
              var a = l._tasks.shift();n.push(a), c.push(a), t.push(a.data);
            }i += 1, 0 === l._tasks.length && l.empty(), i === l.concurrency && l.saturated();var s = U(u(n));o(t, s);
          }f = !1;
        }
      }, length: function () {
        return l._tasks.length;
      }, running: function () {
        return i;
      }, workersList: function () {
        return c;
      }, idle: function () {
        return l._tasks.length + i === 0;
      }, pause: function () {
        l.paused = !0;
      }, resume: function () {
        l.paused !== !1 && (l.paused = !1, at(l.process));
      } };return l;
  }function vn(n, t) {
    return yn(n, 1, t);
  }function dn(n, t, e, r) {
    r = g(r || m);var u = a(e);jr(n, function (n, e, r) {
      u(t, n, function (n, e) {
        t = e, r(n);
      });
    }, function (n) {
      r(n, t);
    });
  }function mn() {
    var n = K(arguments, a);return function () {
      var e = t(arguments),
          r = this,
          u = e[e.length - 1];"function" == typeof u ? e.pop() : u = m, dn(n, e, function (n, e, u) {
        e.apply(r, n.concat(function (n) {
          var e = t(arguments, 1);u(n, e);
        }));
      }, function (n, t) {
        u.apply(r, [n].concat(t));
      });
    };
  }function gn(n) {
    return n;
  }function bn(n, t) {
    return function (e, r, u, o) {
      o = o || m;var i,
          c = !1;e(r, function (e, r, o) {
        u(e, function (r, u) {
          r ? o(r) : n(u) && !i ? (c = !0, i = t(!0, e), o(null, Tt)) : o();
        });
      }, function (n) {
        n ? o(n) : o(null, c ? i : t(!1));
      });
    };
  }function jn(n, t) {
    return t;
  }function Sn(n) {
    return function (e) {
      var r = t(arguments, 1);r.push(function (e) {
        var r = t(arguments, 1);"object" == typeof console && (e ? console.error && console.error(e) : console[n] && $(r, function (t) {
          console[n](t);
        }));
      }), a(e).apply(null, r);
    };
  }function kn(n, e, r) {
    function u(n) {
      if (n) return r(n);var e = t(arguments, 1);e.push(o), c.apply(this, e);
    }function o(n, t) {
      return n ? r(n) : t ? void i(u) : r(null);
    }r = U(r || m);var i = a(n),
        c = a(e);o(null, !0);
  }function Ln(n, e, r) {
    r = U(r || m);var u = a(n),
        o = function (n) {
      if (n) return r(n);var i = t(arguments, 1);return e.apply(this, i) ? u(o) : void r.apply(null, [null].concat(i));
    };u(o);
  }function On(n, t, e) {
    Ln(n, function () {
      return !t.apply(this, arguments);
    }, e);
  }function wn(n, t, e) {
    function r(n) {
      return n ? e(n) : void i(u);
    }function u(n, t) {
      return n ? e(n) : t ? void o(r) : e(null);
    }e = U(e || m);var o = a(t),
        i = a(n);i(u);
  }function xn(n) {
    return function (t, e, r) {
      return n(t, r);
    };
  }function En(n, t, e) {
    Fe(n, xn(a(t)), e);
  }function An(n, t, e, r) {
    z(t)(n, xn(a(e)), r);
  }function Tn(n) {
    return f(n) ? n : it(function (t, e) {
      var r = !0;t.push(function () {
        var n = arguments;r ? at(function () {
          e.apply(null, n);
        }) : e.apply(null, n);
      }), n.apply(this, t), r = !1;
    });
  }function Bn(n) {
    return !n;
  }function Fn(n) {
    return function (t) {
      return null == t ? void 0 : t[n];
    };
  }function In(n, t, e, r) {
    var u = new Array(t.length);n(t, function (n, t, r) {
      e(n, function (n, e) {
        u[t] = !!e, r(n);
      });
    }, function (n) {
      if (n) return r(n);for (var e = [], o = 0; o < t.length; o++) u[o] && e.push(t[o]);r(null, e);
    });
  }function _n(n, t, e, r) {
    var u = [];n(t, function (n, t, r) {
      e(n, function (e, o) {
        e ? r(e) : (o && u.push({ index: t, value: n }), r());
      });
    }, function (n) {
      n ? r(n) : r(null, K(u.sort(function (n, t) {
        return n.index - t.index;
      }), Fn("value")));
    });
  }function Mn(n, t, e, r) {
    var u = d(t) ? In : _n;u(n, t, a(e), r || m);
  }function Un(n, t) {
    function e(n) {
      return n ? r(n) : void u(e);
    }var r = U(t || m),
        u = a(Tn(n));e();
  }function zn(n, t, e, r) {
    r = g(r || m);var u = {},
        o = a(e);P(n, t, function (n, t, e) {
      o(n, t, function (n, r) {
        return n ? e(n) : (u[t] = r, void e());
      });
    }, function (n) {
      r(n, u);
    });
  }function Pn(n, t) {
    return t in n;
  }function Vn(n, e) {
    var r = Object.create(null),
        u = Object.create(null);e = e || gn;var o = a(n),
        i = it(function (n, i) {
      var c = e.apply(null, n);Pn(r, c) ? at(function () {
        i.apply(null, r[c]);
      }) : Pn(u, c) ? u[c].push(i) : (u[c] = [i], o.apply(null, n.concat(function () {
        var n = t(arguments);r[c] = n;var e = u[c];delete u[c];for (var o = 0, i = e.length; o < i; o++) e[o].apply(null, n);
      })));
    });return i.memo = r, i.unmemoized = n, i;
  }function qn(n, e, r) {
    r = r || m;var u = d(e) ? [] : {};n(e, function (n, e, r) {
      a(n)(function (n, o) {
        arguments.length > 2 && (o = t(arguments, 1)), u[e] = o, r(n);
      });
    }, function (n) {
      r(n, u);
    });
  }function Dn(n, t) {
    qn(Fe, n, t);
  }function Rn(n, t, e) {
    qn(z(t), n, e);
  }function Cn(n, t) {
    if (t = g(t || m), !Pt(n)) return t(new TypeError("First argument to race must be an array of functions"));if (!n.length) return t();for (var e = 0, r = n.length; e < r; e++) a(n[e])(t);
  }function $n(n, e, r, u) {
    var o = t(n).reverse();dn(o, e, r, u);
  }function Wn(n) {
    var e = a(n);return it(function (n, r) {
      return n.push(function (n, e) {
        if (n) r(null, { error: n });else {
          var u;u = arguments.length <= 2 ? e : t(arguments, 1), r(null, { value: u });
        }
      }), e.apply(this, n);
    });
  }function Nn(n, t, e, r) {
    Mn(n, t, function (n, t) {
      e(n, function (n, e) {
        t(n, !e);
      });
    }, r);
  }function Qn(n) {
    var t;return Pt(n) ? t = K(n, Wn) : (t = {}, N(n, function (n, e) {
      t[e] = Wn.call(this, n);
    })), t;
  }function Gn(n) {
    return function () {
      return n;
    };
  }function Hn(n, t, e) {
    function r(n, t) {
      if ("object" == typeof t) n.times = +t.times || o, n.intervalFunc = "function" == typeof t.interval ? t.interval : Gn(+t.interval || i), n.errorFilter = t.errorFilter;else {
        if ("number" != typeof t && "string" != typeof t) throw new Error("Invalid arguments for async.retry");n.times = +t || o;
      }
    }function u() {
      f(function (n) {
        n && l++ < c.times && ("function" != typeof c.errorFilter || c.errorFilter(n)) ? setTimeout(u, c.intervalFunc(l)) : e.apply(null, arguments);
      });
    }var o = 5,
        i = 0,
        c = { times: o, intervalFunc: Gn(i) };if (arguments.length < 3 && "function" == typeof n ? (e = t || m, t = n) : (r(c, n), e = e || m), "function" != typeof t) throw new Error("Invalid arguments for async.retry");var f = a(t),
        l = 1;u();
  }function Jn(n, t) {
    qn(jr, n, t);
  }function Kn(n, t, e) {
    function r(n, t) {
      var e = n.criteria,
          r = t.criteria;return e < r ? -1 : e > r ? 1 : 0;
    }var u = a(t);Ie(n, function (n, t) {
      u(n, function (e, r) {
        return e ? t(e) : void t(null, { value: n, criteria: r });
      });
    }, function (n, t) {
      return n ? e(n) : void e(null, K(t.sort(r), Fn("value")));
    });
  }function Xn(n, t, e) {
    var r = a(n);return it(function (u, o) {
      function i() {
        var t = n.name || "anonymous",
            r = new Error('Callback function "' + t + '" timed out.');r.code = "ETIMEDOUT", e && (r.info = e), f = !0, o(r);
      }var c,
          f = !1;u.push(function () {
        f || (o.apply(null, arguments), clearTimeout(c));
      }), c = setTimeout(i, t), r.apply(null, u);
    });
  }function Yn(n, t, e, r) {
    for (var u = -1, o = tu(nu((t - n) / (e || 1)), 0), i = Array(o); o--;) i[r ? o : ++u] = n, n += e;return i;
  }function Zn(n, t, e, r) {
    var u = a(e);Me(Yn(0, n, 1), t, u, r);
  }function nt(n, t, e, r) {
    arguments.length <= 3 && (r = e, e = t, t = Pt(n) ? [] : {}), r = g(r || m);var u = a(e);Fe(n, function (n, e, r) {
      u(t, n, e, r);
    }, function (n) {
      r(n, t);
    });
  }function tt(n, e) {
    var r,
        u = null;e = e || m, Fr(n, function (n, e) {
      a(n)(function (n, o) {
        r = arguments.length > 2 ? t(arguments, 1) : o, u = n, e(!n);
      });
    }, function () {
      e(u, r);
    });
  }function et(n) {
    return function () {
      return (n.unmemoized || n).apply(null, arguments);
    };
  }function rt(n, e, r) {
    r = U(r || m);var u = a(e);if (!n()) return r(null);var o = function (e) {
      if (e) return r(e);if (n()) return u(o);var i = t(arguments, 1);r.apply(null, [null].concat(i));
    };u(o);
  }function ut(n, t, e) {
    rt(function () {
      return !n.apply(this, arguments);
    }, t, e);
  }var ot,
      it = function (n) {
    return function () {
      var e = t(arguments),
          r = e.pop();n.call(this, e, r);
    };
  },
      ct = "function" == typeof setImmediate && setImmediate,
      ft = "object" == typeof process && "function" == typeof process.nextTick;ot = ct ? setImmediate : ft ? process.nextTick : r;var at = u(ot),
      lt = "function" == typeof Symbol,
      st = "object" == typeof global && global && global.Object === Object && global,
      pt = "object" == typeof self && self && self.Object === Object && self,
      ht = st || pt || Function("return this")(),
      yt = ht.Symbol,
      vt = Object.prototype,
      dt = vt.hasOwnProperty,
      mt = vt.toString,
      gt = yt ? yt.toStringTag : void 0,
      bt = Object.prototype,
      jt = bt.toString,
      St = "[object Null]",
      kt = "[object Undefined]",
      Lt = yt ? yt.toStringTag : void 0,
      Ot = "[object AsyncFunction]",
      wt = "[object Function]",
      xt = "[object GeneratorFunction]",
      Et = "[object Proxy]",
      At = 9007199254740991,
      Tt = {},
      Bt = "function" == typeof Symbol && Symbol.iterator,
      Ft = function (n) {
    return Bt && n[Bt] && n[Bt]();
  },
      It = "[object Arguments]",
      _t = Object.prototype,
      Mt = _t.hasOwnProperty,
      Ut = _t.propertyIsEnumerable,
      zt = S(function () {
    return arguments;
  }()) ? S : function (n) {
    return j(n) && Mt.call(n, "callee") && !Ut.call(n, "callee");
  },
      Pt = Array.isArray,
      Vt = "object" == typeof n && n && !n.nodeType && n,
      qt = Vt && "object" == typeof module && module && !module.nodeType && module,
      Dt = qt && qt.exports === Vt,
      Rt = Dt ? ht.Buffer : void 0,
      Ct = Rt ? Rt.isBuffer : void 0,
      $t = Ct || k,
      Wt = 9007199254740991,
      Nt = /^(?:0|[1-9]\d*)$/,
      Qt = "[object Arguments]",
      Gt = "[object Array]",
      Ht = "[object Boolean]",
      Jt = "[object Date]",
      Kt = "[object Error]",
      Xt = "[object Function]",
      Yt = "[object Map]",
      Zt = "[object Number]",
      ne = "[object Object]",
      te = "[object RegExp]",
      ee = "[object Set]",
      re = "[object String]",
      ue = "[object WeakMap]",
      oe = "[object ArrayBuffer]",
      ie = "[object DataView]",
      ce = "[object Float32Array]",
      fe = "[object Float64Array]",
      ae = "[object Int8Array]",
      le = "[object Int16Array]",
      se = "[object Int32Array]",
      pe = "[object Uint8Array]",
      he = "[object Uint8ClampedArray]",
      ye = "[object Uint16Array]",
      ve = "[object Uint32Array]",
      de = {};de[ce] = de[fe] = de[ae] = de[le] = de[se] = de[pe] = de[he] = de[ye] = de[ve] = !0, de[Qt] = de[Gt] = de[oe] = de[Ht] = de[ie] = de[Jt] = de[Kt] = de[Xt] = de[Yt] = de[Zt] = de[ne] = de[te] = de[ee] = de[re] = de[ue] = !1;var me = "object" == typeof n && n && !n.nodeType && n,
      ge = me && "object" == typeof module && module && !module.nodeType && module,
      be = ge && ge.exports === me,
      je = be && st.process,
      Se = function () {
    try {
      return je && je.binding("util");
    } catch (n) {}
  }(),
      ke = Se && Se.isTypedArray,
      Le = ke ? w(ke) : O,
      Oe = Object.prototype,
      we = Oe.hasOwnProperty,
      xe = Object.prototype,
      Ee = A(Object.keys, Object),
      Ae = Object.prototype,
      Te = Ae.hasOwnProperty,
      Be = V(P, 1 / 0),
      Fe = function (n, t, e) {
    var r = d(n) ? q : Be;r(n, a(t), e);
  },
      Ie = D(R),
      _e = l(Ie),
      Me = C(R),
      Ue = V(Me, 1),
      ze = l(Ue),
      Pe = function (n) {
    var e = t(arguments, 1);return function () {
      var r = t(arguments);return n.apply(null, e.concat(r));
    };
  },
      Ve = W(),
      qe = function (n, e, r) {
    function u(n, t) {
      j.push(function () {
        f(n, t);
      });
    }function o() {
      if (0 === j.length && 0 === v) return r(null, y);for (; j.length && v < e;) {
        var n = j.shift();n();
      }
    }function i(n, t) {
      var e = b[n];e || (e = b[n] = []), e.push(t);
    }function c(n) {
      var t = b[n] || [];$(t, function (n) {
        n();
      }), o();
    }function f(n, e) {
      if (!d) {
        var u = U(function (e, u) {
          if (v--, arguments.length > 2 && (u = t(arguments, 1)), e) {
            var o = {};N(y, function (n, t) {
              o[t] = n;
            }), o[n] = u, d = !0, b = Object.create(null), r(e, o);
          } else y[n] = u, c(n);
        });v++;var o = a(e[e.length - 1]);e.length > 1 ? o(y, u) : o(u);
      }
    }function l() {
      for (var n, t = 0; S.length;) n = S.pop(), t++, $(s(n), function (n) {
        0 === --k[n] && S.push(n);
      });if (t !== h) throw new Error("async.auto cannot execute tasks due to a recursive dependency");
    }function s(t) {
      var e = [];return N(n, function (n, r) {
        Pt(n) && J(n, t, 0) >= 0 && e.push(r);
      }), e;
    }"function" == typeof e && (r = e, e = null), r = g(r || m);var p = B(n),
        h = p.length;if (!h) return r(null);e || (e = h);var y = {},
        v = 0,
        d = !1,
        b = Object.create(null),
        j = [],
        S = [],
        k = {};N(n, function (t, e) {
      if (!Pt(t)) return u(e, [t]), void S.push(e);var r = t.slice(0, t.length - 1),
          o = r.length;return 0 === o ? (u(e, t), void S.push(e)) : (k[e] = o, void $(r, function (c) {
        if (!n[c]) throw new Error("async.auto task `" + e + "` has a non-existent dependency `" + c + "` in " + r.join(", "));i(c, function () {
          o--, 0 === o && u(e, t);
        });
      }));
    }), l(), o();
  },
      De = "[object Symbol]",
      Re = 1 / 0,
      Ce = yt ? yt.prototype : void 0,
      $e = Ce ? Ce.toString : void 0,
      We = "\\ud800-\\udfff",
      Ne = "\\u0300-\\u036f\\ufe20-\\ufe23",
      Qe = "\\u20d0-\\u20f0",
      Ge = "\\ufe0e\\ufe0f",
      He = "\\u200d",
      Je = RegExp("[" + He + We + Ne + Qe + Ge + "]"),
      Ke = "\\ud800-\\udfff",
      Xe = "\\u0300-\\u036f\\ufe20-\\ufe23",
      Ye = "\\u20d0-\\u20f0",
      Ze = "\\ufe0e\\ufe0f",
      nr = "[" + Ke + "]",
      tr = "[" + Xe + Ye + "]",
      er = "\\ud83c[\\udffb-\\udfff]",
      rr = "(?:" + tr + "|" + er + ")",
      ur = "[^" + Ke + "]",
      or = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      ir = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      cr = "\\u200d",
      fr = rr + "?",
      ar = "[" + Ze + "]?",
      lr = "(?:" + cr + "(?:" + [ur, or, ir].join("|") + ")" + ar + fr + ")*",
      sr = ar + fr + lr,
      pr = "(?:" + [ur + tr + "?", tr, or, ir, nr].join("|") + ")",
      hr = RegExp(er + "(?=" + er + ")|" + pr + sr, "g"),
      yr = /^\s+|\s+$/g,
      vr = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,
      dr = /,/,
      mr = /(=.+)?(\s*)$/,
      gr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;pn.prototype.removeLink = function (n) {
    return n.prev ? n.prev.next = n.next : this.head = n.next, n.next ? n.next.prev = n.prev : this.tail = n.prev, n.prev = n.next = null, this.length -= 1, n;
  }, pn.prototype.empty = function () {
    for (; this.head;) this.shift();return this;
  }, pn.prototype.insertAfter = function (n, t) {
    t.prev = n, t.next = n.next, n.next ? n.next.prev = t : this.tail = t, n.next = t, this.length += 1;
  }, pn.prototype.insertBefore = function (n, t) {
    t.prev = n.prev, t.next = n, n.prev ? n.prev.next = t : this.head = t, n.prev = t, this.length += 1;
  }, pn.prototype.unshift = function (n) {
    this.head ? this.insertBefore(this.head, n) : hn(this, n);
  }, pn.prototype.push = function (n) {
    this.tail ? this.insertAfter(this.tail, n) : hn(this, n);
  }, pn.prototype.shift = function () {
    return this.head && this.removeLink(this.head);
  }, pn.prototype.pop = function () {
    return this.tail && this.removeLink(this.tail);
  }, pn.prototype.toArray = function () {
    for (var n = Array(this.length), t = this.head, e = 0; e < this.length; e++) n[e] = t.data, t = t.next;return n;
  }, pn.prototype.remove = function (n) {
    for (var t = this.head; t;) {
      var e = t.next;n(t) && this.removeLink(t), t = e;
    }return this;
  };var br,
      jr = V(P, 1),
      Sr = function () {
    return mn.apply(null, t(arguments).reverse());
  },
      kr = Array.prototype.concat,
      Lr = function (n, e, r, u) {
    u = u || m;var o = a(r);Me(n, e, function (n, e) {
      o(n, function (n) {
        return n ? e(n) : e(null, t(arguments, 1));
      });
    }, function (n, t) {
      for (var e = [], r = 0; r < t.length; r++) t[r] && (e = kr.apply(e, t[r]));return u(n, e);
    });
  },
      Or = V(Lr, 1 / 0),
      wr = V(Lr, 1),
      xr = function () {
    var n = t(arguments),
        e = [null].concat(n);return function () {
      var n = arguments[arguments.length - 1];return n.apply(this, e);
    };
  },
      Er = D(bn(gn, jn)),
      Ar = C(bn(gn, jn)),
      Tr = V(Ar, 1),
      Br = Sn("dir"),
      Fr = V(An, 1),
      Ir = D(bn(Bn, Bn)),
      _r = C(bn(Bn, Bn)),
      Mr = V(_r, 1),
      Ur = D(Mn),
      zr = C(Mn),
      Pr = V(zr, 1),
      Vr = function (n, t, e, r) {
    r = r || m;var u = a(e);Me(n, t, function (n, t) {
      u(n, function (e, r) {
        return e ? t(e) : t(null, { key: r, val: n });
      });
    }, function (n, t) {
      for (var e = {}, u = Object.prototype.hasOwnProperty, o = 0; o < t.length; o++) if (t[o]) {
        var i = t[o].key,
            c = t[o].val;u.call(e, i) ? e[i].push(c) : e[i] = [c];
      }return r(n, e);
    });
  },
      qr = V(Vr, 1 / 0),
      Dr = V(Vr, 1),
      Rr = Sn("log"),
      Cr = V(zn, 1 / 0),
      $r = V(zn, 1);br = ft ? process.nextTick : ct ? setImmediate : r;var Wr = u(br),
      Nr = function (n, t) {
    var e = a(n);return yn(function (n, t) {
      e(n[0], t);
    }, t, 1);
  },
      Qr = function (n, t) {
    var e = Nr(n, t);return e.push = function (n, t, r) {
      if (null == r && (r = m), "function" != typeof r) throw new Error("task callback must be a function");if (e.started = !0, Pt(n) || (n = [n]), 0 === n.length) return at(function () {
        e.drain();
      });t = t || 0;for (var u = e._tasks.head; u && t >= u.priority;) u = u.next;for (var o = 0, i = n.length; o < i; o++) {
        var c = { data: n[o], priority: t, callback: r };u ? e._tasks.insertBefore(u, c) : e._tasks.push(c);
      }at(e.process);
    }, delete e.unshift, e;
  },
      Gr = D(Nn),
      Hr = C(Nn),
      Jr = V(Hr, 1),
      Kr = function (n, t) {
    t || (t = n, n = null);var e = a(t);return it(function (t, r) {
      function u(n) {
        e.apply(null, t.concat(n));
      }n ? Hn(n, u, r) : Hn(u, r);
    });
  },
      Xr = D(bn(Boolean, gn)),
      Yr = C(bn(Boolean, gn)),
      Zr = V(Yr, 1),
      nu = Math.ceil,
      tu = Math.max,
      eu = V(Zn, 1 / 0),
      ru = V(Zn, 1),
      uu = function (n, e) {
    function r(t) {
      var e = a(n[o++]);t.push(U(u)), e.apply(null, t);
    }function u(u) {
      return u || o === n.length ? e.apply(null, arguments) : void r(t(arguments, 1));
    }if (e = g(e || m), !Pt(n)) return e(new Error("First argument to waterfall must be an array of functions"));if (!n.length) return e();var o = 0;r([]);
  },
      ou = { applyEach: _e, applyEachSeries: ze, apply: Pe, asyncify: o, auto: qe, autoInject: sn, cargo: vn, compose: Sr, concat: Or, concatLimit: Lr, concatSeries: wr, constant: xr, detect: Er, detectLimit: Ar, detectSeries: Tr, dir: Br, doDuring: kn, doUntil: On, doWhilst: Ln, during: wn, each: En, eachLimit: An, eachOf: Fe, eachOfLimit: P, eachOfSeries: jr, eachSeries: Fr, ensureAsync: Tn, every: Ir, everyLimit: _r, everySeries: Mr, filter: Ur, filterLimit: zr, filterSeries: Pr, forever: Un, groupBy: qr, groupByLimit: Vr, groupBySeries: Dr, log: Rr, map: Ie, mapLimit: Me, mapSeries: Ue, mapValues: Cr, mapValuesLimit: zn, mapValuesSeries: $r, memoize: Vn, nextTick: Wr, parallel: Dn, parallelLimit: Rn, priorityQueue: Qr, queue: Nr, race: Cn, reduce: dn, reduceRight: $n, reflect: Wn, reflectAll: Qn, reject: Gr, rejectLimit: Hr, rejectSeries: Jr, retry: Hn, retryable: Kr, seq: mn, series: Jn, setImmediate: at, some: Xr, someLimit: Yr, someSeries: Zr, sortBy: Kn, timeout: Xn, times: eu, timesLimit: Zn, timesSeries: ru, transform: nt, tryEach: tt, unmemoize: et, until: ut, waterfall: uu, whilst: rt, all: Ir, any: Xr, forEach: En, forEachSeries: Fr, forEachLimit: An, forEachOf: Fe, forEachOfSeries: jr, forEachOfLimit: P, inject: dn, foldl: dn, foldr: $n, select: Ur, selectLimit: zr, selectSeries: Pr, wrapSync: o };n.default = ou, n.applyEach = _e, n.applyEachSeries = ze, n.apply = Pe, n.asyncify = o, n.auto = qe, n.autoInject = sn, n.cargo = vn, n.compose = Sr, n.concat = Or, n.concatLimit = Lr, n.concatSeries = wr, n.constant = xr, n.detect = Er, n.detectLimit = Ar, n.detectSeries = Tr, n.dir = Br, n.doDuring = kn, n.doUntil = On, n.doWhilst = Ln, n.during = wn, n.each = En, n.eachLimit = An, n.eachOf = Fe, n.eachOfLimit = P, n.eachOfSeries = jr, n.eachSeries = Fr, n.ensureAsync = Tn, n.every = Ir, n.everyLimit = _r, n.everySeries = Mr, n.filter = Ur, n.filterLimit = zr, n.filterSeries = Pr, n.forever = Un, n.groupBy = qr, n.groupByLimit = Vr, n.groupBySeries = Dr, n.log = Rr, n.map = Ie, n.mapLimit = Me, n.mapSeries = Ue, n.mapValues = Cr, n.mapValuesLimit = zn, n.mapValuesSeries = $r, n.memoize = Vn, n.nextTick = Wr, n.parallel = Dn, n.parallelLimit = Rn, n.priorityQueue = Qr, n.queue = Nr, n.race = Cn, n.reduce = dn, n.reduceRight = $n, n.reflect = Wn, n.reflectAll = Qn, n.reject = Gr, n.rejectLimit = Hr, n.rejectSeries = Jr, n.retry = Hn, n.retryable = Kr, n.seq = mn, n.series = Jn, n.setImmediate = at, n.some = Xr, n.someLimit = Yr, n.someSeries = Zr, n.sortBy = Kn, n.timeout = Xn, n.times = eu, n.timesLimit = Zn, n.timesSeries = ru, n.transform = nt, n.tryEach = tt, n.unmemoize = et, n.until = ut, n.waterfall = uu, n.whilst = rt, n.all = Ir, n.allLimit = _r, n.allSeries = Mr, n.any = Xr, n.anyLimit = Yr, n.anySeries = Zr, n.find = Er, n.findLimit = Ar, n.findSeries = Tr, n.forEach = En, n.forEachSeries = Fr, n.forEachLimit = An, n.forEachOf = Fe, n.forEachOfSeries = jr, n.forEachOfLimit = P, n.inject = dn, n.foldl = dn, n.foldr = $n, n.select = Ur, n.selectLimit = zr, n.selectSeries = Pr, n.wrapSync = o, Object.defineProperty(n, "__esModule", { value: !0 });
});
//# sourceMappingURL=async.min.map
(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.eosjs_ecc = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
  }({ 1: [function (require, module, exports) {

      module.exports = {
        Aes: require("./src/aes"),
        PrivateKey: require("./src/key_private"),
        PublicKey: require("./src/key_public"),
        Signature: require("./src/signature"),
        key_utils: require("./src/key_utils"),
        config: require('./src/config')
      };
    }, { "./src/aes": 83, "./src/config": 84, "./src/key_private": 89, "./src/key_public": 90, "./src/key_utils": 91, "./src/signature": 92 }], 2: [function (require, module, exports) {
      (function (global) {
        'use strict';

        // compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
        // original notice:

        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */

        function compare(a, b) {
          if (a === b) {
            return 0;
          }

          var x = a.length;
          var y = b.length;

          for (var i = 0, len = Math.min(x, y); i < len; ++i) {
            if (a[i] !== b[i]) {
              x = a[i];
              y = b[i];
              break;
            }
          }

          if (x < y) {
            return -1;
          }
          if (y < x) {
            return 1;
          }
          return 0;
        }
        function isBuffer(b) {
          if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
            return global.Buffer.isBuffer(b);
          }
          return !!(b != null && b._isBuffer);
        }

        // based on node assert, original notice:

        // http://wiki.commonjs.org/wiki/Unit_Testing/1.0
        //
        // THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
        //
        // Originally from narwhal.js (http://narwhaljs.org)
        // Copyright (c) 2009 Thomas Robinson <280north.com>
        //
        // Permission is hereby granted, free of charge, to any person obtaining a copy
        // of this software and associated documentation files (the 'Software'), to
        // deal in the Software without restriction, including without limitation the
        // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        // sell copies of the Software, and to permit persons to whom the Software is
        // furnished to do so, subject to the following conditions:
        //
        // The above copyright notice and this permission notice shall be included in
        // all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        // AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
        // ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
        // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

        var util = require('util/');
        var hasOwn = Object.prototype.hasOwnProperty;
        var pSlice = Array.prototype.slice;
        var functionsHaveNames = function () {
          return function foo() {}.name === 'foo';
        }();
        function pToString(obj) {
          return Object.prototype.toString.call(obj);
        }
        function isView(arrbuf) {
          if (isBuffer(arrbuf)) {
            return false;
          }
          if (typeof global.ArrayBuffer !== 'function') {
            return false;
          }
          if (typeof ArrayBuffer.isView === 'function') {
            return ArrayBuffer.isView(arrbuf);
          }
          if (!arrbuf) {
            return false;
          }
          if (arrbuf instanceof DataView) {
            return true;
          }
          if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
            return true;
          }
          return false;
        }
        // 1. The assert module provides functions that throw
        // AssertionError's when particular conditions are not met. The
        // assert module must conform to the following interface.

        var assert = module.exports = ok;

        // 2. The AssertionError is defined in assert.
        // new assert.AssertionError({ message: message,
        //                             actual: actual,
        //                             expected: expected })

        var regex = /\s*function\s+([^\(\s]*)\s*/;
        // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
        function getName(func) {
          if (!util.isFunction(func)) {
            return;
          }
          if (functionsHaveNames) {
            return func.name;
          }
          var str = func.toString();
          var match = str.match(regex);
          return match && match[1];
        }
        assert.AssertionError = function AssertionError(options) {
          this.name = 'AssertionError';
          this.actual = options.actual;
          this.expected = options.expected;
          this.operator = options.operator;
          if (options.message) {
            this.message = options.message;
            this.generatedMessage = false;
          } else {
            this.message = getMessage(this);
            this.generatedMessage = true;
          }
          var stackStartFunction = options.stackStartFunction || fail;
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, stackStartFunction);
          } else {
            // non v8 browsers so we can have a stacktrace
            var err = new Error();
            if (err.stack) {
              var out = err.stack;

              // try to strip useless frames
              var fn_name = getName(stackStartFunction);
              var idx = out.indexOf('\n' + fn_name);
              if (idx >= 0) {
                // once we have located the function frame
                // we need to strip out everything before it (and its line)
                var next_line = out.indexOf('\n', idx + 1);
                out = out.substring(next_line + 1);
              }

              this.stack = out;
            }
          }
        };

        // assert.AssertionError instanceof Error
        util.inherits(assert.AssertionError, Error);

        function truncate(s, n) {
          if (typeof s === 'string') {
            return s.length < n ? s : s.slice(0, n);
          } else {
            return s;
          }
        }
        function inspect(something) {
          if (functionsHaveNames || !util.isFunction(something)) {
            return util.inspect(something);
          }
          var rawname = getName(something);
          var name = rawname ? ': ' + rawname : '';
          return '[Function' + name + ']';
        }
        function getMessage(self) {
          return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
        }

        // At present only the three keys mentioned above are used and
        // understood by the spec. Implementations or sub modules can pass
        // other keys to the AssertionError's constructor - they will be
        // ignored.

        // 3. All of the following functions must throw an AssertionError
        // when a corresponding condition is not met, with a message that
        // may be undefined if not provided.  All assertion methods provide
        // both the actual and expected values to the assertion error for
        // display purposes.

        function fail(actual, expected, message, operator, stackStartFunction) {
          throw new assert.AssertionError({
            message: message,
            actual: actual,
            expected: expected,
            operator: operator,
            stackStartFunction: stackStartFunction
          });
        }

        // EXTENSION! allows for well behaved errors defined elsewhere.
        assert.fail = fail;

        // 4. Pure assertion tests whether a value is truthy, as determined
        // by !!guard.
        // assert.ok(guard, message_opt);
        // This statement is equivalent to assert.equal(true, !!guard,
        // message_opt);. To test strictly for the value true, use
        // assert.strictEqual(true, guard, message_opt);.

        function ok(value, message) {
          if (!value) fail(value, true, message, '==', assert.ok);
        }
        assert.ok = ok;

        // 5. The equality assertion tests shallow, coercive equality with
        // ==.
        // assert.equal(actual, expected, message_opt);

        assert.equal = function equal(actual, expected, message) {
          if (actual != expected) fail(actual, expected, message, '==', assert.equal);
        };

        // 6. The non-equality assertion tests for whether two objects are not equal
        // with != assert.notEqual(actual, expected, message_opt);

        assert.notEqual = function notEqual(actual, expected, message) {
          if (actual == expected) {
            fail(actual, expected, message, '!=', assert.notEqual);
          }
        };

        // 7. The equivalence assertion tests a deep equality relation.
        // assert.deepEqual(actual, expected, message_opt);

        assert.deepEqual = function deepEqual(actual, expected, message) {
          if (!_deepEqual(actual, expected, false)) {
            fail(actual, expected, message, 'deepEqual', assert.deepEqual);
          }
        };

        assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
          if (!_deepEqual(actual, expected, true)) {
            fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
          }
        };

        function _deepEqual(actual, expected, strict, memos) {
          // 7.1. All identical values are equivalent, as determined by ===.
          if (actual === expected) {
            return true;
          } else if (isBuffer(actual) && isBuffer(expected)) {
            return compare(actual, expected) === 0;

            // 7.2. If the expected value is a Date object, the actual value is
            // equivalent if it is also a Date object that refers to the same time.
          } else if (util.isDate(actual) && util.isDate(expected)) {
            return actual.getTime() === expected.getTime();

            // 7.3 If the expected value is a RegExp object, the actual value is
            // equivalent if it is also a RegExp object with the same source and
            // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
          } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
            return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;

            // 7.4. Other pairs that do not both pass typeof value == 'object',
            // equivalence is determined by ==.
          } else if ((actual === null || typeof actual !== 'object') && (expected === null || typeof expected !== 'object')) {
            return strict ? actual === expected : actual == expected;

            // If both values are instances of typed arrays, wrap their underlying
            // ArrayBuffers in a Buffer each to increase performance
            // This optimization requires the arrays to have the same type as checked by
            // Object.prototype.toString (aka pToString). Never perform binary
            // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
            // bit patterns are not identical.
          } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
            return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0;

            // 7.5 For all other Object pairs, including Array objects, equivalence is
            // determined by having the same number of owned properties (as verified
            // with Object.prototype.hasOwnProperty.call), the same set of keys
            // (although not necessarily the same order), equivalent values for every
            // corresponding key, and an identical 'prototype' property. Note: this
            // accounts for both named and indexed properties on Arrays.
          } else if (isBuffer(actual) !== isBuffer(expected)) {
            return false;
          } else {
            memos = memos || { actual: [], expected: [] };

            var actualIndex = memos.actual.indexOf(actual);
            if (actualIndex !== -1) {
              if (actualIndex === memos.expected.indexOf(expected)) {
                return true;
              }
            }

            memos.actual.push(actual);
            memos.expected.push(expected);

            return objEquiv(actual, expected, strict, memos);
          }
        }

        function isArguments(object) {
          return Object.prototype.toString.call(object) == '[object Arguments]';
        }

        function objEquiv(a, b, strict, actualVisitedObjects) {
          if (a === null || a === undefined || b === null || b === undefined) return false;
          // if one is a primitive, the other must be same
          if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
          if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
          var aIsArgs = isArguments(a);
          var bIsArgs = isArguments(b);
          if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
          if (aIsArgs) {
            a = pSlice.call(a);
            b = pSlice.call(b);
            return _deepEqual(a, b, strict);
          }
          var ka = objectKeys(a);
          var kb = objectKeys(b);
          var key, i;
          // having the same number of owned properties (keys incorporates
          // hasOwnProperty)
          if (ka.length !== kb.length) return false;
          //the same set of keys (although not necessarily the same order),
          ka.sort();
          kb.sort();
          //~~~cheap key test
          for (i = ka.length - 1; i >= 0; i--) {
            if (ka[i] !== kb[i]) return false;
          }
          //equivalent values for every corresponding key, and
          //~~~possibly expensive deep test
          for (i = ka.length - 1; i >= 0; i--) {
            key = ka[i];
            if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
          }
          return true;
        }

        // 8. The non-equivalence assertion tests for any deep inequality.
        // assert.notDeepEqual(actual, expected, message_opt);

        assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
          if (_deepEqual(actual, expected, false)) {
            fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
          }
        };

        assert.notDeepStrictEqual = notDeepStrictEqual;
        function notDeepStrictEqual(actual, expected, message) {
          if (_deepEqual(actual, expected, true)) {
            fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
          }
        }

        // 9. The strict equality assertion tests strict equality, as determined by ===.
        // assert.strictEqual(actual, expected, message_opt);

        assert.strictEqual = function strictEqual(actual, expected, message) {
          if (actual !== expected) {
            fail(actual, expected, message, '===', assert.strictEqual);
          }
        };

        // 10. The strict non-equality assertion tests for strict inequality, as
        // determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

        assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
          if (actual === expected) {
            fail(actual, expected, message, '!==', assert.notStrictEqual);
          }
        };

        function expectedException(actual, expected) {
          if (!actual || !expected) {
            return false;
          }

          if (Object.prototype.toString.call(expected) == '[object RegExp]') {
            return expected.test(actual);
          }

          try {
            if (actual instanceof expected) {
              return true;
            }
          } catch (e) {
            // Ignore.  The instanceof check doesn't work for arrow functions.
          }

          if (Error.isPrototypeOf(expected)) {
            return false;
          }

          return expected.call({}, actual) === true;
        }

        function _tryBlock(block) {
          var error;
          try {
            block();
          } catch (e) {
            error = e;
          }
          return error;
        }

        function _throws(shouldThrow, block, expected, message) {
          var actual;

          if (typeof block !== 'function') {
            throw new TypeError('"block" argument must be a function');
          }

          if (typeof expected === 'string') {
            message = expected;
            expected = null;
          }

          actual = _tryBlock(block);

          message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

          if (shouldThrow && !actual) {
            fail(actual, expected, 'Missing expected exception' + message);
          }

          var userProvidedMessage = typeof message === 'string';
          var isUnwantedException = !shouldThrow && util.isError(actual);
          var isUnexpectedException = !shouldThrow && actual && !expected;

          if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
            fail(actual, expected, 'Got unwanted exception' + message);
          }

          if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
            throw actual;
          }
        }

        // 11. Expected to throw an error:
        // assert.throws(block, Error_opt, message_opt);

        assert.throws = function (block, /*optional*/error, /*optional*/message) {
          _throws(true, block, error, message);
        };

        // EXTENSION! This is annoying to write outside this module.
        assert.doesNotThrow = function (block, /*optional*/error, /*optional*/message) {
          _throws(false, block, error, message);
        };

        assert.ifError = function (err) {
          if (err) throw err;
        };

        var objectKeys = Object.keys || function (obj) {
          var keys = [];
          for (var key in obj) {
            if (hasOwn.call(obj, key)) keys.push(key);
          }
          return keys;
        };
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "util/": 82 }], 3: [function (require, module, exports) {
      // base-x encoding
      // Forked from https://github.com/cryptocoinjs/bs58
      // Originally written by Mike Hearn for BitcoinJ
      // Copyright (c) 2011 Google Inc
      // Ported to JavaScript by Stefan Thomas
      // Merged Buffer refactorings from base58-native by Stephen Pair
      // Copyright (c) 2013 BitPay Inc

      var Buffer = require('safe-buffer').Buffer;

      module.exports = function base(ALPHABET) {
        var ALPHABET_MAP = {};
        var BASE = ALPHABET.length;
        var LEADER = ALPHABET.charAt(0);

        // pre-compute lookup table
        for (var z = 0; z < ALPHABET.length; z++) {
          var x = ALPHABET.charAt(z);

          if (ALPHABET_MAP[x] !== undefined) throw new TypeError(x + ' is ambiguous');
          ALPHABET_MAP[x] = z;
        }

        function encode(source) {
          if (source.length === 0) return '';

          var digits = [0];
          for (var i = 0; i < source.length; ++i) {
            for (var j = 0, carry = source[i]; j < digits.length; ++j) {
              carry += digits[j] << 8;
              digits[j] = carry % BASE;
              carry = carry / BASE | 0;
            }

            while (carry > 0) {
              digits.push(carry % BASE);
              carry = carry / BASE | 0;
            }
          }

          var string = '';

          // deal with leading zeros
          for (var k = 0; source[k] === 0 && k < source.length - 1; ++k) string += ALPHABET[0];
          // convert digits to a string
          for (var q = digits.length - 1; q >= 0; --q) string += ALPHABET[digits[q]];

          return string;
        }

        function decodeUnsafe(string) {
          if (string.length === 0) return Buffer.allocUnsafe(0);

          var bytes = [0];
          for (var i = 0; i < string.length; i++) {
            var value = ALPHABET_MAP[string[i]];
            if (value === undefined) return;

            for (var j = 0, carry = value; j < bytes.length; ++j) {
              carry += bytes[j] * BASE;
              bytes[j] = carry & 0xff;
              carry >>= 8;
            }

            while (carry > 0) {
              bytes.push(carry & 0xff);
              carry >>= 8;
            }
          }

          // deal with leading zeros
          for (var k = 0; string[k] === LEADER && k < string.length - 1; ++k) {
            bytes.push(0);
          }

          return Buffer.from(bytes.reverse());
        }

        function decode(string) {
          var buffer = decodeUnsafe(string);
          if (buffer) return buffer;

          throw new Error('Non-base' + BASE + ' character');
        }

        return {
          encode: encode,
          decodeUnsafe: decodeUnsafe,
          decode: decode
        };
      };
    }, { "safe-buffer": 67 }], 4: [function (require, module, exports) {
      'use strict';

      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;

      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }

      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;

      function placeHoldersCount(b64) {
        var len = b64.length;
        if (len % 4 > 0) {
          throw new Error('Invalid string. Length must be a multiple of 4');
        }

        // the number of equal signs (place holders)
        // if there are two placeholders, than the two characters before it
        // represent one byte
        // if there is only one, then the three characters before it represent 2 bytes
        // this is just a cheap hack to not do indexOf twice
        return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
      }

      function byteLength(b64) {
        // base64 is 4/3 + up to two characters of the original data
        return b64.length * 3 / 4 - placeHoldersCount(b64);
      }

      function toByteArray(b64) {
        var i, l, tmp, placeHolders, arr;
        var len = b64.length;
        placeHolders = placeHoldersCount(b64);

        arr = new Arr(len * 3 / 4 - placeHolders);

        // if there are placeholders, only get up to the last complete 4 chars
        l = placeHolders > 0 ? len - 4 : len;

        var L = 0;

        for (i = 0; i < l; i += 4) {
          tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
          arr[L++] = tmp >> 16 & 0xFF;
          arr[L++] = tmp >> 8 & 0xFF;
          arr[L++] = tmp & 0xFF;
        }

        if (placeHolders === 2) {
          tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
          arr[L++] = tmp & 0xFF;
        } else if (placeHolders === 1) {
          tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
          arr[L++] = tmp >> 8 & 0xFF;
          arr[L++] = tmp & 0xFF;
        }

        return arr;
      }

      function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
      }

      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i = start; i < end; i += 3) {
          tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
          output.push(tripletToBase64(tmp));
        }
        return output.join('');
      }

      function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
        var output = '';
        var parts = [];
        var maxChunkLength = 16383; // must be multiple of 3

        // go through the array every three bytes, we'll deal with trailing stuff later
        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
          parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
        }

        // pad the end with zeros, but make sure to not forget the extra bytes
        if (extraBytes === 1) {
          tmp = uint8[len - 1];
          output += lookup[tmp >> 2];
          output += lookup[tmp << 4 & 0x3F];
          output += '==';
        } else if (extraBytes === 2) {
          tmp = (uint8[len - 2] << 8) + uint8[len - 1];
          output += lookup[tmp >> 10];
          output += lookup[tmp >> 4 & 0x3F];
          output += lookup[tmp << 2 & 0x3F];
          output += '=';
        }

        parts.push(output);

        return parts.join('');
      }
    }, {}], 5: [function (require, module, exports) {
      // (public) Constructor
      function BigInteger(a, b, c) {
        if (!(this instanceof BigInteger)) return new BigInteger(a, b, c);

        if (a != null) {
          if ("number" == typeof a) this.fromNumber(a, b, c);else if (b == null && "string" != typeof a) this.fromString(a, 256);else this.fromString(a, b);
        }
      }

      var proto = BigInteger.prototype;

      // duck-typed isBigInteger
      proto.__bigi = require('../package.json').version;
      BigInteger.isBigInteger = function (obj, check_ver) {
        return obj && obj.__bigi && (!check_ver || obj.__bigi === proto.__bigi);
      };

      // Bits per digit
      var dbits;

      // am: Compute w_j += (x*this_i), propagate carries,
      // c is initial carry, returns final carry.
      // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
      // We need to select the fastest one that works in this environment.

      // am1: use a single mult and divide to get the high bits,
      // max digit bits should be 26 because
      // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
      function am1(i, x, w, j, c, n) {
        while (--n >= 0) {
          var v = x * this[i++] + w[j] + c;
          c = Math.floor(v / 0x4000000);
          w[j++] = v & 0x3ffffff;
        }
        return c;
      }
      // am2 avoids a big mult-and-extract completely.
      // Max digit bits should be <= 30 because we do bitwise ops
      // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
      function am2(i, x, w, j, c, n) {
        var xl = x & 0x7fff,
            xh = x >> 15;
        while (--n >= 0) {
          var l = this[i] & 0x7fff;
          var h = this[i++] >> 15;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
          c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
          w[j++] = l & 0x3fffffff;
        }
        return c;
      }
      // Alternately, set max digit bits to 28 since some
      // browsers slow down when dealing with 32-bit numbers.
      function am3(i, x, w, j, c, n) {
        var xl = x & 0x3fff,
            xh = x >> 14;
        while (--n >= 0) {
          var l = this[i] & 0x3fff;
          var h = this[i++] >> 14;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
          c = (l >> 28) + (m >> 14) + xh * h;
          w[j++] = l & 0xfffffff;
        }
        return c;
      }

      // wtf?
      BigInteger.prototype.am = am1;
      dbits = 26;

      BigInteger.prototype.DB = dbits;
      BigInteger.prototype.DM = (1 << dbits) - 1;
      var DV = BigInteger.prototype.DV = 1 << dbits;

      var BI_FP = 52;
      BigInteger.prototype.FV = Math.pow(2, BI_FP);
      BigInteger.prototype.F1 = BI_FP - dbits;
      BigInteger.prototype.F2 = 2 * dbits - BI_FP;

      // Digit conversions
      var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
      var BI_RC = new Array();
      var rr, vv;
      rr = "0".charCodeAt(0);
      for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
      rr = "a".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
      rr = "A".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

      function int2char(n) {
        return BI_RM.charAt(n);
      }

      function intAt(s, i) {
        var c = BI_RC[s.charCodeAt(i)];
        return c == null ? -1 : c;
      }

      // (protected) copy this to r
      function bnpCopyTo(r) {
        for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
        r.t = this.t;
        r.s = this.s;
      }

      // (protected) set from integer value x, -DV <= x < DV
      function bnpFromInt(x) {
        this.t = 1;
        this.s = x < 0 ? -1 : 0;
        if (x > 0) this[0] = x;else if (x < -1) this[0] = x + DV;else this.t = 0;
      }

      // return bigint initialized to value
      function nbv(i) {
        var r = new BigInteger();
        r.fromInt(i);
        return r;
      }

      // (protected) set from string and radix
      function bnpFromString(s, b) {
        var self = this;

        var k;
        if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 256) k = 8; // byte array
        else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else {
            self.fromRadix(s, b);
            return;
          }
        self.t = 0;
        self.s = 0;
        var i = s.length,
            mi = false,
            sh = 0;
        while (--i >= 0) {
          var x = k == 8 ? s[i] & 0xff : intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-") mi = true;
            continue;
          }
          mi = false;
          if (sh == 0) self[self.t++] = x;else if (sh + k > self.DB) {
            self[self.t - 1] |= (x & (1 << self.DB - sh) - 1) << sh;
            self[self.t++] = x >> self.DB - sh;
          } else self[self.t - 1] |= x << sh;
          sh += k;
          if (sh >= self.DB) sh -= self.DB;
        }
        if (k == 8 && (s[0] & 0x80) != 0) {
          self.s = -1;
          if (sh > 0) self[self.t - 1] |= (1 << self.DB - sh) - 1 << sh;
        }
        self.clamp();
        if (mi) BigInteger.ZERO.subTo(self, self);
      }

      // (protected) clamp off excess high words
      function bnpClamp() {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c) --this.t;
      }

      // (public) return string representation in given radix
      function bnToString(b) {
        var self = this;
        if (self.s < 0) return "-" + self.negate().toString(b);
        var k;
        if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else return self.toRadix(b);
        var km = (1 << k) - 1,
            d,
            m = false,
            r = "",
            i = self.t;
        var p = self.DB - i * self.DB % k;
        if (i-- > 0) {
          if (p < self.DB && (d = self[i] >> p) > 0) {
            m = true;
            r = int2char(d);
          }
          while (i >= 0) {
            if (p < k) {
              d = (self[i] & (1 << p) - 1) << k - p;
              d |= self[--i] >> (p += self.DB - k);
            } else {
              d = self[i] >> (p -= k) & km;
              if (p <= 0) {
                p += self.DB;
                --i;
              }
            }
            if (d > 0) m = true;
            if (m) r += int2char(d);
          }
        }
        return m ? r : "0";
      }

      // (public) -this
      function bnNegate() {
        var r = new BigInteger();
        BigInteger.ZERO.subTo(this, r);
        return r;
      }

      // (public) |this|
      function bnAbs() {
        return this.s < 0 ? this.negate() : this;
      }

      // (public) return + if this > a, - if this < a, 0 if equal
      function bnCompareTo(a) {
        var r = this.s - a.s;
        if (r != 0) return r;
        var i = this.t;
        r = i - a.t;
        if (r != 0) return this.s < 0 ? -r : r;
        while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
        return 0;
      }

      // returns bit length of the integer x
      function nbits(x) {
        var r = 1,
            t;
        if ((t = x >>> 16) != 0) {
          x = t;
          r += 16;
        }
        if ((t = x >> 8) != 0) {
          x = t;
          r += 8;
        }
        if ((t = x >> 4) != 0) {
          x = t;
          r += 4;
        }
        if ((t = x >> 2) != 0) {
          x = t;
          r += 2;
        }
        if ((t = x >> 1) != 0) {
          x = t;
          r += 1;
        }
        return r;
      }

      // (public) return the number of bits in "this"
      function bnBitLength() {
        if (this.t <= 0) return 0;
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
      }

      // (public) return the number of bytes in "this"
      function bnByteLength() {
        return this.bitLength() >> 3;
      }

      // (protected) r = this << n*DB
      function bnpDLShiftTo(n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
        for (i = n - 1; i >= 0; --i) r[i] = 0;
        r.t = this.t + n;
        r.s = this.s;
      }

      // (protected) r = this >> n*DB
      function bnpDRShiftTo(n, r) {
        for (var i = n; i < this.t; ++i) r[i - n] = this[i];
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
      }

      // (protected) r = this << n
      function bnpLShiftTo(n, r) {
        var self = this;
        var bs = n % self.DB;
        var cbs = self.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / self.DB),
            c = self.s << bs & self.DM,
            i;
        for (i = self.t - 1; i >= 0; --i) {
          r[i + ds + 1] = self[i] >> cbs | c;
          c = (self[i] & bm) << bs;
        }
        for (i = ds - 1; i >= 0; --i) r[i] = 0;
        r[ds] = c;
        r.t = self.t + ds + 1;
        r.s = self.s;
        r.clamp();
      }

      // (protected) r = this >> n
      function bnpRShiftTo(n, r) {
        var self = this;
        r.s = self.s;
        var ds = Math.floor(n / self.DB);
        if (ds >= self.t) {
          r.t = 0;
          return;
        }
        var bs = n % self.DB;
        var cbs = self.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = self[ds] >> bs;
        for (var i = ds + 1; i < self.t; ++i) {
          r[i - ds - 1] |= (self[i] & bm) << cbs;
          r[i - ds] = self[i] >> bs;
        }
        if (bs > 0) r[self.t - ds - 1] |= (self.s & bm) << cbs;
        r.t = self.t - ds;
        r.clamp();
      }

      // (protected) r = this - a
      function bnpSubTo(a, r) {
        var self = this;
        var i = 0,
            c = 0,
            m = Math.min(a.t, self.t);
        while (i < m) {
          c += self[i] - a[i];
          r[i++] = c & self.DM;
          c >>= self.DB;
        }
        if (a.t < self.t) {
          c -= a.s;
          while (i < self.t) {
            c += self[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c += self.s;
        } else {
          c += self.s;
          while (i < a.t) {
            c -= a[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c -= a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c < -1) r[i++] = self.DV + c;else if (c > 0) r[i++] = c;
        r.t = i;
        r.clamp();
      }

      // (protected) r = this * a, r != this,a (HAC 14.12)
      // "this" should be the larger one if appropriate.
      function bnpMultiplyTo(a, r) {
        var x = this.abs(),
            y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0) r[i] = 0;
        for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        r.s = 0;
        r.clamp();
        if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
      }

      // (protected) r = this^2, r != this (HAC 14.16)
      function bnpSquareTo(r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0) r[i] = 0;
        for (i = 0; i < x.t - 1; ++i) {
          var c = x.am(i, x[i], r, 2 * i, 0, 1);
          if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
          }
        }
        if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        r.s = 0;
        r.clamp();
      }

      // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
      // r != q, this != m.  q or r may be null.
      function bnpDivRemTo(m, q, r) {
        var self = this;
        var pm = m.abs();
        if (pm.t <= 0) return;
        var pt = self.abs();
        if (pt.t < pm.t) {
          if (q != null) q.fromInt(0);
          if (r != null) self.copyTo(r);
          return;
        }
        if (r == null) r = new BigInteger();
        var y = new BigInteger(),
            ts = self.s,
            ms = m.s;
        var nsh = self.DB - nbits(pm[pm.t - 1]); // normalize modulus
        if (nsh > 0) {
          pm.lShiftTo(nsh, y);
          pt.lShiftTo(nsh, r);
        } else {
          pm.copyTo(y);
          pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0) return;
        var yt = y0 * (1 << self.F1) + (ys > 1 ? y[ys - 2] >> self.F2 : 0);
        var d1 = self.FV / yt,
            d2 = (1 << self.F1) / yt,
            e = 1 << self.F2;
        var i = r.t,
            j = i - ys,
            t = q == null ? new BigInteger() : q;
        y.dlShiftTo(j, t);
        if (r.compareTo(t) >= 0) {
          r[r.t++] = 1;
          r.subTo(t, r);
        }
        BigInteger.ONE.dlShiftTo(ys, t);
        t.subTo(y, y); // "negative" y so we can replace sub with am later
        while (y.t < ys) y[y.t++] = 0;
        while (--j >= 0) {
          // Estimate quotient digit
          var qd = r[--i] == y0 ? self.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
          if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            // Try it out
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd) r.subTo(t, r);
          }
        }
        if (q != null) {
          r.drShiftTo(ys, q);
          if (ts != ms) BigInteger.ZERO.subTo(q, q);
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0) r.rShiftTo(nsh, r); // Denormalize remainder
        if (ts < 0) BigInteger.ZERO.subTo(r, r);
      }

      // (public) this mod a
      function bnMod(a) {
        var r = new BigInteger();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
        return r;
      }

      // Modular reduction using "classic" algorithm
      function Classic(m) {
        this.m = m;
      }

      function cConvert(x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);else return x;
      }

      function cRevert(x) {
        return x;
      }

      function cReduce(x) {
        x.divRemTo(this.m, null, x);
      }

      function cMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }

      function cSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }

      Classic.prototype.convert = cConvert;
      Classic.prototype.revert = cRevert;
      Classic.prototype.reduce = cReduce;
      Classic.prototype.mulTo = cMulTo;
      Classic.prototype.sqrTo = cSqrTo;

      // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
      // justification:
      //         xy == 1 (mod m)
      //         xy =  1+km
      //   xy(2-xy) = (1+km)(1-km)
      // x[y(2-xy)] = 1-k^2m^2
      // x[y(2-xy)] == 1 (mod m^2)
      // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
      // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
      // JS multiply "overflows" differently from C/C++, so care is needed here.
      function bnpInvDigit() {
        if (this.t < 1) return 0;
        var x = this[0];
        if ((x & 1) == 0) return 0;
        var y = x & 3; // y == 1/x mod 2^2
        y = y * (2 - (x & 0xf) * y) & 0xf; // y == 1/x mod 2^4
        y = y * (2 - (x & 0xff) * y) & 0xff; // y == 1/x mod 2^8
        y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff; // y == 1/x mod 2^16
        // last step - calculate inverse mod DV directly
        // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
        y = y * (2 - x * y % this.DV) % this.DV; // y == 1/x mod 2^dbits
        // we really want the negative inverse, and -DV < y < DV
        return y > 0 ? this.DV - y : -y;
      }

      // Montgomery reduction
      function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 0x7fff;
        this.mph = this.mp >> 15;
        this.um = (1 << m.DB - 15) - 1;
        this.mt2 = 2 * m.t;
      }

      // xR mod m
      function montConvert(x) {
        var r = new BigInteger();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
        return r;
      }

      // x/R mod m
      function montRevert(x) {
        var r = new BigInteger();
        x.copyTo(r);
        this.reduce(r);
        return r;
      }

      // x = x/R mod m (HAC 14.32)
      function montReduce(x) {
        while (x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
          // faster way of calculating u0 = x[i]*mp mod DV
          var j = x[i] & 0x7fff;
          var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
          // use am to combine the multiply-shift-add into one call
          j = i + this.m.t;
          x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
          // propagate carry
          while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
          }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
      }

      // r = "x^2/R mod m"; x != r
      function montSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }

      // r = "xy/R mod m"; x,y != r
      function montMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }

      Montgomery.prototype.convert = montConvert;
      Montgomery.prototype.revert = montRevert;
      Montgomery.prototype.reduce = montReduce;
      Montgomery.prototype.mulTo = montMulTo;
      Montgomery.prototype.sqrTo = montSqrTo;

      // (protected) true iff this is even
      function bnpIsEven() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0;
      }

      // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
      function bnpExp(e, z) {
        if (e > 0xffffffff || e < 1) return BigInteger.ONE;
        var r = new BigInteger(),
            r2 = new BigInteger(),
            g = z.convert(this),
            i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
          z.sqrTo(r, r2);
          if ((e & 1 << i) > 0) z.mulTo(r2, g, r);else {
            var t = r;
            r = r2;
            r2 = t;
          }
        }
        return z.revert(r);
      }

      // (public) this^e % m, 0 <= e < 2^32
      function bnModPowInt(e, m) {
        var z;
        if (e < 256 || m.isEven()) z = new Classic(m);else z = new Montgomery(m);
        return this.exp(e, z);
      }

      // protected
      proto.copyTo = bnpCopyTo;
      proto.fromInt = bnpFromInt;
      proto.fromString = bnpFromString;
      proto.clamp = bnpClamp;
      proto.dlShiftTo = bnpDLShiftTo;
      proto.drShiftTo = bnpDRShiftTo;
      proto.lShiftTo = bnpLShiftTo;
      proto.rShiftTo = bnpRShiftTo;
      proto.subTo = bnpSubTo;
      proto.multiplyTo = bnpMultiplyTo;
      proto.squareTo = bnpSquareTo;
      proto.divRemTo = bnpDivRemTo;
      proto.invDigit = bnpInvDigit;
      proto.isEven = bnpIsEven;
      proto.exp = bnpExp;

      // public
      proto.toString = bnToString;
      proto.negate = bnNegate;
      proto.abs = bnAbs;
      proto.compareTo = bnCompareTo;
      proto.bitLength = bnBitLength;
      proto.byteLength = bnByteLength;
      proto.mod = bnMod;
      proto.modPowInt = bnModPowInt;

      // (public)
      function bnClone() {
        var r = new BigInteger();
        this.copyTo(r);
        return r;
      }

      // (public) return value as integer
      function bnIntValue() {
        if (this.s < 0) {
          if (this.t == 1) return this[0] - this.DV;else if (this.t == 0) return -1;
        } else if (this.t == 1) return this[0];else if (this.t == 0) return 0;
        // assumes 16 < DB < 32
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
      }

      // (public) return value as byte
      function bnByteValue() {
        return this.t == 0 ? this.s : this[0] << 24 >> 24;
      }

      // (public) return value as short (assumes DB>=16)
      function bnShortValue() {
        return this.t == 0 ? this.s : this[0] << 16 >> 16;
      }

      // (protected) return x s.t. r^x < DV
      function bnpChunkSize(r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r));
      }

      // (public) 0 if this == 0, 1 if this > 0
      function bnSigNum() {
        if (this.s < 0) return -1;else if (this.t <= 0 || this.t == 1 && this[0] <= 0) return 0;else return 1;
      }

      // (protected) convert to radix string
      function bnpToRadix(b) {
        if (b == null) b = 10;
        if (this.signum() == 0 || b < 2 || b > 36) return "0";
        var cs = this.chunkSize(b);
        var a = Math.pow(b, cs);
        var d = nbv(a),
            y = new BigInteger(),
            z = new BigInteger(),
            r = "";
        this.divRemTo(d, y, z);
        while (y.signum() > 0) {
          r = (a + z.intValue()).toString(b).substr(1) + r;
          y.divRemTo(d, y, z);
        }
        return z.intValue().toString(b) + r;
      }

      // (protected) convert from radix string
      function bnpFromRadix(s, b) {
        var self = this;
        self.fromInt(0);
        if (b == null) b = 10;
        var cs = self.chunkSize(b);
        var d = Math.pow(b, cs),
            mi = false,
            j = 0,
            w = 0;
        for (var i = 0; i < s.length; ++i) {
          var x = intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-" && self.signum() == 0) mi = true;
            continue;
          }
          w = b * w + x;
          if (++j >= cs) {
            self.dMultiply(d);
            self.dAddOffset(w, 0);
            j = 0;
            w = 0;
          }
        }
        if (j > 0) {
          self.dMultiply(Math.pow(b, j));
          self.dAddOffset(w, 0);
        }
        if (mi) BigInteger.ZERO.subTo(self, self);
      }

      // (protected) alternate constructor
      function bnpFromNumber(a, b, c) {
        var self = this;
        if ("number" == typeof b) {
          // new BigInteger(int,int,RNG)
          if (a < 2) self.fromInt(1);else {
            self.fromNumber(a, c);
            if (!self.testBit(a - 1)) // force MSB set
              self.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, self);
            if (self.isEven()) self.dAddOffset(1, 0); // force odd
            while (!self.isProbablePrime(b)) {
              self.dAddOffset(2, 0);
              if (self.bitLength() > a) self.subTo(BigInteger.ONE.shiftLeft(a - 1), self);
            }
          }
        } else {
          // new BigInteger(int,RNG)
          var x = new Array(),
              t = a & 7;
          x.length = (a >> 3) + 1;
          b.nextBytes(x);
          if (t > 0) x[0] &= (1 << t) - 1;else x[0] = 0;
          self.fromString(x, 256);
        }
      }

      // (public) convert to bigendian byte array
      function bnToByteArray() {
        var self = this;
        var i = self.t,
            r = new Array();
        r[0] = self.s;
        var p = self.DB - i * self.DB % 8,
            d,
            k = 0;
        if (i-- > 0) {
          if (p < self.DB && (d = self[i] >> p) != (self.s & self.DM) >> p) r[k++] = d | self.s << self.DB - p;
          while (i >= 0) {
            if (p < 8) {
              d = (self[i] & (1 << p) - 1) << 8 - p;
              d |= self[--i] >> (p += self.DB - 8);
            } else {
              d = self[i] >> (p -= 8) & 0xff;
              if (p <= 0) {
                p += self.DB;
                --i;
              }
            }
            if ((d & 0x80) != 0) d |= -256;
            if (k === 0 && (self.s & 0x80) != (d & 0x80)) ++k;
            if (k > 0 || d != self.s) r[k++] = d;
          }
        }
        return r;
      }

      function bnEquals(a) {
        return this.compareTo(a) == 0;
      }

      function bnMin(a) {
        return this.compareTo(a) < 0 ? this : a;
      }

      function bnMax(a) {
        return this.compareTo(a) > 0 ? this : a;
      }

      // (protected) r = this op a (bitwise)
      function bnpBitwiseTo(a, op, r) {
        var self = this;
        var i,
            f,
            m = Math.min(a.t, self.t);
        for (i = 0; i < m; ++i) r[i] = op(self[i], a[i]);
        if (a.t < self.t) {
          f = a.s & self.DM;
          for (i = m; i < self.t; ++i) r[i] = op(self[i], f);
          r.t = self.t;
        } else {
          f = self.s & self.DM;
          for (i = m; i < a.t; ++i) r[i] = op(f, a[i]);
          r.t = a.t;
        }
        r.s = op(self.s, a.s);
        r.clamp();
      }

      // (public) this & a
      function op_and(x, y) {
        return x & y;
      }

      function bnAnd(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_and, r);
        return r;
      }

      // (public) this | a
      function op_or(x, y) {
        return x | y;
      }

      function bnOr(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_or, r);
        return r;
      }

      // (public) this ^ a
      function op_xor(x, y) {
        return x ^ y;
      }

      function bnXor(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_xor, r);
        return r;
      }

      // (public) this & ~a
      function op_andnot(x, y) {
        return x & ~y;
      }

      function bnAndNot(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_andnot, r);
        return r;
      }

      // (public) ~this
      function bnNot() {
        var r = new BigInteger();
        for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
        r.t = this.t;
        r.s = ~this.s;
        return r;
      }

      // (public) this << n
      function bnShiftLeft(n) {
        var r = new BigInteger();
        if (n < 0) this.rShiftTo(-n, r);else this.lShiftTo(n, r);
        return r;
      }

      // (public) this >> n
      function bnShiftRight(n) {
        var r = new BigInteger();
        if (n < 0) this.lShiftTo(-n, r);else this.rShiftTo(n, r);
        return r;
      }

      // return index of lowest 1-bit in x, x < 2^31
      function lbit(x) {
        if (x == 0) return -1;
        var r = 0;
        if ((x & 0xffff) == 0) {
          x >>= 16;
          r += 16;
        }
        if ((x & 0xff) == 0) {
          x >>= 8;
          r += 8;
        }
        if ((x & 0xf) == 0) {
          x >>= 4;
          r += 4;
        }
        if ((x & 3) == 0) {
          x >>= 2;
          r += 2;
        }
        if ((x & 1) == 0) ++r;
        return r;
      }

      // (public) returns index of lowest 1-bit (or -1 if none)
      function bnGetLowestSetBit() {
        for (var i = 0; i < this.t; ++i) if (this[i] != 0) return i * this.DB + lbit(this[i]);
        if (this.s < 0) return this.t * this.DB;
        return -1;
      }

      // return number of 1 bits in x
      function cbit(x) {
        var r = 0;
        while (x != 0) {
          x &= x - 1;
          ++r;
        }
        return r;
      }

      // (public) return number of set bits
      function bnBitCount() {
        var r = 0,
            x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
        return r;
      }

      // (public) true iff nth bit is set
      function bnTestBit(n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t) return this.s != 0;
        return (this[j] & 1 << n % this.DB) != 0;
      }

      // (protected) this op (1<<n)
      function bnpChangeBit(n, op) {
        var r = BigInteger.ONE.shiftLeft(n);
        this.bitwiseTo(r, op, r);
        return r;
      }

      // (public) this | (1<<n)
      function bnSetBit(n) {
        return this.changeBit(n, op_or);
      }

      // (public) this & ~(1<<n)
      function bnClearBit(n) {
        return this.changeBit(n, op_andnot);
      }

      // (public) this ^ (1<<n)
      function bnFlipBit(n) {
        return this.changeBit(n, op_xor);
      }

      // (protected) r = this + a
      function bnpAddTo(a, r) {
        var self = this;

        var i = 0,
            c = 0,
            m = Math.min(a.t, self.t);
        while (i < m) {
          c += self[i] + a[i];
          r[i++] = c & self.DM;
          c >>= self.DB;
        }
        if (a.t < self.t) {
          c += a.s;
          while (i < self.t) {
            c += self[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c += self.s;
        } else {
          c += self.s;
          while (i < a.t) {
            c += a[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c += a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c > 0) r[i++] = c;else if (c < -1) r[i++] = self.DV + c;
        r.t = i;
        r.clamp();
      }

      // (public) this + a
      function bnAdd(a) {
        var r = new BigInteger();
        this.addTo(a, r);
        return r;
      }

      // (public) this - a
      function bnSubtract(a) {
        var r = new BigInteger();
        this.subTo(a, r);
        return r;
      }

      // (public) this * a
      function bnMultiply(a) {
        var r = new BigInteger();
        this.multiplyTo(a, r);
        return r;
      }

      // (public) this^2
      function bnSquare() {
        var r = new BigInteger();
        this.squareTo(r);
        return r;
      }

      // (public) this / a
      function bnDivide(a) {
        var r = new BigInteger();
        this.divRemTo(a, r, null);
        return r;
      }

      // (public) this % a
      function bnRemainder(a) {
        var r = new BigInteger();
        this.divRemTo(a, null, r);
        return r;
      }

      // (public) [this/a,this%a]
      function bnDivideAndRemainder(a) {
        var q = new BigInteger(),
            r = new BigInteger();
        this.divRemTo(a, q, r);
        return new Array(q, r);
      }

      // (protected) this *= n, this >= 0, 1 < n < DV
      function bnpDMultiply(n) {
        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp();
      }

      // (protected) this += n << w words, this >= 0
      function bnpDAddOffset(n, w) {
        if (n == 0) return;
        while (this.t <= w) this[this.t++] = 0;
        this[w] += n;
        while (this[w] >= this.DV) {
          this[w] -= this.DV;
          if (++w >= this.t) this[this.t++] = 0;
          ++this[w];
        }
      }

      // A "null" reducer
      function NullExp() {}

      function nNop(x) {
        return x;
      }

      function nMulTo(x, y, r) {
        x.multiplyTo(y, r);
      }

      function nSqrTo(x, r) {
        x.squareTo(r);
      }

      NullExp.prototype.convert = nNop;
      NullExp.prototype.revert = nNop;
      NullExp.prototype.mulTo = nMulTo;
      NullExp.prototype.sqrTo = nSqrTo;

      // (public) this^e
      function bnPow(e) {
        return this.exp(e, new NullExp());
      }

      // (protected) r = lower n words of "this * a", a.t <= n
      // "this" should be the larger one if appropriate.
      function bnpMultiplyLowerTo(a, n, r) {
        var i = Math.min(this.t + a.t, n);
        r.s = 0; // assumes a,this >= 0
        r.t = i;
        while (i > 0) r[--i] = 0;
        var j;
        for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
        for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i);
        r.clamp();
      }

      // (protected) r = "this * a" without lower n words, n > 0
      // "this" should be the larger one if appropriate.
      function bnpMultiplyUpperTo(a, n, r) {
        --n;
        var i = r.t = this.t + a.t - n;
        r.s = 0; // assumes a,this >= 0
        while (--i >= 0) r[i] = 0;
        for (i = Math.max(n - this.t, 0); i < a.t; ++i) r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
        r.clamp();
        r.drShiftTo(1, r);
      }

      // Barrett modular reduction
      function Barrett(m) {
        // setup Barrett
        this.r2 = new BigInteger();
        this.q3 = new BigInteger();
        BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
        this.mu = this.r2.divide(m);
        this.m = m;
      }

      function barrettConvert(x) {
        if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);else if (x.compareTo(this.m) < 0) return x;else {
          var r = new BigInteger();
          x.copyTo(r);
          this.reduce(r);
          return r;
        }
      }

      function barrettRevert(x) {
        return x;
      }

      // x = x mod m (HAC 14.42)
      function barrettReduce(x) {
        var self = this;
        x.drShiftTo(self.m.t - 1, self.r2);
        if (x.t > self.m.t + 1) {
          x.t = self.m.t + 1;
          x.clamp();
        }
        self.mu.multiplyUpperTo(self.r2, self.m.t + 1, self.q3);
        self.m.multiplyLowerTo(self.q3, self.m.t + 1, self.r2);
        while (x.compareTo(self.r2) < 0) x.dAddOffset(1, self.m.t + 1);
        x.subTo(self.r2, x);
        while (x.compareTo(self.m) >= 0) x.subTo(self.m, x);
      }

      // r = x^2 mod m; x != r
      function barrettSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }

      // r = x*y mod m; x,y != r
      function barrettMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }

      Barrett.prototype.convert = barrettConvert;
      Barrett.prototype.revert = barrettRevert;
      Barrett.prototype.reduce = barrettReduce;
      Barrett.prototype.mulTo = barrettMulTo;
      Barrett.prototype.sqrTo = barrettSqrTo;

      // (public) this^e % m (HAC 14.85)
      function bnModPow(e, m) {
        var i = e.bitLength(),
            k,
            r = nbv(1),
            z;
        if (i <= 0) return r;else if (i < 18) k = 1;else if (i < 48) k = 3;else if (i < 144) k = 4;else if (i < 768) k = 5;else k = 6;
        if (i < 8) z = new Classic(m);else if (m.isEven()) z = new Barrett(m);else z = new Montgomery(m);

        // precomputation
        var g = new Array(),
            n = 3,
            k1 = k - 1,
            km = (1 << k) - 1;
        g[1] = z.convert(this);
        if (k > 1) {
          var g2 = new BigInteger();
          z.sqrTo(g[1], g2);
          while (n <= km) {
            g[n] = new BigInteger();
            z.mulTo(g2, g[n - 2], g[n]);
            n += 2;
          }
        }

        var j = e.t - 1,
            w,
            is1 = true,
            r2 = new BigInteger(),
            t;
        i = nbits(e[j]) - 1;
        while (j >= 0) {
          if (i >= k1) w = e[j] >> i - k1 & km;else {
            w = (e[j] & (1 << i + 1) - 1) << k1 - i;
            if (j > 0) w |= e[j - 1] >> this.DB + i - k1;
          }

          n = k;
          while ((w & 1) == 0) {
            w >>= 1;
            --n;
          }
          if ((i -= n) < 0) {
            i += this.DB;
            --j;
          }
          if (is1) {
            // ret == 1, don't bother squaring or multiplying it
            g[w].copyTo(r);
            is1 = false;
          } else {
            while (n > 1) {
              z.sqrTo(r, r2);
              z.sqrTo(r2, r);
              n -= 2;
            }
            if (n > 0) z.sqrTo(r, r2);else {
              t = r;
              r = r2;
              r2 = t;
            }
            z.mulTo(r2, g[w], r);
          }

          while (j >= 0 && (e[j] & 1 << i) == 0) {
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
              i = this.DB - 1;
              --j;
            }
          }
        }
        return z.revert(r);
      }

      // (public) gcd(this,a) (HAC 14.54)
      function bnGCD(a) {
        var x = this.s < 0 ? this.negate() : this.clone();
        var y = a.s < 0 ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
          var t = x;
          x = y;
          y = t;
        }
        var i = x.getLowestSetBit(),
            g = y.getLowestSetBit();
        if (g < 0) return x;
        if (i < g) g = i;
        if (g > 0) {
          x.rShiftTo(g, x);
          y.rShiftTo(g, y);
        }
        while (x.signum() > 0) {
          if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
          if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
          if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x);
          } else {
            y.subTo(x, y);
            y.rShiftTo(1, y);
          }
        }
        if (g > 0) y.lShiftTo(g, y);
        return y;
      }

      // (protected) this % n, n < 2^26
      function bnpModInt(n) {
        if (n <= 0) return 0;
        var d = this.DV % n,
            r = this.s < 0 ? n - 1 : 0;
        if (this.t > 0) if (d == 0) r = this[0] % n;else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
        return r;
      }

      // (public) 1/this % m (HAC 14.61)
      function bnModInverse(m) {
        var ac = m.isEven();
        if (this.signum() === 0) throw new Error('division by zero');
        if (this.isEven() && ac || m.signum() == 0) return BigInteger.ZERO;
        var u = m.clone(),
            v = this.clone();
        var a = nbv(1),
            b = nbv(0),
            c = nbv(0),
            d = nbv(1);
        while (u.signum() != 0) {
          while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
              if (!a.isEven() || !b.isEven()) {
                a.addTo(this, a);
                b.subTo(m, b);
              }
              a.rShiftTo(1, a);
            } else if (!b.isEven()) b.subTo(m, b);
            b.rShiftTo(1, b);
          }
          while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
              if (!c.isEven() || !d.isEven()) {
                c.addTo(this, c);
                d.subTo(m, d);
              }
              c.rShiftTo(1, c);
            } else if (!d.isEven()) d.subTo(m, d);
            d.rShiftTo(1, d);
          }
          if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac) a.subTo(c, a);
            b.subTo(d, b);
          } else {
            v.subTo(u, v);
            if (ac) c.subTo(a, c);
            d.subTo(b, d);
          }
        }
        if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
        while (d.compareTo(m) >= 0) d.subTo(m, d);
        while (d.signum() < 0) d.addTo(m, d);
        return d;
      }

      var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];

      var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];

      // (public) test primality with certainty >= 1-.5^t
      function bnIsProbablePrime(t) {
        var i,
            x = this.abs();
        if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
          for (i = 0; i < lowprimes.length; ++i) if (x[0] == lowprimes[i]) return true;
          return false;
        }
        if (x.isEven()) return false;
        i = 1;
        while (i < lowprimes.length) {
          var m = lowprimes[i],
              j = i + 1;
          while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
          m = x.modInt(m);
          while (i < j) if (m % lowprimes[i++] == 0) return false;
        }
        return x.millerRabin(t);
      }

      // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
      function bnpMillerRabin(t) {
        var n1 = this.subtract(BigInteger.ONE);
        var k = n1.getLowestSetBit();
        if (k <= 0) return false;
        var r = n1.shiftRight(k);
        t = t + 1 >> 1;
        if (t > lowprimes.length) t = lowprimes.length;
        var a = new BigInteger(null);
        var j,
            bases = [];
        for (var i = 0; i < t; ++i) {
          for (;;) {
            j = lowprimes[Math.floor(Math.random() * lowprimes.length)];
            if (bases.indexOf(j) == -1) break;
          }
          bases.push(j);
          a.fromInt(j);
          var y = a.modPow(r, this);
          if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
              y = y.modPowInt(2, this);
              if (y.compareTo(BigInteger.ONE) == 0) return false;
            }
            if (y.compareTo(n1) != 0) return false;
          }
        }
        return true;
      }

      // protected
      proto.chunkSize = bnpChunkSize;
      proto.toRadix = bnpToRadix;
      proto.fromRadix = bnpFromRadix;
      proto.fromNumber = bnpFromNumber;
      proto.bitwiseTo = bnpBitwiseTo;
      proto.changeBit = bnpChangeBit;
      proto.addTo = bnpAddTo;
      proto.dMultiply = bnpDMultiply;
      proto.dAddOffset = bnpDAddOffset;
      proto.multiplyLowerTo = bnpMultiplyLowerTo;
      proto.multiplyUpperTo = bnpMultiplyUpperTo;
      proto.modInt = bnpModInt;
      proto.millerRabin = bnpMillerRabin;

      // public
      proto.clone = bnClone;
      proto.intValue = bnIntValue;
      proto.byteValue = bnByteValue;
      proto.shortValue = bnShortValue;
      proto.signum = bnSigNum;
      proto.toByteArray = bnToByteArray;
      proto.equals = bnEquals;
      proto.min = bnMin;
      proto.max = bnMax;
      proto.and = bnAnd;
      proto.or = bnOr;
      proto.xor = bnXor;
      proto.andNot = bnAndNot;
      proto.not = bnNot;
      proto.shiftLeft = bnShiftLeft;
      proto.shiftRight = bnShiftRight;
      proto.getLowestSetBit = bnGetLowestSetBit;
      proto.bitCount = bnBitCount;
      proto.testBit = bnTestBit;
      proto.setBit = bnSetBit;
      proto.clearBit = bnClearBit;
      proto.flipBit = bnFlipBit;
      proto.add = bnAdd;
      proto.subtract = bnSubtract;
      proto.multiply = bnMultiply;
      proto.divide = bnDivide;
      proto.remainder = bnRemainder;
      proto.divideAndRemainder = bnDivideAndRemainder;
      proto.modPow = bnModPow;
      proto.modInverse = bnModInverse;
      proto.pow = bnPow;
      proto.gcd = bnGCD;
      proto.isProbablePrime = bnIsProbablePrime;

      // JSBN-specific extension
      proto.square = bnSquare;

      // constants
      BigInteger.ZERO = nbv(0);
      BigInteger.ONE = nbv(1);
      BigInteger.valueOf = nbv;

      module.exports = BigInteger;
    }, { "../package.json": 8 }], 6: [function (require, module, exports) {
      (function (Buffer) {
        // FIXME: Kind of a weird way to throw exceptions, consider removing
        var assert = require('assert');
        var BigInteger = require('./bigi');

        /**
         * Turns a byte array into a big integer.
         *
         * This function will interpret a byte array as a big integer in big
         * endian notation.
         */
        BigInteger.fromByteArrayUnsigned = function (byteArray) {
          // BigInteger expects a DER integer conformant byte array
          if (byteArray[0] & 0x80) {
            return new BigInteger([0].concat(byteArray));
          }

          return new BigInteger(byteArray);
        };

        /**
         * Returns a byte array representation of the big integer.
         *
         * This returns the absolute of the contained value in big endian
         * form. A value of zero results in an empty array.
         */
        BigInteger.prototype.toByteArrayUnsigned = function () {
          var byteArray = this.toByteArray();
          return byteArray[0] === 0 ? byteArray.slice(1) : byteArray;
        };

        BigInteger.fromDERInteger = function (byteArray) {
          return new BigInteger(byteArray);
        };

        /*
         * Converts BigInteger to a DER integer representation.
         *
         * The format for this value uses the most significant bit as a sign
         * bit.  If the most significant bit is already set and the integer is
         * positive, a 0x00 is prepended.
         *
         * Examples:
         *
         *      0 =>     0x00
         *      1 =>     0x01
         *     -1 =>     0xff
         *    127 =>     0x7f
         *   -127 =>     0x81
         *    128 =>   0x0080
         *   -128 =>     0x80
         *    255 =>   0x00ff
         *   -255 =>   0xff01
         *  16300 =>   0x3fac
         * -16300 =>   0xc054
         *  62300 => 0x00f35c
         * -62300 => 0xff0ca4
        */
        BigInteger.prototype.toDERInteger = BigInteger.prototype.toByteArray;

        BigInteger.fromBuffer = function (buffer) {
          // BigInteger expects a DER integer conformant byte array
          if (buffer[0] & 0x80) {
            var byteArray = Array.prototype.slice.call(buffer);

            return new BigInteger([0].concat(byteArray));
          }

          return new BigInteger(buffer);
        };

        BigInteger.fromHex = function (hex) {
          if (hex === '') return BigInteger.ZERO;

          assert.equal(hex, hex.match(/^[A-Fa-f0-9]+/), 'Invalid hex string');
          assert.equal(hex.length % 2, 0, 'Incomplete hex');
          return new BigInteger(hex, 16);
        };

        BigInteger.prototype.toBuffer = function (size) {
          var byteArray = this.toByteArrayUnsigned();
          var zeros = [];

          var padding = size - byteArray.length;
          while (zeros.length < padding) zeros.push(0);

          return new Buffer(zeros.concat(byteArray));
        };

        BigInteger.prototype.toHex = function (size) {
          return this.toBuffer(size).toString('hex');
        };
      }).call(this, require("buffer").Buffer);
    }, { "./bigi": 5, "assert": 2, "buffer": 27 }], 7: [function (require, module, exports) {
      var BigInteger = require('./bigi');

      //addons
      require('./convert');

      module.exports = BigInteger;
    }, { "./bigi": 5, "./convert": 6 }], 8: [function (require, module, exports) {
      module.exports = {
        "_from": "bigi@^1.4.2",
        "_id": "bigi@1.4.2",
        "_inBundle": false,
        "_integrity": "sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=",
        "_location": "/bigi",
        "_phantomChildren": {},
        "_requested": {
          "type": "range",
          "registry": true,
          "raw": "bigi@^1.4.2",
          "name": "bigi",
          "escapedName": "bigi",
          "rawSpec": "^1.4.2",
          "saveSpec": null,
          "fetchSpec": "^1.4.2"
        },
        "_requiredBy": ["/", "/ecurve"],
        "_resolved": "https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz",
        "_shasum": "9c665a95f88b8b08fc05cfd731f561859d725825",
        "_spec": "bigi@^1.4.2",
        "_where": "/Users/dskvr/Sites/block.one/ecc",
        "bugs": {
          "url": "https://github.com/cryptocoinjs/bigi/issues"
        },
        "bundleDependencies": false,
        "dependencies": {},
        "deprecated": false,
        "description": "Big integers.",
        "devDependencies": {
          "coveralls": "^2.11.2",
          "istanbul": "^0.3.5",
          "jshint": "^2.5.1",
          "mocha": "^2.1.0",
          "mochify": "^2.1.0"
        },
        "homepage": "https://github.com/cryptocoinjs/bigi#readme",
        "keywords": ["cryptography", "math", "bitcoin", "arbitrary", "precision", "arithmetic", "big", "integer", "int", "number", "biginteger", "bigint", "bignumber", "decimal", "float"],
        "main": "./lib/index.js",
        "name": "bigi",
        "repository": {
          "url": "git+https://github.com/cryptocoinjs/bigi.git",
          "type": "git"
        },
        "scripts": {
          "browser-test": "mochify --wd -R spec",
          "coverage": "istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",
          "coveralls": "npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info",
          "jshint": "jshint --config jshint.json lib/*.js ; true",
          "test": "_mocha -- test/*.js",
          "unit": "mocha"
        },
        "testling": {
          "files": "test/*.js",
          "harness": "mocha",
          "browsers": ["ie/9..latest", "firefox/latest", "chrome/latest", "safari/6.0..latest", "iphone/6.0..latest", "android-browser/4.2..latest"]
        },
        "version": "1.4.2"
      };
    }, {}], 9: [function (require, module, exports) {}, {}], 10: [function (require, module, exports) {
      (function (Buffer) {
        // based on the aes implimentation in triple sec
        // https://github.com/keybase/triplesec

        // which is in turn based on the one from crypto-js
        // https://code.google.com/p/crypto-js/

        var uint_max = Math.pow(2, 32);
        function fixup_uint32(x) {
          var ret, x_pos;
          ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x;
          return ret;
        }
        function scrub_vec(v) {
          for (var i = 0; i < v.length; v++) {
            v[i] = 0;
          }
          return false;
        }

        function Global() {
          this.SBOX = [];
          this.INV_SBOX = [];
          this.SUB_MIX = [[], [], [], []];
          this.INV_SUB_MIX = [[], [], [], []];
          this.init();
          this.RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
        }

        Global.prototype.init = function () {
          var d, i, sx, t, x, x2, x4, x8, xi, _i;
          d = function () {
            var _i, _results;
            _results = [];
            for (i = _i = 0; _i < 256; i = ++_i) {
              if (i < 128) {
                _results.push(i << 1);
              } else {
                _results.push(i << 1 ^ 0x11b);
              }
            }
            return _results;
          }();
          x = 0;
          xi = 0;
          for (i = _i = 0; _i < 256; i = ++_i) {
            sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
            sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
            this.SBOX[x] = sx;
            this.INV_SBOX[sx] = x;
            x2 = d[x];
            x4 = d[x2];
            x8 = d[x4];
            t = d[sx] * 0x101 ^ sx * 0x1010100;
            this.SUB_MIX[0][x] = t << 24 | t >>> 8;
            this.SUB_MIX[1][x] = t << 16 | t >>> 16;
            this.SUB_MIX[2][x] = t << 8 | t >>> 24;
            this.SUB_MIX[3][x] = t;
            t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
            this.INV_SUB_MIX[0][sx] = t << 24 | t >>> 8;
            this.INV_SUB_MIX[1][sx] = t << 16 | t >>> 16;
            this.INV_SUB_MIX[2][sx] = t << 8 | t >>> 24;
            this.INV_SUB_MIX[3][sx] = t;
            if (x === 0) {
              x = xi = 1;
            } else {
              x = x2 ^ d[d[d[x8 ^ x2]]];
              xi ^= d[d[xi]];
            }
          }
          return true;
        };

        var G = new Global();

        AES.blockSize = 4 * 4;

        AES.prototype.blockSize = AES.blockSize;

        AES.keySize = 256 / 8;

        AES.prototype.keySize = AES.keySize;

        function bufferToArray(buf) {
          var len = buf.length / 4;
          var out = new Array(len);
          var i = -1;
          while (++i < len) {
            out[i] = buf.readUInt32BE(i * 4);
          }
          return out;
        }
        function AES(key) {
          this._key = bufferToArray(key);
          this._doReset();
        }

        AES.prototype._doReset = function () {
          var invKsRow, keySize, keyWords, ksRow, ksRows, t;
          keyWords = this._key;
          keySize = keyWords.length;
          this._nRounds = keySize + 6;
          ksRows = (this._nRounds + 1) * 4;
          this._keySchedule = [];
          for (ksRow = 0; ksRow < ksRows; ksRow++) {
            this._keySchedule[ksRow] = ksRow < keySize ? keyWords[ksRow] : (t = this._keySchedule[ksRow - 1], ksRow % keySize === 0 ? (t = t << 8 | t >>> 24, t = G.SBOX[t >>> 24] << 24 | G.SBOX[t >>> 16 & 0xff] << 16 | G.SBOX[t >>> 8 & 0xff] << 8 | G.SBOX[t & 0xff], t ^= G.RCON[ksRow / keySize | 0] << 24) : keySize > 6 && ksRow % keySize === 4 ? t = G.SBOX[t >>> 24] << 24 | G.SBOX[t >>> 16 & 0xff] << 16 | G.SBOX[t >>> 8 & 0xff] << 8 | G.SBOX[t & 0xff] : void 0, this._keySchedule[ksRow - keySize] ^ t);
          }
          this._invKeySchedule = [];
          for (invKsRow = 0; invKsRow < ksRows; invKsRow++) {
            ksRow = ksRows - invKsRow;
            t = this._keySchedule[ksRow - (invKsRow % 4 ? 0 : 4)];
            this._invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : G.INV_SUB_MIX[0][G.SBOX[t >>> 24]] ^ G.INV_SUB_MIX[1][G.SBOX[t >>> 16 & 0xff]] ^ G.INV_SUB_MIX[2][G.SBOX[t >>> 8 & 0xff]] ^ G.INV_SUB_MIX[3][G.SBOX[t & 0xff]];
          }
          return true;
        };

        AES.prototype.encryptBlock = function (M) {
          M = bufferToArray(new Buffer(M));
          var out = this._doCryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX);
          var buf = new Buffer(16);
          buf.writeUInt32BE(out[0], 0);
          buf.writeUInt32BE(out[1], 4);
          buf.writeUInt32BE(out[2], 8);
          buf.writeUInt32BE(out[3], 12);
          return buf;
        };

        AES.prototype.decryptBlock = function (M) {
          M = bufferToArray(new Buffer(M));
          var temp = [M[3], M[1]];
          M[1] = temp[0];
          M[3] = temp[1];
          var out = this._doCryptBlock(M, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX);
          var buf = new Buffer(16);
          buf.writeUInt32BE(out[0], 0);
          buf.writeUInt32BE(out[3], 4);
          buf.writeUInt32BE(out[2], 8);
          buf.writeUInt32BE(out[1], 12);
          return buf;
        };

        AES.prototype.scrub = function () {
          scrub_vec(this._keySchedule);
          scrub_vec(this._invKeySchedule);
          scrub_vec(this._key);
        };

        AES.prototype._doCryptBlock = function (M, keySchedule, SUB_MIX, SBOX) {
          var ksRow, s0, s1, s2, s3, t0, t1, t2, t3;

          s0 = M[0] ^ keySchedule[0];
          s1 = M[1] ^ keySchedule[1];
          s2 = M[2] ^ keySchedule[2];
          s3 = M[3] ^ keySchedule[3];
          ksRow = 4;
          for (var round = 1; round < this._nRounds; round++) {
            t0 = SUB_MIX[0][s0 >>> 24] ^ SUB_MIX[1][s1 >>> 16 & 0xff] ^ SUB_MIX[2][s2 >>> 8 & 0xff] ^ SUB_MIX[3][s3 & 0xff] ^ keySchedule[ksRow++];
            t1 = SUB_MIX[0][s1 >>> 24] ^ SUB_MIX[1][s2 >>> 16 & 0xff] ^ SUB_MIX[2][s3 >>> 8 & 0xff] ^ SUB_MIX[3][s0 & 0xff] ^ keySchedule[ksRow++];
            t2 = SUB_MIX[0][s2 >>> 24] ^ SUB_MIX[1][s3 >>> 16 & 0xff] ^ SUB_MIX[2][s0 >>> 8 & 0xff] ^ SUB_MIX[3][s1 & 0xff] ^ keySchedule[ksRow++];
            t3 = SUB_MIX[0][s3 >>> 24] ^ SUB_MIX[1][s0 >>> 16 & 0xff] ^ SUB_MIX[2][s1 >>> 8 & 0xff] ^ SUB_MIX[3][s2 & 0xff] ^ keySchedule[ksRow++];
            s0 = t0;
            s1 = t1;
            s2 = t2;
            s3 = t3;
          }
          t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
          t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
          t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
          t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
          return [fixup_uint32(t0), fixup_uint32(t1), fixup_uint32(t2), fixup_uint32(t3)];
        };

        exports.AES = AES;
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27 }], 11: [function (require, module, exports) {
      (function (Buffer) {
        var aes = require('./aes');
        var Transform = require('cipher-base');
        var inherits = require('inherits');
        var GHASH = require('./ghash');
        var xor = require('buffer-xor');
        inherits(StreamCipher, Transform);
        module.exports = StreamCipher;

        function StreamCipher(mode, key, iv, decrypt) {
          if (!(this instanceof StreamCipher)) {
            return new StreamCipher(mode, key, iv);
          }
          Transform.call(this);
          this._finID = Buffer.concat([iv, new Buffer([0, 0, 0, 1])]);
          iv = Buffer.concat([iv, new Buffer([0, 0, 0, 2])]);
          this._cipher = new aes.AES(key);
          this._prev = new Buffer(iv.length);
          this._cache = new Buffer('');
          this._secCache = new Buffer('');
          this._decrypt = decrypt;
          this._alen = 0;
          this._len = 0;
          iv.copy(this._prev);
          this._mode = mode;
          var h = new Buffer(4);
          h.fill(0);
          this._ghash = new GHASH(this._cipher.encryptBlock(h));
          this._authTag = null;
          this._called = false;
        }
        StreamCipher.prototype._update = function (chunk) {
          if (!this._called && this._alen) {
            var rump = 16 - this._alen % 16;
            if (rump < 16) {
              rump = new Buffer(rump);
              rump.fill(0);
              this._ghash.update(rump);
            }
          }
          this._called = true;
          var out = this._mode.encrypt(this, chunk);
          if (this._decrypt) {
            this._ghash.update(chunk);
          } else {
            this._ghash.update(out);
          }
          this._len += chunk.length;
          return out;
        };
        StreamCipher.prototype._final = function () {
          if (this._decrypt && !this._authTag) {
            throw new Error('Unsupported state or unable to authenticate data');
          }
          var tag = xor(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
          if (this._decrypt) {
            if (xorTest(tag, this._authTag)) {
              throw new Error('Unsupported state or unable to authenticate data');
            }
          } else {
            this._authTag = tag;
          }
          this._cipher.scrub();
        };
        StreamCipher.prototype.getAuthTag = function getAuthTag() {
          if (!this._decrypt && Buffer.isBuffer(this._authTag)) {
            return this._authTag;
          } else {
            throw new Error('Attempting to get auth tag in unsupported state');
          }
        };
        StreamCipher.prototype.setAuthTag = function setAuthTag(tag) {
          if (this._decrypt) {
            this._authTag = tag;
          } else {
            throw new Error('Attempting to set auth tag in unsupported state');
          }
        };
        StreamCipher.prototype.setAAD = function setAAD(buf) {
          if (!this._called) {
            this._ghash.update(buf);
            this._alen += buf.length;
          } else {
            throw new Error('Attempting to set AAD in unsupported state');
          }
        };
        function xorTest(a, b) {
          var out = 0;
          if (a.length !== b.length) {
            out++;
          }
          var len = Math.min(a.length, b.length);
          var i = -1;
          while (++i < len) {
            out += a[i] ^ b[i];
          }
          return out;
        }
      }).call(this, require("buffer").Buffer);
    }, { "./aes": 10, "./ghash": 15, "buffer": 27, "buffer-xor": 26, "cipher-base": 29, "inherits": 45 }], 12: [function (require, module, exports) {
      var ciphers = require('./encrypter');
      exports.createCipher = exports.Cipher = ciphers.createCipher;
      exports.createCipheriv = exports.Cipheriv = ciphers.createCipheriv;
      var deciphers = require('./decrypter');
      exports.createDecipher = exports.Decipher = deciphers.createDecipher;
      exports.createDecipheriv = exports.Decipheriv = deciphers.createDecipheriv;
      var modes = require('./modes');
      function getCiphers() {
        return Object.keys(modes);
      }
      exports.listCiphers = exports.getCiphers = getCiphers;
    }, { "./decrypter": 13, "./encrypter": 14, "./modes": 16 }], 13: [function (require, module, exports) {
      (function (Buffer) {
        var aes = require('./aes');
        var Transform = require('cipher-base');
        var inherits = require('inherits');
        var modes = require('./modes');
        var StreamCipher = require('./streamCipher');
        var AuthCipher = require('./authCipher');
        var ebtk = require('evp_bytestokey');

        inherits(Decipher, Transform);
        function Decipher(mode, key, iv) {
          if (!(this instanceof Decipher)) {
            return new Decipher(mode, key, iv);
          }
          Transform.call(this);
          this._cache = new Splitter();
          this._last = void 0;
          this._cipher = new aes.AES(key);
          this._prev = new Buffer(iv.length);
          iv.copy(this._prev);
          this._mode = mode;
          this._autopadding = true;
        }
        Decipher.prototype._update = function (data) {
          this._cache.add(data);
          var chunk;
          var thing;
          var out = [];
          while (chunk = this._cache.get(this._autopadding)) {
            thing = this._mode.decrypt(this, chunk);
            out.push(thing);
          }
          return Buffer.concat(out);
        };
        Decipher.prototype._final = function () {
          var chunk = this._cache.flush();
          if (this._autopadding) {
            return unpad(this._mode.decrypt(this, chunk));
          } else if (chunk) {
            throw new Error('data not multiple of block length');
          }
        };
        Decipher.prototype.setAutoPadding = function (setTo) {
          this._autopadding = !!setTo;
          return this;
        };
        function Splitter() {
          if (!(this instanceof Splitter)) {
            return new Splitter();
          }
          this.cache = new Buffer('');
        }
        Splitter.prototype.add = function (data) {
          this.cache = Buffer.concat([this.cache, data]);
        };

        Splitter.prototype.get = function (autoPadding) {
          var out;
          if (autoPadding) {
            if (this.cache.length > 16) {
              out = this.cache.slice(0, 16);
              this.cache = this.cache.slice(16);
              return out;
            }
          } else {
            if (this.cache.length >= 16) {
              out = this.cache.slice(0, 16);
              this.cache = this.cache.slice(16);
              return out;
            }
          }
          return null;
        };
        Splitter.prototype.flush = function () {
          if (this.cache.length) {
            return this.cache;
          }
        };
        function unpad(last) {
          var padded = last[15];
          var i = -1;
          while (++i < padded) {
            if (last[i + (16 - padded)] !== padded) {
              throw new Error('unable to decrypt data');
            }
          }
          if (padded === 16) {
            return;
          }
          return last.slice(0, 16 - padded);
        }

        var modelist = {
          ECB: require('./modes/ecb'),
          CBC: require('./modes/cbc'),
          CFB: require('./modes/cfb'),
          CFB8: require('./modes/cfb8'),
          CFB1: require('./modes/cfb1'),
          OFB: require('./modes/ofb'),
          CTR: require('./modes/ctr'),
          GCM: require('./modes/ctr')
        };

        function createDecipheriv(suite, password, iv) {
          var config = modes[suite.toLowerCase()];
          if (!config) {
            throw new TypeError('invalid suite type');
          }
          if (typeof iv === 'string') {
            iv = new Buffer(iv);
          }
          if (typeof password === 'string') {
            password = new Buffer(password);
          }
          if (password.length !== config.key / 8) {
            throw new TypeError('invalid key length ' + password.length);
          }
          if (iv.length !== config.iv) {
            throw new TypeError('invalid iv length ' + iv.length);
          }
          if (config.type === 'stream') {
            return new StreamCipher(modelist[config.mode], password, iv, true);
          } else if (config.type === 'auth') {
            return new AuthCipher(modelist[config.mode], password, iv, true);
          }
          return new Decipher(modelist[config.mode], password, iv);
        }

        function createDecipher(suite, password) {
          var config = modes[suite.toLowerCase()];
          if (!config) {
            throw new TypeError('invalid suite type');
          }
          var keys = ebtk(password, false, config.key, config.iv);
          return createDecipheriv(suite, keys.key, keys.iv);
        }
        exports.createDecipher = createDecipher;
        exports.createDecipheriv = createDecipheriv;
      }).call(this, require("buffer").Buffer);
    }, { "./aes": 10, "./authCipher": 11, "./modes": 16, "./modes/cbc": 17, "./modes/cfb": 18, "./modes/cfb1": 19, "./modes/cfb8": 20, "./modes/ctr": 21, "./modes/ecb": 22, "./modes/ofb": 23, "./streamCipher": 24, "buffer": 27, "cipher-base": 29, "evp_bytestokey": 42, "inherits": 45 }], 14: [function (require, module, exports) {
      (function (Buffer) {
        var aes = require('./aes');
        var Transform = require('cipher-base');
        var inherits = require('inherits');
        var modes = require('./modes');
        var ebtk = require('evp_bytestokey');
        var StreamCipher = require('./streamCipher');
        var AuthCipher = require('./authCipher');
        inherits(Cipher, Transform);
        function Cipher(mode, key, iv) {
          if (!(this instanceof Cipher)) {
            return new Cipher(mode, key, iv);
          }
          Transform.call(this);
          this._cache = new Splitter();
          this._cipher = new aes.AES(key);
          this._prev = new Buffer(iv.length);
          iv.copy(this._prev);
          this._mode = mode;
          this._autopadding = true;
        }
        Cipher.prototype._update = function (data) {
          this._cache.add(data);
          var chunk;
          var thing;
          var out = [];
          while (chunk = this._cache.get()) {
            thing = this._mode.encrypt(this, chunk);
            out.push(thing);
          }
          return Buffer.concat(out);
        };
        Cipher.prototype._final = function () {
          var chunk = this._cache.flush();
          if (this._autopadding) {
            chunk = this._mode.encrypt(this, chunk);
            this._cipher.scrub();
            return chunk;
          } else if (chunk.toString('hex') !== '10101010101010101010101010101010') {
            this._cipher.scrub();
            throw new Error('data not multiple of block length');
          }
        };
        Cipher.prototype.setAutoPadding = function (setTo) {
          this._autopadding = !!setTo;
          return this;
        };

        function Splitter() {
          if (!(this instanceof Splitter)) {
            return new Splitter();
          }
          this.cache = new Buffer('');
        }
        Splitter.prototype.add = function (data) {
          this.cache = Buffer.concat([this.cache, data]);
        };

        Splitter.prototype.get = function () {
          if (this.cache.length > 15) {
            var out = this.cache.slice(0, 16);
            this.cache = this.cache.slice(16);
            return out;
          }
          return null;
        };
        Splitter.prototype.flush = function () {
          var len = 16 - this.cache.length;
          var padBuff = new Buffer(len);

          var i = -1;
          while (++i < len) {
            padBuff.writeUInt8(len, i);
          }
          var out = Buffer.concat([this.cache, padBuff]);
          return out;
        };
        var modelist = {
          ECB: require('./modes/ecb'),
          CBC: require('./modes/cbc'),
          CFB: require('./modes/cfb'),
          CFB8: require('./modes/cfb8'),
          CFB1: require('./modes/cfb1'),
          OFB: require('./modes/ofb'),
          CTR: require('./modes/ctr'),
          GCM: require('./modes/ctr')
        };

        function createCipheriv(suite, password, iv) {
          var config = modes[suite.toLowerCase()];
          if (!config) {
            throw new TypeError('invalid suite type');
          }
          if (typeof iv === 'string') {
            iv = new Buffer(iv);
          }
          if (typeof password === 'string') {
            password = new Buffer(password);
          }
          if (password.length !== config.key / 8) {
            throw new TypeError('invalid key length ' + password.length);
          }
          if (iv.length !== config.iv) {
            throw new TypeError('invalid iv length ' + iv.length);
          }
          if (config.type === 'stream') {
            return new StreamCipher(modelist[config.mode], password, iv);
          } else if (config.type === 'auth') {
            return new AuthCipher(modelist[config.mode], password, iv);
          }
          return new Cipher(modelist[config.mode], password, iv);
        }
        function createCipher(suite, password) {
          var config = modes[suite.toLowerCase()];
          if (!config) {
            throw new TypeError('invalid suite type');
          }
          var keys = ebtk(password, false, config.key, config.iv);
          return createCipheriv(suite, keys.key, keys.iv);
        }

        exports.createCipheriv = createCipheriv;
        exports.createCipher = createCipher;
      }).call(this, require("buffer").Buffer);
    }, { "./aes": 10, "./authCipher": 11, "./modes": 16, "./modes/cbc": 17, "./modes/cfb": 18, "./modes/cfb1": 19, "./modes/cfb8": 20, "./modes/ctr": 21, "./modes/ecb": 22, "./modes/ofb": 23, "./streamCipher": 24, "buffer": 27, "cipher-base": 29, "evp_bytestokey": 42, "inherits": 45 }], 15: [function (require, module, exports) {
      (function (Buffer) {
        var zeros = new Buffer(16);
        zeros.fill(0);
        module.exports = GHASH;
        function GHASH(key) {
          this.h = key;
          this.state = new Buffer(16);
          this.state.fill(0);
          this.cache = new Buffer('');
        }
        // from http://bitwiseshiftleft.github.io/sjcl/doc/symbols/src/core_gcm.js.html
        // by Juho Vähä-Herttua
        GHASH.prototype.ghash = function (block) {
          var i = -1;
          while (++i < block.length) {
            this.state[i] ^= block[i];
          }
          this._multiply();
        };

        GHASH.prototype._multiply = function () {
          var Vi = toArray(this.h);
          var Zi = [0, 0, 0, 0];
          var j, xi, lsb_Vi;
          var i = -1;
          while (++i < 128) {
            xi = (this.state[~~(i / 8)] & 1 << 7 - i % 8) !== 0;
            if (xi) {
              // Z_i+1 = Z_i ^ V_i
              Zi = xor(Zi, Vi);
            }

            // Store the value of LSB(V_i)
            lsb_Vi = (Vi[3] & 1) !== 0;

            // V_i+1 = V_i >> 1
            for (j = 3; j > 0; j--) {
              Vi[j] = Vi[j] >>> 1 | (Vi[j - 1] & 1) << 31;
            }
            Vi[0] = Vi[0] >>> 1;

            // If LSB(V_i) is 1, V_i+1 = (V_i >> 1) ^ R
            if (lsb_Vi) {
              Vi[0] = Vi[0] ^ 0xe1 << 24;
            }
          }
          this.state = fromArray(Zi);
        };
        GHASH.prototype.update = function (buf) {
          this.cache = Buffer.concat([this.cache, buf]);
          var chunk;
          while (this.cache.length >= 16) {
            chunk = this.cache.slice(0, 16);
            this.cache = this.cache.slice(16);
            this.ghash(chunk);
          }
        };
        GHASH.prototype.final = function (abl, bl) {
          if (this.cache.length) {
            this.ghash(Buffer.concat([this.cache, zeros], 16));
          }
          this.ghash(fromArray([0, abl, 0, bl]));
          return this.state;
        };

        function toArray(buf) {
          return [buf.readUInt32BE(0), buf.readUInt32BE(4), buf.readUInt32BE(8), buf.readUInt32BE(12)];
        }
        function fromArray(out) {
          out = out.map(fixup_uint32);
          var buf = new Buffer(16);
          buf.writeUInt32BE(out[0], 0);
          buf.writeUInt32BE(out[1], 4);
          buf.writeUInt32BE(out[2], 8);
          buf.writeUInt32BE(out[3], 12);
          return buf;
        }
        var uint_max = Math.pow(2, 32);
        function fixup_uint32(x) {
          var ret, x_pos;
          ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x;
          return ret;
        }
        function xor(a, b) {
          return [a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3]];
        }
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27 }], 16: [function (require, module, exports) {
      exports['aes-128-ecb'] = {
        cipher: 'AES',
        key: 128,
        iv: 0,
        mode: 'ECB',
        type: 'block'
      };
      exports['aes-192-ecb'] = {
        cipher: 'AES',
        key: 192,
        iv: 0,
        mode: 'ECB',
        type: 'block'
      };
      exports['aes-256-ecb'] = {
        cipher: 'AES',
        key: 256,
        iv: 0,
        mode: 'ECB',
        type: 'block'
      };
      exports['aes-128-cbc'] = {
        cipher: 'AES',
        key: 128,
        iv: 16,
        mode: 'CBC',
        type: 'block'
      };
      exports['aes-192-cbc'] = {
        cipher: 'AES',
        key: 192,
        iv: 16,
        mode: 'CBC',
        type: 'block'
      };
      exports['aes-256-cbc'] = {
        cipher: 'AES',
        key: 256,
        iv: 16,
        mode: 'CBC',
        type: 'block'
      };
      exports['aes128'] = exports['aes-128-cbc'];
      exports['aes192'] = exports['aes-192-cbc'];
      exports['aes256'] = exports['aes-256-cbc'];
      exports['aes-128-cfb'] = {
        cipher: 'AES',
        key: 128,
        iv: 16,
        mode: 'CFB',
        type: 'stream'
      };
      exports['aes-192-cfb'] = {
        cipher: 'AES',
        key: 192,
        iv: 16,
        mode: 'CFB',
        type: 'stream'
      };
      exports['aes-256-cfb'] = {
        cipher: 'AES',
        key: 256,
        iv: 16,
        mode: 'CFB',
        type: 'stream'
      };
      exports['aes-128-cfb8'] = {
        cipher: 'AES',
        key: 128,
        iv: 16,
        mode: 'CFB8',
        type: 'stream'
      };
      exports['aes-192-cfb8'] = {
        cipher: 'AES',
        key: 192,
        iv: 16,
        mode: 'CFB8',
        type: 'stream'
      };
      exports['aes-256-cfb8'] = {
        cipher: 'AES',
        key: 256,
        iv: 16,
        mode: 'CFB8',
        type: 'stream'
      };
      exports['aes-128-cfb1'] = {
        cipher: 'AES',
        key: 128,
        iv: 16,
        mode: 'CFB1',
        type: 'stream'
      };
      exports['aes-192-cfb1'] = {
        cipher: 'AES',
        key: 192,
        iv: 16,
        mode: 'CFB1',
        type: 'stream'
      };
      exports['aes-256-cfb1'] = {
        cipher: 'AES',
        key: 256,
        iv: 16,
        mode: 'CFB1',
        type: 'stream'
      };
      exports['aes-128-ofb'] = {
        cipher: 'AES',
        key: 128,
        iv: 16,
        mode: 'OFB',
        type: 'stream'
      };
      exports['aes-192-ofb'] = {
        cipher: 'AES',
        key: 192,
        iv: 16,
        mode: 'OFB',
        type: 'stream'
      };
      exports['aes-256-ofb'] = {
        cipher: 'AES',
        key: 256,
        iv: 16,
        mode: 'OFB',
        type: 'stream'
      };
      exports['aes-128-ctr'] = {
        cipher: 'AES',
        key: 128,
        iv: 16,
        mode: 'CTR',
        type: 'stream'
      };
      exports['aes-192-ctr'] = {
        cipher: 'AES',
        key: 192,
        iv: 16,
        mode: 'CTR',
        type: 'stream'
      };
      exports['aes-256-ctr'] = {
        cipher: 'AES',
        key: 256,
        iv: 16,
        mode: 'CTR',
        type: 'stream'
      };
      exports['aes-128-gcm'] = {
        cipher: 'AES',
        key: 128,
        iv: 12,
        mode: 'GCM',
        type: 'auth'
      };
      exports['aes-192-gcm'] = {
        cipher: 'AES',
        key: 192,
        iv: 12,
        mode: 'GCM',
        type: 'auth'
      };
      exports['aes-256-gcm'] = {
        cipher: 'AES',
        key: 256,
        iv: 12,
        mode: 'GCM',
        type: 'auth'
      };
    }, {}], 17: [function (require, module, exports) {
      var xor = require('buffer-xor');

      exports.encrypt = function (self, block) {
        var data = xor(block, self._prev);

        self._prev = self._cipher.encryptBlock(data);
        return self._prev;
      };

      exports.decrypt = function (self, block) {
        var pad = self._prev;

        self._prev = block;
        var out = self._cipher.decryptBlock(block);

        return xor(out, pad);
      };
    }, { "buffer-xor": 26 }], 18: [function (require, module, exports) {
      (function (Buffer) {
        var xor = require('buffer-xor');

        exports.encrypt = function (self, data, decrypt) {
          var out = new Buffer('');
          var len;

          while (data.length) {
            if (self._cache.length === 0) {
              self._cache = self._cipher.encryptBlock(self._prev);
              self._prev = new Buffer('');
            }

            if (self._cache.length <= data.length) {
              len = self._cache.length;
              out = Buffer.concat([out, encryptStart(self, data.slice(0, len), decrypt)]);
              data = data.slice(len);
            } else {
              out = Buffer.concat([out, encryptStart(self, data, decrypt)]);
              break;
            }
          }

          return out;
        };
        function encryptStart(self, data, decrypt) {
          var len = data.length;
          var out = xor(data, self._cache);
          self._cache = self._cache.slice(len);
          self._prev = Buffer.concat([self._prev, decrypt ? data : out]);
          return out;
        }
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27, "buffer-xor": 26 }], 19: [function (require, module, exports) {
      (function (Buffer) {
        function encryptByte(self, byteParam, decrypt) {
          var pad;
          var i = -1;
          var len = 8;
          var out = 0;
          var bit, value;
          while (++i < len) {
            pad = self._cipher.encryptBlock(self._prev);
            bit = byteParam & 1 << 7 - i ? 0x80 : 0;
            value = pad[0] ^ bit;
            out += (value & 0x80) >> i % 8;
            self._prev = shiftIn(self._prev, decrypt ? bit : value);
          }
          return out;
        }
        exports.encrypt = function (self, chunk, decrypt) {
          var len = chunk.length;
          var out = new Buffer(len);
          var i = -1;
          while (++i < len) {
            out[i] = encryptByte(self, chunk[i], decrypt);
          }
          return out;
        };
        function shiftIn(buffer, value) {
          var len = buffer.length;
          var i = -1;
          var out = new Buffer(buffer.length);
          buffer = Buffer.concat([buffer, new Buffer([value])]);
          while (++i < len) {
            out[i] = buffer[i] << 1 | buffer[i + 1] >> 7;
          }
          return out;
        }
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27 }], 20: [function (require, module, exports) {
      (function (Buffer) {
        function encryptByte(self, byteParam, decrypt) {
          var pad = self._cipher.encryptBlock(self._prev);
          var out = pad[0] ^ byteParam;
          self._prev = Buffer.concat([self._prev.slice(1), new Buffer([decrypt ? byteParam : out])]);
          return out;
        }
        exports.encrypt = function (self, chunk, decrypt) {
          var len = chunk.length;
          var out = new Buffer(len);
          var i = -1;
          while (++i < len) {
            out[i] = encryptByte(self, chunk[i], decrypt);
          }
          return out;
        };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27 }], 21: [function (require, module, exports) {
      (function (Buffer) {
        var xor = require('buffer-xor');

        function incr32(iv) {
          var len = iv.length;
          var item;
          while (len--) {
            item = iv.readUInt8(len);
            if (item === 255) {
              iv.writeUInt8(0, len);
            } else {
              item++;
              iv.writeUInt8(item, len);
              break;
            }
          }
        }

        function getBlock(self) {
          var out = self._cipher.encryptBlock(self._prev);
          incr32(self._prev);
          return out;
        }

        exports.encrypt = function (self, chunk) {
          while (self._cache.length < chunk.length) {
            self._cache = Buffer.concat([self._cache, getBlock(self)]);
          }
          var pad = self._cache.slice(0, chunk.length);
          self._cache = self._cache.slice(chunk.length);
          return xor(chunk, pad);
        };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27, "buffer-xor": 26 }], 22: [function (require, module, exports) {
      exports.encrypt = function (self, block) {
        return self._cipher.encryptBlock(block);
      };
      exports.decrypt = function (self, block) {
        return self._cipher.decryptBlock(block);
      };
    }, {}], 23: [function (require, module, exports) {
      (function (Buffer) {
        var xor = require('buffer-xor');

        function getBlock(self) {
          self._prev = self._cipher.encryptBlock(self._prev);
          return self._prev;
        }

        exports.encrypt = function (self, chunk) {
          while (self._cache.length < chunk.length) {
            self._cache = Buffer.concat([self._cache, getBlock(self)]);
          }

          var pad = self._cache.slice(0, chunk.length);
          self._cache = self._cache.slice(chunk.length);
          return xor(chunk, pad);
        };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27, "buffer-xor": 26 }], 24: [function (require, module, exports) {
      (function (Buffer) {
        var aes = require('./aes');
        var Transform = require('cipher-base');
        var inherits = require('inherits');

        inherits(StreamCipher, Transform);
        module.exports = StreamCipher;
        function StreamCipher(mode, key, iv, decrypt) {
          if (!(this instanceof StreamCipher)) {
            return new StreamCipher(mode, key, iv);
          }
          Transform.call(this);
          this._cipher = new aes.AES(key);
          this._prev = new Buffer(iv.length);
          this._cache = new Buffer('');
          this._secCache = new Buffer('');
          this._decrypt = decrypt;
          iv.copy(this._prev);
          this._mode = mode;
        }
        StreamCipher.prototype._update = function (chunk) {
          return this._mode.encrypt(this, chunk, this._decrypt);
        };
        StreamCipher.prototype._final = function () {
          this._cipher.scrub();
        };
      }).call(this, require("buffer").Buffer);
    }, { "./aes": 10, "buffer": 27, "cipher-base": 29, "inherits": 45 }], 25: [function (require, module, exports) {
      var basex = require('base-x');
      var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

      module.exports = basex(ALPHABET);
    }, { "base-x": 3 }], 26: [function (require, module, exports) {
      (function (Buffer) {
        module.exports = function xor(a, b) {
          var length = Math.min(a.length, b.length);
          var buffer = new Buffer(length);

          for (var i = 0; i < length; ++i) {
            buffer[i] = a[i] ^ b[i];
          }

          return buffer;
        };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27 }], 27: [function (require, module, exports) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      /* eslint-disable no-proto */

      'use strict';

      var base64 = require('base64-js');
      var ieee754 = require('ieee754');

      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;

      var K_MAX_LENGTH = 0x7fffffff;
      exports.kMaxLength = K_MAX_LENGTH;

      /**
       * If `Buffer.TYPED_ARRAY_SUPPORT`:
       *   === true    Use Uint8Array implementation (fastest)
       *   === false   Print warning and recommend using `buffer` v4.x which has an Object
       *               implementation (most compatible, even IE6)
       *
       * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
       * Opera 11.6+, iOS 4.2+.
       *
       * We report that the browser does not support typed arrays if the are not subclassable
       * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
       * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
       * for __proto__ and has a buggy typed array implementation.
       */
      Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

      if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
      }

      function typedArraySupport() {
        // Can typed array instances can be augmented?
        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () {
              return 42;
            } };
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }

      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('Invalid typed array length');
        }
        // Return an augmented `Uint8Array` instance
        var buf = new Uint8Array(length);
        buf.__proto__ = Buffer.prototype;
        return buf;
      }

      /**
       * The Buffer constructor returns instances of `Uint8Array` that have their
       * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
       * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
       * and the `Uint8Array` methods. Square bracket notation works as expected -- it
       * returns a single octet.
       *
       * The `Uint8Array` prototype remains unmodified.
       */

      function Buffer(arg, encodingOrOffset, length) {
        // Common case.
        if (typeof arg === 'number') {
          if (typeof encodingOrOffset === 'string') {
            throw new Error('If encoding is specified then the first argument must be a string');
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }

      // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
      if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true,
          enumerable: false,
          writable: false
        });
      }

      Buffer.poolSize = 8192; // not used by this implementation

      function from(value, encodingOrOffset, length) {
        if (typeof value === 'number') {
          throw new TypeError('"value" argument must not be a number');
        }

        if (isArrayBuffer(value)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }

        if (typeof value === 'string') {
          return fromString(value, encodingOrOffset);
        }

        return fromObject(value);
      }

      /**
       * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
       * if value is a number.
       * Buffer.from(str[, encoding])
       * Buffer.from(array)
       * Buffer.from(buffer)
       * Buffer.from(arrayBuffer[, byteOffset[, length]])
       **/
      Buffer.from = function (value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };

      // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
      // https://github.com/feross/buffer/pull/148
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;

      function assertSize(size) {
        if (typeof size !== 'number') {
          throw new TypeError('"size" argument must be a number');
        } else if (size < 0) {
          throw new RangeError('"size" argument must not be negative');
        }
      }

      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== undefined) {
          // Only pay attention to encoding if it's a string. This
          // prevents accidentally sending in a number that would
          // be interpretted as a start offset.
          return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }

      /**
       * Creates a new filled Buffer instance.
       * alloc(size[, fill[, encoding]])
       **/
      Buffer.alloc = function (size, fill, encoding) {
        return alloc(size, fill, encoding);
      };

      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }

      /**
       * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
       * */
      Buffer.allocUnsafe = function (size) {
        return allocUnsafe(size);
      };
      /**
       * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
       */
      Buffer.allocUnsafeSlow = function (size) {
        return allocUnsafe(size);
      };

      function fromString(string, encoding) {
        if (typeof encoding !== 'string' || encoding === '') {
          encoding = 'utf8';
        }

        if (!Buffer.isEncoding(encoding)) {
          throw new TypeError('"encoding" must be a valid string encoding');
        }

        var length = byteLength(string, encoding) | 0;
        var buf = createBuffer(length);

        var actual = buf.write(string, encoding);

        if (actual !== length) {
          // Writing a hex string, for example, that contains invalid characters will
          // cause everything after the first invalid character to be ignored. (e.g.
          // 'abxxcd' will be treated as 'ab')
          buf = buf.slice(0, actual);
        }

        return buf;
      }

      function fromArrayLike(array) {
        var length = array.length < 0 ? 0 : checked(array.length) | 0;
        var buf = createBuffer(length);
        for (var i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }

      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('\'offset\' is out of bounds');
        }

        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('\'length\' is out of bounds');
        }

        var buf;
        if (byteOffset === undefined && length === undefined) {
          buf = new Uint8Array(array);
        } else if (length === undefined) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }

        // Return an augmented `Uint8Array` instance
        buf.__proto__ = Buffer.prototype;
        return buf;
      }

      function fromObject(obj) {
        if (Buffer.isBuffer(obj)) {
          var len = checked(obj.length) | 0;
          var buf = createBuffer(len);

          if (buf.length === 0) {
            return buf;
          }

          obj.copy(buf, 0, 0, len);
          return buf;
        }

        if (obj) {
          if (isArrayBufferView(obj) || 'length' in obj) {
            if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
              return createBuffer(0);
            }
            return fromArrayLike(obj);
          }

          if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
            return fromArrayLike(obj.data);
          }
        }

        throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
      }

      function checked(length) {
        // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
        // length is NaN (which is otherwise coerced to zero.)
        if (length >= K_MAX_LENGTH) {
          throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
        }
        return length | 0;
      }

      function SlowBuffer(length) {
        if (+length != length) {
          // eslint-disable-line eqeqeq
          length = 0;
        }
        return Buffer.alloc(+length);
      }

      Buffer.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true;
      };

      Buffer.compare = function compare(a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
          throw new TypeError('Arguments must be Buffers');
        }

        if (a === b) return 0;

        var x = a.length;
        var y = b.length;

        for (var i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };

      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'latin1':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return true;
          default:
            return false;
        }
      };

      Buffer.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }

        if (list.length === 0) {
          return Buffer.alloc(0);
        }

        var i;
        if (length === undefined) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }

        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          }
          buf.copy(buffer, pos);
          pos += buf.length;
        }
        return buffer;
      };

      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) {
          return string.length;
        }
        if (isArrayBufferView(string) || isArrayBuffer(string)) {
          return string.byteLength;
        }
        if (typeof string !== 'string') {
          string = '' + string;
        }

        var len = string.length;
        if (len === 0) return 0;

        // Use a for loop to avoid recursion
        var loweredCase = false;
        for (;;) {
          switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return len;
            case 'utf8':
            case 'utf-8':
            case undefined:
              return utf8ToBytes(string).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return len * 2;
            case 'hex':
              return len >>> 1;
            case 'base64':
              return base64ToBytes(string).length;
            default:
              if (loweredCase) return utf8ToBytes(string).length; // assume utf8
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer.byteLength = byteLength;

      function slowToString(encoding, start, end) {
        var loweredCase = false;

        // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
        // property of a typed array.

        // This behaves neither like String nor Uint8Array in that we set start/end
        // to their upper/lower bounds if the value passed is out of range.
        // undefined is handled specially as per ECMA-262 6th Edition,
        // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
        if (start === undefined || start < 0) {
          start = 0;
        }
        // Return early if start > this.length. Done here to prevent potential uint32
        // coercion fail below.
        if (start > this.length) {
          return '';
        }

        if (end === undefined || end > this.length) {
          end = this.length;
        }

        if (end <= 0) {
          return '';
        }

        // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
        end >>>= 0;
        start >>>= 0;

        if (end <= start) {
          return '';
        }

        if (!encoding) encoding = 'utf8';

        while (true) {
          switch (encoding) {
            case 'hex':
              return hexSlice(this, start, end);

            case 'utf8':
            case 'utf-8':
              return utf8Slice(this, start, end);

            case 'ascii':
              return asciiSlice(this, start, end);

            case 'latin1':
            case 'binary':
              return latin1Slice(this, start, end);

            case 'base64':
              return base64Slice(this, start, end);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return utf16leSlice(this, start, end);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = (encoding + '').toLowerCase();
              loweredCase = true;
          }
        }
      }

      // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
      // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
      // reliably in a browserify context because there could be multiple different
      // copies of the 'buffer' package in use. This method works even for Buffer
      // instances that were created from another copy of the `buffer` package.
      // See: https://github.com/feross/buffer/issues/154
      Buffer.prototype._isBuffer = true;

      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }

      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 16-bits');
        }
        for (var i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };

      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 32-bits');
        }
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };

      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 64-bits');
        }
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };

      Buffer.prototype.toString = function toString() {
        var length = this.length;
        if (length === 0) return '';
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };

      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
        if (this === b) return true;
        return Buffer.compare(this, b) === 0;
      };

      Buffer.prototype.inspect = function inspect() {
        var str = '';
        var max = exports.INSPECT_MAX_BYTES;
        if (this.length > 0) {
          str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
          if (this.length > max) str += ' ... ';
        }
        return '<Buffer ' + str + '>';
      };

      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (!Buffer.isBuffer(target)) {
          throw new TypeError('Argument must be a Buffer');
        }

        if (start === undefined) {
          start = 0;
        }
        if (end === undefined) {
          end = target ? target.length : 0;
        }
        if (thisStart === undefined) {
          thisStart = 0;
        }
        if (thisEnd === undefined) {
          thisEnd = this.length;
        }

        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError('out of range index');
        }

        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }

        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;

        if (this === target) return 0;

        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);

        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);

        for (var i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };

      // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
      // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
      //
      // Arguments:
      // - buffer - a Buffer to search
      // - val - a string, Buffer, or number
      // - byteOffset - an index into `buffer`; will be clamped to an int32
      // - encoding - an optional encoding, relevant is val is a string
      // - dir - true for indexOf, false for lastIndexOf
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        // Empty buffer means no match
        if (buffer.length === 0) return -1;

        // Normalize byteOffset
        if (typeof byteOffset === 'string') {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 0x7fffffff) {
          byteOffset = 0x7fffffff;
        } else if (byteOffset < -0x80000000) {
          byteOffset = -0x80000000;
        }
        byteOffset = +byteOffset; // Coerce to Number.
        if (numberIsNaN(byteOffset)) {
          // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
          byteOffset = dir ? 0 : buffer.length - 1;
        }

        // Normalize byteOffset: negative offsets start from the end of the buffer
        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir) return -1;else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;else return -1;
        }

        // Normalize val
        if (typeof val === 'string') {
          val = Buffer.from(val, encoding);
        }

        // Finally, search either indexOf (if dir is true) or lastIndexOf
        if (Buffer.isBuffer(val)) {
          // Special case: looking for empty string/buffer always fails
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === 'number') {
          val = val & 0xFF; // Search for a byte value [0-255]
          if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }

        throw new TypeError('val must be string, number or Buffer');
      }

      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;

        if (encoding !== undefined) {
          encoding = String(encoding).toLowerCase();
          if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }

        function read(buf, i) {
          if (indexSize === 1) {
            return buf[i];
          } else {
            return buf.readUInt16BE(i * indexSize);
          }
        }

        var i;
        if (dir) {
          var foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found) return i;
          }
        }

        return -1;
      }

      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };

      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };

      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };

      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }

        // must be an even number of digits
        var strLen = string.length;
        if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

        if (length > strLen / 2) {
          length = strLen / 2;
        }
        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }

      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }

      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }

      function latin1Write(buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length);
      }

      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }

      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }

      Buffer.prototype.write = function write(string, offset, length, encoding) {
        // Buffer#write(string)
        if (offset === undefined) {
          encoding = 'utf8';
          length = this.length;
          offset = 0;
          // Buffer#write(string, encoding)
        } else if (length === undefined && typeof offset === 'string') {
          encoding = offset;
          length = this.length;
          offset = 0;
          // Buffer#write(string, offset[, length][, encoding])
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
          } else {
            encoding = length;
            length = undefined;
          }
        } else {
          throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        }

        var remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;

        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError('Attempt to write outside buffer bounds');
        }

        if (!encoding) encoding = 'utf8';

        var loweredCase = false;
        for (;;) {
          switch (encoding) {
            case 'hex':
              return hexWrite(this, string, offset, length);

            case 'utf8':
            case 'utf-8':
              return utf8Write(this, string, offset, length);

            case 'ascii':
              return asciiWrite(this, string, offset, length);

            case 'latin1':
            case 'binary':
              return latin1Write(this, string, offset, length);

            case 'base64':
              // Warning: maxLength not taken into account in base64Write
              return base64Write(this, string, offset, length);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return ucs2Write(this, string, offset, length);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };

      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };

      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }

      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];

        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;

            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 0x80) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                  if (tempCodePoint > 0x7F) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                  if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                  if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }

          if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
          } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
          }

          res.push(codePoint);
          i += bytesPerSequence;
        }

        return decodeCodePointsArray(res);
      }

      // Based on http://stackoverflow.com/a/22747272/680742, the browser with
      // the lowest limit is Chrome, with 0x10000 args.
      // We go 1 magnitude less, for safety
      var MAX_ARGUMENTS_LENGTH = 0x1000;

      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
        }

        // Decode in chunks to avoid "call stack size exceeded".
        var res = '';
        var i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        }
        return res;
      }

      function asciiSlice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 0x7F);
        }
        return ret;
      }

      function latin1Slice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }

      function hexSlice(buf, start, end) {
        var len = buf.length;

        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;

        var out = '';
        for (var i = start; i < end; ++i) {
          out += toHex(buf[i]);
        }
        return out;
      }

      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = '';
        for (var i = 0; i < bytes.length; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }

      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = end === undefined ? len : ~~end;

        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }

        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }

        if (end < start) end = start;

        var newBuf = this.subarray(start, end);
        // Return an augmented `Uint8Array` instance
        newBuf.__proto__ = Buffer.prototype;
        return newBuf;
      };

      /*
       * Need to make sure that buffer isn't trying to write out of bounds.
       */
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
        if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
      }

      Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);

        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }

        return val;
      };

      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength, this.length);
        }

        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 0x100)) {
          val += this[offset + --byteLength] * mul;
        }

        return val;
      };

      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };

      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };

      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };

      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);

        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
      };

      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);

        return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };

      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);

        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }
        mul *= 0x80;

        if (val >= mul) val -= Math.pow(2, 8 * byteLength);

        return val;
      };

      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);

        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 0x100)) {
          val += this[offset + --i] * mul;
        }
        mul *= 0x80;

        if (val >= mul) val -= Math.pow(2, 8 * byteLength);

        return val;
      };

      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 0x80)) return this[offset];
        return (0xff - this[offset] + 1) * -1;
      };

      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);

        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };

      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);

        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };

      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };

      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };

      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };

      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };

      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
      }

      Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }

        var mul = 1;
        var i = 0;
        this[offset] = value & 0xFF;
        while (++i < byteLength && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }

        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = value & 0xFF;
        while (--i >= 0 && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };

      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };

      Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
        return offset + 4;
      };

      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };

      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);

          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = value & 0xFF;
        while (++i < byteLength && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);

          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = value & 0xFF;
        while (--i >= 0 && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
        if (value < 0) value = 0xff + value + 1;
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };

      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };

      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };

      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        if (value < 0) value = 0xffffffff + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };

      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
        if (offset < 0) throw new RangeError('Index out of range');
      }

      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }

      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };

      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }

      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };

      // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;

        // Copy 0 bytes; we're done
        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;

        // Fatal error conditions
        if (targetStart < 0) {
          throw new RangeError('targetStart out of bounds');
        }
        if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
        if (end < 0) throw new RangeError('sourceEnd out of bounds');

        // Are we oob?
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }

        var len = end - start;
        var i;

        if (this === target && start < targetStart && targetStart < end) {
          // descending copy from end
          for (i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start];
          }
        } else if (len < 1000) {
          // ascending copy from start
          for (i = 0; i < len; ++i) {
            target[i + targetStart] = this[i + start];
          }
        } else {
          Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
        }

        return len;
      };

      // Usage:
      //    buffer.fill(number[, offset[, end]])
      //    buffer.fill(buffer[, offset[, end]])
      //    buffer.fill(string[, offset[, end]][, encoding])
      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        // Handle string cases:
        if (typeof val === 'string') {
          if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
          }
          if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (code < 256) {
              val = code;
            }
          }
          if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string');
          }
          if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding);
          }
        } else if (typeof val === 'number') {
          val = val & 255;
        }

        // Invalid ranges are not set to a default, so can range check early.
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError('Out of range index');
        }

        if (end <= start) {
          return this;
        }

        start = start >>> 0;
        end = end === undefined ? this.length : end >>> 0;

        if (!val) val = 0;

        var i;
        if (typeof val === 'number') {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          var bytes = Buffer.isBuffer(val) ? val : new Buffer(val, encoding);
          var len = bytes.length;
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }

        return this;
      };

      // HELPER FUNCTIONS
      // ================

      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

      function base64clean(str) {
        // Node strips out invalid characters like \n and \t from the string, base64-js does not
        str = str.trim().replace(INVALID_BASE64_RE, '');
        // Node converts strings with length < 2 to ''
        if (str.length < 2) return '';
        // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
        while (str.length % 4 !== 0) {
          str = str + '=';
        }
        return str;
      }

      function toHex(n) {
        if (n < 16) return '0' + n.toString(16);
        return n.toString(16);
      }

      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];

        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);

          // is surrogate component
          if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
              // no lead yet
              if (codePoint > 0xDBFF) {
                // unexpected trail
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else if (i + 1 === length) {
                // unpaired lead
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              }

              // valid lead
              leadSurrogate = codePoint;

              continue;
            }

            // 2 leads in a row
            if (codePoint < 0xDC00) {
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              leadSurrogate = codePoint;
              continue;
            }

            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
          } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          }

          leadSurrogate = null;

          // encode utf8
          if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else {
            throw new Error('Invalid code point');
          }
        }

        return bytes;
      }

      function asciiToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          // Node's code seems to be doing this and not & 0x7F..
          byteArray.push(str.charCodeAt(i) & 0xFF);
        }
        return byteArray;
      }

      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;

          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }

        return byteArray;
      }

      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }

      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }

      // ArrayBuffers from another context (i.e. an iframe) do not pass the `instanceof` check
      // but they should be treated as valid. See: https://github.com/feross/buffer/issues/166
      function isArrayBuffer(obj) {
        return obj instanceof ArrayBuffer || obj != null && obj.constructor != null && obj.constructor.name === 'ArrayBuffer' && typeof obj.byteLength === 'number';
      }

      // Node 0.10 supports `ArrayBuffer` but lacks `ArrayBuffer.isView`
      function isArrayBufferView(obj) {
        return typeof ArrayBuffer.isView === 'function' && ArrayBuffer.isView(obj);
      }

      function numberIsNaN(obj) {
        return obj !== obj; // eslint-disable-line no-self-compare
      }
    }, { "base64-js": 4, "ieee754": 44 }], 28: [function (require, module, exports) {
      /*
       Copyright 2013-2014 Daniel Wirtz <dcode@dcode.io>
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      /**
       * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
       * Backing buffer: ArrayBuffer, Accessor: Uint8Array
       * Released under the Apache License, Version 2.0
       * see: https://github.com/dcodeIO/bytebuffer.js for details
       */
      (function (global, factory) {

        /* AMD */if (typeof define === 'function' && define["amd"]) define(["long"], factory);
        /* CommonJS */else if (typeof require === 'function' && typeof module === "object" && module && module["exports"]) module['exports'] = function () {
            var Long;try {
              Long = require("long");
            } catch (e) {}
            return factory(Long);
          }();
          /* Global */else (global["dcodeIO"] = global["dcodeIO"] || {})["ByteBuffer"] = factory(global["dcodeIO"]["Long"]);
      })(this, function (Long) {
        "use strict";

        /**
         * Constructs a new ByteBuffer.
         * @class The swiss army knife for binary data in JavaScript.
         * @exports ByteBuffer
         * @constructor
         * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
         * @expose
         */

        var ByteBuffer = function (capacity, littleEndian, noAssert) {
          if (typeof capacity === 'undefined') capacity = ByteBuffer.DEFAULT_CAPACITY;
          if (typeof littleEndian === 'undefined') littleEndian = ByteBuffer.DEFAULT_ENDIAN;
          if (typeof noAssert === 'undefined') noAssert = ByteBuffer.DEFAULT_NOASSERT;
          if (!noAssert) {
            capacity = capacity | 0;
            if (capacity < 0) throw RangeError("Illegal capacity");
            littleEndian = !!littleEndian;
            noAssert = !!noAssert;
          }

          /**
           * Backing ArrayBuffer.
           * @type {!ArrayBuffer}
           * @expose
           */
          this.buffer = capacity === 0 ? EMPTY_BUFFER : new ArrayBuffer(capacity);

          /**
           * Uint8Array utilized to manipulate the backing buffer. Becomes `null` if the backing buffer has a capacity of `0`.
           * @type {?Uint8Array}
           * @expose
           */
          this.view = capacity === 0 ? null : new Uint8Array(this.buffer);

          /**
           * Absolute read/write offset.
           * @type {number}
           * @expose
           * @see ByteBuffer#flip
           * @see ByteBuffer#clear
           */
          this.offset = 0;

          /**
           * Marked offset.
           * @type {number}
           * @expose
           * @see ByteBuffer#mark
           * @see ByteBuffer#reset
           */
          this.markedOffset = -1;

          /**
           * Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
           * @type {number}
           * @expose
           * @see ByteBuffer#flip
           * @see ByteBuffer#clear
           */
          this.limit = capacity;

          /**
           * Whether to use little endian byte order, defaults to `false` for big endian.
           * @type {boolean}
           * @expose
           */
          this.littleEndian = littleEndian;

          /**
           * Whether to skip assertions of offsets and values, defaults to `false`.
           * @type {boolean}
           * @expose
           */
          this.noAssert = noAssert;
        };

        /**
         * ByteBuffer version.
         * @type {string}
         * @const
         * @expose
         */
        ByteBuffer.VERSION = "5.0.1";

        /**
         * Little endian constant that can be used instead of its boolean value. Evaluates to `true`.
         * @type {boolean}
         * @const
         * @expose
         */
        ByteBuffer.LITTLE_ENDIAN = true;

        /**
         * Big endian constant that can be used instead of its boolean value. Evaluates to `false`.
         * @type {boolean}
         * @const
         * @expose
         */
        ByteBuffer.BIG_ENDIAN = false;

        /**
         * Default initial capacity of `16`.
         * @type {number}
         * @expose
         */
        ByteBuffer.DEFAULT_CAPACITY = 16;

        /**
         * Default endianess of `false` for big endian.
         * @type {boolean}
         * @expose
         */
        ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.BIG_ENDIAN;

        /**
         * Default no assertions flag of `false`.
         * @type {boolean}
         * @expose
         */
        ByteBuffer.DEFAULT_NOASSERT = false;

        /**
         * A `Long` class for representing a 64-bit two's-complement integer value. May be `null` if Long.js has not been loaded
         *  and int64 support is not available.
         * @type {?Long}
         * @const
         * @see https://github.com/dcodeIO/long.js
         * @expose
         */
        ByteBuffer.Long = Long || null;

        /**
         * @alias ByteBuffer.prototype
         * @inner
         */
        var ByteBufferPrototype = ByteBuffer.prototype;

        /**
         * An indicator used to reliably determine if an object is a ByteBuffer or not.
         * @type {boolean}
         * @const
         * @expose
         * @private
         */
        ByteBufferPrototype.__isByteBuffer__;

        Object.defineProperty(ByteBufferPrototype, "__isByteBuffer__", {
          value: true,
          enumerable: false,
          configurable: false
        });

        // helpers

        /**
         * @type {!ArrayBuffer}
         * @inner
         */
        var EMPTY_BUFFER = new ArrayBuffer(0);

        /**
         * String.fromCharCode reference for compile-time renaming.
         * @type {function(...number):string}
         * @inner
         */
        var stringFromCharCode = String.fromCharCode;

        /**
         * Creates a source function for a string.
         * @param {string} s String to read from
         * @returns {function():number|null} Source function returning the next char code respectively `null` if there are
         *  no more characters left.
         * @throws {TypeError} If the argument is invalid
         * @inner
         */
        function stringSource(s) {
          var i = 0;return function () {
            return i < s.length ? s.charCodeAt(i++) : null;
          };
        }

        /**
         * Creates a destination function for a string.
         * @returns {function(number=):undefined|string} Destination function successively called with the next char code.
         *  Returns the final string when called without arguments.
         * @inner
         */
        function stringDestination() {
          var cs = [],
              ps = [];return function () {
            if (arguments.length === 0) return ps.join('') + stringFromCharCode.apply(String, cs);
            if (cs.length + arguments.length > 1024) ps.push(stringFromCharCode.apply(String, cs)), cs.length = 0;
            Array.prototype.push.apply(cs, arguments);
          };
        }

        /**
         * Gets the accessor type.
         * @returns {Function} `Buffer` under node.js, `Uint8Array` respectively `DataView` in the browser (classes)
         * @expose
         */
        ByteBuffer.accessor = function () {
          return Uint8Array;
        };
        /**
         * Allocates a new ByteBuffer backed by a buffer of the specified capacity.
         * @param {number=} capacity Initial capacity. Defaults to {@link ByteBuffer.DEFAULT_CAPACITY}.
         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
         * @returns {!ByteBuffer}
         * @expose
         */
        ByteBuffer.allocate = function (capacity, littleEndian, noAssert) {
          return new ByteBuffer(capacity, littleEndian, noAssert);
        };

        /**
         * Concatenates multiple ByteBuffers into one.
         * @param {!Array.<!ByteBuffer|!ArrayBuffer|!Uint8Array|string>} buffers Buffers to concatenate
         * @param {(string|boolean)=} encoding String encoding if `buffers` contains a string ("base64", "hex", "binary",
         *  defaults to "utf8")
         * @param {boolean=} littleEndian Whether to use little or big endian byte order for the resulting ByteBuffer. Defaults
         *  to {@link ByteBuffer.DEFAULT_ENDIAN}.
         * @param {boolean=} noAssert Whether to skip assertions of offsets and values for the resulting ByteBuffer. Defaults to
         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
         * @returns {!ByteBuffer} Concatenated ByteBuffer
         * @expose
         */
        ByteBuffer.concat = function (buffers, encoding, littleEndian, noAssert) {
          if (typeof encoding === 'boolean' || typeof encoding !== 'string') {
            noAssert = littleEndian;
            littleEndian = encoding;
            encoding = undefined;
          }
          var capacity = 0;
          for (var i = 0, k = buffers.length, length; i < k; ++i) {
            if (!ByteBuffer.isByteBuffer(buffers[i])) buffers[i] = ByteBuffer.wrap(buffers[i], encoding);
            length = buffers[i].limit - buffers[i].offset;
            if (length > 0) capacity += length;
          }
          if (capacity === 0) return new ByteBuffer(0, littleEndian, noAssert);
          var bb = new ByteBuffer(capacity, littleEndian, noAssert),
              bi;
          i = 0;while (i < k) {
            bi = buffers[i++];
            length = bi.limit - bi.offset;
            if (length <= 0) continue;
            bb.view.set(bi.view.subarray(bi.offset, bi.limit), bb.offset);
            bb.offset += length;
          }
          bb.limit = bb.offset;
          bb.offset = 0;
          return bb;
        };

        /**
         * Tests if the specified type is a ByteBuffer.
         * @param {*} bb ByteBuffer to test
         * @returns {boolean} `true` if it is a ByteBuffer, otherwise `false`
         * @expose
         */
        ByteBuffer.isByteBuffer = function (bb) {
          return (bb && bb["__isByteBuffer__"]) === true;
        };
        /**
         * Gets the backing buffer type.
         * @returns {Function} `Buffer` under node.js, `ArrayBuffer` in the browser (classes)
         * @expose
         */
        ByteBuffer.type = function () {
          return ArrayBuffer;
        };
        /**
         * Wraps a buffer or a string. Sets the allocated ByteBuffer's {@link ByteBuffer#offset} to `0` and its
         *  {@link ByteBuffer#limit} to the length of the wrapped data.
         * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string|!Array.<number>} buffer Anything that can be wrapped
         * @param {(string|boolean)=} encoding String encoding if `buffer` is a string ("base64", "hex", "binary", defaults to
         *  "utf8")
         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
         * @returns {!ByteBuffer} A ByteBuffer wrapping `buffer`
         * @expose
         */
        ByteBuffer.wrap = function (buffer, encoding, littleEndian, noAssert) {
          if (typeof encoding !== 'string') {
            noAssert = littleEndian;
            littleEndian = encoding;
            encoding = undefined;
          }
          if (typeof buffer === 'string') {
            if (typeof encoding === 'undefined') encoding = "utf8";
            switch (encoding) {
              case "base64":
                return ByteBuffer.fromBase64(buffer, littleEndian);
              case "hex":
                return ByteBuffer.fromHex(buffer, littleEndian);
              case "binary":
                return ByteBuffer.fromBinary(buffer, littleEndian);
              case "utf8":
                return ByteBuffer.fromUTF8(buffer, littleEndian);
              case "debug":
                return ByteBuffer.fromDebug(buffer, littleEndian);
              default:
                throw Error("Unsupported encoding: " + encoding);
            }
          }
          if (buffer === null || typeof buffer !== 'object') throw TypeError("Illegal buffer");
          var bb;
          if (ByteBuffer.isByteBuffer(buffer)) {
            bb = ByteBufferPrototype.clone.call(buffer);
            bb.markedOffset = -1;
            return bb;
          }
          if (buffer instanceof Uint8Array) {
            // Extract ArrayBuffer from Uint8Array
            bb = new ByteBuffer(0, littleEndian, noAssert);
            if (buffer.length > 0) {
              // Avoid references to more than one EMPTY_BUFFER
              bb.buffer = buffer.buffer;
              bb.offset = buffer.byteOffset;
              bb.limit = buffer.byteOffset + buffer.byteLength;
              bb.view = new Uint8Array(buffer.buffer);
            }
          } else if (buffer instanceof ArrayBuffer) {
            // Reuse ArrayBuffer
            bb = new ByteBuffer(0, littleEndian, noAssert);
            if (buffer.byteLength > 0) {
              bb.buffer = buffer;
              bb.offset = 0;
              bb.limit = buffer.byteLength;
              bb.view = buffer.byteLength > 0 ? new Uint8Array(buffer) : null;
            }
          } else if (Object.prototype.toString.call(buffer) === "[object Array]") {
            // Create from octets
            bb = new ByteBuffer(buffer.length, littleEndian, noAssert);
            bb.limit = buffer.length;
            for (var i = 0; i < buffer.length; ++i) bb.view[i] = buffer[i];
          } else throw TypeError("Illegal buffer"); // Otherwise fail
          return bb;
        };

        /**
         * Writes the array as a bitset.
         * @param {Array<boolean>} value Array of booleans to write
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
         * @returns {!ByteBuffer}
         * @expose
         */
        ByteBufferPrototype.writeBitSet = function (value, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (!(value instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }

          var start = offset,
              bits = value.length,
              bytes = bits >> 3,
              bit = 0,
              k;

          offset += this.writeVarint32(bits, offset);

          while (bytes--) {
            k = !!value[bit++] & 1 | (!!value[bit++] & 1) << 1 | (!!value[bit++] & 1) << 2 | (!!value[bit++] & 1) << 3 | (!!value[bit++] & 1) << 4 | (!!value[bit++] & 1) << 5 | (!!value[bit++] & 1) << 6 | (!!value[bit++] & 1) << 7;
            this.writeByte(k, offset++);
          }

          if (bit < bits) {
            var m = 0;k = 0;
            while (bit < bits) k = k | (!!value[bit++] & 1) << m++;
            this.writeByte(k, offset++);
          }

          if (relative) {
            this.offset = offset;
            return this;
          }
          return offset - start;
        };

        /**
         * Reads a BitSet as an array of booleans.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
         * @returns {Array<boolean>
         * @expose
         */
        ByteBufferPrototype.readBitSet = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;

          var ret = this.readVarint32(offset),
              bits = ret.value,
              bytes = bits >> 3,
              bit = 0,
              value = [],
              k;

          offset += ret.length;

          while (bytes--) {
            k = this.readByte(offset++);
            value[bit++] = !!(k & 0x01);
            value[bit++] = !!(k & 0x02);
            value[bit++] = !!(k & 0x04);
            value[bit++] = !!(k & 0x08);
            value[bit++] = !!(k & 0x10);
            value[bit++] = !!(k & 0x20);
            value[bit++] = !!(k & 0x40);
            value[bit++] = !!(k & 0x80);
          }

          if (bit < bits) {
            var m = 0;
            k = this.readByte(offset++);
            while (bit < bits) value[bit++] = !!(k >> m++ & 1);
          }

          if (relative) {
            this.offset = offset;
          }
          return value;
        };
        /**
         * Reads the specified number of bytes.
         * @param {number} length Number of bytes to read
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `length` if omitted.
         * @returns {!ByteBuffer}
         * @expose
         */
        ByteBufferPrototype.readBytes = function (length, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + length > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + length + ") <= " + this.buffer.byteLength);
          }
          var slice = this.slice(offset, offset + length);
          if (relative) this.offset += length;
          return slice;
        };

        /**
         * Writes a payload of bytes. This is an alias of {@link ByteBuffer#append}.
         * @function
         * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to write. If `source` is a ByteBuffer, its offsets
         *  will be modified according to the performed read operation.
         * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeBytes = ByteBufferPrototype.append;

        // types/ints/int8

        /**
         * Writes an 8bit signed integer.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeInt8 = function (value, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
            value |= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          offset += 1;
          var capacity0 = this.buffer.byteLength;
          if (offset > capacity0) this.resize((capacity0 *= 2) > offset ? capacity0 : offset);
          offset -= 1;
          this.view[offset] = value;
          if (relative) this.offset += 1;
          return this;
        };

        /**
         * Writes an 8bit signed integer. This is an alias of {@link ByteBuffer#writeInt8}.
         * @function
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeByte = ByteBufferPrototype.writeInt8;

        /**
         * Reads an 8bit signed integer.
         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
         * @returns {number} Value read
         * @expose
         */
        ByteBufferPrototype.readInt8 = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
          }
          var value = this.view[offset];
          if ((value & 0x80) === 0x80) value = -(0xFF - value + 1); // Cast to signed
          if (relative) this.offset += 1;
          return value;
        };

        /**
         * Reads an 8bit signed integer. This is an alias of {@link ByteBuffer#readInt8}.
         * @function
         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
         * @returns {number} Value read
         * @expose
         */
        ByteBufferPrototype.readByte = ByteBufferPrototype.readInt8;

        /**
         * Writes an 8bit unsigned integer.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeUint8 = function (value, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
            value >>>= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          offset += 1;
          var capacity1 = this.buffer.byteLength;
          if (offset > capacity1) this.resize((capacity1 *= 2) > offset ? capacity1 : offset);
          offset -= 1;
          this.view[offset] = value;
          if (relative) this.offset += 1;
          return this;
        };

        /**
         * Writes an 8bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint8}.
         * @function
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeUInt8 = ByteBufferPrototype.writeUint8;

        /**
         * Reads an 8bit unsigned integer.
         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
         * @returns {number} Value read
         * @expose
         */
        ByteBufferPrototype.readUint8 = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
          }
          var value = this.view[offset];
          if (relative) this.offset += 1;
          return value;
        };

        /**
         * Reads an 8bit unsigned integer. This is an alias of {@link ByteBuffer#readUint8}.
         * @function
         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `1` if omitted.
         * @returns {number} Value read
         * @expose
         */
        ByteBufferPrototype.readUInt8 = ByteBufferPrototype.readUint8;

        // types/ints/int16

        /**
         * Writes a 16bit signed integer.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
         * @throws {TypeError} If `offset` or `value` is not a valid number
         * @throws {RangeError} If `offset` is out of bounds
         * @expose
         */
        ByteBufferPrototype.writeInt16 = function (value, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
            value |= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          offset += 2;
          var capacity2 = this.buffer.byteLength;
          if (offset > capacity2) this.resize((capacity2 *= 2) > offset ? capacity2 : offset);
          offset -= 2;
          if (this.littleEndian) {
            this.view[offset + 1] = (value & 0xFF00) >>> 8;
            this.view[offset] = value & 0x00FF;
          } else {
            this.view[offset] = (value & 0xFF00) >>> 8;
            this.view[offset + 1] = value & 0x00FF;
          }
          if (relative) this.offset += 2;
          return this;
        };

        /**
         * Writes a 16bit signed integer. This is an alias of {@link ByteBuffer#writeInt16}.
         * @function
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
         * @throws {TypeError} If `offset` or `value` is not a valid number
         * @throws {RangeError} If `offset` is out of bounds
         * @expose
         */
        ByteBufferPrototype.writeShort = ByteBufferPrototype.writeInt16;

        /**
         * Reads a 16bit signed integer.
         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
         * @returns {number} Value read
         * @throws {TypeError} If `offset` is not a valid number
         * @throws {RangeError} If `offset` is out of bounds
         * @expose
         */
        ByteBufferPrototype.readInt16 = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 2 + ") <= " + this.buffer.byteLength);
          }
          var value = 0;
          if (this.littleEndian) {
            value = this.view[offset];
            value |= this.view[offset + 1] << 8;
          } else {
            value = this.view[offset] << 8;
            value |= this.view[offset + 1];
          }
          if ((value & 0x8000) === 0x8000) value = -(0xFFFF - value + 1); // Cast to signed
          if (relative) this.offset += 2;
          return value;
        };

        /**
         * Reads a 16bit signed integer. This is an alias of {@link ByteBuffer#readInt16}.
         * @function
         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
         * @returns {number} Value read
         * @throws {TypeError} If `offset` is not a valid number
         * @throws {RangeError} If `offset` is out of bounds
         * @expose
         */
        ByteBufferPrototype.readShort = ByteBufferPrototype.readInt16;

        /**
         * Writes a 16bit unsigned integer.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
         * @throws {TypeError} If `offset` or `value` is not a valid number
         * @throws {RangeError} If `offset` is out of bounds
         * @expose
         */
        ByteBufferPrototype.writeUint16 = function (value, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
            value >>>= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          offset += 2;
          var capacity3 = this.buffer.byteLength;
          if (offset > capacity3) this.resize((capacity3 *= 2) > offset ? capacity3 : offset);
          offset -= 2;
          if (this.littleEndian) {
            this.view[offset + 1] = (value & 0xFF00) >>> 8;
            this.view[offset] = value & 0x00FF;
          } else {
            this.view[offset] = (value & 0xFF00) >>> 8;
            this.view[offset + 1] = value & 0x00FF;
          }
          if (relative) this.offset += 2;
          return this;
        };

        /**
         * Writes a 16bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint16}.
         * @function
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
         * @throws {TypeError} If `offset` or `value` is not a valid number
         * @throws {RangeError} If `offset` is out of bounds
         * @expose
         */
        ByteBufferPrototype.writeUInt16 = ByteBufferPrototype.writeUint16;

        /**
         * Reads a 16bit unsigned integer.
         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
         * @returns {number} Value read
         * @throws {TypeError} If `offset` is not a valid number
         * @throws {RangeError} If `offset` is out of bounds
         * @expose
         */
        ByteBufferPrototype.readUint16 = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 2 + ") <= " + this.buffer.byteLength);
          }
          var value = 0;
          if (this.littleEndian) {
            value = this.view[offset];
            value |= this.view[offset + 1] << 8;
          } else {
            value = this.view[offset] << 8;
            value |= this.view[offset + 1];
          }
          if (relative) this.offset += 2;
          return value;
        };

        /**
         * Reads a 16bit unsigned integer. This is an alias of {@link ByteBuffer#readUint16}.
         * @function
         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `2` if omitted.
         * @returns {number} Value read
         * @throws {TypeError} If `offset` is not a valid number
         * @throws {RangeError} If `offset` is out of bounds
         * @expose
         */
        ByteBufferPrototype.readUInt16 = ByteBufferPrototype.readUint16;

        // types/ints/int32

        /**
         * Writes a 32bit signed integer.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @expose
         */
        ByteBufferPrototype.writeInt32 = function (value, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
            value |= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          offset += 4;
          var capacity4 = this.buffer.byteLength;
          if (offset > capacity4) this.resize((capacity4 *= 2) > offset ? capacity4 : offset);
          offset -= 4;
          if (this.littleEndian) {
            this.view[offset + 3] = value >>> 24 & 0xFF;
            this.view[offset + 2] = value >>> 16 & 0xFF;
            this.view[offset + 1] = value >>> 8 & 0xFF;
            this.view[offset] = value & 0xFF;
          } else {
            this.view[offset] = value >>> 24 & 0xFF;
            this.view[offset + 1] = value >>> 16 & 0xFF;
            this.view[offset + 2] = value >>> 8 & 0xFF;
            this.view[offset + 3] = value & 0xFF;
          }
          if (relative) this.offset += 4;
          return this;
        };

        /**
         * Writes a 32bit signed integer. This is an alias of {@link ByteBuffer#writeInt32}.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @expose
         */
        ByteBufferPrototype.writeInt = ByteBufferPrototype.writeInt32;

        /**
         * Reads a 32bit signed integer.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @returns {number} Value read
         * @expose
         */
        ByteBufferPrototype.readInt32 = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 4 + ") <= " + this.buffer.byteLength);
          }
          var value = 0;
          if (this.littleEndian) {
            value = this.view[offset + 2] << 16;
            value |= this.view[offset + 1] << 8;
            value |= this.view[offset];
            value += this.view[offset + 3] << 24 >>> 0;
          } else {
            value = this.view[offset + 1] << 16;
            value |= this.view[offset + 2] << 8;
            value |= this.view[offset + 3];
            value += this.view[offset] << 24 >>> 0;
          }
          value |= 0; // Cast to signed
          if (relative) this.offset += 4;
          return value;
        };

        /**
         * Reads a 32bit signed integer. This is an alias of {@link ByteBuffer#readInt32}.
         * @param {number=} offset Offset to read from. Will use and advance {@link ByteBuffer#offset} by `4` if omitted.
         * @returns {number} Value read
         * @expose
         */
        ByteBufferPrototype.readInt = ByteBufferPrototype.readInt32;

        /**
         * Writes a 32bit unsigned integer.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @expose
         */
        ByteBufferPrototype.writeUint32 = function (value, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
            value >>>= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          offset += 4;
          var capacity5 = this.buffer.byteLength;
          if (offset > capacity5) this.resize((capacity5 *= 2) > offset ? capacity5 : offset);
          offset -= 4;
          if (this.littleEndian) {
            this.view[offset + 3] = value >>> 24 & 0xFF;
            this.view[offset + 2] = value >>> 16 & 0xFF;
            this.view[offset + 1] = value >>> 8 & 0xFF;
            this.view[offset] = value & 0xFF;
          } else {
            this.view[offset] = value >>> 24 & 0xFF;
            this.view[offset + 1] = value >>> 16 & 0xFF;
            this.view[offset + 2] = value >>> 8 & 0xFF;
            this.view[offset + 3] = value & 0xFF;
          }
          if (relative) this.offset += 4;
          return this;
        };

        /**
         * Writes a 32bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint32}.
         * @function
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @expose
         */
        ByteBufferPrototype.writeUInt32 = ByteBufferPrototype.writeUint32;

        /**
         * Reads a 32bit unsigned integer.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @returns {number} Value read
         * @expose
         */
        ByteBufferPrototype.readUint32 = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 4 + ") <= " + this.buffer.byteLength);
          }
          var value = 0;
          if (this.littleEndian) {
            value = this.view[offset + 2] << 16;
            value |= this.view[offset + 1] << 8;
            value |= this.view[offset];
            value += this.view[offset + 3] << 24 >>> 0;
          } else {
            value = this.view[offset + 1] << 16;
            value |= this.view[offset + 2] << 8;
            value |= this.view[offset + 3];
            value += this.view[offset] << 24 >>> 0;
          }
          if (relative) this.offset += 4;
          return value;
        };

        /**
         * Reads a 32bit unsigned integer. This is an alias of {@link ByteBuffer#readUint32}.
         * @function
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @returns {number} Value read
         * @expose
         */
        ByteBufferPrototype.readUInt32 = ByteBufferPrototype.readUint32;

        // types/ints/int64

        if (Long) {

          /**
           * Writes a 64bit signed integer.
           * @param {number|!Long} value Value to write
           * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
           * @returns {!ByteBuffer} this
           * @expose
           */
          ByteBufferPrototype.writeInt64 = function (value, offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
              if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);else if (!(value && value instanceof Long)) throw TypeError("Illegal value: " + value + " (not an integer or Long)");
              if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
              offset >>>= 0;
              if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
            }
            if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);
            offset += 8;
            var capacity6 = this.buffer.byteLength;
            if (offset > capacity6) this.resize((capacity6 *= 2) > offset ? capacity6 : offset);
            offset -= 8;
            var lo = value.low,
                hi = value.high;
            if (this.littleEndian) {
              this.view[offset + 3] = lo >>> 24 & 0xFF;
              this.view[offset + 2] = lo >>> 16 & 0xFF;
              this.view[offset + 1] = lo >>> 8 & 0xFF;
              this.view[offset] = lo & 0xFF;
              offset += 4;
              this.view[offset + 3] = hi >>> 24 & 0xFF;
              this.view[offset + 2] = hi >>> 16 & 0xFF;
              this.view[offset + 1] = hi >>> 8 & 0xFF;
              this.view[offset] = hi & 0xFF;
            } else {
              this.view[offset] = hi >>> 24 & 0xFF;
              this.view[offset + 1] = hi >>> 16 & 0xFF;
              this.view[offset + 2] = hi >>> 8 & 0xFF;
              this.view[offset + 3] = hi & 0xFF;
              offset += 4;
              this.view[offset] = lo >>> 24 & 0xFF;
              this.view[offset + 1] = lo >>> 16 & 0xFF;
              this.view[offset + 2] = lo >>> 8 & 0xFF;
              this.view[offset + 3] = lo & 0xFF;
            }
            if (relative) this.offset += 8;
            return this;
          };

          /**
           * Writes a 64bit signed integer. This is an alias of {@link ByteBuffer#writeInt64}.
           * @param {number|!Long} value Value to write
           * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
           * @returns {!ByteBuffer} this
           * @expose
           */
          ByteBufferPrototype.writeLong = ByteBufferPrototype.writeInt64;

          /**
           * Reads a 64bit signed integer.
           * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
           * @returns {!Long}
           * @expose
           */
          ByteBufferPrototype.readInt64 = function (offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
              if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
              offset >>>= 0;
              if (offset < 0 || offset + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 8 + ") <= " + this.buffer.byteLength);
            }
            var lo = 0,
                hi = 0;
            if (this.littleEndian) {
              lo = this.view[offset + 2] << 16;
              lo |= this.view[offset + 1] << 8;
              lo |= this.view[offset];
              lo += this.view[offset + 3] << 24 >>> 0;
              offset += 4;
              hi = this.view[offset + 2] << 16;
              hi |= this.view[offset + 1] << 8;
              hi |= this.view[offset];
              hi += this.view[offset + 3] << 24 >>> 0;
            } else {
              hi = this.view[offset + 1] << 16;
              hi |= this.view[offset + 2] << 8;
              hi |= this.view[offset + 3];
              hi += this.view[offset] << 24 >>> 0;
              offset += 4;
              lo = this.view[offset + 1] << 16;
              lo |= this.view[offset + 2] << 8;
              lo |= this.view[offset + 3];
              lo += this.view[offset] << 24 >>> 0;
            }
            var value = new Long(lo, hi, false);
            if (relative) this.offset += 8;
            return value;
          };

          /**
           * Reads a 64bit signed integer. This is an alias of {@link ByteBuffer#readInt64}.
           * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
           * @returns {!Long}
           * @expose
           */
          ByteBufferPrototype.readLong = ByteBufferPrototype.readInt64;

          /**
           * Writes a 64bit unsigned integer.
           * @param {number|!Long} value Value to write
           * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
           * @returns {!ByteBuffer} this
           * @expose
           */
          ByteBufferPrototype.writeUint64 = function (value, offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
              if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);else if (!(value && value instanceof Long)) throw TypeError("Illegal value: " + value + " (not an integer or Long)");
              if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
              offset >>>= 0;
              if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
            }
            if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);
            offset += 8;
            var capacity7 = this.buffer.byteLength;
            if (offset > capacity7) this.resize((capacity7 *= 2) > offset ? capacity7 : offset);
            offset -= 8;
            var lo = value.low,
                hi = value.high;
            if (this.littleEndian) {
              this.view[offset + 3] = lo >>> 24 & 0xFF;
              this.view[offset + 2] = lo >>> 16 & 0xFF;
              this.view[offset + 1] = lo >>> 8 & 0xFF;
              this.view[offset] = lo & 0xFF;
              offset += 4;
              this.view[offset + 3] = hi >>> 24 & 0xFF;
              this.view[offset + 2] = hi >>> 16 & 0xFF;
              this.view[offset + 1] = hi >>> 8 & 0xFF;
              this.view[offset] = hi & 0xFF;
            } else {
              this.view[offset] = hi >>> 24 & 0xFF;
              this.view[offset + 1] = hi >>> 16 & 0xFF;
              this.view[offset + 2] = hi >>> 8 & 0xFF;
              this.view[offset + 3] = hi & 0xFF;
              offset += 4;
              this.view[offset] = lo >>> 24 & 0xFF;
              this.view[offset + 1] = lo >>> 16 & 0xFF;
              this.view[offset + 2] = lo >>> 8 & 0xFF;
              this.view[offset + 3] = lo & 0xFF;
            }
            if (relative) this.offset += 8;
            return this;
          };

          /**
           * Writes a 64bit unsigned integer. This is an alias of {@link ByteBuffer#writeUint64}.
           * @function
           * @param {number|!Long} value Value to write
           * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
           * @returns {!ByteBuffer} this
           * @expose
           */
          ByteBufferPrototype.writeUInt64 = ByteBufferPrototype.writeUint64;

          /**
           * Reads a 64bit unsigned integer.
           * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
           * @returns {!Long}
           * @expose
           */
          ByteBufferPrototype.readUint64 = function (offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
              if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
              offset >>>= 0;
              if (offset < 0 || offset + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 8 + ") <= " + this.buffer.byteLength);
            }
            var lo = 0,
                hi = 0;
            if (this.littleEndian) {
              lo = this.view[offset + 2] << 16;
              lo |= this.view[offset + 1] << 8;
              lo |= this.view[offset];
              lo += this.view[offset + 3] << 24 >>> 0;
              offset += 4;
              hi = this.view[offset + 2] << 16;
              hi |= this.view[offset + 1] << 8;
              hi |= this.view[offset];
              hi += this.view[offset + 3] << 24 >>> 0;
            } else {
              hi = this.view[offset + 1] << 16;
              hi |= this.view[offset + 2] << 8;
              hi |= this.view[offset + 3];
              hi += this.view[offset] << 24 >>> 0;
              offset += 4;
              lo = this.view[offset + 1] << 16;
              lo |= this.view[offset + 2] << 8;
              lo |= this.view[offset + 3];
              lo += this.view[offset] << 24 >>> 0;
            }
            var value = new Long(lo, hi, true);
            if (relative) this.offset += 8;
            return value;
          };

          /**
           * Reads a 64bit unsigned integer. This is an alias of {@link ByteBuffer#readUint64}.
           * @function
           * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
           * @returns {!Long}
           * @expose
           */
          ByteBufferPrototype.readUInt64 = ByteBufferPrototype.readUint64;
        } // Long


        // types/floats/float32

        /*
         ieee754 - https://github.com/feross/ieee754
           The MIT License (MIT)
           Copyright (c) Feross Aboukhadijeh
           Permission is hereby granted, free of charge, to any person obtaining a copy
         of this software and associated documentation files (the "Software"), to deal
         in the Software without restriction, including without limitation the rights
         to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         copies of the Software, and to permit persons to whom the Software is
         furnished to do so, subject to the following conditions:
           The above copyright notice and this permission notice shall be included in
         all copies or substantial portions of the Software.
           THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         THE SOFTWARE.
        */

        /**
         * Reads an IEEE754 float from a byte array.
         * @param {!Array} buffer
         * @param {number} offset
         * @param {boolean} isLE
         * @param {number} mLen
         * @param {number} nBytes
         * @returns {number}
         * @inner
         */
        function ieee754_read(buffer, offset, isLE, mLen, nBytes) {
          var e,
              m,
              eLen = nBytes * 8 - mLen - 1,
              eMax = (1 << eLen) - 1,
              eBias = eMax >> 1,
              nBits = -7,
              i = isLE ? nBytes - 1 : 0,
              d = isLE ? -1 : 1,
              s = buffer[offset + i];

          i += d;

          e = s & (1 << -nBits) - 1;
          s >>= -nBits;
          nBits += eLen;
          for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

          m = e & (1 << -nBits) - 1;
          e >>= -nBits;
          nBits += mLen;
          for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

          if (e === 0) {
            e = 1 - eBias;
          } else if (e === eMax) {
            return m ? NaN : (s ? -1 : 1) * Infinity;
          } else {
            m = m + Math.pow(2, mLen);
            e = e - eBias;
          }
          return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
        }

        /**
         * Writes an IEEE754 float to a byte array.
         * @param {!Array} buffer
         * @param {number} value
         * @param {number} offset
         * @param {boolean} isLE
         * @param {number} mLen
         * @param {number} nBytes
         * @inner
         */
        function ieee754_write(buffer, value, offset, isLE, mLen, nBytes) {
          var e,
              m,
              c,
              eLen = nBytes * 8 - mLen - 1,
              eMax = (1 << eLen) - 1,
              eBias = eMax >> 1,
              rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              i = isLE ? 0 : nBytes - 1,
              d = isLE ? 1 : -1,
              s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

          value = Math.abs(value);

          if (isNaN(value) || value === Infinity) {
            m = isNaN(value) ? 1 : 0;
            e = eMax;
          } else {
            e = Math.floor(Math.log(value) / Math.LN2);
            if (value * (c = Math.pow(2, -e)) < 1) {
              e--;
              c *= 2;
            }
            if (e + eBias >= 1) {
              value += rt / c;
            } else {
              value += rt * Math.pow(2, 1 - eBias);
            }
            if (value * c >= 2) {
              e++;
              c /= 2;
            }

            if (e + eBias >= eMax) {
              m = 0;
              e = eMax;
            } else if (e + eBias >= 1) {
              m = (value * c - 1) * Math.pow(2, mLen);
              e = e + eBias;
            } else {
              m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
              e = 0;
            }
          }

          for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

          e = e << mLen | m;
          eLen += mLen;
          for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

          buffer[offset + i - d] |= s * 128;
        }

        /**
         * Writes a 32bit float.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeFloat32 = function (value, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof value !== 'number') throw TypeError("Illegal value: " + value + " (not a number)");
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          offset += 4;
          var capacity8 = this.buffer.byteLength;
          if (offset > capacity8) this.resize((capacity8 *= 2) > offset ? capacity8 : offset);
          offset -= 4;
          ieee754_write(this.view, value, offset, this.littleEndian, 23, 4);
          if (relative) this.offset += 4;
          return this;
        };

        /**
         * Writes a 32bit float. This is an alias of {@link ByteBuffer#writeFloat32}.
         * @function
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeFloat = ByteBufferPrototype.writeFloat32;

        /**
         * Reads a 32bit float.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @returns {number}
         * @expose
         */
        ByteBufferPrototype.readFloat32 = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 4 + ") <= " + this.buffer.byteLength);
          }
          var value = ieee754_read(this.view, offset, this.littleEndian, 23, 4);
          if (relative) this.offset += 4;
          return value;
        };

        /**
         * Reads a 32bit float. This is an alias of {@link ByteBuffer#readFloat32}.
         * @function
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
         * @returns {number}
         * @expose
         */
        ByteBufferPrototype.readFloat = ByteBufferPrototype.readFloat32;

        // types/floats/float64

        /**
         * Writes a 64bit float.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeFloat64 = function (value, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof value !== 'number') throw TypeError("Illegal value: " + value + " (not a number)");
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          offset += 8;
          var capacity9 = this.buffer.byteLength;
          if (offset > capacity9) this.resize((capacity9 *= 2) > offset ? capacity9 : offset);
          offset -= 8;
          ieee754_write(this.view, value, offset, this.littleEndian, 52, 8);
          if (relative) this.offset += 8;
          return this;
        };

        /**
         * Writes a 64bit float. This is an alias of {@link ByteBuffer#writeFloat64}.
         * @function
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.writeDouble = ByteBufferPrototype.writeFloat64;

        /**
         * Reads a 64bit float.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {number}
         * @expose
         */
        ByteBufferPrototype.readFloat64 = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 8 + ") <= " + this.buffer.byteLength);
          }
          var value = ieee754_read(this.view, offset, this.littleEndian, 52, 8);
          if (relative) this.offset += 8;
          return value;
        };

        /**
         * Reads a 64bit float. This is an alias of {@link ByteBuffer#readFloat64}.
         * @function
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `8` if omitted.
         * @returns {number}
         * @expose
         */
        ByteBufferPrototype.readDouble = ByteBufferPrototype.readFloat64;

        // types/varints/varint32

        /**
         * Maximum number of bytes required to store a 32bit base 128 variable-length integer.
         * @type {number}
         * @const
         * @expose
         */
        ByteBuffer.MAX_VARINT32_BYTES = 5;

        /**
         * Calculates the actual number of bytes required to store a 32bit base 128 variable-length integer.
         * @param {number} value Value to encode
         * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT32_BYTES}
         * @expose
         */
        ByteBuffer.calculateVarint32 = function (value) {
          // ref: src/google/protobuf/io/coded_stream.cc
          value = value >>> 0;
          if (value < 1 << 7) return 1;else if (value < 1 << 14) return 2;else if (value < 1 << 21) return 3;else if (value < 1 << 28) return 4;else return 5;
        };

        /**
         * Zigzag encodes a signed 32bit integer so that it can be effectively used with varint encoding.
         * @param {number} n Signed 32bit integer
         * @returns {number} Unsigned zigzag encoded 32bit integer
         * @expose
         */
        ByteBuffer.zigZagEncode32 = function (n) {
          return ((n |= 0) << 1 ^ n >> 31) >>> 0; // ref: src/google/protobuf/wire_format_lite.h
        };

        /**
         * Decodes a zigzag encoded signed 32bit integer.
         * @param {number} n Unsigned zigzag encoded 32bit integer
         * @returns {number} Signed 32bit integer
         * @expose
         */
        ByteBuffer.zigZagDecode32 = function (n) {
          return n >>> 1 ^ -(n & 1) | 0; // // ref: src/google/protobuf/wire_format_lite.h
        };

        /**
         * Writes a 32bit base 128 variable-length integer.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted.
         * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
         * @expose
         */
        ByteBufferPrototype.writeVarint32 = function (value, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
            value |= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          var size = ByteBuffer.calculateVarint32(value),
              b;
          offset += size;
          var capacity10 = this.buffer.byteLength;
          if (offset > capacity10) this.resize((capacity10 *= 2) > offset ? capacity10 : offset);
          offset -= size;
          value >>>= 0;
          while (value >= 0x80) {
            b = value & 0x7f | 0x80;
            this.view[offset++] = b;
            value >>>= 7;
          }
          this.view[offset++] = value;
          if (relative) {
            this.offset = offset;
            return this;
          }
          return size;
        };

        /**
         * Writes a zig-zag encoded (signed) 32bit base 128 variable-length integer.
         * @param {number} value Value to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted.
         * @returns {!ByteBuffer|number} this if `offset` is omitted, else the actual number of bytes written
         * @expose
         */
        ByteBufferPrototype.writeVarint32ZigZag = function (value, offset) {
          return this.writeVarint32(ByteBuffer.zigZagEncode32(value), offset);
        };

        /**
         * Reads a 32bit base 128 variable-length integer.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted.
         * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
         *  and the actual number of bytes read.
         * @throws {Error} If it's not a valid varint. Has a property `truncated = true` if there is not enough data available
         *  to fully decode the varint.
         * @expose
         */
        ByteBufferPrototype.readVarint32 = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
          }
          var c = 0,
              value = 0 >>> 0,
              b;
          do {
            if (!this.noAssert && offset > this.limit) {
              var err = Error("Truncated");
              err['truncated'] = true;
              throw err;
            }
            b = this.view[offset++];
            if (c < 5) value |= (b & 0x7f) << 7 * c;
            ++c;
          } while ((b & 0x80) !== 0);
          value |= 0;
          if (relative) {
            this.offset = offset;
            return value;
          }
          return {
            "value": value,
            "length": c
          };
        };

        /**
         * Reads a zig-zag encoded (signed) 32bit base 128 variable-length integer.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted.
         * @returns {number|!{value: number, length: number}} The value read if offset is omitted, else the value read
         *  and the actual number of bytes read.
         * @throws {Error} If it's not a valid varint
         * @expose
         */
        ByteBufferPrototype.readVarint32ZigZag = function (offset) {
          var val = this.readVarint32(offset);
          if (typeof val === 'object') val["value"] = ByteBuffer.zigZagDecode32(val["value"]);else val = ByteBuffer.zigZagDecode32(val);
          return val;
        };

        // types/varints/varint64

        if (Long) {

          /**
           * Maximum number of bytes required to store a 64bit base 128 variable-length integer.
           * @type {number}
           * @const
           * @expose
           */
          ByteBuffer.MAX_VARINT64_BYTES = 10;

          /**
           * Calculates the actual number of bytes required to store a 64bit base 128 variable-length integer.
           * @param {number|!Long} value Value to encode
           * @returns {number} Number of bytes required. Capped to {@link ByteBuffer.MAX_VARINT64_BYTES}
           * @expose
           */
          ByteBuffer.calculateVarint64 = function (value) {
            if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);
            // ref: src/google/protobuf/io/coded_stream.cc
            var part0 = value.toInt() >>> 0,
                part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
                part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
            if (part2 == 0) {
              if (part1 == 0) {
                if (part0 < 1 << 14) return part0 < 1 << 7 ? 1 : 2;else return part0 < 1 << 21 ? 3 : 4;
              } else {
                if (part1 < 1 << 14) return part1 < 1 << 7 ? 5 : 6;else return part1 < 1 << 21 ? 7 : 8;
              }
            } else return part2 < 1 << 7 ? 9 : 10;
          };

          /**
           * Zigzag encodes a signed 64bit integer so that it can be effectively used with varint encoding.
           * @param {number|!Long} value Signed long
           * @returns {!Long} Unsigned zigzag encoded long
           * @expose
           */
          ByteBuffer.zigZagEncode64 = function (value) {
            if (typeof value === 'number') value = Long.fromNumber(value, false);else if (typeof value === 'string') value = Long.fromString(value, false);else if (value.unsigned !== false) value = value.toSigned();
            // ref: src/google/protobuf/wire_format_lite.h
            return value.shiftLeft(1).xor(value.shiftRight(63)).toUnsigned();
          };

          /**
           * Decodes a zigzag encoded signed 64bit integer.
           * @param {!Long|number} value Unsigned zigzag encoded long or JavaScript number
           * @returns {!Long} Signed long
           * @expose
           */
          ByteBuffer.zigZagDecode64 = function (value) {
            if (typeof value === 'number') value = Long.fromNumber(value, false);else if (typeof value === 'string') value = Long.fromString(value, false);else if (value.unsigned !== false) value = value.toSigned();
            // ref: src/google/protobuf/wire_format_lite.h
            return value.shiftRightUnsigned(1).xor(value.and(Long.ONE).toSigned().negate()).toSigned();
          };

          /**
           * Writes a 64bit base 128 variable-length integer.
           * @param {number|Long} value Value to write
           * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
           *  written if omitted.
           * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
           * @expose
           */
          ByteBufferPrototype.writeVarint64 = function (value, offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
              if (typeof value === 'number') value = Long.fromNumber(value);else if (typeof value === 'string') value = Long.fromString(value);else if (!(value && value instanceof Long)) throw TypeError("Illegal value: " + value + " (not an integer or Long)");
              if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
              offset >>>= 0;
              if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
            }
            if (typeof value === 'number') value = Long.fromNumber(value, false);else if (typeof value === 'string') value = Long.fromString(value, false);else if (value.unsigned !== false) value = value.toSigned();
            var size = ByteBuffer.calculateVarint64(value),
                part0 = value.toInt() >>> 0,
                part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
                part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
            offset += size;
            var capacity11 = this.buffer.byteLength;
            if (offset > capacity11) this.resize((capacity11 *= 2) > offset ? capacity11 : offset);
            offset -= size;
            switch (size) {
              case 10:
                this.view[offset + 9] = part2 >>> 7 & 0x01;
              case 9:
                this.view[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;
              case 8:
                this.view[offset + 7] = size !== 8 ? part1 >>> 21 | 0x80 : part1 >>> 21 & 0x7F;
              case 7:
                this.view[offset + 6] = size !== 7 ? part1 >>> 14 | 0x80 : part1 >>> 14 & 0x7F;
              case 6:
                this.view[offset + 5] = size !== 6 ? part1 >>> 7 | 0x80 : part1 >>> 7 & 0x7F;
              case 5:
                this.view[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;
              case 4:
                this.view[offset + 3] = size !== 4 ? part0 >>> 21 | 0x80 : part0 >>> 21 & 0x7F;
              case 3:
                this.view[offset + 2] = size !== 3 ? part0 >>> 14 | 0x80 : part0 >>> 14 & 0x7F;
              case 2:
                this.view[offset + 1] = size !== 2 ? part0 >>> 7 | 0x80 : part0 >>> 7 & 0x7F;
              case 1:
                this.view[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
            }
            if (relative) {
              this.offset += size;
              return this;
            } else {
              return size;
            }
          };

          /**
           * Writes a zig-zag encoded 64bit base 128 variable-length integer.
           * @param {number|Long} value Value to write
           * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
           *  written if omitted.
           * @returns {!ByteBuffer|number} `this` if offset is omitted, else the actual number of bytes written.
           * @expose
           */
          ByteBufferPrototype.writeVarint64ZigZag = function (value, offset) {
            return this.writeVarint64(ByteBuffer.zigZagEncode64(value), offset);
          };

          /**
           * Reads a 64bit base 128 variable-length integer. Requires Long.js.
           * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
           *  read if omitted.
           * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
           *  the actual number of bytes read.
           * @throws {Error} If it's not a valid varint
           * @expose
           */
          ByteBufferPrototype.readVarint64 = function (offset) {
            var relative = typeof offset === 'undefined';
            if (relative) offset = this.offset;
            if (!this.noAssert) {
              if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
              offset >>>= 0;
              if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
            }
            // ref: src/google/protobuf/io/coded_stream.cc
            var start = offset,
                part0 = 0,
                part1 = 0,
                part2 = 0,
                b = 0;
            b = this.view[offset++];part0 = b & 0x7F;if (b & 0x80) {
              b = this.view[offset++];part0 |= (b & 0x7F) << 7;if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                b = this.view[offset++];part0 |= (b & 0x7F) << 14;if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                  b = this.view[offset++];part0 |= (b & 0x7F) << 21;if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                    b = this.view[offset++];part1 = b & 0x7F;if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                      b = this.view[offset++];part1 |= (b & 0x7F) << 7;if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                        b = this.view[offset++];part1 |= (b & 0x7F) << 14;if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                          b = this.view[offset++];part1 |= (b & 0x7F) << 21;if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                            b = this.view[offset++];part2 = b & 0x7F;if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                              b = this.view[offset++];part2 |= (b & 0x7F) << 7;if (b & 0x80 || this.noAssert && typeof b === 'undefined') {
                                throw Error("Buffer overrun");
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            var value = Long.fromBits(part0 | part1 << 28, part1 >>> 4 | part2 << 24, false);
            if (relative) {
              this.offset = offset;
              return value;
            } else {
              return {
                'value': value,
                'length': offset - start
              };
            }
          };

          /**
           * Reads a zig-zag encoded 64bit base 128 variable-length integer. Requires Long.js.
           * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
           *  read if omitted.
           * @returns {!Long|!{value: Long, length: number}} The value read if offset is omitted, else the value read and
           *  the actual number of bytes read.
           * @throws {Error} If it's not a valid varint
           * @expose
           */
          ByteBufferPrototype.readVarint64ZigZag = function (offset) {
            var val = this.readVarint64(offset);
            if (val && val['value'] instanceof Long) val["value"] = ByteBuffer.zigZagDecode64(val["value"]);else val = ByteBuffer.zigZagDecode64(val);
            return val;
          };
        } // Long


        // types/strings/cstring

        /**
         * Writes a NULL-terminated UTF8 encoded string. For this to work the specified string must not contain any NULL
         *  characters itself.
         * @param {string} str String to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  contained in `str` + 1 if omitted.
         * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written
         * @expose
         */
        ByteBufferPrototype.writeCString = function (str, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          var i,
              k = str.length;
          if (!this.noAssert) {
            if (typeof str !== 'string') throw TypeError("Illegal str: Not a string");
            for (i = 0; i < k; ++i) {
              if (str.charCodeAt(i) === 0) throw RangeError("Illegal str: Contains NULL-characters");
            }
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          // UTF8 strings do not contain zero bytes in between except for the zero character, so:
          k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
          offset += k + 1;
          var capacity12 = this.buffer.byteLength;
          if (offset > capacity12) this.resize((capacity12 *= 2) > offset ? capacity12 : offset);
          offset -= k + 1;
          utfx.encodeUTF16toUTF8(stringSource(str), function (b) {
            this.view[offset++] = b;
          }.bind(this));
          this.view[offset++] = 0;
          if (relative) {
            this.offset = offset;
            return this;
          }
          return k;
        };

        /**
         * Reads a NULL-terminated UTF8 encoded string. For this to work the string read must not contain any NULL characters
         *  itself.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  read if omitted.
         * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
         *  read and the actual number of bytes read.
         * @expose
         */
        ByteBufferPrototype.readCString = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
          }
          var start = offset,
              temp;
          // UTF8 strings do not contain zero bytes in between except for the zero character itself, so:
          var sd,
              b = -1;
          utfx.decodeUTF8toUTF16(function () {
            if (b === 0) return null;
            if (offset >= this.limit) throw RangeError("Illegal range: Truncated data, " + offset + " < " + this.limit);
            b = this.view[offset++];
            return b === 0 ? null : b;
          }.bind(this), sd = stringDestination(), true);
          if (relative) {
            this.offset = offset;
            return sd();
          } else {
            return {
              "string": sd(),
              "length": offset - start
            };
          }
        };

        // types/strings/istring

        /**
         * Writes a length as uint32 prefixed UTF8 encoded string.
         * @param {string} str String to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted.
         * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
         * @expose
         * @see ByteBuffer#writeVarint32
         */
        ByteBufferPrototype.writeIString = function (str, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof str !== 'string') throw TypeError("Illegal str: Not a string");
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          var start = offset,
              k;
          k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
          offset += 4 + k;
          var capacity13 = this.buffer.byteLength;
          if (offset > capacity13) this.resize((capacity13 *= 2) > offset ? capacity13 : offset);
          offset -= 4 + k;
          if (this.littleEndian) {
            this.view[offset + 3] = k >>> 24 & 0xFF;
            this.view[offset + 2] = k >>> 16 & 0xFF;
            this.view[offset + 1] = k >>> 8 & 0xFF;
            this.view[offset] = k & 0xFF;
          } else {
            this.view[offset] = k >>> 24 & 0xFF;
            this.view[offset + 1] = k >>> 16 & 0xFF;
            this.view[offset + 2] = k >>> 8 & 0xFF;
            this.view[offset + 3] = k & 0xFF;
          }
          offset += 4;
          utfx.encodeUTF16toUTF8(stringSource(str), function (b) {
            this.view[offset++] = b;
          }.bind(this));
          if (offset !== start + 4 + k) throw RangeError("Illegal range: Truncated data, " + offset + " == " + (offset + 4 + k));
          if (relative) {
            this.offset = offset;
            return this;
          }
          return offset - start;
        };

        /**
         * Reads a length as uint32 prefixed UTF8 encoded string.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  read if omitted.
         * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
         *  read and the actual number of bytes read.
         * @expose
         * @see ByteBuffer#readVarint32
         */
        ByteBufferPrototype.readIString = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 4 + ") <= " + this.buffer.byteLength);
          }
          var start = offset;
          var len = this.readUint32(offset);
          var str = this.readUTF8String(len, ByteBuffer.METRICS_BYTES, offset += 4);
          offset += str['length'];
          if (relative) {
            this.offset = offset;
            return str['string'];
          } else {
            return {
              'string': str['string'],
              'length': offset - start
            };
          }
        };

        // types/strings/utf8string

        /**
         * Metrics representing number of UTF8 characters. Evaluates to `c`.
         * @type {string}
         * @const
         * @expose
         */
        ByteBuffer.METRICS_CHARS = 'c';

        /**
         * Metrics representing number of bytes. Evaluates to `b`.
         * @type {string}
         * @const
         * @expose
         */
        ByteBuffer.METRICS_BYTES = 'b';

        /**
         * Writes an UTF8 encoded string.
         * @param {string} str String to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
         * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
         * @expose
         */
        ByteBufferPrototype.writeUTF8String = function (str, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          var k;
          var start = offset;
          k = utfx.calculateUTF16asUTF8(stringSource(str))[1];
          offset += k;
          var capacity14 = this.buffer.byteLength;
          if (offset > capacity14) this.resize((capacity14 *= 2) > offset ? capacity14 : offset);
          offset -= k;
          utfx.encodeUTF16toUTF8(stringSource(str), function (b) {
            this.view[offset++] = b;
          }.bind(this));
          if (relative) {
            this.offset = offset;
            return this;
          }
          return offset - start;
        };

        /**
         * Writes an UTF8 encoded string. This is an alias of {@link ByteBuffer#writeUTF8String}.
         * @function
         * @param {string} str String to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} if omitted.
         * @returns {!ByteBuffer|number} this if offset is omitted, else the actual number of bytes written.
         * @expose
         */
        ByteBufferPrototype.writeString = ByteBufferPrototype.writeUTF8String;

        /**
         * Calculates the number of UTF8 characters of a string. JavaScript itself uses UTF-16, so that a string's
         *  `length` property does not reflect its actual UTF8 size if it contains code points larger than 0xFFFF.
         * @param {string} str String to calculate
         * @returns {number} Number of UTF8 characters
         * @expose
         */
        ByteBuffer.calculateUTF8Chars = function (str) {
          return utfx.calculateUTF16asUTF8(stringSource(str))[0];
        };

        /**
         * Calculates the number of UTF8 bytes of a string.
         * @param {string} str String to calculate
         * @returns {number} Number of UTF8 bytes
         * @expose
         */
        ByteBuffer.calculateUTF8Bytes = function (str) {
          return utfx.calculateUTF16asUTF8(stringSource(str))[1];
        };

        /**
         * Calculates the number of UTF8 bytes of a string. This is an alias of {@link ByteBuffer.calculateUTF8Bytes}.
         * @function
         * @param {string} str String to calculate
         * @returns {number} Number of UTF8 bytes
         * @expose
         */
        ByteBuffer.calculateString = ByteBuffer.calculateUTF8Bytes;

        /**
         * Reads an UTF8 encoded string.
         * @param {number} length Number of characters or bytes to read.
         * @param {string=} metrics Metrics specifying what `length` is meant to count. Defaults to
         *  {@link ByteBuffer.METRICS_CHARS}.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  read if omitted.
         * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
         *  read and the actual number of bytes read.
         * @expose
         */
        ByteBufferPrototype.readUTF8String = function (length, metrics, offset) {
          if (typeof metrics === 'number') {
            offset = metrics;
            metrics = undefined;
          }
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (typeof metrics === 'undefined') metrics = ByteBuffer.METRICS_CHARS;
          if (!this.noAssert) {
            if (typeof length !== 'number' || length % 1 !== 0) throw TypeError("Illegal length: " + length + " (not an integer)");
            length |= 0;
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          var i = 0,
              start = offset,
              sd;
          if (metrics === ByteBuffer.METRICS_CHARS) {
            // The same for node and the browser
            sd = stringDestination();
            utfx.decodeUTF8(function () {
              return i < length && offset < this.limit ? this.view[offset++] : null;
            }.bind(this), function (cp) {
              ++i;utfx.UTF8toUTF16(cp, sd);
            });
            if (i !== length) throw RangeError("Illegal range: Truncated data, " + i + " == " + length);
            if (relative) {
              this.offset = offset;
              return sd();
            } else {
              return {
                "string": sd(),
                "length": offset - start
              };
            }
          } else if (metrics === ByteBuffer.METRICS_BYTES) {
            if (!this.noAssert) {
              if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
              offset >>>= 0;
              if (offset < 0 || offset + length > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + length + ") <= " + this.buffer.byteLength);
            }
            var k = offset + length;
            utfx.decodeUTF8toUTF16(function () {
              return offset < k ? this.view[offset++] : null;
            }.bind(this), sd = stringDestination(), this.noAssert);
            if (offset !== k) throw RangeError("Illegal range: Truncated data, " + offset + " == " + k);
            if (relative) {
              this.offset = offset;
              return sd();
            } else {
              return {
                'string': sd(),
                'length': offset - start
              };
            }
          } else throw TypeError("Unsupported metrics: " + metrics);
        };

        /**
         * Reads an UTF8 encoded string. This is an alias of {@link ByteBuffer#readUTF8String}.
         * @function
         * @param {number} length Number of characters or bytes to read
         * @param {number=} metrics Metrics specifying what `n` is meant to count. Defaults to
         *  {@link ByteBuffer.METRICS_CHARS}.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  read if omitted.
         * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
         *  read and the actual number of bytes read.
         * @expose
         */
        ByteBufferPrototype.readString = ByteBufferPrototype.readUTF8String;

        // types/strings/vstring

        /**
         * Writes a length as varint32 prefixed UTF8 encoded string.
         * @param {string} str String to write
         * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted.
         * @returns {!ByteBuffer|number} `this` if `offset` is omitted, else the actual number of bytes written
         * @expose
         * @see ByteBuffer#writeVarint32
         */
        ByteBufferPrototype.writeVString = function (str, offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof str !== 'string') throw TypeError("Illegal str: Not a string");
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          var start = offset,
              k,
              l;
          k = utfx.calculateUTF16asUTF8(stringSource(str), this.noAssert)[1];
          l = ByteBuffer.calculateVarint32(k);
          offset += l + k;
          var capacity15 = this.buffer.byteLength;
          if (offset > capacity15) this.resize((capacity15 *= 2) > offset ? capacity15 : offset);
          offset -= l + k;
          offset += this.writeVarint32(k, offset);
          utfx.encodeUTF16toUTF8(stringSource(str), function (b) {
            this.view[offset++] = b;
          }.bind(this));
          if (offset !== start + k + l) throw RangeError("Illegal range: Truncated data, " + offset + " == " + (offset + k + l));
          if (relative) {
            this.offset = offset;
            return this;
          }
          return offset - start;
        };

        /**
         * Reads a length as varint32 prefixed UTF8 encoded string.
         * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  read if omitted.
         * @returns {string|!{string: string, length: number}} The string read if offset is omitted, else the string
         *  read and the actual number of bytes read.
         * @expose
         * @see ByteBuffer#readVarint32
         */
        ByteBufferPrototype.readVString = function (offset) {
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 1 + ") <= " + this.buffer.byteLength);
          }
          var start = offset;
          var len = this.readVarint32(offset);
          var str = this.readUTF8String(len['value'], ByteBuffer.METRICS_BYTES, offset += len['length']);
          offset += str['length'];
          if (relative) {
            this.offset = offset;
            return str['string'];
          } else {
            return {
              'string': str['string'],
              'length': offset - start
            };
          }
        };

        /**
         * Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended
         *  data's length.
         * @param {!ByteBuffer|!ArrayBuffer|!Uint8Array|string} source Data to append. If `source` is a ByteBuffer, its offsets
         *  will be modified according to the performed read operation.
         * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
         * @param {number=} offset Offset to append at. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         * @example A relative `<01 02>03.append(<04 05>)` will result in `<01 02 04 05>, 04 05|`
         * @example An absolute `<01 02>03.append(04 05>, 1)` will result in `<01 04>05, 04 05|`
         */
        ByteBufferPrototype.append = function (source, encoding, offset) {
          if (typeof encoding === 'number' || typeof encoding !== 'string') {
            offset = encoding;
            encoding = undefined;
          }
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          if (!(source instanceof ByteBuffer)) source = ByteBuffer.wrap(source, encoding);
          var length = source.limit - source.offset;
          if (length <= 0) return this; // Nothing to append
          offset += length;
          var capacity16 = this.buffer.byteLength;
          if (offset > capacity16) this.resize((capacity16 *= 2) > offset ? capacity16 : offset);
          offset -= length;
          this.view.set(source.view.subarray(source.offset, source.limit), offset);
          source.offset += length;
          if (relative) this.offset += length;
          return this;
        };

        /**
         * Appends this ByteBuffer's contents to another ByteBuffer. This will overwrite any contents at and after the
            specified offset up to the length of this ByteBuffer's data.
         * @param {!ByteBuffer} target Target ByteBuffer
         * @param {number=} offset Offset to append to. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  read if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         * @see ByteBuffer#append
         */
        ByteBufferPrototype.appendTo = function (target, offset) {
          target.append(this, offset);
          return this;
        };

        /**
         * Enables or disables assertions of argument types and offsets. Assertions are enabled by default but you can opt to
         *  disable them if your code already makes sure that everything is valid.
         * @param {boolean} assert `true` to enable assertions, otherwise `false`
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.assert = function (assert) {
          this.noAssert = !assert;
          return this;
        };

        /**
         * Gets the capacity of this ByteBuffer's backing buffer.
         * @returns {number} Capacity of the backing buffer
         * @expose
         */
        ByteBufferPrototype.capacity = function () {
          return this.buffer.byteLength;
        };
        /**
         * Clears this ByteBuffer's offsets by setting {@link ByteBuffer#offset} to `0` and {@link ByteBuffer#limit} to the
         *  backing buffer's capacity. Discards {@link ByteBuffer#markedOffset}.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.clear = function () {
          this.offset = 0;
          this.limit = this.buffer.byteLength;
          this.markedOffset = -1;
          return this;
        };

        /**
         * Creates a cloned instance of this ByteBuffer, preset with this ByteBuffer's values for {@link ByteBuffer#offset},
         *  {@link ByteBuffer#markedOffset} and {@link ByteBuffer#limit}.
         * @param {boolean=} copy Whether to copy the backing buffer or to return another view on the same, defaults to `false`
         * @returns {!ByteBuffer} Cloned instance
         * @expose
         */
        ByteBufferPrototype.clone = function (copy) {
          var bb = new ByteBuffer(0, this.littleEndian, this.noAssert);
          if (copy) {
            bb.buffer = new ArrayBuffer(this.buffer.byteLength);
            bb.view = new Uint8Array(bb.buffer);
          } else {
            bb.buffer = this.buffer;
            bb.view = this.view;
          }
          bb.offset = this.offset;
          bb.markedOffset = this.markedOffset;
          bb.limit = this.limit;
          return bb;
        };

        /**
         * Compacts this ByteBuffer to be backed by a {@link ByteBuffer#buffer} of its contents' length. Contents are the bytes
         *  between {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. Will set `offset = 0` and `limit = capacity` and
         *  adapt {@link ByteBuffer#markedOffset} to the same relative position if set.
         * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
         * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.compact = function (begin, end) {
          if (typeof begin === 'undefined') begin = this.offset;
          if (typeof end === 'undefined') end = this.limit;
          if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
          }
          if (begin === 0 && end === this.buffer.byteLength) return this; // Already compacted
          var len = end - begin;
          if (len === 0) {
            this.buffer = EMPTY_BUFFER;
            this.view = null;
            if (this.markedOffset >= 0) this.markedOffset -= begin;
            this.offset = 0;
            this.limit = 0;
            return this;
          }
          var buffer = new ArrayBuffer(len);
          var view = new Uint8Array(buffer);
          view.set(this.view.subarray(begin, end));
          this.buffer = buffer;
          this.view = view;
          if (this.markedOffset >= 0) this.markedOffset -= begin;
          this.offset = 0;
          this.limit = len;
          return this;
        };

        /**
         * Creates a copy of this ByteBuffer's contents. Contents are the bytes between {@link ByteBuffer#offset} and
         *  {@link ByteBuffer#limit}.
         * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
         * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
         * @returns {!ByteBuffer} Copy
         * @expose
         */
        ByteBufferPrototype.copy = function (begin, end) {
          if (typeof begin === 'undefined') begin = this.offset;
          if (typeof end === 'undefined') end = this.limit;
          if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
          }
          if (begin === end) return new ByteBuffer(0, this.littleEndian, this.noAssert);
          var capacity = end - begin,
              bb = new ByteBuffer(capacity, this.littleEndian, this.noAssert);
          bb.offset = 0;
          bb.limit = capacity;
          if (bb.markedOffset >= 0) bb.markedOffset -= begin;
          this.copyTo(bb, 0, begin, end);
          return bb;
        };

        /**
         * Copies this ByteBuffer's contents to another ByteBuffer. Contents are the bytes between {@link ByteBuffer#offset} and
         *  {@link ByteBuffer#limit}.
         * @param {!ByteBuffer} target Target ByteBuffer
         * @param {number=} targetOffset Offset to copy to. Will use and increase the target's {@link ByteBuffer#offset}
         *  by the number of bytes copied if omitted.
         * @param {number=} sourceOffset Offset to start copying from. Will use and increase {@link ByteBuffer#offset} by the
         *  number of bytes copied if omitted.
         * @param {number=} sourceLimit Offset to end copying from, defaults to {@link ByteBuffer#limit}
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.copyTo = function (target, targetOffset, sourceOffset, sourceLimit) {
          var relative, targetRelative;
          if (!this.noAssert) {
            if (!ByteBuffer.isByteBuffer(target)) throw TypeError("Illegal target: Not a ByteBuffer");
          }
          targetOffset = (targetRelative = typeof targetOffset === 'undefined') ? target.offset : targetOffset | 0;
          sourceOffset = (relative = typeof sourceOffset === 'undefined') ? this.offset : sourceOffset | 0;
          sourceLimit = typeof sourceLimit === 'undefined' ? this.limit : sourceLimit | 0;

          if (targetOffset < 0 || targetOffset > target.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + targetOffset + " <= " + target.buffer.byteLength);
          if (sourceOffset < 0 || sourceLimit > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + sourceOffset + " <= " + this.buffer.byteLength);

          var len = sourceLimit - sourceOffset;
          if (len === 0) return target; // Nothing to copy

          target.ensureCapacity(targetOffset + len);

          target.view.set(this.view.subarray(sourceOffset, sourceLimit), targetOffset);

          if (relative) this.offset += len;
          if (targetRelative) target.offset += len;

          return this;
        };

        /**
         * Makes sure that this ByteBuffer is backed by a {@link ByteBuffer#buffer} of at least the specified capacity. If the
         *  current capacity is exceeded, it will be doubled. If double the current capacity is less than the required capacity,
         *  the required capacity will be used instead.
         * @param {number} capacity Required capacity
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.ensureCapacity = function (capacity) {
          var current = this.buffer.byteLength;
          if (current < capacity) return this.resize((current *= 2) > capacity ? current : capacity);
          return this;
        };

        /**
         * Overwrites this ByteBuffer's contents with the specified value. Contents are the bytes between
         *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
         * @param {number|string} value Byte value to fill with. If given as a string, the first character is used.
         * @param {number=} begin Begin offset. Will use and increase {@link ByteBuffer#offset} by the number of bytes
         *  written if omitted. defaults to {@link ByteBuffer#offset}.
         * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
         * @returns {!ByteBuffer} this
         * @expose
         * @example `someByteBuffer.clear().fill(0)` fills the entire backing buffer with zeroes
         */
        ByteBufferPrototype.fill = function (value, begin, end) {
          var relative = typeof begin === 'undefined';
          if (relative) begin = this.offset;
          if (typeof value === 'string' && value.length > 0) value = value.charCodeAt(0);
          if (typeof begin === 'undefined') begin = this.offset;
          if (typeof end === 'undefined') end = this.limit;
          if (!this.noAssert) {
            if (typeof value !== 'number' || value % 1 !== 0) throw TypeError("Illegal value: " + value + " (not an integer)");
            value |= 0;
            if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
          }
          if (begin >= end) return this; // Nothing to fill
          while (begin < end) this.view[begin++] = value;
          if (relative) this.offset = begin;
          return this;
        };

        /**
         * Makes this ByteBuffer ready for a new sequence of write or relative read operations. Sets `limit = offset` and
         *  `offset = 0`. Make sure always to flip a ByteBuffer when all relative read or write operations are complete.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.flip = function () {
          this.limit = this.offset;
          this.offset = 0;
          return this;
        };
        /**
         * Marks an offset on this ByteBuffer to be used later.
         * @param {number=} offset Offset to mark. Defaults to {@link ByteBuffer#offset}.
         * @returns {!ByteBuffer} this
         * @throws {TypeError} If `offset` is not a valid number
         * @throws {RangeError} If `offset` is out of bounds
         * @see ByteBuffer#reset
         * @expose
         */
        ByteBufferPrototype.mark = function (offset) {
          offset = typeof offset === 'undefined' ? this.offset : offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          this.markedOffset = offset;
          return this;
        };
        /**
         * Sets the byte order.
         * @param {boolean} littleEndian `true` for little endian byte order, `false` for big endian
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.order = function (littleEndian) {
          if (!this.noAssert) {
            if (typeof littleEndian !== 'boolean') throw TypeError("Illegal littleEndian: Not a boolean");
          }
          this.littleEndian = !!littleEndian;
          return this;
        };

        /**
         * Switches (to) little endian byte order.
         * @param {boolean=} littleEndian Defaults to `true`, otherwise uses big endian
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.LE = function (littleEndian) {
          this.littleEndian = typeof littleEndian !== 'undefined' ? !!littleEndian : true;
          return this;
        };

        /**
         * Switches (to) big endian byte order.
         * @param {boolean=} bigEndian Defaults to `true`, otherwise uses little endian
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.BE = function (bigEndian) {
          this.littleEndian = typeof bigEndian !== 'undefined' ? !bigEndian : false;
          return this;
        };
        /**
         * Prepends some data to this ByteBuffer. This will overwrite any contents before the specified offset up to the
         *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
         *  will be resized and its contents moved accordingly.
         * @param {!ByteBuffer|string|!ArrayBuffer} source Data to prepend. If `source` is a ByteBuffer, its offset will be
         *  modified according to the performed read operation.
         * @param {(string|number)=} encoding Encoding if `data` is a string ("base64", "hex", "binary", defaults to "utf8")
         * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
         *  prepended if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         * @example A relative `00<01 02 03>.prepend(<04 05>)` results in `<04 05 01 02 03>, 04 05|`
         * @example An absolute `00<01 02 03>.prepend(<04 05>, 2)` results in `04<05 02 03>, 04 05|`
         */
        ByteBufferPrototype.prepend = function (source, encoding, offset) {
          if (typeof encoding === 'number' || typeof encoding !== 'string') {
            offset = encoding;
            encoding = undefined;
          }
          var relative = typeof offset === 'undefined';
          if (relative) offset = this.offset;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: " + offset + " (not an integer)");
            offset >>>= 0;
            if (offset < 0 || offset + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + offset + " (+" + 0 + ") <= " + this.buffer.byteLength);
          }
          if (!(source instanceof ByteBuffer)) source = ByteBuffer.wrap(source, encoding);
          var len = source.limit - source.offset;
          if (len <= 0) return this; // Nothing to prepend
          var diff = len - offset;
          if (diff > 0) {
            // Not enough space before offset, so resize + move
            var buffer = new ArrayBuffer(this.buffer.byteLength + diff);
            var view = new Uint8Array(buffer);
            view.set(this.view.subarray(offset, this.buffer.byteLength), len);
            this.buffer = buffer;
            this.view = view;
            this.offset += diff;
            if (this.markedOffset >= 0) this.markedOffset += diff;
            this.limit += diff;
            offset += diff;
          } else {
            var arrayView = new Uint8Array(this.buffer);
          }
          this.view.set(source.view.subarray(source.offset, source.limit), offset - len);

          source.offset = source.limit;
          if (relative) this.offset -= len;
          return this;
        };

        /**
         * Prepends this ByteBuffer to another ByteBuffer. This will overwrite any contents before the specified offset up to the
         *  prepended data's length. If there is not enough space available before the specified `offset`, the backing buffer
         *  will be resized and its contents moved accordingly.
         * @param {!ByteBuffer} target Target ByteBuffer
         * @param {number=} offset Offset to prepend at. Will use and decrease {@link ByteBuffer#offset} by the number of bytes
         *  prepended if omitted.
         * @returns {!ByteBuffer} this
         * @expose
         * @see ByteBuffer#prepend
         */
        ByteBufferPrototype.prependTo = function (target, offset) {
          target.prepend(this, offset);
          return this;
        };
        /**
         * Prints debug information about this ByteBuffer's contents.
         * @param {function(string)=} out Output function to call, defaults to console.log
         * @expose
         */
        ByteBufferPrototype.printDebug = function (out) {
          if (typeof out !== 'function') out = console.log.bind(console);
          out(this.toString() + "\n" + "-------------------------------------------------------------------\n" + this.toDebug( /* columns */true));
        };

        /**
         * Gets the number of remaining readable bytes. Contents are the bytes between {@link ByteBuffer#offset} and
         *  {@link ByteBuffer#limit}, so this returns `limit - offset`.
         * @returns {number} Remaining readable bytes. May be negative if `offset > limit`.
         * @expose
         */
        ByteBufferPrototype.remaining = function () {
          return this.limit - this.offset;
        };
        /**
         * Resets this ByteBuffer's {@link ByteBuffer#offset}. If an offset has been marked through {@link ByteBuffer#mark}
         *  before, `offset` will be set to {@link ByteBuffer#markedOffset}, which will then be discarded. If no offset has been
         *  marked, sets `offset = 0`.
         * @returns {!ByteBuffer} this
         * @see ByteBuffer#mark
         * @expose
         */
        ByteBufferPrototype.reset = function () {
          if (this.markedOffset >= 0) {
            this.offset = this.markedOffset;
            this.markedOffset = -1;
          } else {
            this.offset = 0;
          }
          return this;
        };
        /**
         * Resizes this ByteBuffer to be backed by a buffer of at least the given capacity. Will do nothing if already that
         *  large or larger.
         * @param {number} capacity Capacity required
         * @returns {!ByteBuffer} this
         * @throws {TypeError} If `capacity` is not a number
         * @throws {RangeError} If `capacity < 0`
         * @expose
         */
        ByteBufferPrototype.resize = function (capacity) {
          if (!this.noAssert) {
            if (typeof capacity !== 'number' || capacity % 1 !== 0) throw TypeError("Illegal capacity: " + capacity + " (not an integer)");
            capacity |= 0;
            if (capacity < 0) throw RangeError("Illegal capacity: 0 <= " + capacity);
          }
          if (this.buffer.byteLength < capacity) {
            var buffer = new ArrayBuffer(capacity);
            var view = new Uint8Array(buffer);
            view.set(this.view);
            this.buffer = buffer;
            this.view = view;
          }
          return this;
        };
        /**
         * Reverses this ByteBuffer's contents.
         * @param {number=} begin Offset to start at, defaults to {@link ByteBuffer#offset}
         * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.reverse = function (begin, end) {
          if (typeof begin === 'undefined') begin = this.offset;
          if (typeof end === 'undefined') end = this.limit;
          if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
          }
          if (begin === end) return this; // Nothing to reverse
          Array.prototype.reverse.call(this.view.subarray(begin, end));
          return this;
        };
        /**
         * Skips the next `length` bytes. This will just advance
         * @param {number} length Number of bytes to skip. May also be negative to move the offset back.
         * @returns {!ByteBuffer} this
         * @expose
         */
        ByteBufferPrototype.skip = function (length) {
          if (!this.noAssert) {
            if (typeof length !== 'number' || length % 1 !== 0) throw TypeError("Illegal length: " + length + " (not an integer)");
            length |= 0;
          }
          var offset = this.offset + length;
          if (!this.noAssert) {
            if (offset < 0 || offset > this.buffer.byteLength) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + length + " <= " + this.buffer.byteLength);
          }
          this.offset = offset;
          return this;
        };

        /**
         * Slices this ByteBuffer by creating a cloned instance with `offset = begin` and `limit = end`.
         * @param {number=} begin Begin offset, defaults to {@link ByteBuffer#offset}.
         * @param {number=} end End offset, defaults to {@link ByteBuffer#limit}.
         * @returns {!ByteBuffer} Clone of this ByteBuffer with slicing applied, backed by the same {@link ByteBuffer#buffer}
         * @expose
         */
        ByteBufferPrototype.slice = function (begin, end) {
          if (typeof begin === 'undefined') begin = this.offset;
          if (typeof end === 'undefined') end = this.limit;
          if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
          }
          var bb = this.clone();
          bb.offset = begin;
          bb.limit = end;
          return bb;
        };
        /**
         * Returns a copy of the backing buffer that contains this ByteBuffer's contents. Contents are the bytes between
         *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}.
         * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory if
         *  possible. Defaults to `false`
         * @returns {!ArrayBuffer} Contents as an ArrayBuffer
         * @expose
         */
        ByteBufferPrototype.toBuffer = function (forceCopy) {
          var offset = this.offset,
              limit = this.limit;
          if (!this.noAssert) {
            if (typeof offset !== 'number' || offset % 1 !== 0) throw TypeError("Illegal offset: Not an integer");
            offset >>>= 0;
            if (typeof limit !== 'number' || limit % 1 !== 0) throw TypeError("Illegal limit: Not an integer");
            limit >>>= 0;
            if (offset < 0 || offset > limit || limit > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + offset + " <= " + limit + " <= " + this.buffer.byteLength);
          }
          // NOTE: It's not possible to have another ArrayBuffer reference the same memory as the backing buffer. This is
          // possible with Uint8Array#subarray only, but we have to return an ArrayBuffer by contract. So:
          if (!forceCopy && offset === 0 && limit === this.buffer.byteLength) return this.buffer;
          if (offset === limit) return EMPTY_BUFFER;
          var buffer = new ArrayBuffer(limit - offset);
          new Uint8Array(buffer).set(new Uint8Array(this.buffer).subarray(offset, limit), 0);
          return buffer;
        };

        /**
         * Returns a raw buffer compacted to contain this ByteBuffer's contents. Contents are the bytes between
         *  {@link ByteBuffer#offset} and {@link ByteBuffer#limit}. This is an alias of {@link ByteBuffer#toBuffer}.
         * @function
         * @param {boolean=} forceCopy If `true` returns a copy, otherwise returns a view referencing the same memory.
         *  Defaults to `false`
         * @returns {!ArrayBuffer} Contents as an ArrayBuffer
         * @expose
         */
        ByteBufferPrototype.toArrayBuffer = ByteBufferPrototype.toBuffer;

        /**
         * Converts the ByteBuffer's contents to a string.
         * @param {string=} encoding Output encoding. Returns an informative string representation if omitted but also allows
         *  direct conversion to "utf8", "hex", "base64" and "binary" encoding. "debug" returns a hex representation with
         *  highlighted offsets.
         * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}
         * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}
         * @returns {string} String representation
         * @throws {Error} If `encoding` is invalid
         * @expose
         */
        ByteBufferPrototype.toString = function (encoding, begin, end) {
          if (typeof encoding === 'undefined') return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
          if (typeof encoding === 'number') encoding = "utf8", begin = encoding, end = begin;
          switch (encoding) {
            case "utf8":
              return this.toUTF8(begin, end);
            case "base64":
              return this.toBase64(begin, end);
            case "hex":
              return this.toHex(begin, end);
            case "binary":
              return this.toBinary(begin, end);
            case "debug":
              return this.toDebug();
            case "columns":
              return this.toColumns();
            default:
              throw Error("Unsupported encoding: " + encoding);
          }
        };

        // lxiv-embeddable

        /**
         * lxiv-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
         * Released under the Apache License, Version 2.0
         * see: https://github.com/dcodeIO/lxiv for details
         */
        var lxiv = function () {
          "use strict";

          /**
           * lxiv namespace.
           * @type {!Object.<string,*>}
           * @exports lxiv
           */

          var lxiv = {};

          /**
           * Character codes for output.
           * @type {!Array.<number>}
           * @inner
           */
          var aout = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47];

          /**
           * Character codes for input.
           * @type {!Array.<number>}
           * @inner
           */
          var ain = [];
          for (var i = 0, k = aout.length; i < k; ++i) ain[aout[i]] = i;

          /**
           * Encodes bytes to base64 char codes.
           * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if
           *  there are no more bytes left.
           * @param {!function(number)} dst Characters destination as a function successively called with each encoded char
           *  code.
           */
          lxiv.encode = function (src, dst) {
            var b, t;
            while ((b = src()) !== null) {
              dst(aout[b >> 2 & 0x3f]);
              t = (b & 0x3) << 4;
              if ((b = src()) !== null) {
                t |= b >> 4 & 0xf;
                dst(aout[(t | b >> 4 & 0xf) & 0x3f]);
                t = (b & 0xf) << 2;
                if ((b = src()) !== null) dst(aout[(t | b >> 6 & 0x3) & 0x3f]), dst(aout[b & 0x3f]);else dst(aout[t & 0x3f]), dst(61);
              } else dst(aout[t & 0x3f]), dst(61), dst(61);
            }
          };

          /**
           * Decodes base64 char codes to bytes.
           * @param {!function():number|null} src Characters source as a function returning the next char code respectively
           *  `null` if there are no more characters left.
           * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
           * @throws {Error} If a character code is invalid
           */
          lxiv.decode = function (src, dst) {
            var c, t1, t2;
            function fail(c) {
              throw Error("Illegal character code: " + c);
            }
            while ((c = src()) !== null) {
              t1 = ain[c];
              if (typeof t1 === 'undefined') fail(c);
              if ((c = src()) !== null) {
                t2 = ain[c];
                if (typeof t2 === 'undefined') fail(c);
                dst(t1 << 2 >>> 0 | (t2 & 0x30) >> 4);
                if ((c = src()) !== null) {
                  t1 = ain[c];
                  if (typeof t1 === 'undefined') if (c === 61) break;else fail(c);
                  dst((t2 & 0xf) << 4 >>> 0 | (t1 & 0x3c) >> 2);
                  if ((c = src()) !== null) {
                    t2 = ain[c];
                    if (typeof t2 === 'undefined') if (c === 61) break;else fail(c);
                    dst((t1 & 0x3) << 6 >>> 0 | t2);
                  }
                }
              }
            }
          };

          /**
           * Tests if a string is valid base64.
           * @param {string} str String to test
           * @returns {boolean} `true` if valid, otherwise `false`
           */
          lxiv.test = function (str) {
            return (/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str)
            );
          };

          return lxiv;
        }();

        // encodings/base64

        /**
         * Encodes this ByteBuffer's contents to a base64 encoded string.
         * @param {number=} begin Offset to begin at, defaults to {@link ByteBuffer#offset}.
         * @param {number=} end Offset to end at, defaults to {@link ByteBuffer#limit}.
         * @returns {string} Base64 encoded string
         * @throws {RangeError} If `begin` or `end` is out of bounds
         * @expose
         */
        ByteBufferPrototype.toBase64 = function (begin, end) {
          if (typeof begin === 'undefined') begin = this.offset;
          if (typeof end === 'undefined') end = this.limit;
          begin = begin | 0;end = end | 0;
          if (begin < 0 || end > this.capacity || begin > end) throw RangeError("begin, end");
          var sd;lxiv.encode(function () {
            return begin < end ? this.view[begin++] : null;
          }.bind(this), sd = stringDestination());
          return sd();
        };

        /**
         * Decodes a base64 encoded string to a ByteBuffer.
         * @param {string} str String to decode
         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
         * @returns {!ByteBuffer} ByteBuffer
         * @expose
         */
        ByteBuffer.fromBase64 = function (str, littleEndian) {
          if (typeof str !== 'string') throw TypeError("str");
          var bb = new ByteBuffer(str.length / 4 * 3, littleEndian),
              i = 0;
          lxiv.decode(stringSource(str), function (b) {
            bb.view[i++] = b;
          });
          bb.limit = i;
          return bb;
        };

        /**
         * Encodes a binary string to base64 like `window.btoa` does.
         * @param {string} str Binary string
         * @returns {string} Base64 encoded string
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa
         * @expose
         */
        ByteBuffer.btoa = function (str) {
          return ByteBuffer.fromBinary(str).toBase64();
        };

        /**
         * Decodes a base64 encoded string to binary like `window.atob` does.
         * @param {string} b64 Base64 encoded string
         * @returns {string} Binary string
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.atob
         * @expose
         */
        ByteBuffer.atob = function (b64) {
          return ByteBuffer.fromBase64(b64).toBinary();
        };

        // encodings/binary

        /**
         * Encodes this ByteBuffer to a binary encoded string, that is using only characters 0x00-0xFF as bytes.
         * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
         * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
         * @returns {string} Binary encoded string
         * @throws {RangeError} If `offset > limit`
         * @expose
         */
        ByteBufferPrototype.toBinary = function (begin, end) {
          if (typeof begin === 'undefined') begin = this.offset;
          if (typeof end === 'undefined') end = this.limit;
          begin |= 0;end |= 0;
          if (begin < 0 || end > this.capacity() || begin > end) throw RangeError("begin, end");
          if (begin === end) return "";
          var chars = [],
              parts = [];
          while (begin < end) {
            chars.push(this.view[begin++]);
            if (chars.length >= 1024) parts.push(String.fromCharCode.apply(String, chars)), chars = [];
          }
          return parts.join('') + String.fromCharCode.apply(String, chars);
        };

        /**
         * Decodes a binary encoded string, that is using only characters 0x00-0xFF as bytes, to a ByteBuffer.
         * @param {string} str String to decode
         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
         * @returns {!ByteBuffer} ByteBuffer
         * @expose
         */
        ByteBuffer.fromBinary = function (str, littleEndian) {
          if (typeof str !== 'string') throw TypeError("str");
          var i = 0,
              k = str.length,
              charCode,
              bb = new ByteBuffer(k, littleEndian);
          while (i < k) {
            charCode = str.charCodeAt(i);
            if (charCode > 0xff) throw RangeError("illegal char code: " + charCode);
            bb.view[i++] = charCode;
          }
          bb.limit = k;
          return bb;
        };

        // encodings/debug

        /**
         * Encodes this ByteBuffer to a hex encoded string with marked offsets. Offset symbols are:
         * * `<` : offset,
         * * `'` : markedOffset,
         * * `>` : limit,
         * * `|` : offset and limit,
         * * `[` : offset and markedOffset,
         * * `]` : markedOffset and limit,
         * * `!` : offset, markedOffset and limit
         * @param {boolean=} columns If `true` returns two columns hex + ascii, defaults to `false`
         * @returns {string|!Array.<string>} Debug string or array of lines if `asArray = true`
         * @expose
         * @example `>00'01 02<03` contains four bytes with `limit=0, markedOffset=1, offset=3`
         * @example `00[01 02 03>` contains four bytes with `offset=markedOffset=1, limit=4`
         * @example `00|01 02 03` contains four bytes with `offset=limit=1, markedOffset=-1`
         * @example `|` contains zero bytes with `offset=limit=0, markedOffset=-1`
         */
        ByteBufferPrototype.toDebug = function (columns) {
          var i = -1,
              k = this.buffer.byteLength,
              b,
              hex = "",
              asc = "",
              out = "";
          while (i < k) {
            if (i !== -1) {
              b = this.view[i];
              if (b < 0x10) hex += "0" + b.toString(16).toUpperCase();else hex += b.toString(16).toUpperCase();
              if (columns) asc += b > 32 && b < 127 ? String.fromCharCode(b) : '.';
            }
            ++i;
            if (columns) {
              if (i > 0 && i % 16 === 0 && i !== k) {
                while (hex.length < 3 * 16 + 3) hex += " ";
                out += hex + asc + "\n";
                hex = asc = "";
              }
            }
            if (i === this.offset && i === this.limit) hex += i === this.markedOffset ? "!" : "|";else if (i === this.offset) hex += i === this.markedOffset ? "[" : "<";else if (i === this.limit) hex += i === this.markedOffset ? "]" : ">";else hex += i === this.markedOffset ? "'" : columns || i !== 0 && i !== k ? " " : "";
          }
          if (columns && hex !== " ") {
            while (hex.length < 3 * 16 + 3) hex += " ";
            out += hex + asc + "\n";
          }
          return columns ? out : hex;
        };

        /**
         * Decodes a hex encoded string with marked offsets to a ByteBuffer.
         * @param {string} str Debug string to decode (not be generated with `columns = true`)
         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
         * @returns {!ByteBuffer} ByteBuffer
         * @expose
         * @see ByteBuffer#toDebug
         */
        ByteBuffer.fromDebug = function (str, littleEndian, noAssert) {
          var k = str.length,
              bb = new ByteBuffer((k + 1) / 3 | 0, littleEndian, noAssert);
          var i = 0,
              j = 0,
              ch,
              b,
              rs = false,
              // Require symbol next
          ho = false,
              hm = false,
              hl = false,
              // Already has offset (ho), markedOffset (hm), limit (hl)?
          fail = false;
          while (i < k) {
            switch (ch = str.charAt(i++)) {
              case '!':
                if (!noAssert) {
                  if (ho || hm || hl) {
                    fail = true;
                    break;
                  }
                  ho = hm = hl = true;
                }
                bb.offset = bb.markedOffset = bb.limit = j;
                rs = false;
                break;
              case '|':
                if (!noAssert) {
                  if (ho || hl) {
                    fail = true;
                    break;
                  }
                  ho = hl = true;
                }
                bb.offset = bb.limit = j;
                rs = false;
                break;
              case '[':
                if (!noAssert) {
                  if (ho || hm) {
                    fail = true;
                    break;
                  }
                  ho = hm = true;
                }
                bb.offset = bb.markedOffset = j;
                rs = false;
                break;
              case '<':
                if (!noAssert) {
                  if (ho) {
                    fail = true;
                    break;
                  }
                  ho = true;
                }
                bb.offset = j;
                rs = false;
                break;
              case ']':
                if (!noAssert) {
                  if (hl || hm) {
                    fail = true;
                    break;
                  }
                  hl = hm = true;
                }
                bb.limit = bb.markedOffset = j;
                rs = false;
                break;
              case '>':
                if (!noAssert) {
                  if (hl) {
                    fail = true;
                    break;
                  }
                  hl = true;
                }
                bb.limit = j;
                rs = false;
                break;
              case "'":
                if (!noAssert) {
                  if (hm) {
                    fail = true;
                    break;
                  }
                  hm = true;
                }
                bb.markedOffset = j;
                rs = false;
                break;
              case ' ':
                rs = false;
                break;
              default:
                if (!noAssert) {
                  if (rs) {
                    fail = true;
                    break;
                  }
                }
                b = parseInt(ch + str.charAt(i++), 16);
                if (!noAssert) {
                  if (isNaN(b) || b < 0 || b > 255) throw TypeError("Illegal str: Not a debug encoded string");
                }
                bb.view[j++] = b;
                rs = true;
            }
            if (fail) throw TypeError("Illegal str: Invalid symbol at " + i);
          }
          if (!noAssert) {
            if (!ho || !hl) throw TypeError("Illegal str: Missing offset or limit");
            if (j < bb.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + j + " < " + k);
          }
          return bb;
        };

        // encodings/hex

        /**
         * Encodes this ByteBuffer's contents to a hex encoded string.
         * @param {number=} begin Offset to begin at. Defaults to {@link ByteBuffer#offset}.
         * @param {number=} end Offset to end at. Defaults to {@link ByteBuffer#limit}.
         * @returns {string} Hex encoded string
         * @expose
         */
        ByteBufferPrototype.toHex = function (begin, end) {
          begin = typeof begin === 'undefined' ? this.offset : begin;
          end = typeof end === 'undefined' ? this.limit : end;
          if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
          }
          var out = new Array(end - begin),
              b;
          while (begin < end) {
            b = this.view[begin++];
            if (b < 0x10) out.push("0", b.toString(16));else out.push(b.toString(16));
          }
          return out.join('');
        };

        /**
         * Decodes a hex encoded string to a ByteBuffer.
         * @param {string} str String to decode
         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
         * @returns {!ByteBuffer} ByteBuffer
         * @expose
         */
        ByteBuffer.fromHex = function (str, littleEndian, noAssert) {
          if (!noAssert) {
            if (typeof str !== 'string') throw TypeError("Illegal str: Not a string");
            if (str.length % 2 !== 0) throw TypeError("Illegal str: Length not a multiple of 2");
          }
          var k = str.length,
              bb = new ByteBuffer(k / 2 | 0, littleEndian),
              b;
          for (var i = 0, j = 0; i < k; i += 2) {
            b = parseInt(str.substring(i, i + 2), 16);
            if (!noAssert) if (!isFinite(b) || b < 0 || b > 255) throw TypeError("Illegal str: Contains non-hex characters");
            bb.view[j++] = b;
          }
          bb.limit = j;
          return bb;
        };

        // utfx-embeddable

        /**
         * utfx-embeddable (c) 2014 Daniel Wirtz <dcode@dcode.io>
         * Released under the Apache License, Version 2.0
         * see: https://github.com/dcodeIO/utfx for details
         */
        var utfx = function () {
          "use strict";

          /**
           * utfx namespace.
           * @inner
           * @type {!Object.<string,*>}
           */

          var utfx = {};

          /**
           * Maximum valid code point.
           * @type {number}
           * @const
           */
          utfx.MAX_CODEPOINT = 0x10FFFF;

          /**
           * Encodes UTF8 code points to UTF8 bytes.
           * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
           *  respectively `null` if there are no more code points left or a single numeric code point.
           * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
           */
          utfx.encodeUTF8 = function (src, dst) {
            var cp = null;
            if (typeof src === 'number') cp = src, src = function () {
              return null;
            };
            while (cp !== null || (cp = src()) !== null) {
              if (cp < 0x80) dst(cp & 0x7F);else if (cp < 0x800) dst(cp >> 6 & 0x1F | 0xC0), dst(cp & 0x3F | 0x80);else if (cp < 0x10000) dst(cp >> 12 & 0x0F | 0xE0), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);else dst(cp >> 18 & 0x07 | 0xF0), dst(cp >> 12 & 0x3F | 0x80), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);
              cp = null;
            }
          };

          /**
           * Decodes UTF8 bytes to UTF8 code points.
           * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
           *  are no more bytes left.
           * @param {!function(number)} dst Code points destination as a function successively called with each decoded code point.
           * @throws {RangeError} If a starting byte is invalid in UTF8
           * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the
           *  remaining bytes.
           */
          utfx.decodeUTF8 = function (src, dst) {
            var a,
                b,
                c,
                d,
                fail = function (b) {
              b = b.slice(0, b.indexOf(null));
              var err = Error(b.toString());
              err.name = "TruncatedError";
              err['bytes'] = b;
              throw err;
            };
            while ((a = src()) !== null) {
              if ((a & 0x80) === 0) dst(a);else if ((a & 0xE0) === 0xC0) (b = src()) === null && fail([a, b]), dst((a & 0x1F) << 6 | b & 0x3F);else if ((a & 0xF0) === 0xE0) ((b = src()) === null || (c = src()) === null) && fail([a, b, c]), dst((a & 0x0F) << 12 | (b & 0x3F) << 6 | c & 0x3F);else if ((a & 0xF8) === 0xF0) ((b = src()) === null || (c = src()) === null || (d = src()) === null) && fail([a, b, c, d]), dst((a & 0x07) << 18 | (b & 0x3F) << 12 | (c & 0x3F) << 6 | d & 0x3F);else throw RangeError("Illegal starting byte: " + a);
            }
          };

          /**
           * Converts UTF16 characters to UTF8 code points.
           * @param {!function():number|null} src Characters source as a function returning the next char code respectively
           *  `null` if there are no more characters left.
           * @param {!function(number)} dst Code points destination as a function successively called with each converted code
           *  point.
           */
          utfx.UTF16toUTF8 = function (src, dst) {
            var c1,
                c2 = null;
            while (true) {
              if ((c1 = c2 !== null ? c2 : src()) === null) break;
              if (c1 >= 0xD800 && c1 <= 0xDFFF) {
                if ((c2 = src()) !== null) {
                  if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
                    dst((c1 - 0xD800) * 0x400 + c2 - 0xDC00 + 0x10000);
                    c2 = null;continue;
                  }
                }
              }
              dst(c1);
            }
            if (c2 !== null) dst(c2);
          };

          /**
           * Converts UTF8 code points to UTF16 characters.
           * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
           *  respectively `null` if there are no more code points left or a single numeric code point.
           * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
           * @throws {RangeError} If a code point is out of range
           */
          utfx.UTF8toUTF16 = function (src, dst) {
            var cp = null;
            if (typeof src === 'number') cp = src, src = function () {
              return null;
            };
            while (cp !== null || (cp = src()) !== null) {
              if (cp <= 0xFFFF) dst(cp);else cp -= 0x10000, dst((cp >> 10) + 0xD800), dst(cp % 0x400 + 0xDC00);
              cp = null;
            }
          };

          /**
           * Converts and encodes UTF16 characters to UTF8 bytes.
           * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
           *  if there are no more characters left.
           * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
           */
          utfx.encodeUTF16toUTF8 = function (src, dst) {
            utfx.UTF16toUTF8(src, function (cp) {
              utfx.encodeUTF8(cp, dst);
            });
          };

          /**
           * Decodes and converts UTF8 bytes to UTF16 characters.
           * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
           *  are no more bytes left.
           * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
           * @throws {RangeError} If a starting byte is invalid in UTF8
           * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the remaining bytes.
           */
          utfx.decodeUTF8toUTF16 = function (src, dst) {
            utfx.decodeUTF8(src, function (cp) {
              utfx.UTF8toUTF16(cp, dst);
            });
          };

          /**
           * Calculates the byte length of an UTF8 code point.
           * @param {number} cp UTF8 code point
           * @returns {number} Byte length
           */
          utfx.calculateCodePoint = function (cp) {
            return cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
          };

          /**
           * Calculates the number of UTF8 bytes required to store UTF8 code points.
           * @param {(!function():number|null)} src Code points source as a function returning the next code point respectively
           *  `null` if there are no more code points left.
           * @returns {number} The number of UTF8 bytes required
           */
          utfx.calculateUTF8 = function (src) {
            var cp,
                l = 0;
            while ((cp = src()) !== null) l += cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
            return l;
          };

          /**
           * Calculates the number of UTF8 code points respectively UTF8 bytes required to store UTF16 char codes.
           * @param {(!function():number|null)} src Characters source as a function returning the next char code respectively
           *  `null` if there are no more characters left.
           * @returns {!Array.<number>} The number of UTF8 code points at index 0 and the number of UTF8 bytes required at index 1.
           */
          utfx.calculateUTF16asUTF8 = function (src) {
            var n = 0,
                l = 0;
            utfx.UTF16toUTF8(src, function (cp) {
              ++n;l += cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
            });
            return [n, l];
          };

          return utfx;
        }();

        // encodings/utf8

        /**
         * Encodes this ByteBuffer's contents between {@link ByteBuffer#offset} and {@link ByteBuffer#limit} to an UTF8 encoded
         *  string.
         * @returns {string} Hex encoded string
         * @throws {RangeError} If `offset > limit`
         * @expose
         */
        ByteBufferPrototype.toUTF8 = function (begin, end) {
          if (typeof begin === 'undefined') begin = this.offset;
          if (typeof end === 'undefined') end = this.limit;
          if (!this.noAssert) {
            if (typeof begin !== 'number' || begin % 1 !== 0) throw TypeError("Illegal begin: Not an integer");
            begin >>>= 0;
            if (typeof end !== 'number' || end % 1 !== 0) throw TypeError("Illegal end: Not an integer");
            end >>>= 0;
            if (begin < 0 || begin > end || end > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + begin + " <= " + end + " <= " + this.buffer.byteLength);
          }
          var sd;try {
            utfx.decodeUTF8toUTF16(function () {
              return begin < end ? this.view[begin++] : null;
            }.bind(this), sd = stringDestination());
          } catch (e) {
            if (begin !== end) throw RangeError("Illegal range: Truncated data, " + begin + " != " + end);
          }
          return sd();
        };

        /**
         * Decodes an UTF8 encoded string to a ByteBuffer.
         * @param {string} str String to decode
         * @param {boolean=} littleEndian Whether to use little or big endian byte order. Defaults to
         *  {@link ByteBuffer.DEFAULT_ENDIAN}.
         * @param {boolean=} noAssert Whether to skip assertions of offsets and values. Defaults to
         *  {@link ByteBuffer.DEFAULT_NOASSERT}.
         * @returns {!ByteBuffer} ByteBuffer
         * @expose
         */
        ByteBuffer.fromUTF8 = function (str, littleEndian, noAssert) {
          if (!noAssert) if (typeof str !== 'string') throw TypeError("Illegal str: Not a string");
          var bb = new ByteBuffer(utfx.calculateUTF16asUTF8(stringSource(str), true)[1], littleEndian, noAssert),
              i = 0;
          utfx.encodeUTF16toUTF8(stringSource(str), function (b) {
            bb.view[i++] = b;
          });
          bb.limit = i;
          return bb;
        };

        return ByteBuffer;
      });
    }, { "long": 48 }], 29: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;
      var Transform = require('stream').Transform;
      var StringDecoder = require('string_decoder').StringDecoder;
      var inherits = require('inherits');

      function CipherBase(hashMode) {
        Transform.call(this);
        this.hashMode = typeof hashMode === 'string';
        if (this.hashMode) {
          this[hashMode] = this._finalOrDigest;
        } else {
          this.final = this._finalOrDigest;
        }
        if (this._final) {
          this.__final = this._final;
          this._final = null;
        }
        this._decoder = null;
        this._encoding = null;
      }
      inherits(CipherBase, Transform);

      CipherBase.prototype.update = function (data, inputEnc, outputEnc) {
        if (typeof data === 'string') {
          data = Buffer.from(data, inputEnc);
        }

        var outData = this._update(data);
        if (this.hashMode) return this;

        if (outputEnc) {
          outData = this._toString(outData, outputEnc);
        }

        return outData;
      };

      CipherBase.prototype.setAutoPadding = function () {};
      CipherBase.prototype.getAuthTag = function () {
        throw new Error('trying to get auth tag in unsupported state');
      };

      CipherBase.prototype.setAuthTag = function () {
        throw new Error('trying to set auth tag in unsupported state');
      };

      CipherBase.prototype.setAAD = function () {
        throw new Error('trying to set aad in unsupported state');
      };

      CipherBase.prototype._transform = function (data, _, next) {
        var err;
        try {
          if (this.hashMode) {
            this._update(data);
          } else {
            this.push(this._update(data));
          }
        } catch (e) {
          err = e;
        } finally {
          next(err);
        }
      };
      CipherBase.prototype._flush = function (done) {
        var err;
        try {
          this.push(this.__final());
        } catch (e) {
          err = e;
        }

        done(err);
      };
      CipherBase.prototype._finalOrDigest = function (outputEnc) {
        var outData = this.__final() || Buffer.alloc(0);
        if (outputEnc) {
          outData = this._toString(outData, outputEnc, true);
        }
        return outData;
      };

      CipherBase.prototype._toString = function (value, enc, fin) {
        if (!this._decoder) {
          this._decoder = new StringDecoder(enc);
          this._encoding = enc;
        }

        if (this._encoding !== enc) throw new Error('can\'t switch encodings');

        var out = this._decoder.write(value);
        if (fin) {
          out += this._decoder.end();
        }

        return out;
      };

      module.exports = CipherBase;
    }, { "inherits": 45, "safe-buffer": 67, "stream": 77, "string_decoder": 78 }], 30: [function (require, module, exports) {
      (function (Buffer) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        // NOTE: These type checking functions intentionally don't use `instanceof`
        // because it is fragile and can be easily faked with `Object.create()`.

        function isArray(arg) {
          if (Array.isArray) {
            return Array.isArray(arg);
          }
          return objectToString(arg) === '[object Array]';
        }
        exports.isArray = isArray;

        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;

        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;

        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;

        function isNumber(arg) {
          return typeof arg === 'number';
        }
        exports.isNumber = isNumber;

        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;

        function isSymbol(arg) {
          return typeof arg === 'symbol';
        }
        exports.isSymbol = isSymbol;

        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;

        function isRegExp(re) {
          return objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;

        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }
        exports.isObject = isObject;

        function isDate(d) {
          return objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;

        function isError(e) {
          return objectToString(e) === '[object Error]' || e instanceof Error;
        }
        exports.isError = isError;

        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;

        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
          typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;

        exports.isBuffer = Buffer.isBuffer;

        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }
      }).call(this, { "isBuffer": require("../../is-buffer/index.js") });
    }, { "../../is-buffer/index.js": 46 }], 31: [function (require, module, exports) {
      (function (Buffer) {
        'use strict';

        var inherits = require('inherits');
        var md5 = require('./md5');
        var RIPEMD160 = require('ripemd160');
        var sha = require('sha.js');

        var Base = require('cipher-base');

        function HashNoConstructor(hash) {
          Base.call(this, 'digest');

          this._hash = hash;
          this.buffers = [];
        }

        inherits(HashNoConstructor, Base);

        HashNoConstructor.prototype._update = function (data) {
          this.buffers.push(data);
        };

        HashNoConstructor.prototype._final = function () {
          var buf = Buffer.concat(this.buffers);
          var r = this._hash(buf);
          this.buffers = null;

          return r;
        };

        function Hash(hash) {
          Base.call(this, 'digest');

          this._hash = hash;
        }

        inherits(Hash, Base);

        Hash.prototype._update = function (data) {
          this._hash.update(data);
        };

        Hash.prototype._final = function () {
          return this._hash.digest();
        };

        module.exports = function createHash(alg) {
          alg = alg.toLowerCase();
          if (alg === 'md5') return new HashNoConstructor(md5);
          if (alg === 'rmd160' || alg === 'ripemd160') return new Hash(new RIPEMD160());

          return new Hash(sha(alg));
        };
      }).call(this, require("buffer").Buffer);
    }, { "./md5": 33, "buffer": 27, "cipher-base": 29, "inherits": 45, "ripemd160": 66, "sha.js": 70 }], 32: [function (require, module, exports) {
      (function (Buffer) {
        'use strict';

        var intSize = 4;
        var zeroBuffer = new Buffer(intSize);
        zeroBuffer.fill(0);

        var charSize = 8;
        var hashSize = 16;

        function toArray(buf) {
          if (buf.length % intSize !== 0) {
            var len = buf.length + (intSize - buf.length % intSize);
            buf = Buffer.concat([buf, zeroBuffer], len);
          }

          var arr = new Array(buf.length >>> 2);
          for (var i = 0, j = 0; i < buf.length; i += intSize, j++) {
            arr[j] = buf.readInt32LE(i);
          }

          return arr;
        }

        module.exports = function hash(buf, fn) {
          var arr = fn(toArray(buf), buf.length * charSize);
          buf = new Buffer(hashSize);
          for (var i = 0; i < arr.length; i++) {
            buf.writeInt32LE(arr[i], i << 2, true);
          }
          return buf;
        };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27 }], 33: [function (require, module, exports) {
      'use strict';
      /*
       * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
       * Digest Algorithm, as defined in RFC 1321.
       * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
       * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
       * Distributed under the BSD License
       * See http://pajhome.org.uk/crypt/md5 for more info.
       */

      var makeHash = require('./make-hash');

      /*
       * Calculate the MD5 of an array of little-endian words, and a bit length
       */
      function core_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;

        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (var i = 0; i < x.length; i += 16) {
          var olda = a;
          var oldb = b;
          var oldc = c;
          var oldd = d;

          a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
          d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

          a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
          a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

          a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
          c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

          a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
          d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

          a = safe_add(a, olda);
          b = safe_add(b, oldb);
          c = safe_add(c, oldc);
          d = safe_add(d, oldd);
        }

        return [a, b, c, d];
      }

      /*
       * These functions implement the four basic operations the algorithm uses.
       */
      function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
      }

      function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn(b & c | ~b & d, a, b, x, s, t);
      }

      function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn(b & d | c & ~d, a, b, x, s, t);
      }

      function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
      }

      function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
      }

      /*
       * Add integers, wrapping at 2^32. This uses 16-bit operations internally
       * to work around bugs in some JS interpreters.
       */
      function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xFFFF;
      }

      /*
       * Bitwise rotate a 32-bit number to the left.
       */
      function bit_rol(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }

      module.exports = function md5(buf) {
        return makeHash(buf, core_md5);
      };
    }, { "./make-hash": 32 }], 34: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits');
      var Legacy = require('./legacy');
      var Base = require('cipher-base');
      var Buffer = require('safe-buffer').Buffer;
      var md5 = require('create-hash/md5');
      var RIPEMD160 = require('ripemd160');

      var sha = require('sha.js');

      var ZEROS = Buffer.alloc(128);

      function Hmac(alg, key) {
        Base.call(this, 'digest');
        if (typeof key === 'string') {
          key = Buffer.from(key);
        }

        var blocksize = alg === 'sha512' || alg === 'sha384' ? 128 : 64;

        this._alg = alg;
        this._key = key;
        if (key.length > blocksize) {
          var hash = alg === 'rmd160' ? new RIPEMD160() : sha(alg);
          key = hash.update(key).digest();
        } else if (key.length < blocksize) {
          key = Buffer.concat([key, ZEROS], blocksize);
        }

        var ipad = this._ipad = Buffer.allocUnsafe(blocksize);
        var opad = this._opad = Buffer.allocUnsafe(blocksize);

        for (var i = 0; i < blocksize; i++) {
          ipad[i] = key[i] ^ 0x36;
          opad[i] = key[i] ^ 0x5C;
        }
        this._hash = alg === 'rmd160' ? new RIPEMD160() : sha(alg);
        this._hash.update(ipad);
      }

      inherits(Hmac, Base);

      Hmac.prototype._update = function (data) {
        this._hash.update(data);
      };

      Hmac.prototype._final = function () {
        var h = this._hash.digest();
        var hash = this._alg === 'rmd160' ? new RIPEMD160() : sha(this._alg);
        return hash.update(this._opad).update(h).digest();
      };

      module.exports = function createHmac(alg, key) {
        alg = alg.toLowerCase();
        if (alg === 'rmd160' || alg === 'ripemd160') {
          return new Hmac('rmd160', key);
        }
        if (alg === 'md5') {
          return new Legacy(md5, key);
        }
        return new Hmac(alg, key);
      };
    }, { "./legacy": 35, "cipher-base": 29, "create-hash/md5": 33, "inherits": 45, "ripemd160": 66, "safe-buffer": 67, "sha.js": 70 }], 35: [function (require, module, exports) {
      'use strict';

      var inherits = require('inherits');
      var Buffer = require('safe-buffer').Buffer;

      var Base = require('cipher-base');

      var ZEROS = Buffer.alloc(128);
      var blocksize = 64;

      function Hmac(alg, key) {
        Base.call(this, 'digest');
        if (typeof key === 'string') {
          key = Buffer.from(key);
        }

        this._alg = alg;
        this._key = key;

        if (key.length > blocksize) {
          key = alg(key);
        } else if (key.length < blocksize) {
          key = Buffer.concat([key, ZEROS], blocksize);
        }

        var ipad = this._ipad = Buffer.allocUnsafe(blocksize);
        var opad = this._opad = Buffer.allocUnsafe(blocksize);

        for (var i = 0; i < blocksize; i++) {
          ipad[i] = key[i] ^ 0x36;
          opad[i] = key[i] ^ 0x5C;
        }

        this._hash = [ipad];
      }

      inherits(Hmac, Base);

      Hmac.prototype._update = function (data) {
        this._hash.push(data);
      };

      Hmac.prototype._final = function () {
        var h = this._alg(Buffer.concat(this._hash));
        return this._alg(Buffer.concat([this._opad, h]));
      };
      module.exports = Hmac;
    }, { "cipher-base": 29, "inherits": 45, "safe-buffer": 67 }], 36: [function (require, module, exports) {
      var assert = require('assert');
      var BigInteger = require('bigi');

      var Point = require('./point');

      function Curve(p, a, b, Gx, Gy, n, h) {
        this.p = p;
        this.a = a;
        this.b = b;
        this.G = Point.fromAffine(this, Gx, Gy);
        this.n = n;
        this.h = h;

        this.infinity = new Point(this, null, null, BigInteger.ZERO);

        // result caching
        this.pOverFour = p.add(BigInteger.ONE).shiftRight(2);

        // determine size of p in bytes
        this.pLength = Math.floor((this.p.bitLength() + 7) / 8);
      }

      Curve.prototype.pointFromX = function (isOdd, x) {
        var alpha = x.pow(3).add(this.a.multiply(x)).add(this.b).mod(this.p);
        var beta = alpha.modPow(this.pOverFour, this.p); // XXX: not compatible with all curves

        var y = beta;
        if (beta.isEven() ^ !isOdd) {
          y = this.p.subtract(y); // -y % p
        }

        return Point.fromAffine(this, x, y);
      };

      Curve.prototype.isInfinity = function (Q) {
        if (Q === this.infinity) return true;

        return Q.z.signum() === 0 && Q.y.signum() !== 0;
      };

      Curve.prototype.isOnCurve = function (Q) {
        if (this.isInfinity(Q)) return true;

        var x = Q.affineX;
        var y = Q.affineY;
        var a = this.a;
        var b = this.b;
        var p = this.p;

        // Check that xQ and yQ are integers in the interval [0, p - 1]
        if (x.signum() < 0 || x.compareTo(p) >= 0) return false;
        if (y.signum() < 0 || y.compareTo(p) >= 0) return false;

        // and check that y^2 = x^3 + ax + b (mod p)
        var lhs = y.square().mod(p);
        var rhs = x.pow(3).add(a.multiply(x)).add(b).mod(p);
        return lhs.equals(rhs);
      };

      /**
       * Validate an elliptic curve point.
       *
       * See SEC 1, section 3.2.2.1: Elliptic Curve Public Key Validation Primitive
       */
      Curve.prototype.validate = function (Q) {
        // Check Q != O
        assert(!this.isInfinity(Q), 'Point is at infinity');
        assert(this.isOnCurve(Q), 'Point is not on the curve');

        // Check nQ = O (where Q is a scalar multiple of G)
        var nQ = Q.multiply(this.n);
        assert(this.isInfinity(nQ), 'Point is not a scalar multiple of G');

        return true;
      };

      module.exports = Curve;
    }, { "./point": 40, "assert": 2, "bigi": 7 }], 37: [function (require, module, exports) {
      module.exports = {
        "secp128r1": {
          "p": "fffffffdffffffffffffffffffffffff",
          "a": "fffffffdfffffffffffffffffffffffc",
          "b": "e87579c11079f43dd824993c2cee5ed3",
          "n": "fffffffe0000000075a30d1b9038a115",
          "h": "01",
          "Gx": "161ff7528b899b2d0c28607ca52c5b86",
          "Gy": "cf5ac8395bafeb13c02da292dded7a83"
        },
        "secp160k1": {
          "p": "fffffffffffffffffffffffffffffffeffffac73",
          "a": "00",
          "b": "07",
          "n": "0100000000000000000001b8fa16dfab9aca16b6b3",
          "h": "01",
          "Gx": "3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",
          "Gy": "938cf935318fdced6bc28286531733c3f03c4fee"
        },
        "secp160r1": {
          "p": "ffffffffffffffffffffffffffffffff7fffffff",
          "a": "ffffffffffffffffffffffffffffffff7ffffffc",
          "b": "1c97befc54bd7a8b65acf89f81d4d4adc565fa45",
          "n": "0100000000000000000001f4c8f927aed3ca752257",
          "h": "01",
          "Gx": "4a96b5688ef573284664698968c38bb913cbfc82",
          "Gy": "23a628553168947d59dcc912042351377ac5fb32"
        },
        "secp192k1": {
          "p": "fffffffffffffffffffffffffffffffffffffffeffffee37",
          "a": "00",
          "b": "03",
          "n": "fffffffffffffffffffffffe26f2fc170f69466a74defd8d",
          "h": "01",
          "Gx": "db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",
          "Gy": "9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"
        },
        "secp192r1": {
          "p": "fffffffffffffffffffffffffffffffeffffffffffffffff",
          "a": "fffffffffffffffffffffffffffffffefffffffffffffffc",
          "b": "64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",
          "n": "ffffffffffffffffffffffff99def836146bc9b1b4d22831",
          "h": "01",
          "Gx": "188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",
          "Gy": "07192b95ffc8da78631011ed6b24cdd573f977a11e794811"
        },
        "secp256k1": {
          "p": "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          "a": "00",
          "b": "07",
          "n": "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
          "h": "01",
          "Gx": "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          "Gy": "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
        },
        "secp256r1": {
          "p": "ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",
          "a": "ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",
          "b": "5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",
          "n": "ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",
          "h": "01",
          "Gx": "6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",
          "Gy": "4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
        }
      };
    }, {}], 38: [function (require, module, exports) {
      var Point = require('./point');
      var Curve = require('./curve');

      var getCurveByName = require('./names');

      module.exports = {
        Curve: Curve,
        Point: Point,
        getCurveByName: getCurveByName
      };
    }, { "./curve": 36, "./names": 39, "./point": 40 }], 39: [function (require, module, exports) {
      var BigInteger = require('bigi');

      var curves = require('./curves.json');
      var Curve = require('./curve');

      function getCurveByName(name) {
        var curve = curves[name];
        if (!curve) return null;

        var p = new BigInteger(curve.p, 16);
        var a = new BigInteger(curve.a, 16);
        var b = new BigInteger(curve.b, 16);
        var n = new BigInteger(curve.n, 16);
        var h = new BigInteger(curve.h, 16);
        var Gx = new BigInteger(curve.Gx, 16);
        var Gy = new BigInteger(curve.Gy, 16);

        return new Curve(p, a, b, Gx, Gy, n, h);
      }

      module.exports = getCurveByName;
    }, { "./curve": 36, "./curves.json": 37, "bigi": 7 }], 40: [function (require, module, exports) {
      (function (Buffer) {
        var assert = require('assert');
        var BigInteger = require('bigi');

        var THREE = BigInteger.valueOf(3);

        function Point(curve, x, y, z) {
          assert.notStrictEqual(z, undefined, 'Missing Z coordinate');

          this.curve = curve;
          this.x = x;
          this.y = y;
          this.z = z;
          this._zInv = null;

          this.compressed = true;
        }

        Object.defineProperty(Point.prototype, 'zInv', {
          get: function () {
            if (this._zInv === null) {
              this._zInv = this.z.modInverse(this.curve.p);
            }

            return this._zInv;
          }
        });

        Object.defineProperty(Point.prototype, 'affineX', {
          get: function () {
            return this.x.multiply(this.zInv).mod(this.curve.p);
          }
        });

        Object.defineProperty(Point.prototype, 'affineY', {
          get: function () {
            return this.y.multiply(this.zInv).mod(this.curve.p);
          }
        });

        Point.fromAffine = function (curve, x, y) {
          return new Point(curve, x, y, BigInteger.ONE);
        };

        Point.prototype.equals = function (other) {
          if (other === this) return true;
          if (this.curve.isInfinity(this)) return this.curve.isInfinity(other);
          if (this.curve.isInfinity(other)) return this.curve.isInfinity(this);

          // u = Y2 * Z1 - Y1 * Z2
          var u = other.y.multiply(this.z).subtract(this.y.multiply(other.z)).mod(this.curve.p);

          if (u.signum() !== 0) return false;

          // v = X2 * Z1 - X1 * Z2
          var v = other.x.multiply(this.z).subtract(this.x.multiply(other.z)).mod(this.curve.p);

          return v.signum() === 0;
        };

        Point.prototype.negate = function () {
          var y = this.curve.p.subtract(this.y);

          return new Point(this.curve, this.x, y, this.z);
        };

        Point.prototype.add = function (b) {
          if (this.curve.isInfinity(this)) return b;
          if (this.curve.isInfinity(b)) return this;

          var x1 = this.x;
          var y1 = this.y;
          var x2 = b.x;
          var y2 = b.y;

          // u = Y2 * Z1 - Y1 * Z2
          var u = y2.multiply(this.z).subtract(y1.multiply(b.z)).mod(this.curve.p);
          // v = X2 * Z1 - X1 * Z2
          var v = x2.multiply(this.z).subtract(x1.multiply(b.z)).mod(this.curve.p);

          if (v.signum() === 0) {
            if (u.signum() === 0) {
              return this.twice(); // this == b, so double
            }

            return this.curve.infinity; // this = -b, so infinity
          }

          var v2 = v.square();
          var v3 = v2.multiply(v);
          var x1v2 = x1.multiply(v2);
          var zu2 = u.square().multiply(this.z);

          // x3 = v * (z2 * (z1 * u^2 - 2 * x1 * v^2) - v^3)
          var x3 = zu2.subtract(x1v2.shiftLeft(1)).multiply(b.z).subtract(v3).multiply(v).mod(this.curve.p);
          // y3 = z2 * (3 * x1 * u * v^2 - y1 * v^3 - z1 * u^3) + u * v^3
          var y3 = x1v2.multiply(THREE).multiply(u).subtract(y1.multiply(v3)).subtract(zu2.multiply(u)).multiply(b.z).add(u.multiply(v3)).mod(this.curve.p);
          // z3 = v^3 * z1 * z2
          var z3 = v3.multiply(this.z).multiply(b.z).mod(this.curve.p);

          return new Point(this.curve, x3, y3, z3);
        };

        Point.prototype.twice = function () {
          if (this.curve.isInfinity(this)) return this;
          if (this.y.signum() === 0) return this.curve.infinity;

          var x1 = this.x;
          var y1 = this.y;

          var y1z1 = y1.multiply(this.z).mod(this.curve.p);
          var y1sqz1 = y1z1.multiply(y1).mod(this.curve.p);
          var a = this.curve.a;

          // w = 3 * x1^2 + a * z1^2
          var w = x1.square().multiply(THREE);

          if (a.signum() !== 0) {
            w = w.add(this.z.square().multiply(a));
          }

          w = w.mod(this.curve.p);
          // x3 = 2 * y1 * z1 * (w^2 - 8 * x1 * y1^2 * z1)
          var x3 = w.square().subtract(x1.shiftLeft(3).multiply(y1sqz1)).shiftLeft(1).multiply(y1z1).mod(this.curve.p);
          // y3 = 4 * y1^2 * z1 * (3 * w * x1 - 2 * y1^2 * z1) - w^3
          var y3 = w.multiply(THREE).multiply(x1).subtract(y1sqz1.shiftLeft(1)).shiftLeft(2).multiply(y1sqz1).subtract(w.pow(3)).mod(this.curve.p);
          // z3 = 8 * (y1 * z1)^3
          var z3 = y1z1.pow(3).shiftLeft(3).mod(this.curve.p);

          return new Point(this.curve, x3, y3, z3);
        };

        // Simple NAF (Non-Adjacent Form) multiplication algorithm
        // TODO: modularize the multiplication algorithm
        Point.prototype.multiply = function (k) {
          if (this.curve.isInfinity(this)) return this;
          if (k.signum() === 0) return this.curve.infinity;

          var e = k;
          var h = e.multiply(THREE);

          var neg = this.negate();
          var R = this;

          for (var i = h.bitLength() - 2; i > 0; --i) {
            var hBit = h.testBit(i);
            var eBit = e.testBit(i);

            R = R.twice();

            if (hBit !== eBit) {
              R = R.add(hBit ? this : neg);
            }
          }

          return R;
        };

        // Compute this*j + x*k (simultaneous multiplication)
        Point.prototype.multiplyTwo = function (j, x, k) {
          var i = Math.max(j.bitLength(), k.bitLength()) - 1;
          var R = this.curve.infinity;
          var both = this.add(x);

          while (i >= 0) {
            var jBit = j.testBit(i);
            var kBit = k.testBit(i);

            R = R.twice();

            if (jBit) {
              if (kBit) {
                R = R.add(both);
              } else {
                R = R.add(this);
              }
            } else if (kBit) {
              R = R.add(x);
            }
            --i;
          }

          return R;
        };

        Point.prototype.getEncoded = function (compressed) {
          if (compressed == null) compressed = this.compressed;
          if (this.curve.isInfinity(this)) return new Buffer('00', 'hex'); // Infinity point encoded is simply '00'

          var x = this.affineX;
          var y = this.affineY;
          var byteLength = this.curve.pLength;
          var buffer;

          // 0x02/0x03 | X
          if (compressed) {
            buffer = new Buffer(1 + byteLength);
            buffer.writeUInt8(y.isEven() ? 0x02 : 0x03, 0);

            // 0x04 | X | Y
          } else {
            buffer = new Buffer(1 + byteLength + byteLength);
            buffer.writeUInt8(0x04, 0);

            y.toBuffer(byteLength).copy(buffer, 1 + byteLength);
          }

          x.toBuffer(byteLength).copy(buffer, 1);

          return buffer;
        };

        Point.decodeFrom = function (curve, buffer) {
          var type = buffer.readUInt8(0);
          var compressed = type !== 4;

          var byteLength = Math.floor((curve.p.bitLength() + 7) / 8);
          var x = BigInteger.fromBuffer(buffer.slice(1, 1 + byteLength));

          var Q;
          if (compressed) {
            assert.equal(buffer.length, byteLength + 1, 'Invalid sequence length');
            assert(type === 0x02 || type === 0x03, 'Invalid sequence tag');

            var isOdd = type === 0x03;
            Q = curve.pointFromX(isOdd, x);
          } else {
            assert.equal(buffer.length, 1 + byteLength + byteLength, 'Invalid sequence length');

            var y = BigInteger.fromBuffer(buffer.slice(1 + byteLength));
            Q = Point.fromAffine(curve, x, y);
          }

          Q.compressed = compressed;
          return Q;
        };

        Point.prototype.toString = function () {
          if (this.curve.isInfinity(this)) return '(INFINITY)';

          return '(' + this.affineX.toString() + ',' + this.affineY.toString() + ')';
        };

        module.exports = Point;
      }).call(this, require("buffer").Buffer);
    }, { "assert": 2, "bigi": 7, "buffer": 27 }], 41: [function (require, module, exports) {
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
      }
      module.exports = EventEmitter;

      // Backwards-compat with node 0.10.x
      EventEmitter.EventEmitter = EventEmitter;

      EventEmitter.prototype._events = undefined;
      EventEmitter.prototype._maxListeners = undefined;

      // By default EventEmitters will print a warning if more than 10 listeners are
      // added to it. This is a useful default which helps finding memory leaks.
      EventEmitter.defaultMaxListeners = 10;

      // Obviously not all Emitters should be limited to 10. This function allows
      // that to be increased. Set to zero for unlimited.
      EventEmitter.prototype.setMaxListeners = function (n) {
        if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this;
      };

      EventEmitter.prototype.emit = function (type) {
        var er, handler, len, args, i, listeners;

        if (!this._events) this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === 'error') {
          if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) {
              throw er; // Unhandled 'error' event
            } else {
              // At least give some kind of context to the user
              var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
              err.context = er;
              throw err;
            }
          }
        }

        handler = this._events[type];

        if (isUndefined(handler)) return false;

        if (isFunction(handler)) {
          switch (arguments.length) {
            // fast cases
            case 1:
              handler.call(this);
              break;
            case 2:
              handler.call(this, arguments[1]);
              break;
            case 3:
              handler.call(this, arguments[1], arguments[2]);
              break;
            // slower
            default:
              args = Array.prototype.slice.call(arguments, 1);
              handler.apply(this, args);
          }
        } else if (isObject(handler)) {
          args = Array.prototype.slice.call(arguments, 1);
          listeners = handler.slice();
          len = listeners.length;
          for (i = 0; i < len; i++) listeners[i].apply(this, args);
        }

        return true;
      };

      EventEmitter.prototype.addListener = function (type, listener) {
        var m;

        if (!isFunction(listener)) throw TypeError('listener must be a function');

        if (!this._events) this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

        if (!this._events[type])
          // Optimize the case of one listener. Don't need the extra array object.
          this._events[type] = listener;else if (isObject(this._events[type]))
          // If we've already got an array, just append.
          this._events[type].push(listener);else
          // Adding the second element, need to change to array.
          this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
          if (!isUndefined(this._maxListeners)) {
            m = this._maxListeners;
          } else {
            m = EventEmitter.defaultMaxListeners;
          }

          if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
            if (typeof console.trace === 'function') {
              // not supported in IE 10
              console.trace();
            }
          }
        }

        return this;
      };

      EventEmitter.prototype.on = EventEmitter.prototype.addListener;

      EventEmitter.prototype.once = function (type, listener) {
        if (!isFunction(listener)) throw TypeError('listener must be a function');

        var fired = false;

        function g() {
          this.removeListener(type, g);

          if (!fired) {
            fired = true;
            listener.apply(this, arguments);
          }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
      };

      // emits a 'removeListener' event iff the listener was removed
      EventEmitter.prototype.removeListener = function (type, listener) {
        var list, position, length, i;

        if (!isFunction(listener)) throw TypeError('listener must be a function');

        if (!this._events || !this._events[type]) return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener || isFunction(list.listener) && list.listener === listener) {
          delete this._events[type];
          if (this._events.removeListener) this.emit('removeListener', type, listener);
        } else if (isObject(list)) {
          for (i = length; i-- > 0;) {
            if (list[i] === listener || list[i].listener && list[i].listener === listener) {
              position = i;
              break;
            }
          }

          if (position < 0) return this;

          if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
          } else {
            list.splice(position, 1);
          }

          if (this._events.removeListener) this.emit('removeListener', type, listener);
        }

        return this;
      };

      EventEmitter.prototype.removeAllListeners = function (type) {
        var key, listeners;

        if (!this._events) return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
          if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          for (key in this._events) {
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = {};
          return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
          this.removeListener(type, listeners);
        } else if (listeners) {
          // LIFO order
          while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
      };

      EventEmitter.prototype.listeners = function (type) {
        var ret;
        if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
        return ret;
      };

      EventEmitter.prototype.listenerCount = function (type) {
        if (this._events) {
          var evlistener = this._events[type];

          if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
        }
        return 0;
      };

      EventEmitter.listenerCount = function (emitter, type) {
        return emitter.listenerCount(type);
      };

      function isFunction(arg) {
        return typeof arg === 'function';
      }

      function isNumber(arg) {
        return typeof arg === 'number';
      }

      function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
      }

      function isUndefined(arg) {
        return arg === void 0;
      }
    }, {}], 42: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;
      var MD5 = require('md5.js');

      /* eslint-disable camelcase */
      function EVP_BytesToKey(password, salt, keyLen, ivLen) {
        if (!Buffer.isBuffer(password)) password = Buffer.from(password, 'binary');
        if (salt) {
          if (!Buffer.isBuffer(salt)) salt = Buffer.from(salt, 'binary');
          if (salt.length !== 8) throw new RangeError('salt should be Buffer with 8 byte length');
        }

        var key = Buffer.alloc(keyLen);
        var iv = Buffer.alloc(ivLen);
        var tmp = Buffer.alloc(0);

        while (keyLen > 0 || ivLen > 0) {
          var hash = new MD5();
          hash.update(tmp);
          hash.update(password);
          if (salt) hash.update(salt);
          tmp = hash.digest();

          var used = 0;

          if (keyLen > 0) {
            var keyStart = key.length - keyLen;
            used = Math.min(keyLen, tmp.length);
            tmp.copy(key, keyStart, 0, used);
            keyLen -= used;
          }

          if (used < tmp.length && ivLen > 0) {
            var ivStart = iv.length - ivLen;
            var length = Math.min(ivLen, tmp.length - used);
            tmp.copy(iv, ivStart, used, used + length);
            ivLen -= length;
          }
        }

        tmp.fill(0);
        return { key: key, iv: iv };
      }

      module.exports = EVP_BytesToKey;
    }, { "md5.js": 49, "safe-buffer": 67 }], 43: [function (require, module, exports) {
      (function (Buffer) {
        'use strict';

        var Transform = require('stream').Transform;
        var inherits = require('inherits');

        function HashBase(blockSize) {
          Transform.call(this);

          this._block = new Buffer(blockSize);
          this._blockSize = blockSize;
          this._blockOffset = 0;
          this._length = [0, 0, 0, 0];

          this._finalized = false;
        }

        inherits(HashBase, Transform);

        HashBase.prototype._transform = function (chunk, encoding, callback) {
          var error = null;
          try {
            if (encoding !== 'buffer') chunk = new Buffer(chunk, encoding);
            this.update(chunk);
          } catch (err) {
            error = err;
          }

          callback(error);
        };

        HashBase.prototype._flush = function (callback) {
          var error = null;
          try {
            this.push(this._digest());
          } catch (err) {
            error = err;
          }

          callback(error);
        };

        HashBase.prototype.update = function (data, encoding) {
          if (!Buffer.isBuffer(data) && typeof data !== 'string') throw new TypeError('Data must be a string or a buffer');
          if (this._finalized) throw new Error('Digest already called');
          if (!Buffer.isBuffer(data)) data = new Buffer(data, encoding || 'binary');

          // consume data
          var block = this._block;
          var offset = 0;
          while (this._blockOffset + data.length - offset >= this._blockSize) {
            for (var i = this._blockOffset; i < this._blockSize;) block[i++] = data[offset++];
            this._update();
            this._blockOffset = 0;
          }
          while (offset < data.length) block[this._blockOffset++] = data[offset++];

          // update length
          for (var j = 0, carry = data.length * 8; carry > 0; ++j) {
            this._length[j] += carry;
            carry = this._length[j] / 0x0100000000 | 0;
            if (carry > 0) this._length[j] -= 0x0100000000 * carry;
          }

          return this;
        };

        HashBase.prototype._update = function (data) {
          throw new Error('_update is not implemented');
        };

        HashBase.prototype.digest = function (encoding) {
          if (this._finalized) throw new Error('Digest already called');
          this._finalized = true;

          var digest = this._digest();
          if (encoding !== undefined) digest = digest.toString(encoding);
          return digest;
        };

        HashBase.prototype._digest = function () {
          throw new Error('_digest is not implemented');
        };

        module.exports = HashBase;
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27, "inherits": 45, "stream": 77 }], 44: [function (require, module, exports) {
      exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];

        i += d;

        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };

      exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

        value = Math.abs(value);

        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }

          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

        buffer[offset + i - d] |= s * 128;
      };
    }, {}], 45: [function (require, module, exports) {
      if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function () {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }
    }, {}], 46: [function (require, module, exports) {
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */

      // The _isBuffer check is for Safari 5-7 support, because it's missing
      // Object.prototype.constructor. Remove this eventually
      module.exports = function (obj) {
        return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
      };

      function isBuffer(obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
      }

      // For Node v0.10 support. Remove this eventually.
      function isSlowBuffer(obj) {
        return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
      }
    }, {}], 47: [function (require, module, exports) {
      var toString = {}.toString;

      module.exports = Array.isArray || function (arr) {
        return toString.call(arr) == '[object Array]';
      };
    }, {}], 48: [function (require, module, exports) {
      /*
       Copyright 2013 Daniel Wirtz <dcode@dcode.io>
       Copyright 2009 The Closure Library Authors. All Rights Reserved.
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS-IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      /**
       * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
       * Released under the Apache License, Version 2.0
       * see: https://github.com/dcodeIO/long.js for details
       */
      (function (global, factory) {

        /* AMD */if (typeof define === 'function' && define["amd"]) define([], factory);
        /* CommonJS */else if (typeof require === 'function' && typeof module === "object" && module && module["exports"]) module["exports"] = factory();
          /* Global */else (global["dcodeIO"] = global["dcodeIO"] || {})["Long"] = factory();
      })(this, function () {
        "use strict";

        /**
         * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
         *  See the from* functions below for more convenient ways of constructing Longs.
         * @exports Long
         * @class A Long class for representing a 64 bit two's-complement integer value.
         * @param {number} low The low (signed) 32 bits of the long
         * @param {number} high The high (signed) 32 bits of the long
         * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
         * @constructor
         */

        function Long(low, high, unsigned) {

          /**
           * The low 32 bits as a signed value.
           * @type {number}
           */
          this.low = low | 0;

          /**
           * The high 32 bits as a signed value.
           * @type {number}
           */
          this.high = high | 0;

          /**
           * Whether unsigned or not.
           * @type {boolean}
           */
          this.unsigned = !!unsigned;
        }

        // The internal representation of a long is the two given signed, 32-bit values.
        // We use 32-bit pieces because these are the size of integers on which
        // Javascript performs bit-operations.  For operations like addition and
        // multiplication, we split each number into 16 bit pieces, which can easily be
        // multiplied within Javascript's floating-point representation without overflow
        // or change in sign.
        //
        // In the algorithms below, we frequently reduce the negative case to the
        // positive case by negating the input(s) and then post-processing the result.
        // Note that we must ALWAYS check specially whether those values are MIN_VALUE
        // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
        // a positive number, it overflows back into a negative).  Not handling this
        // case would often result in infinite recursion.
        //
        // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
        // methods on which they depend.

        /**
         * An indicator used to reliably determine if an object is a Long or not.
         * @type {boolean}
         * @const
         * @private
         */
        Long.prototype.__isLong__;

        Object.defineProperty(Long.prototype, "__isLong__", {
          value: true,
          enumerable: false,
          configurable: false
        });

        /**
         * @function
         * @param {*} obj Object
         * @returns {boolean}
         * @inner
         */
        function isLong(obj) {
          return (obj && obj["__isLong__"]) === true;
        }

        /**
         * Tests if the specified object is a Long.
         * @function
         * @param {*} obj Object
         * @returns {boolean}
         */
        Long.isLong = isLong;

        /**
         * A cache of the Long representations of small integer values.
         * @type {!Object}
         * @inner
         */
        var INT_CACHE = {};

        /**
         * A cache of the Long representations of small unsigned integer values.
         * @type {!Object}
         * @inner
         */
        var UINT_CACHE = {};

        /**
         * @param {number} value
         * @param {boolean=} unsigned
         * @returns {!Long}
         * @inner
         */
        function fromInt(value, unsigned) {
          var obj, cachedObj, cache;
          if (unsigned) {
            value >>>= 0;
            if (cache = 0 <= value && value < 256) {
              cachedObj = UINT_CACHE[value];
              if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
            if (cache) UINT_CACHE[value] = obj;
            return obj;
          } else {
            value |= 0;
            if (cache = -128 <= value && value < 128) {
              cachedObj = INT_CACHE[value];
              if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, value < 0 ? -1 : 0, false);
            if (cache) INT_CACHE[value] = obj;
            return obj;
          }
        }

        /**
         * Returns a Long representing the given 32 bit integer value.
         * @function
         * @param {number} value The 32 bit integer in question
         * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
         * @returns {!Long} The corresponding Long value
         */
        Long.fromInt = fromInt;

        /**
         * @param {number} value
         * @param {boolean=} unsigned
         * @returns {!Long}
         * @inner
         */
        function fromNumber(value, unsigned) {
          if (isNaN(value) || !isFinite(value)) return unsigned ? UZERO : ZERO;
          if (unsigned) {
            if (value < 0) return UZERO;
            if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
          } else {
            if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
          }
          if (value < 0) return fromNumber(-value, unsigned).neg();
          return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
        }

        /**
         * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
         * @function
         * @param {number} value The number in question
         * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
         * @returns {!Long} The corresponding Long value
         */
        Long.fromNumber = fromNumber;

        /**
         * @param {number} lowBits
         * @param {number} highBits
         * @param {boolean=} unsigned
         * @returns {!Long}
         * @inner
         */
        function fromBits(lowBits, highBits, unsigned) {
          return new Long(lowBits, highBits, unsigned);
        }

        /**
         * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
         *  assumed to use 32 bits.
         * @function
         * @param {number} lowBits The low 32 bits
         * @param {number} highBits The high 32 bits
         * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
         * @returns {!Long} The corresponding Long value
         */
        Long.fromBits = fromBits;

        /**
         * @function
         * @param {number} base
         * @param {number} exponent
         * @returns {number}
         * @inner
         */
        var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

        /**
         * @param {string} str
         * @param {(boolean|number)=} unsigned
         * @param {number=} radix
         * @returns {!Long}
         * @inner
         */
        function fromString(str, unsigned, radix) {
          if (str.length === 0) throw Error('empty string');
          if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return ZERO;
          if (typeof unsigned === 'number') {
            // For goog.math.long compatibility
            radix = unsigned, unsigned = false;
          } else {
            unsigned = !!unsigned;
          }
          radix = radix || 10;
          if (radix < 2 || 36 < radix) throw RangeError('radix');

          var p;
          if ((p = str.indexOf('-')) > 0) throw Error('interior hyphen');else if (p === 0) {
            return fromString(str.substring(1), unsigned, radix).neg();
          }

          // Do several (8) digits each time through the loop, so as to
          // minimize the calls to the very expensive emulated div.
          var radixToPower = fromNumber(pow_dbl(radix, 8));

          var result = ZERO;
          for (var i = 0; i < str.length; i += 8) {
            var size = Math.min(8, str.length - i),
                value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
              var power = fromNumber(pow_dbl(radix, size));
              result = result.mul(power).add(fromNumber(value));
            } else {
              result = result.mul(radixToPower);
              result = result.add(fromNumber(value));
            }
          }
          result.unsigned = unsigned;
          return result;
        }

        /**
         * Returns a Long representation of the given string, written using the specified radix.
         * @function
         * @param {string} str The textual representation of the Long
         * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to `false` for signed
         * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
         * @returns {!Long} The corresponding Long value
         */
        Long.fromString = fromString;

        /**
         * @function
         * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
         * @returns {!Long}
         * @inner
         */
        function fromValue(val) {
          if (val /* is compatible */ instanceof Long) return val;
          if (typeof val === 'number') return fromNumber(val);
          if (typeof val === 'string') return fromString(val);
          // Throws for non-objects, converts non-instanceof Long:
          return fromBits(val.low, val.high, val.unsigned);
        }

        /**
         * Converts the specified value to a Long.
         * @function
         * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
         * @returns {!Long}
         */
        Long.fromValue = fromValue;

        // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
        // no runtime penalty for these.

        /**
         * @type {number}
         * @const
         * @inner
         */
        var TWO_PWR_16_DBL = 1 << 16;

        /**
         * @type {number}
         * @const
         * @inner
         */
        var TWO_PWR_24_DBL = 1 << 24;

        /**
         * @type {number}
         * @const
         * @inner
         */
        var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

        /**
         * @type {number}
         * @const
         * @inner
         */
        var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

        /**
         * @type {number}
         * @const
         * @inner
         */
        var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

        /**
         * @type {!Long}
         * @const
         * @inner
         */
        var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

        /**
         * @type {!Long}
         * @inner
         */
        var ZERO = fromInt(0);

        /**
         * Signed zero.
         * @type {!Long}
         */
        Long.ZERO = ZERO;

        /**
         * @type {!Long}
         * @inner
         */
        var UZERO = fromInt(0, true);

        /**
         * Unsigned zero.
         * @type {!Long}
         */
        Long.UZERO = UZERO;

        /**
         * @type {!Long}
         * @inner
         */
        var ONE = fromInt(1);

        /**
         * Signed one.
         * @type {!Long}
         */
        Long.ONE = ONE;

        /**
         * @type {!Long}
         * @inner
         */
        var UONE = fromInt(1, true);

        /**
         * Unsigned one.
         * @type {!Long}
         */
        Long.UONE = UONE;

        /**
         * @type {!Long}
         * @inner
         */
        var NEG_ONE = fromInt(-1);

        /**
         * Signed negative one.
         * @type {!Long}
         */
        Long.NEG_ONE = NEG_ONE;

        /**
         * @type {!Long}
         * @inner
         */
        var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);

        /**
         * Maximum signed value.
         * @type {!Long}
         */
        Long.MAX_VALUE = MAX_VALUE;

        /**
         * @type {!Long}
         * @inner
         */
        var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);

        /**
         * Maximum unsigned value.
         * @type {!Long}
         */
        Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

        /**
         * @type {!Long}
         * @inner
         */
        var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);

        /**
         * Minimum signed value.
         * @type {!Long}
         */
        Long.MIN_VALUE = MIN_VALUE;

        /**
         * @alias Long.prototype
         * @inner
         */
        var LongPrototype = Long.prototype;

        /**
         * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
         * @returns {number}
         */
        LongPrototype.toInt = function toInt() {
          return this.unsigned ? this.low >>> 0 : this.low;
        };

        /**
         * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
         * @returns {number}
         */
        LongPrototype.toNumber = function toNumber() {
          if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
          return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
        };

        /**
         * Converts the Long to a string written in the specified radix.
         * @param {number=} radix Radix (2-36), defaults to 10
         * @returns {string}
         * @override
         * @throws {RangeError} If `radix` is out of range
         */
        LongPrototype.toString = function toString(radix) {
          radix = radix || 10;
          if (radix < 2 || 36 < radix) throw RangeError('radix');
          if (this.isZero()) return '0';
          if (this.isNegative()) {
            // Unsigned Longs are never negative
            if (this.eq(MIN_VALUE)) {
              // We need to change the Long value before it can be negated, so we remove
              // the bottom-most digit in this base and then recurse to do the rest.
              var radixLong = fromNumber(radix),
                  div = this.div(radixLong),
                  rem1 = div.mul(radixLong).sub(this);
              return div.toString(radix) + rem1.toInt().toString(radix);
            } else return '-' + this.neg().toString(radix);
          }

          // Do several (6) digits each time through the loop, so as to
          // minimize the calls to the very expensive emulated div.
          var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
              rem = this;
          var result = '';
          while (true) {
            var remDiv = rem.div(radixToPower),
                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
                digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) return digits + result;else {
              while (digits.length < 6) digits = '0' + digits;
              result = '' + digits + result;
            }
          }
        };

        /**
         * Gets the high 32 bits as a signed integer.
         * @returns {number} Signed high bits
         */
        LongPrototype.getHighBits = function getHighBits() {
          return this.high;
        };

        /**
         * Gets the high 32 bits as an unsigned integer.
         * @returns {number} Unsigned high bits
         */
        LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
          return this.high >>> 0;
        };

        /**
         * Gets the low 32 bits as a signed integer.
         * @returns {number} Signed low bits
         */
        LongPrototype.getLowBits = function getLowBits() {
          return this.low;
        };

        /**
         * Gets the low 32 bits as an unsigned integer.
         * @returns {number} Unsigned low bits
         */
        LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
          return this.low >>> 0;
        };

        /**
         * Gets the number of bits needed to represent the absolute value of this Long.
         * @returns {number}
         */
        LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
          if (this.isNegative()) // Unsigned Longs are never negative
            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
          var val = this.high != 0 ? this.high : this.low;
          for (var bit = 31; bit > 0; bit--) if ((val & 1 << bit) != 0) break;
          return this.high != 0 ? bit + 33 : bit + 1;
        };

        /**
         * Tests if this Long's value equals zero.
         * @returns {boolean}
         */
        LongPrototype.isZero = function isZero() {
          return this.high === 0 && this.low === 0;
        };

        /**
         * Tests if this Long's value is negative.
         * @returns {boolean}
         */
        LongPrototype.isNegative = function isNegative() {
          return !this.unsigned && this.high < 0;
        };

        /**
         * Tests if this Long's value is positive.
         * @returns {boolean}
         */
        LongPrototype.isPositive = function isPositive() {
          return this.unsigned || this.high >= 0;
        };

        /**
         * Tests if this Long's value is odd.
         * @returns {boolean}
         */
        LongPrototype.isOdd = function isOdd() {
          return (this.low & 1) === 1;
        };

        /**
         * Tests if this Long's value is even.
         * @returns {boolean}
         */
        LongPrototype.isEven = function isEven() {
          return (this.low & 1) === 0;
        };

        /**
         * Tests if this Long's value equals the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.equals = function equals(other) {
          if (!isLong(other)) other = fromValue(other);
          if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
          return this.high === other.high && this.low === other.low;
        };

        /**
         * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
         * @function
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.eq = LongPrototype.equals;

        /**
         * Tests if this Long's value differs from the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.notEquals = function notEquals(other) {
          return !this.eq( /* validates */other);
        };

        /**
         * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
         * @function
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.neq = LongPrototype.notEquals;

        /**
         * Tests if this Long's value is less than the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.lessThan = function lessThan(other) {
          return this.comp( /* validates */other) < 0;
        };

        /**
         * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
         * @function
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.lt = LongPrototype.lessThan;

        /**
         * Tests if this Long's value is less than or equal the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
          return this.comp( /* validates */other) <= 0;
        };

        /**
         * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
         * @function
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.lte = LongPrototype.lessThanOrEqual;

        /**
         * Tests if this Long's value is greater than the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.greaterThan = function greaterThan(other) {
          return this.comp( /* validates */other) > 0;
        };

        /**
         * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
         * @function
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.gt = LongPrototype.greaterThan;

        /**
         * Tests if this Long's value is greater than or equal the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
          return this.comp( /* validates */other) >= 0;
        };

        /**
         * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
         * @function
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        LongPrototype.gte = LongPrototype.greaterThanOrEqual;

        /**
         * Compares this Long's value with the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {number} 0 if they are the same, 1 if the this is greater and -1
         *  if the given one is greater
         */
        LongPrototype.compare = function compare(other) {
          if (!isLong(other)) other = fromValue(other);
          if (this.eq(other)) return 0;
          var thisNeg = this.isNegative(),
              otherNeg = other.isNegative();
          if (thisNeg && !otherNeg) return -1;
          if (!thisNeg && otherNeg) return 1;
          // At this point the sign bits are the same
          if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
          // Both are positive if at least one is unsigned
          return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
        };

        /**
         * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
         * @function
         * @param {!Long|number|string} other Other value
         * @returns {number} 0 if they are the same, 1 if the this is greater and -1
         *  if the given one is greater
         */
        LongPrototype.comp = LongPrototype.compare;

        /**
         * Negates this Long's value.
         * @returns {!Long} Negated Long
         */
        LongPrototype.negate = function negate() {
          if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
          return this.not().add(ONE);
        };

        /**
         * Negates this Long's value. This is an alias of {@link Long#negate}.
         * @function
         * @returns {!Long} Negated Long
         */
        LongPrototype.neg = LongPrototype.negate;

        /**
         * Returns the sum of this and the specified Long.
         * @param {!Long|number|string} addend Addend
         * @returns {!Long} Sum
         */
        LongPrototype.add = function add(addend) {
          if (!isLong(addend)) addend = fromValue(addend);

          // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

          var a48 = this.high >>> 16;
          var a32 = this.high & 0xFFFF;
          var a16 = this.low >>> 16;
          var a00 = this.low & 0xFFFF;

          var b48 = addend.high >>> 16;
          var b32 = addend.high & 0xFFFF;
          var b16 = addend.low >>> 16;
          var b00 = addend.low & 0xFFFF;

          var c48 = 0,
              c32 = 0,
              c16 = 0,
              c00 = 0;
          c00 += a00 + b00;
          c16 += c00 >>> 16;
          c00 &= 0xFFFF;
          c16 += a16 + b16;
          c32 += c16 >>> 16;
          c16 &= 0xFFFF;
          c32 += a32 + b32;
          c48 += c32 >>> 16;
          c32 &= 0xFFFF;
          c48 += a48 + b48;
          c48 &= 0xFFFF;
          return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
        };

        /**
         * Returns the difference of this and the specified Long.
         * @param {!Long|number|string} subtrahend Subtrahend
         * @returns {!Long} Difference
         */
        LongPrototype.subtract = function subtract(subtrahend) {
          if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
          return this.add(subtrahend.neg());
        };

        /**
         * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
         * @function
         * @param {!Long|number|string} subtrahend Subtrahend
         * @returns {!Long} Difference
         */
        LongPrototype.sub = LongPrototype.subtract;

        /**
         * Returns the product of this and the specified Long.
         * @param {!Long|number|string} multiplier Multiplier
         * @returns {!Long} Product
         */
        LongPrototype.multiply = function multiply(multiplier) {
          if (this.isZero()) return ZERO;
          if (!isLong(multiplier)) multiplier = fromValue(multiplier);
          if (multiplier.isZero()) return ZERO;
          if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
          if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;

          if (this.isNegative()) {
            if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());else return this.neg().mul(multiplier).neg();
          } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();

          // If both longs are small, use float multiplication
          if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

          // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
          // We can skip products that would overflow.

          var a48 = this.high >>> 16;
          var a32 = this.high & 0xFFFF;
          var a16 = this.low >>> 16;
          var a00 = this.low & 0xFFFF;

          var b48 = multiplier.high >>> 16;
          var b32 = multiplier.high & 0xFFFF;
          var b16 = multiplier.low >>> 16;
          var b00 = multiplier.low & 0xFFFF;

          var c48 = 0,
              c32 = 0,
              c16 = 0,
              c00 = 0;
          c00 += a00 * b00;
          c16 += c00 >>> 16;
          c00 &= 0xFFFF;
          c16 += a16 * b00;
          c32 += c16 >>> 16;
          c16 &= 0xFFFF;
          c16 += a00 * b16;
          c32 += c16 >>> 16;
          c16 &= 0xFFFF;
          c32 += a32 * b00;
          c48 += c32 >>> 16;
          c32 &= 0xFFFF;
          c32 += a16 * b16;
          c48 += c32 >>> 16;
          c32 &= 0xFFFF;
          c32 += a00 * b32;
          c48 += c32 >>> 16;
          c32 &= 0xFFFF;
          c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
          c48 &= 0xFFFF;
          return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
        };

        /**
         * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
         * @function
         * @param {!Long|number|string} multiplier Multiplier
         * @returns {!Long} Product
         */
        LongPrototype.mul = LongPrototype.multiply;

        /**
         * Returns this Long divided by the specified. The result is signed if this Long is signed or
         *  unsigned if this Long is unsigned.
         * @param {!Long|number|string} divisor Divisor
         * @returns {!Long} Quotient
         */
        LongPrototype.divide = function divide(divisor) {
          if (!isLong(divisor)) divisor = fromValue(divisor);
          if (divisor.isZero()) throw Error('division by zero');
          if (this.isZero()) return this.unsigned ? UZERO : ZERO;
          var approx, rem, res;
          if (!this.unsigned) {
            // This section is only relevant for signed longs and is derived from the
            // closure library as a whole.
            if (this.eq(MIN_VALUE)) {
              if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
              else if (divisor.eq(MIN_VALUE)) return ONE;else {
                  // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                  var halfThis = this.shr(1);
                  approx = halfThis.div(divisor).shl(1);
                  if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                  } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                  }
                }
            } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
              if (divisor.isNegative()) return this.neg().div(divisor.neg());
              return this.neg().div(divisor).neg();
            } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
            res = ZERO;
          } else {
            // The algorithm below has not been made for unsigned longs. It's therefore
            // required to take special care of the MSB prior to running it.
            if (!divisor.unsigned) divisor = divisor.toUnsigned();
            if (divisor.gt(this)) return UZERO;
            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
              return UONE;
            res = UZERO;
          }

          // Repeat the following until the remainder is less than other:  find a
          // floating-point that approximates remainder / other *from below*, add this
          // into the result, and subtract it from the remainder.  It is critical that
          // the approximate value is less than or equal to the real value so that the
          // remainder never becomes negative.
          rem = this;
          while (rem.gte(divisor)) {
            // Approximate the result of division. This may be a little greater or
            // smaller than the actual value.
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

            // We will tweak the approximate result by changing it in the 48-th digit or
            // the smallest non-fractional digit, whichever is larger.
            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
                delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48),


            // Decrease the approximation until it is smaller than the remainder.  Note
            // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
                approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
              approx -= delta;
              approxRes = fromNumber(approx, this.unsigned);
              approxRem = approxRes.mul(divisor);
            }

            // We know the answer can't be zero... and actually, zero would cause
            // infinite recursion since we would make no progress.
            if (approxRes.isZero()) approxRes = ONE;

            res = res.add(approxRes);
            rem = rem.sub(approxRem);
          }
          return res;
        };

        /**
         * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
         * @function
         * @param {!Long|number|string} divisor Divisor
         * @returns {!Long} Quotient
         */
        LongPrototype.div = LongPrototype.divide;

        /**
         * Returns this Long modulo the specified.
         * @param {!Long|number|string} divisor Divisor
         * @returns {!Long} Remainder
         */
        LongPrototype.modulo = function modulo(divisor) {
          if (!isLong(divisor)) divisor = fromValue(divisor);
          return this.sub(this.div(divisor).mul(divisor));
        };

        /**
         * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
         * @function
         * @param {!Long|number|string} divisor Divisor
         * @returns {!Long} Remainder
         */
        LongPrototype.mod = LongPrototype.modulo;

        /**
         * Returns the bitwise NOT of this Long.
         * @returns {!Long}
         */
        LongPrototype.not = function not() {
          return fromBits(~this.low, ~this.high, this.unsigned);
        };

        /**
         * Returns the bitwise AND of this Long and the specified.
         * @param {!Long|number|string} other Other Long
         * @returns {!Long}
         */
        LongPrototype.and = function and(other) {
          if (!isLong(other)) other = fromValue(other);
          return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
        };

        /**
         * Returns the bitwise OR of this Long and the specified.
         * @param {!Long|number|string} other Other Long
         * @returns {!Long}
         */
        LongPrototype.or = function or(other) {
          if (!isLong(other)) other = fromValue(other);
          return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
        };

        /**
         * Returns the bitwise XOR of this Long and the given one.
         * @param {!Long|number|string} other Other Long
         * @returns {!Long}
         */
        LongPrototype.xor = function xor(other) {
          if (!isLong(other)) other = fromValue(other);
          return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
        };

        /**
         * Returns this Long with bits shifted to the left by the given amount.
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */
        LongPrototype.shiftLeft = function shiftLeft(numBits) {
          if (isLong(numBits)) numBits = numBits.toInt();
          if ((numBits &= 63) === 0) return this;else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);else return fromBits(0, this.low << numBits - 32, this.unsigned);
        };

        /**
         * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
         * @function
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */
        LongPrototype.shl = LongPrototype.shiftLeft;

        /**
         * Returns this Long with bits arithmetically shifted to the right by the given amount.
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */
        LongPrototype.shiftRight = function shiftRight(numBits) {
          if (isLong(numBits)) numBits = numBits.toInt();
          if ((numBits &= 63) === 0) return this;else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        };

        /**
         * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
         * @function
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */
        LongPrototype.shr = LongPrototype.shiftRight;

        /**
         * Returns this Long with bits logically shifted to the right by the given amount.
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */
        LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
          if (isLong(numBits)) numBits = numBits.toInt();
          numBits &= 63;
          if (numBits === 0) return this;else {
            var high = this.high;
            if (numBits < 32) {
              var low = this.low;
              return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
            } else if (numBits === 32) return fromBits(high, 0, this.unsigned);else return fromBits(high >>> numBits - 32, 0, this.unsigned);
          }
        };

        /**
         * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
         * @function
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */
        LongPrototype.shru = LongPrototype.shiftRightUnsigned;

        /**
         * Converts this Long to signed.
         * @returns {!Long} Signed long
         */
        LongPrototype.toSigned = function toSigned() {
          if (!this.unsigned) return this;
          return fromBits(this.low, this.high, false);
        };

        /**
         * Converts this Long to unsigned.
         * @returns {!Long} Unsigned long
         */
        LongPrototype.toUnsigned = function toUnsigned() {
          if (this.unsigned) return this;
          return fromBits(this.low, this.high, true);
        };

        /**
         * Converts this Long to its byte representation.
         * @param {boolean=} le Whether little or big endian, defaults to big endian
         * @returns {!Array.<number>} Byte representation
         */
        LongPrototype.toBytes = function (le) {
          return le ? this.toBytesLE() : this.toBytesBE();
        };

        /**
         * Converts this Long to its little endian byte representation.
         * @returns {!Array.<number>} Little endian byte representation
         */
        LongPrototype.toBytesLE = function () {
          var hi = this.high,
              lo = this.low;
          return [lo & 0xff, lo >>> 8 & 0xff, lo >>> 16 & 0xff, lo >>> 24 & 0xff, hi & 0xff, hi >>> 8 & 0xff, hi >>> 16 & 0xff, hi >>> 24 & 0xff];
        };

        /**
         * Converts this Long to its big endian byte representation.
         * @returns {!Array.<number>} Big endian byte representation
         */
        LongPrototype.toBytesBE = function () {
          var hi = this.high,
              lo = this.low;
          return [hi >>> 24 & 0xff, hi >>> 16 & 0xff, hi >>> 8 & 0xff, hi & 0xff, lo >>> 24 & 0xff, lo >>> 16 & 0xff, lo >>> 8 & 0xff, lo & 0xff];
        };

        return Long;
      });
    }, {}], 49: [function (require, module, exports) {
      (function (Buffer) {
        'use strict';

        var inherits = require('inherits');
        var HashBase = require('hash-base');

        var ARRAY16 = new Array(16);

        function MD5() {
          HashBase.call(this, 64);

          // state
          this._a = 0x67452301;
          this._b = 0xefcdab89;
          this._c = 0x98badcfe;
          this._d = 0x10325476;
        }

        inherits(MD5, HashBase);

        MD5.prototype._update = function () {
          var M = ARRAY16;
          for (var i = 0; i < 16; ++i) M[i] = this._block.readInt32LE(i * 4);

          var a = this._a;
          var b = this._b;
          var c = this._c;
          var d = this._d;

          a = fnF(a, b, c, d, M[0], 0xd76aa478, 7);
          d = fnF(d, a, b, c, M[1], 0xe8c7b756, 12);
          c = fnF(c, d, a, b, M[2], 0x242070db, 17);
          b = fnF(b, c, d, a, M[3], 0xc1bdceee, 22);
          a = fnF(a, b, c, d, M[4], 0xf57c0faf, 7);
          d = fnF(d, a, b, c, M[5], 0x4787c62a, 12);
          c = fnF(c, d, a, b, M[6], 0xa8304613, 17);
          b = fnF(b, c, d, a, M[7], 0xfd469501, 22);
          a = fnF(a, b, c, d, M[8], 0x698098d8, 7);
          d = fnF(d, a, b, c, M[9], 0x8b44f7af, 12);
          c = fnF(c, d, a, b, M[10], 0xffff5bb1, 17);
          b = fnF(b, c, d, a, M[11], 0x895cd7be, 22);
          a = fnF(a, b, c, d, M[12], 0x6b901122, 7);
          d = fnF(d, a, b, c, M[13], 0xfd987193, 12);
          c = fnF(c, d, a, b, M[14], 0xa679438e, 17);
          b = fnF(b, c, d, a, M[15], 0x49b40821, 22);

          a = fnG(a, b, c, d, M[1], 0xf61e2562, 5);
          d = fnG(d, a, b, c, M[6], 0xc040b340, 9);
          c = fnG(c, d, a, b, M[11], 0x265e5a51, 14);
          b = fnG(b, c, d, a, M[0], 0xe9b6c7aa, 20);
          a = fnG(a, b, c, d, M[5], 0xd62f105d, 5);
          d = fnG(d, a, b, c, M[10], 0x02441453, 9);
          c = fnG(c, d, a, b, M[15], 0xd8a1e681, 14);
          b = fnG(b, c, d, a, M[4], 0xe7d3fbc8, 20);
          a = fnG(a, b, c, d, M[9], 0x21e1cde6, 5);
          d = fnG(d, a, b, c, M[14], 0xc33707d6, 9);
          c = fnG(c, d, a, b, M[3], 0xf4d50d87, 14);
          b = fnG(b, c, d, a, M[8], 0x455a14ed, 20);
          a = fnG(a, b, c, d, M[13], 0xa9e3e905, 5);
          d = fnG(d, a, b, c, M[2], 0xfcefa3f8, 9);
          c = fnG(c, d, a, b, M[7], 0x676f02d9, 14);
          b = fnG(b, c, d, a, M[12], 0x8d2a4c8a, 20);

          a = fnH(a, b, c, d, M[5], 0xfffa3942, 4);
          d = fnH(d, a, b, c, M[8], 0x8771f681, 11);
          c = fnH(c, d, a, b, M[11], 0x6d9d6122, 16);
          b = fnH(b, c, d, a, M[14], 0xfde5380c, 23);
          a = fnH(a, b, c, d, M[1], 0xa4beea44, 4);
          d = fnH(d, a, b, c, M[4], 0x4bdecfa9, 11);
          c = fnH(c, d, a, b, M[7], 0xf6bb4b60, 16);
          b = fnH(b, c, d, a, M[10], 0xbebfbc70, 23);
          a = fnH(a, b, c, d, M[13], 0x289b7ec6, 4);
          d = fnH(d, a, b, c, M[0], 0xeaa127fa, 11);
          c = fnH(c, d, a, b, M[3], 0xd4ef3085, 16);
          b = fnH(b, c, d, a, M[6], 0x04881d05, 23);
          a = fnH(a, b, c, d, M[9], 0xd9d4d039, 4);
          d = fnH(d, a, b, c, M[12], 0xe6db99e5, 11);
          c = fnH(c, d, a, b, M[15], 0x1fa27cf8, 16);
          b = fnH(b, c, d, a, M[2], 0xc4ac5665, 23);

          a = fnI(a, b, c, d, M[0], 0xf4292244, 6);
          d = fnI(d, a, b, c, M[7], 0x432aff97, 10);
          c = fnI(c, d, a, b, M[14], 0xab9423a7, 15);
          b = fnI(b, c, d, a, M[5], 0xfc93a039, 21);
          a = fnI(a, b, c, d, M[12], 0x655b59c3, 6);
          d = fnI(d, a, b, c, M[3], 0x8f0ccc92, 10);
          c = fnI(c, d, a, b, M[10], 0xffeff47d, 15);
          b = fnI(b, c, d, a, M[1], 0x85845dd1, 21);
          a = fnI(a, b, c, d, M[8], 0x6fa87e4f, 6);
          d = fnI(d, a, b, c, M[15], 0xfe2ce6e0, 10);
          c = fnI(c, d, a, b, M[6], 0xa3014314, 15);
          b = fnI(b, c, d, a, M[13], 0x4e0811a1, 21);
          a = fnI(a, b, c, d, M[4], 0xf7537e82, 6);
          d = fnI(d, a, b, c, M[11], 0xbd3af235, 10);
          c = fnI(c, d, a, b, M[2], 0x2ad7d2bb, 15);
          b = fnI(b, c, d, a, M[9], 0xeb86d391, 21);

          this._a = this._a + a | 0;
          this._b = this._b + b | 0;
          this._c = this._c + c | 0;
          this._d = this._d + d | 0;
        };

        MD5.prototype._digest = function () {
          // create padding and handle blocks
          this._block[this._blockOffset++] = 0x80;
          if (this._blockOffset > 56) {
            this._block.fill(0, this._blockOffset, 64);
            this._update();
            this._blockOffset = 0;
          }

          this._block.fill(0, this._blockOffset, 56);
          this._block.writeUInt32LE(this._length[0], 56);
          this._block.writeUInt32LE(this._length[1], 60);
          this._update();

          // produce result
          var buffer = new Buffer(16);
          buffer.writeInt32LE(this._a, 0);
          buffer.writeInt32LE(this._b, 4);
          buffer.writeInt32LE(this._c, 8);
          buffer.writeInt32LE(this._d, 12);
          return buffer;
        };

        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }

        function fnF(a, b, c, d, m, k, s) {
          return rotl(a + (b & c | ~b & d) + m + k | 0, s) + b | 0;
        }

        function fnG(a, b, c, d, m, k, s) {
          return rotl(a + (b & d | c & ~d) + m + k | 0, s) + b | 0;
        }

        function fnH(a, b, c, d, m, k, s) {
          return rotl(a + (b ^ c ^ d) + m + k | 0, s) + b | 0;
        }

        function fnI(a, b, c, d, m, k, s) {
          return rotl(a + (c ^ (b | ~d)) + m + k | 0, s) + b | 0;
        }

        module.exports = MD5;
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27, "hash-base": 50, "inherits": 45 }], 50: [function (require, module, exports) {
      'use strict';

      var Buffer = require('safe-buffer').Buffer;
      var Transform = require('stream').Transform;
      var inherits = require('inherits');

      function throwIfNotStringOrBuffer(val, prefix) {
        if (!Buffer.isBuffer(val) && typeof val !== 'string') {
          throw new TypeError(prefix + ' must be a string or a buffer');
        }
      }

      function HashBase(blockSize) {
        Transform.call(this);

        this._block = Buffer.allocUnsafe(blockSize);
        this._blockSize = blockSize;
        this._blockOffset = 0;
        this._length = [0, 0, 0, 0];

        this._finalized = false;
      }

      inherits(HashBase, Transform);

      HashBase.prototype._transform = function (chunk, encoding, callback) {
        var error = null;
        try {
          this.update(chunk, encoding);
        } catch (err) {
          error = err;
        }

        callback(error);
      };

      HashBase.prototype._flush = function (callback) {
        var error = null;
        try {
          this.push(this.digest());
        } catch (err) {
          error = err;
        }

        callback(error);
      };

      HashBase.prototype.update = function (data, encoding) {
        throwIfNotStringOrBuffer(data, 'Data');
        if (this._finalized) throw new Error('Digest already called');
        if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);

        // consume data
        var block = this._block;
        var offset = 0;
        while (this._blockOffset + data.length - offset >= this._blockSize) {
          for (var i = this._blockOffset; i < this._blockSize;) block[i++] = data[offset++];
          this._update();
          this._blockOffset = 0;
        }
        while (offset < data.length) block[this._blockOffset++] = data[offset++];

        // update length
        for (var j = 0, carry = data.length * 8; carry > 0; ++j) {
          this._length[j] += carry;
          carry = this._length[j] / 0x0100000000 | 0;
          if (carry > 0) this._length[j] -= 0x0100000000 * carry;
        }

        return this;
      };

      HashBase.prototype._update = function () {
        throw new Error('_update is not implemented');
      };

      HashBase.prototype.digest = function (encoding) {
        if (this._finalized) throw new Error('Digest already called');
        this._finalized = true;

        var digest = this._digest();
        if (encoding !== undefined) digest = digest.toString(encoding);

        // reset state
        this._block.fill(0);
        this._blockOffset = 0;
        for (var i = 0; i < 4; ++i) this._length[i] = 0;

        return digest;
      };

      HashBase.prototype._digest = function () {
        throw new Error('_digest is not implemented');
      };

      module.exports = HashBase;
    }, { "inherits": 45, "safe-buffer": 67, "stream": 77 }], 51: [function (require, module, exports) {
      (function (process) {
        'use strict';

        if (!process.version || process.version.indexOf('v0.') === 0 || process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
          module.exports = nextTick;
        } else {
          module.exports = process.nextTick;
        }

        function nextTick(fn, arg1, arg2, arg3) {
          if (typeof fn !== 'function') {
            throw new TypeError('"callback" argument must be a function');
          }
          var len = arguments.length;
          var args, i;
          switch (len) {
            case 0:
            case 1:
              return process.nextTick(fn);
            case 2:
              return process.nextTick(function afterTickOne() {
                fn.call(null, arg1);
              });
            case 3:
              return process.nextTick(function afterTickTwo() {
                fn.call(null, arg1, arg2);
              });
            case 4:
              return process.nextTick(function afterTickThree() {
                fn.call(null, arg1, arg2, arg3);
              });
            default:
              args = new Array(len - 1);
              i = 0;
              while (i < args.length) {
                args[i++] = arguments[i];
              }
              return process.nextTick(function afterTick() {
                fn.apply(null, args);
              });
          }
        }
      }).call(this, require('_process'));
    }, { "_process": 52 }], 52: [function (require, module, exports) {
      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };
    }, {}], 53: [function (require, module, exports) {
      module.exports = require('./lib/_stream_duplex.js');
    }, { "./lib/_stream_duplex.js": 54 }], 54: [function (require, module, exports) {
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      // a duplex stream is just a stream that is both readable and writable.
      // Since JS doesn't have multiple prototypal inheritance, this class
      // prototypally inherits from Readable, and then parasitically from
      // Writable.

      'use strict';

      /*<replacement>*/

      var processNextTick = require('process-nextick-args');
      /*</replacement>*/

      /*<replacement>*/
      var objectKeys = Object.keys || function (obj) {
        var keys = [];
        for (var key in obj) {
          keys.push(key);
        }return keys;
      };
      /*</replacement>*/

      module.exports = Duplex;

      /*<replacement>*/
      var util = require('core-util-is');
      util.inherits = require('inherits');
      /*</replacement>*/

      var Readable = require('./_stream_readable');
      var Writable = require('./_stream_writable');

      util.inherits(Duplex, Readable);

      var keys = objectKeys(Writable.prototype);
      for (var v = 0; v < keys.length; v++) {
        var method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
      }

      function Duplex(options) {
        if (!(this instanceof Duplex)) return new Duplex(options);

        Readable.call(this, options);
        Writable.call(this, options);

        if (options && options.readable === false) this.readable = false;

        if (options && options.writable === false) this.writable = false;

        this.allowHalfOpen = true;
        if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

        this.once('end', onend);
      }

      // the no-half-open enforcer
      function onend() {
        // if we allow half-open state, or if the writable side ended,
        // then we're ok.
        if (this.allowHalfOpen || this._writableState.ended) return;

        // no more data can be written.
        // But allow more writes to happen in this tick.
        processNextTick(onEndNT, this);
      }

      function onEndNT(self) {
        self.end();
      }

      Object.defineProperty(Duplex.prototype, 'destroyed', {
        get: function () {
          if (this._readableState === undefined || this._writableState === undefined) {
            return false;
          }
          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function (value) {
          // we ignore the value if the stream
          // has not been initialized yet
          if (this._readableState === undefined || this._writableState === undefined) {
            return;
          }

          // backward compatibility, the user is explicitly
          // managing destroyed
          this._readableState.destroyed = value;
          this._writableState.destroyed = value;
        }
      });

      Duplex.prototype._destroy = function (err, cb) {
        this.push(null);
        this.end();

        processNextTick(cb, err);
      };

      function forEach(xs, f) {
        for (var i = 0, l = xs.length; i < l; i++) {
          f(xs[i], i);
        }
      }
    }, { "./_stream_readable": 56, "./_stream_writable": 58, "core-util-is": 30, "inherits": 45, "process-nextick-args": 51 }], 55: [function (require, module, exports) {
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      // a passthrough stream.
      // basically just the most minimal sort of Transform stream.
      // Every written chunk gets output as-is.

      'use strict';

      module.exports = PassThrough;

      var Transform = require('./_stream_transform');

      /*<replacement>*/
      var util = require('core-util-is');
      util.inherits = require('inherits');
      /*</replacement>*/

      util.inherits(PassThrough, Transform);

      function PassThrough(options) {
        if (!(this instanceof PassThrough)) return new PassThrough(options);

        Transform.call(this, options);
      }

      PassThrough.prototype._transform = function (chunk, encoding, cb) {
        cb(null, chunk);
      };
    }, { "./_stream_transform": 57, "core-util-is": 30, "inherits": 45 }], 56: [function (require, module, exports) {
      (function (process, global) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        'use strict';

        /*<replacement>*/

        var processNextTick = require('process-nextick-args');
        /*</replacement>*/

        module.exports = Readable;

        /*<replacement>*/
        var isArray = require('isarray');
        /*</replacement>*/

        /*<replacement>*/
        var Duplex;
        /*</replacement>*/

        Readable.ReadableState = ReadableState;

        /*<replacement>*/
        var EE = require('events').EventEmitter;

        var EElistenerCount = function (emitter, type) {
          return emitter.listeners(type).length;
        };
        /*</replacement>*/

        /*<replacement>*/
        var Stream = require('./internal/streams/stream');
        /*</replacement>*/

        // TODO(bmeurer): Change this back to const once hole checks are
        // properly optimized away early in Ignition+TurboFan.
        /*<replacement>*/
        var Buffer = require('safe-buffer').Buffer;
        var OurUint8Array = global.Uint8Array || function () {};
        function _uint8ArrayToBuffer(chunk) {
          return Buffer.from(chunk);
        }
        function _isUint8Array(obj) {
          return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
        }
        /*</replacement>*/

        /*<replacement>*/
        var util = require('core-util-is');
        util.inherits = require('inherits');
        /*</replacement>*/

        /*<replacement>*/
        var debugUtil = require('util');
        var debug = void 0;
        if (debugUtil && debugUtil.debuglog) {
          debug = debugUtil.debuglog('stream');
        } else {
          debug = function () {};
        }
        /*</replacement>*/

        var BufferList = require('./internal/streams/BufferList');
        var destroyImpl = require('./internal/streams/destroy');
        var StringDecoder;

        util.inherits(Readable, Stream);

        var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

        function prependListener(emitter, event, fn) {
          // Sadly this is not cacheable as some libraries bundle their own
          // event emitter implementation with them.
          if (typeof emitter.prependListener === 'function') {
            return emitter.prependListener(event, fn);
          } else {
            // This is a hack to make sure that our error handler is attached before any
            // userland ones.  NEVER DO THIS. This is here only because this code needs
            // to continue to work with older versions of Node.js that do not include
            // the prependListener() method. The goal is to eventually remove this hack.
            if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
          }
        }

        function ReadableState(options, stream) {
          Duplex = Duplex || require('./_stream_duplex');

          options = options || {};

          // object stream flag. Used to make read(n) ignore n and to
          // make all the buffer merging and length checks go away
          this.objectMode = !!options.objectMode;

          if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

          // the point at which it stops calling _read() to fill the buffer
          // Note: 0 is a valid value, means "don't call _read preemptively ever"
          var hwm = options.highWaterMark;
          var defaultHwm = this.objectMode ? 16 : 16 * 1024;
          this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

          // cast to ints.
          this.highWaterMark = Math.floor(this.highWaterMark);

          // A linked list is used to store data chunks instead of an array because the
          // linked list can remove elements from the beginning faster than
          // array.shift()
          this.buffer = new BufferList();
          this.length = 0;
          this.pipes = null;
          this.pipesCount = 0;
          this.flowing = null;
          this.ended = false;
          this.endEmitted = false;
          this.reading = false;

          // a flag to be able to tell if the event 'readable'/'data' is emitted
          // immediately, or on a later tick.  We set this to true at first, because
          // any actions that shouldn't happen until "later" should generally also
          // not happen before the first read call.
          this.sync = true;

          // whenever we return null, then we set a flag to say
          // that we're awaiting a 'readable' event emission.
          this.needReadable = false;
          this.emittedReadable = false;
          this.readableListening = false;
          this.resumeScheduled = false;

          // has it been destroyed
          this.destroyed = false;

          // Crypto is kind of old and crusty.  Historically, its default string
          // encoding is 'binary' so we have to make this configurable.
          // Everything else in the universe uses 'utf8', though.
          this.defaultEncoding = options.defaultEncoding || 'utf8';

          // the number of writers that are awaiting a drain event in .pipe()s
          this.awaitDrain = 0;

          // if true, a maybeReadMore has been scheduled
          this.readingMore = false;

          this.decoder = null;
          this.encoding = null;
          if (options.encoding) {
            if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
            this.decoder = new StringDecoder(options.encoding);
            this.encoding = options.encoding;
          }
        }

        function Readable(options) {
          Duplex = Duplex || require('./_stream_duplex');

          if (!(this instanceof Readable)) return new Readable(options);

          this._readableState = new ReadableState(options, this);

          // legacy
          this.readable = true;

          if (options) {
            if (typeof options.read === 'function') this._read = options.read;

            if (typeof options.destroy === 'function') this._destroy = options.destroy;
          }

          Stream.call(this);
        }

        Object.defineProperty(Readable.prototype, 'destroyed', {
          get: function () {
            if (this._readableState === undefined) {
              return false;
            }
            return this._readableState.destroyed;
          },
          set: function (value) {
            // we ignore the value if the stream
            // has not been initialized yet
            if (!this._readableState) {
              return;
            }

            // backward compatibility, the user is explicitly
            // managing destroyed
            this._readableState.destroyed = value;
          }
        });

        Readable.prototype.destroy = destroyImpl.destroy;
        Readable.prototype._undestroy = destroyImpl.undestroy;
        Readable.prototype._destroy = function (err, cb) {
          this.push(null);
          cb(err);
        };

        // Manually shove something into the read() buffer.
        // This returns true if the highWaterMark has not been hit yet,
        // similar to how Writable.write() returns true if you should
        // write() some more.
        Readable.prototype.push = function (chunk, encoding) {
          var state = this._readableState;
          var skipChunkCheck;

          if (!state.objectMode) {
            if (typeof chunk === 'string') {
              encoding = encoding || state.defaultEncoding;
              if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = '';
              }
              skipChunkCheck = true;
            }
          } else {
            skipChunkCheck = true;
          }

          return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
        };

        // Unshift should *always* be something directly out of read()
        Readable.prototype.unshift = function (chunk) {
          return readableAddChunk(this, chunk, null, true, false);
        };

        function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
          var state = stream._readableState;
          if (chunk === null) {
            state.reading = false;
            onEofChunk(stream, state);
          } else {
            var er;
            if (!skipChunkCheck) er = chunkInvalid(state, chunk);
            if (er) {
              stream.emit('error', er);
            } else if (state.objectMode || chunk && chunk.length > 0) {
              if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                chunk = _uint8ArrayToBuffer(chunk);
              }

              if (addToFront) {
                if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
              } else if (state.ended) {
                stream.emit('error', new Error('stream.push() after EOF'));
              } else {
                state.reading = false;
                if (state.decoder && !encoding) {
                  chunk = state.decoder.write(chunk);
                  if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
                } else {
                  addChunk(stream, state, chunk, false);
                }
              }
            } else if (!addToFront) {
              state.reading = false;
            }
          }

          return needMoreData(state);
        }

        function addChunk(stream, state, chunk, addToFront) {
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            // update the buffer info.
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

            if (state.needReadable) emitReadable(stream);
          }
          maybeReadMore(stream, state);
        }

        function chunkInvalid(state, chunk) {
          var er;
          if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
            er = new TypeError('Invalid non-string/buffer chunk');
          }
          return er;
        }

        // if it's past the high water mark, we can push in some more.
        // Also, if we have no data yet, we can stand some
        // more bytes.  This is to work around cases where hwm=0,
        // such as the repl.  Also, if the push() triggered a
        // readable event, and the user called read(largeNumber) such that
        // needReadable was set, then we ought to push more, so that another
        // 'readable' event will be triggered.
        function needMoreData(state) {
          return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
        }

        Readable.prototype.isPaused = function () {
          return this._readableState.flowing === false;
        };

        // backwards compatibility.
        Readable.prototype.setEncoding = function (enc) {
          if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
          this._readableState.decoder = new StringDecoder(enc);
          this._readableState.encoding = enc;
          return this;
        };

        // Don't raise the hwm > 8MB
        var MAX_HWM = 0x800000;
        function computeNewHighWaterMark(n) {
          if (n >= MAX_HWM) {
            n = MAX_HWM;
          } else {
            // Get the next highest power of 2 to prevent increasing hwm excessively in
            // tiny amounts
            n--;
            n |= n >>> 1;
            n |= n >>> 2;
            n |= n >>> 4;
            n |= n >>> 8;
            n |= n >>> 16;
            n++;
          }
          return n;
        }

        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.
        function howMuchToRead(n, state) {
          if (n <= 0 || state.length === 0 && state.ended) return 0;
          if (state.objectMode) return 1;
          if (n !== n) {
            // Only flow one buffer at a time
            if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
          }
          // If we're asking for more than the current hwm, then raise the hwm.
          if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
          if (n <= state.length) return n;
          // Don't have enough
          if (!state.ended) {
            state.needReadable = true;
            return 0;
          }
          return state.length;
        }

        // you can override either this method, or the async _read(n) below.
        Readable.prototype.read = function (n) {
          debug('read', n);
          n = parseInt(n, 10);
          var state = this._readableState;
          var nOrig = n;

          if (n !== 0) state.emittedReadable = false;

          // if we're doing read(0) to trigger a readable event, but we
          // already have a bunch of data in the buffer, then just trigger
          // the 'readable' event and move on.
          if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
            debug('read: emitReadable', state.length, state.ended);
            if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
            return null;
          }

          n = howMuchToRead(n, state);

          // if we've ended, and we're now clear, then finish it up.
          if (n === 0 && state.ended) {
            if (state.length === 0) endReadable(this);
            return null;
          }

          // All the actual chunk generation logic needs to be
          // *below* the call to _read.  The reason is that in certain
          // synthetic stream cases, such as passthrough streams, _read
          // may be a completely synchronous operation which may change
          // the state of the read buffer, providing enough data when
          // before there was *not* enough.
          //
          // So, the steps are:
          // 1. Figure out what the state of things will be after we do
          // a read from the buffer.
          //
          // 2. If that resulting state will trigger a _read, then call _read.
          // Note that this may be asynchronous, or synchronous.  Yes, it is
          // deeply ugly to write APIs this way, but that still doesn't mean
          // that the Readable class should behave improperly, as streams are
          // designed to be sync/async agnostic.
          // Take note if the _read call is sync or async (ie, if the read call
          // has returned yet), so that we know whether or not it's safe to emit
          // 'readable' etc.
          //
          // 3. Actually pull the requested chunks out of the buffer and return.

          // if we need a readable event, then we need to do some reading.
          var doRead = state.needReadable;
          debug('need readable', doRead);

          // if we currently have less than the highWaterMark, then also read some
          if (state.length === 0 || state.length - n < state.highWaterMark) {
            doRead = true;
            debug('length less than watermark', doRead);
          }

          // however, if we've ended, then there's no point, and if we're already
          // reading, then it's unnecessary.
          if (state.ended || state.reading) {
            doRead = false;
            debug('reading or ended', doRead);
          } else if (doRead) {
            debug('do read');
            state.reading = true;
            state.sync = true;
            // if the length is currently zero, then we *need* a readable event.
            if (state.length === 0) state.needReadable = true;
            // call internal read method
            this._read(state.highWaterMark);
            state.sync = false;
            // If _read pushed data synchronously, then `reading` will be false,
            // and we need to re-evaluate how much data we can return to the user.
            if (!state.reading) n = howMuchToRead(nOrig, state);
          }

          var ret;
          if (n > 0) ret = fromList(n, state);else ret = null;

          if (ret === null) {
            state.needReadable = true;
            n = 0;
          } else {
            state.length -= n;
          }

          if (state.length === 0) {
            // If we have nothing in the buffer, then we want to know
            // as soon as we *do* get something into the buffer.
            if (!state.ended) state.needReadable = true;

            // If we tried to read() past the EOF, then emit end on the next tick.
            if (nOrig !== n && state.ended) endReadable(this);
          }

          if (ret !== null) this.emit('data', ret);

          return ret;
        };

        function onEofChunk(stream, state) {
          if (state.ended) return;
          if (state.decoder) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) {
              state.buffer.push(chunk);
              state.length += state.objectMode ? 1 : chunk.length;
            }
          }
          state.ended = true;

          // emit 'readable' now to make sure it gets picked up.
          emitReadable(stream);
        }

        // Don't emit readable right away in sync mode, because this can trigger
        // another read() call => stack overflow.  This way, it might trigger
        // a nextTick recursion warning, but that's not so bad.
        function emitReadable(stream) {
          var state = stream._readableState;
          state.needReadable = false;
          if (!state.emittedReadable) {
            debug('emitReadable', state.flowing);
            state.emittedReadable = true;
            if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
          }
        }

        function emitReadable_(stream) {
          debug('emit readable');
          stream.emit('readable');
          flow(stream);
        }

        // at this point, the user has presumably seen the 'readable' event,
        // and called read() to consume some data.  that may have triggered
        // in turn another _read(n) call, in which case reading = true if
        // it's in progress.
        // However, if we're not ended, or reading, and the length < hwm,
        // then go ahead and try to read some more preemptively.
        function maybeReadMore(stream, state) {
          if (!state.readingMore) {
            state.readingMore = true;
            processNextTick(maybeReadMore_, stream, state);
          }
        }

        function maybeReadMore_(stream, state) {
          var len = state.length;
          while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
            debug('maybeReadMore read 0');
            stream.read(0);
            if (len === state.length)
              // didn't get any data, stop spinning.
              break;else len = state.length;
          }
          state.readingMore = false;
        }

        // abstract method.  to be overridden in specific implementation classes.
        // call cb(er, data) where data is <= n in length.
        // for virtual (non-string, non-buffer) streams, "length" is somewhat
        // arbitrary, and perhaps not very meaningful.
        Readable.prototype._read = function (n) {
          this.emit('error', new Error('_read() is not implemented'));
        };

        Readable.prototype.pipe = function (dest, pipeOpts) {
          var src = this;
          var state = this._readableState;

          switch (state.pipesCount) {
            case 0:
              state.pipes = dest;
              break;
            case 1:
              state.pipes = [state.pipes, dest];
              break;
            default:
              state.pipes.push(dest);
              break;
          }
          state.pipesCount += 1;
          debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

          var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

          var endFn = doEnd ? onend : unpipe;
          if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

          dest.on('unpipe', onunpipe);
          function onunpipe(readable, unpipeInfo) {
            debug('onunpipe');
            if (readable === src) {
              if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
              }
            }
          }

          function onend() {
            debug('onend');
            dest.end();
          }

          // when the dest drains, it reduces the awaitDrain counter
          // on the source.  This would be more elegant with a .once()
          // handler in flow(), but adding and removing repeatedly is
          // too slow.
          var ondrain = pipeOnDrain(src);
          dest.on('drain', ondrain);

          var cleanedUp = false;
          function cleanup() {
            debug('cleanup');
            // cleanup event handlers once the pipe is broken
            dest.removeListener('close', onclose);
            dest.removeListener('finish', onfinish);
            dest.removeListener('drain', ondrain);
            dest.removeListener('error', onerror);
            dest.removeListener('unpipe', onunpipe);
            src.removeListener('end', onend);
            src.removeListener('end', unpipe);
            src.removeListener('data', ondata);

            cleanedUp = true;

            // if the reader is waiting for a drain event from this
            // specific writer, then it would cause it to never start
            // flowing again.
            // So, if this is awaiting a drain, then we just call it now.
            // If we don't know, then assume that we are waiting for one.
            if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
          }

          // If the user pushes more data while we're writing to dest then we'll end up
          // in ondata again. However, we only want to increase awaitDrain once because
          // dest will only emit one 'drain' event for the multiple writes.
          // => Introduce a guard on increasing awaitDrain.
          var increasedAwaitDrain = false;
          src.on('data', ondata);
          function ondata(chunk) {
            debug('ondata');
            increasedAwaitDrain = false;
            var ret = dest.write(chunk);
            if (false === ret && !increasedAwaitDrain) {
              // If the user unpiped during `dest.write()`, it is possible
              // to get stuck in a permanently paused state if that write
              // also returned false.
              // => Check whether `dest` is still a piping destination.
              if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug('false write response, pause', src._readableState.awaitDrain);
                src._readableState.awaitDrain++;
                increasedAwaitDrain = true;
              }
              src.pause();
            }
          }

          // if the dest has an error, then stop piping into it.
          // however, don't suppress the throwing behavior for this.
          function onerror(er) {
            debug('onerror', er);
            unpipe();
            dest.removeListener('error', onerror);
            if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
          }

          // Make sure our error handler is attached before userland ones.
          prependListener(dest, 'error', onerror);

          // Both close and finish should trigger unpipe, but only once.
          function onclose() {
            dest.removeListener('finish', onfinish);
            unpipe();
          }
          dest.once('close', onclose);
          function onfinish() {
            debug('onfinish');
            dest.removeListener('close', onclose);
            unpipe();
          }
          dest.once('finish', onfinish);

          function unpipe() {
            debug('unpipe');
            src.unpipe(dest);
          }

          // tell the dest that it's being piped to
          dest.emit('pipe', src);

          // start the flow if it hasn't been started already.
          if (!state.flowing) {
            debug('pipe resume');
            src.resume();
          }

          return dest;
        };

        function pipeOnDrain(src) {
          return function () {
            var state = src._readableState;
            debug('pipeOnDrain', state.awaitDrain);
            if (state.awaitDrain) state.awaitDrain--;
            if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
              state.flowing = true;
              flow(src);
            }
          };
        }

        Readable.prototype.unpipe = function (dest) {
          var state = this._readableState;
          var unpipeInfo = { hasUnpiped: false };

          // if we're not piping anywhere, then do nothing.
          if (state.pipesCount === 0) return this;

          // just one destination.  most common case.
          if (state.pipesCount === 1) {
            // passed in one, but it's not the right one.
            if (dest && dest !== state.pipes) return this;

            if (!dest) dest = state.pipes;

            // got a match.
            state.pipes = null;
            state.pipesCount = 0;
            state.flowing = false;
            if (dest) dest.emit('unpipe', this, unpipeInfo);
            return this;
          }

          // slow case. multiple pipe destinations.

          if (!dest) {
            // remove all.
            var dests = state.pipes;
            var len = state.pipesCount;
            state.pipes = null;
            state.pipesCount = 0;
            state.flowing = false;

            for (var i = 0; i < len; i++) {
              dests[i].emit('unpipe', this, unpipeInfo);
            }return this;
          }

          // try to find the right one.
          var index = indexOf(state.pipes, dest);
          if (index === -1) return this;

          state.pipes.splice(index, 1);
          state.pipesCount -= 1;
          if (state.pipesCount === 1) state.pipes = state.pipes[0];

          dest.emit('unpipe', this, unpipeInfo);

          return this;
        };

        // set up data events if they are asked for
        // Ensure readable listeners eventually get something
        Readable.prototype.on = function (ev, fn) {
          var res = Stream.prototype.on.call(this, ev, fn);

          if (ev === 'data') {
            // Start flowing on next tick if stream isn't explicitly paused
            if (this._readableState.flowing !== false) this.resume();
          } else if (ev === 'readable') {
            var state = this._readableState;
            if (!state.endEmitted && !state.readableListening) {
              state.readableListening = state.needReadable = true;
              state.emittedReadable = false;
              if (!state.reading) {
                processNextTick(nReadingNextTick, this);
              } else if (state.length) {
                emitReadable(this);
              }
            }
          }

          return res;
        };
        Readable.prototype.addListener = Readable.prototype.on;

        function nReadingNextTick(self) {
          debug('readable nexttick read 0');
          self.read(0);
        }

        // pause() and resume() are remnants of the legacy readable stream API
        // If the user uses them, then switch into old mode.
        Readable.prototype.resume = function () {
          var state = this._readableState;
          if (!state.flowing) {
            debug('resume');
            state.flowing = true;
            resume(this, state);
          }
          return this;
        };

        function resume(stream, state) {
          if (!state.resumeScheduled) {
            state.resumeScheduled = true;
            processNextTick(resume_, stream, state);
          }
        }

        function resume_(stream, state) {
          if (!state.reading) {
            debug('resume read 0');
            stream.read(0);
          }

          state.resumeScheduled = false;
          state.awaitDrain = 0;
          stream.emit('resume');
          flow(stream);
          if (state.flowing && !state.reading) stream.read(0);
        }

        Readable.prototype.pause = function () {
          debug('call pause flowing=%j', this._readableState.flowing);
          if (false !== this._readableState.flowing) {
            debug('pause');
            this._readableState.flowing = false;
            this.emit('pause');
          }
          return this;
        };

        function flow(stream) {
          var state = stream._readableState;
          debug('flow', state.flowing);
          while (state.flowing && stream.read() !== null) {}
        }

        // wrap an old-style stream as the async data source.
        // This is *not* part of the readable stream interface.
        // It is an ugly unfortunate mess of history.
        Readable.prototype.wrap = function (stream) {
          var state = this._readableState;
          var paused = false;

          var self = this;
          stream.on('end', function () {
            debug('wrapped end');
            if (state.decoder && !state.ended) {
              var chunk = state.decoder.end();
              if (chunk && chunk.length) self.push(chunk);
            }

            self.push(null);
          });

          stream.on('data', function (chunk) {
            debug('wrapped data');
            if (state.decoder) chunk = state.decoder.write(chunk);

            // don't skip over falsy values in objectMode
            if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

            var ret = self.push(chunk);
            if (!ret) {
              paused = true;
              stream.pause();
            }
          });

          // proxy all the other methods.
          // important when wrapping filters and duplexes.
          for (var i in stream) {
            if (this[i] === undefined && typeof stream[i] === 'function') {
              this[i] = function (method) {
                return function () {
                  return stream[method].apply(stream, arguments);
                };
              }(i);
            }
          }

          // proxy certain important events.
          for (var n = 0; n < kProxyEvents.length; n++) {
            stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
          }

          // when we try to consume some more bytes, simply unpause the
          // underlying stream.
          self._read = function (n) {
            debug('wrapped _read', n);
            if (paused) {
              paused = false;
              stream.resume();
            }
          };

          return self;
        };

        // exposed for testing purposes only.
        Readable._fromList = fromList;

        // Pluck off n bytes from an array of buffers.
        // Length is the combined lengths of all the buffers in the list.
        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.
        function fromList(n, state) {
          // nothing buffered
          if (state.length === 0) return null;

          var ret;
          if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
            // read it all, truncate the list
            if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
            state.buffer.clear();
          } else {
            // read part of list
            ret = fromListPartial(n, state.buffer, state.decoder);
          }

          return ret;
        }

        // Extracts only enough buffered data to satisfy the amount requested.
        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.
        function fromListPartial(n, list, hasStrings) {
          var ret;
          if (n < list.head.data.length) {
            // slice is the same for buffers and strings
            ret = list.head.data.slice(0, n);
            list.head.data = list.head.data.slice(n);
          } else if (n === list.head.data.length) {
            // first chunk is a perfect match
            ret = list.shift();
          } else {
            // result spans more than one buffer
            ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
          }
          return ret;
        }

        // Copies a specified amount of characters from the list of buffered data
        // chunks.
        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.
        function copyFromBufferString(n, list) {
          var p = list.head;
          var c = 1;
          var ret = p.data;
          n -= ret.length;
          while (p = p.next) {
            var str = p.data;
            var nb = n > str.length ? str.length : n;
            if (nb === str.length) ret += str;else ret += str.slice(0, n);
            n -= nb;
            if (n === 0) {
              if (nb === str.length) {
                ++c;
                if (p.next) list.head = p.next;else list.head = list.tail = null;
              } else {
                list.head = p;
                p.data = str.slice(nb);
              }
              break;
            }
            ++c;
          }
          list.length -= c;
          return ret;
        }

        // Copies a specified amount of bytes from the list of buffered data chunks.
        // This function is designed to be inlinable, so please take care when making
        // changes to the function body.
        function copyFromBuffer(n, list) {
          var ret = Buffer.allocUnsafe(n);
          var p = list.head;
          var c = 1;
          p.data.copy(ret);
          n -= p.data.length;
          while (p = p.next) {
            var buf = p.data;
            var nb = n > buf.length ? buf.length : n;
            buf.copy(ret, ret.length - n, 0, nb);
            n -= nb;
            if (n === 0) {
              if (nb === buf.length) {
                ++c;
                if (p.next) list.head = p.next;else list.head = list.tail = null;
              } else {
                list.head = p;
                p.data = buf.slice(nb);
              }
              break;
            }
            ++c;
          }
          list.length -= c;
          return ret;
        }

        function endReadable(stream) {
          var state = stream._readableState;

          // If we get here before consuming all the bytes, then that is a
          // bug in node.  Should never happen.
          if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

          if (!state.endEmitted) {
            state.ended = true;
            processNextTick(endReadableNT, state, stream);
          }
        }

        function endReadableNT(state, stream) {
          // Check that we didn't get one last unshift.
          if (!state.endEmitted && state.length === 0) {
            state.endEmitted = true;
            stream.readable = false;
            stream.emit('end');
          }
        }

        function forEach(xs, f) {
          for (var i = 0, l = xs.length; i < l; i++) {
            f(xs[i], i);
          }
        }

        function indexOf(xs, x) {
          for (var i = 0, l = xs.length; i < l; i++) {
            if (xs[i] === x) return i;
          }
          return -1;
        }
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "./_stream_duplex": 54, "./internal/streams/BufferList": 59, "./internal/streams/destroy": 60, "./internal/streams/stream": 61, "_process": 52, "core-util-is": 30, "events": 41, "inherits": 45, "isarray": 47, "process-nextick-args": 51, "safe-buffer": 67, "string_decoder/": 78, "util": 9 }], 57: [function (require, module, exports) {
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      // a transform stream is a readable/writable stream where you do
      // something with the data.  Sometimes it's called a "filter",
      // but that's not a great name for it, since that implies a thing where
      // some bits pass through, and others are simply ignored.  (That would
      // be a valid example of a transform, of course.)
      //
      // While the output is causally related to the input, it's not a
      // necessarily symmetric or synchronous transformation.  For example,
      // a zlib stream might take multiple plain-text writes(), and then
      // emit a single compressed chunk some time in the future.
      //
      // Here's how this works:
      //
      // The Transform stream has all the aspects of the readable and writable
      // stream classes.  When you write(chunk), that calls _write(chunk,cb)
      // internally, and returns false if there's a lot of pending writes
      // buffered up.  When you call read(), that calls _read(n) until
      // there's enough pending readable data buffered up.
      //
      // In a transform stream, the written data is placed in a buffer.  When
      // _read(n) is called, it transforms the queued up data, calling the
      // buffered _write cb's as it consumes chunks.  If consuming a single
      // written chunk would result in multiple output chunks, then the first
      // outputted bit calls the readcb, and subsequent chunks just go into
      // the read buffer, and will cause it to emit 'readable' if necessary.
      //
      // This way, back-pressure is actually determined by the reading side,
      // since _read has to be called to start processing a new chunk.  However,
      // a pathological inflate type of transform can cause excessive buffering
      // here.  For example, imagine a stream where every byte of input is
      // interpreted as an integer from 0-255, and then results in that many
      // bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
      // 1kb of data being output.  In this case, you could write a very small
      // amount of input, and end up with a very large amount of output.  In
      // such a pathological inflating mechanism, there'd be no way to tell
      // the system to stop doing the transform.  A single 4MB write could
      // cause the system to run out of memory.
      //
      // However, even in such a pathological case, only a single written chunk
      // would be consumed, and then the rest would wait (un-transformed) until
      // the results of the previous transformed chunk were consumed.

      'use strict';

      module.exports = Transform;

      var Duplex = require('./_stream_duplex');

      /*<replacement>*/
      var util = require('core-util-is');
      util.inherits = require('inherits');
      /*</replacement>*/

      util.inherits(Transform, Duplex);

      function TransformState(stream) {
        this.afterTransform = function (er, data) {
          return afterTransform(stream, er, data);
        };

        this.needTransform = false;
        this.transforming = false;
        this.writecb = null;
        this.writechunk = null;
        this.writeencoding = null;
      }

      function afterTransform(stream, er, data) {
        var ts = stream._transformState;
        ts.transforming = false;

        var cb = ts.writecb;

        if (!cb) {
          return stream.emit('error', new Error('write callback called multiple times'));
        }

        ts.writechunk = null;
        ts.writecb = null;

        if (data !== null && data !== undefined) stream.push(data);

        cb(er);

        var rs = stream._readableState;
        rs.reading = false;
        if (rs.needReadable || rs.length < rs.highWaterMark) {
          stream._read(rs.highWaterMark);
        }
      }

      function Transform(options) {
        if (!(this instanceof Transform)) return new Transform(options);

        Duplex.call(this, options);

        this._transformState = new TransformState(this);

        var stream = this;

        // start out asking for a readable event once data is transformed.
        this._readableState.needReadable = true;

        // we have implemented the _read method, and done the other things
        // that Readable wants before the first _read call, so unset the
        // sync guard flag.
        this._readableState.sync = false;

        if (options) {
          if (typeof options.transform === 'function') this._transform = options.transform;

          if (typeof options.flush === 'function') this._flush = options.flush;
        }

        // When the writable side finishes, then flush out anything remaining.
        this.once('prefinish', function () {
          if (typeof this._flush === 'function') this._flush(function (er, data) {
            done(stream, er, data);
          });else done(stream);
        });
      }

      Transform.prototype.push = function (chunk, encoding) {
        this._transformState.needTransform = false;
        return Duplex.prototype.push.call(this, chunk, encoding);
      };

      // This is the part where you do stuff!
      // override this function in implementation classes.
      // 'chunk' is an input chunk.
      //
      // Call `push(newChunk)` to pass along transformed output
      // to the readable side.  You may call 'push' zero or more times.
      //
      // Call `cb(err)` when you are done with this chunk.  If you pass
      // an error, then that'll put the hurt on the whole operation.  If you
      // never call cb(), then you'll never get another chunk.
      Transform.prototype._transform = function (chunk, encoding, cb) {
        throw new Error('_transform() is not implemented');
      };

      Transform.prototype._write = function (chunk, encoding, cb) {
        var ts = this._transformState;
        ts.writecb = cb;
        ts.writechunk = chunk;
        ts.writeencoding = encoding;
        if (!ts.transforming) {
          var rs = this._readableState;
          if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
        }
      };

      // Doesn't matter what the args are here.
      // _transform does all the work.
      // That we got here means that the readable side wants more data.
      Transform.prototype._read = function (n) {
        var ts = this._transformState;

        if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
          ts.transforming = true;
          this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
        } else {
          // mark that we need a transform, so that any data that comes in
          // will get processed, now that we've asked for it.
          ts.needTransform = true;
        }
      };

      Transform.prototype._destroy = function (err, cb) {
        var _this = this;

        Duplex.prototype._destroy.call(this, err, function (err2) {
          cb(err2);
          _this.emit('close');
        });
      };

      function done(stream, er, data) {
        if (er) return stream.emit('error', er);

        if (data !== null && data !== undefined) stream.push(data);

        // if there's nothing in the write buffer, then that means
        // that nothing more will ever be provided
        var ws = stream._writableState;
        var ts = stream._transformState;

        if (ws.length) throw new Error('Calling transform done when ws.length != 0');

        if (ts.transforming) throw new Error('Calling transform done when still transforming');

        return stream.push(null);
      }
    }, { "./_stream_duplex": 54, "core-util-is": 30, "inherits": 45 }], 58: [function (require, module, exports) {
      (function (process, global) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        // A bit simpler than readable streams.
        // Implement an async ._write(chunk, encoding, cb), and it'll handle all
        // the drain event emission and buffering.

        'use strict';

        /*<replacement>*/

        var processNextTick = require('process-nextick-args');
        /*</replacement>*/

        module.exports = Writable;

        /* <replacement> */
        function WriteReq(chunk, encoding, cb) {
          this.chunk = chunk;
          this.encoding = encoding;
          this.callback = cb;
          this.next = null;
        }

        // It seems a linked list but it is not
        // there will be only 2 of these for each stream
        function CorkedRequest(state) {
          var _this = this;

          this.next = null;
          this.entry = null;
          this.finish = function () {
            onCorkedFinish(_this, state);
          };
        }
        /* </replacement> */

        /*<replacement>*/
        var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
        /*</replacement>*/

        /*<replacement>*/
        var Duplex;
        /*</replacement>*/

        Writable.WritableState = WritableState;

        /*<replacement>*/
        var util = require('core-util-is');
        util.inherits = require('inherits');
        /*</replacement>*/

        /*<replacement>*/
        var internalUtil = {
          deprecate: require('util-deprecate')
        };
        /*</replacement>*/

        /*<replacement>*/
        var Stream = require('./internal/streams/stream');
        /*</replacement>*/

        /*<replacement>*/
        var Buffer = require('safe-buffer').Buffer;
        var OurUint8Array = global.Uint8Array || function () {};
        function _uint8ArrayToBuffer(chunk) {
          return Buffer.from(chunk);
        }
        function _isUint8Array(obj) {
          return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
        }
        /*</replacement>*/

        var destroyImpl = require('./internal/streams/destroy');

        util.inherits(Writable, Stream);

        function nop() {}

        function WritableState(options, stream) {
          Duplex = Duplex || require('./_stream_duplex');

          options = options || {};

          // object stream flag to indicate whether or not this stream
          // contains buffers or objects.
          this.objectMode = !!options.objectMode;

          if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

          // the point at which write() starts returning false
          // Note: 0 is a valid value, means that we always return false if
          // the entire buffer is not flushed immediately on write()
          var hwm = options.highWaterMark;
          var defaultHwm = this.objectMode ? 16 : 16 * 1024;
          this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

          // cast to ints.
          this.highWaterMark = Math.floor(this.highWaterMark);

          // if _final has been called
          this.finalCalled = false;

          // drain event flag.
          this.needDrain = false;
          // at the start of calling end()
          this.ending = false;
          // when end() has been called, and returned
          this.ended = false;
          // when 'finish' is emitted
          this.finished = false;

          // has it been destroyed
          this.destroyed = false;

          // should we decode strings into buffers before passing to _write?
          // this is here so that some node-core streams can optimize string
          // handling at a lower level.
          var noDecode = options.decodeStrings === false;
          this.decodeStrings = !noDecode;

          // Crypto is kind of old and crusty.  Historically, its default string
          // encoding is 'binary' so we have to make this configurable.
          // Everything else in the universe uses 'utf8', though.
          this.defaultEncoding = options.defaultEncoding || 'utf8';

          // not an actual buffer we keep track of, but a measurement
          // of how much we're waiting to get pushed to some underlying
          // socket or file.
          this.length = 0;

          // a flag to see when we're in the middle of a write.
          this.writing = false;

          // when true all writes will be buffered until .uncork() call
          this.corked = 0;

          // a flag to be able to tell if the onwrite cb is called immediately,
          // or on a later tick.  We set this to true at first, because any
          // actions that shouldn't happen until "later" should generally also
          // not happen before the first write call.
          this.sync = true;

          // a flag to know if we're processing previously buffered items, which
          // may call the _write() callback in the same tick, so that we don't
          // end up in an overlapped onwrite situation.
          this.bufferProcessing = false;

          // the callback that's passed to _write(chunk,cb)
          this.onwrite = function (er) {
            onwrite(stream, er);
          };

          // the callback that the user supplies to write(chunk,encoding,cb)
          this.writecb = null;

          // the amount that is being written when _write is called.
          this.writelen = 0;

          this.bufferedRequest = null;
          this.lastBufferedRequest = null;

          // number of pending user-supplied write callbacks
          // this must be 0 before 'finish' can be emitted
          this.pendingcb = 0;

          // emit prefinish if the only thing we're waiting for is _write cbs
          // This is relevant for synchronous Transform streams
          this.prefinished = false;

          // True if the error was already emitted and should not be thrown again
          this.errorEmitted = false;

          // count buffered requests
          this.bufferedRequestCount = 0;

          // allocate the first CorkedRequest, there is always
          // one allocated and free to use, and we maintain at most two
          this.corkedRequestsFree = new CorkedRequest(this);
        }

        WritableState.prototype.getBuffer = function getBuffer() {
          var current = this.bufferedRequest;
          var out = [];
          while (current) {
            out.push(current);
            current = current.next;
          }
          return out;
        };

        (function () {
          try {
            Object.defineProperty(WritableState.prototype, 'buffer', {
              get: internalUtil.deprecate(function () {
                return this.getBuffer();
              }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
            });
          } catch (_) {}
        })();

        // Test _writableState for inheritance to account for Duplex streams,
        // whose prototype chain only points to Readable.
        var realHasInstance;
        if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
          realHasInstance = Function.prototype[Symbol.hasInstance];
          Object.defineProperty(Writable, Symbol.hasInstance, {
            value: function (object) {
              if (realHasInstance.call(this, object)) return true;

              return object && object._writableState instanceof WritableState;
            }
          });
        } else {
          realHasInstance = function (object) {
            return object instanceof this;
          };
        }

        function Writable(options) {
          Duplex = Duplex || require('./_stream_duplex');

          // Writable ctor is applied to Duplexes, too.
          // `realHasInstance` is necessary because using plain `instanceof`
          // would return false, as no `_writableState` property is attached.

          // Trying to use the custom `instanceof` for Writable here will also break the
          // Node.js LazyTransform implementation, which has a non-trivial getter for
          // `_writableState` that would lead to infinite recursion.
          if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
            return new Writable(options);
          }

          this._writableState = new WritableState(options, this);

          // legacy.
          this.writable = true;

          if (options) {
            if (typeof options.write === 'function') this._write = options.write;

            if (typeof options.writev === 'function') this._writev = options.writev;

            if (typeof options.destroy === 'function') this._destroy = options.destroy;

            if (typeof options.final === 'function') this._final = options.final;
          }

          Stream.call(this);
        }

        // Otherwise people can pipe Writable streams, which is just wrong.
        Writable.prototype.pipe = function () {
          this.emit('error', new Error('Cannot pipe, not readable'));
        };

        function writeAfterEnd(stream, cb) {
          var er = new Error('write after end');
          // TODO: defer error events consistently everywhere, not just the cb
          stream.emit('error', er);
          processNextTick(cb, er);
        }

        // Checks that a user-supplied chunk is valid, especially for the particular
        // mode the stream is in. Currently this means that `null` is never accepted
        // and undefined/non-string values are only allowed in object mode.
        function validChunk(stream, state, chunk, cb) {
          var valid = true;
          var er = false;

          if (chunk === null) {
            er = new TypeError('May not write null values to stream');
          } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
            er = new TypeError('Invalid non-string/buffer chunk');
          }
          if (er) {
            stream.emit('error', er);
            processNextTick(cb, er);
            valid = false;
          }
          return valid;
        }

        Writable.prototype.write = function (chunk, encoding, cb) {
          var state = this._writableState;
          var ret = false;
          var isBuf = _isUint8Array(chunk) && !state.objectMode;

          if (isBuf && !Buffer.isBuffer(chunk)) {
            chunk = _uint8ArrayToBuffer(chunk);
          }

          if (typeof encoding === 'function') {
            cb = encoding;
            encoding = null;
          }

          if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

          if (typeof cb !== 'function') cb = nop;

          if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
            state.pendingcb++;
            ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
          }

          return ret;
        };

        Writable.prototype.cork = function () {
          var state = this._writableState;

          state.corked++;
        };

        Writable.prototype.uncork = function () {
          var state = this._writableState;

          if (state.corked) {
            state.corked--;

            if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
          }
        };

        Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
          // node::ParseEncoding() requires lower case.
          if (typeof encoding === 'string') encoding = encoding.toLowerCase();
          if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
          this._writableState.defaultEncoding = encoding;
          return this;
        };

        function decodeChunk(state, chunk, encoding) {
          if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
            chunk = Buffer.from(chunk, encoding);
          }
          return chunk;
        }

        // if we're already writing something, then just put this
        // in the queue, and wait our turn.  Otherwise, call _write
        // If we return false, then we need a drain event, so set that flag.
        function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
          if (!isBuf) {
            var newChunk = decodeChunk(state, chunk, encoding);
            if (chunk !== newChunk) {
              isBuf = true;
              encoding = 'buffer';
              chunk = newChunk;
            }
          }
          var len = state.objectMode ? 1 : chunk.length;

          state.length += len;

          var ret = state.length < state.highWaterMark;
          // we must ensure that previous needDrain will not be reset to false.
          if (!ret) state.needDrain = true;

          if (state.writing || state.corked) {
            var last = state.lastBufferedRequest;
            state.lastBufferedRequest = {
              chunk: chunk,
              encoding: encoding,
              isBuf: isBuf,
              callback: cb,
              next: null
            };
            if (last) {
              last.next = state.lastBufferedRequest;
            } else {
              state.bufferedRequest = state.lastBufferedRequest;
            }
            state.bufferedRequestCount += 1;
          } else {
            doWrite(stream, state, false, len, chunk, encoding, cb);
          }

          return ret;
        }

        function doWrite(stream, state, writev, len, chunk, encoding, cb) {
          state.writelen = len;
          state.writecb = cb;
          state.writing = true;
          state.sync = true;
          if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
          state.sync = false;
        }

        function onwriteError(stream, state, sync, er, cb) {
          --state.pendingcb;

          if (sync) {
            // defer the callback if we are being called synchronously
            // to avoid piling up things on the stack
            processNextTick(cb, er);
            // this can emit finish, and it will always happen
            // after error
            processNextTick(finishMaybe, stream, state);
            stream._writableState.errorEmitted = true;
            stream.emit('error', er);
          } else {
            // the caller expect this to happen before if
            // it is async
            cb(er);
            stream._writableState.errorEmitted = true;
            stream.emit('error', er);
            // this can emit finish, but finish must
            // always follow error
            finishMaybe(stream, state);
          }
        }

        function onwriteStateUpdate(state) {
          state.writing = false;
          state.writecb = null;
          state.length -= state.writelen;
          state.writelen = 0;
        }

        function onwrite(stream, er) {
          var state = stream._writableState;
          var sync = state.sync;
          var cb = state.writecb;

          onwriteStateUpdate(state);

          if (er) onwriteError(stream, state, sync, er, cb);else {
            // Check if we're actually ready to finish, but don't emit yet
            var finished = needFinish(state);

            if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
              clearBuffer(stream, state);
            }

            if (sync) {
              /*<replacement>*/
              asyncWrite(afterWrite, stream, state, finished, cb);
              /*</replacement>*/
            } else {
              afterWrite(stream, state, finished, cb);
            }
          }
        }

        function afterWrite(stream, state, finished, cb) {
          if (!finished) onwriteDrain(stream, state);
          state.pendingcb--;
          cb();
          finishMaybe(stream, state);
        }

        // Must force callback to be called on nextTick, so that we don't
        // emit 'drain' before the write() consumer gets the 'false' return
        // value, and has a chance to attach a 'drain' listener.
        function onwriteDrain(stream, state) {
          if (state.length === 0 && state.needDrain) {
            state.needDrain = false;
            stream.emit('drain');
          }
        }

        // if there's something in the buffer waiting, then process it
        function clearBuffer(stream, state) {
          state.bufferProcessing = true;
          var entry = state.bufferedRequest;

          if (stream._writev && entry && entry.next) {
            // Fast case, write everything using _writev()
            var l = state.bufferedRequestCount;
            var buffer = new Array(l);
            var holder = state.corkedRequestsFree;
            holder.entry = entry;

            var count = 0;
            var allBuffers = true;
            while (entry) {
              buffer[count] = entry;
              if (!entry.isBuf) allBuffers = false;
              entry = entry.next;
              count += 1;
            }
            buffer.allBuffers = allBuffers;

            doWrite(stream, state, true, state.length, buffer, '', holder.finish);

            // doWrite is almost always async, defer these to save a bit of time
            // as the hot path ends with doWrite
            state.pendingcb++;
            state.lastBufferedRequest = null;
            if (holder.next) {
              state.corkedRequestsFree = holder.next;
              holder.next = null;
            } else {
              state.corkedRequestsFree = new CorkedRequest(state);
            }
          } else {
            // Slow case, write chunks one-by-one
            while (entry) {
              var chunk = entry.chunk;
              var encoding = entry.encoding;
              var cb = entry.callback;
              var len = state.objectMode ? 1 : chunk.length;

              doWrite(stream, state, false, len, chunk, encoding, cb);
              entry = entry.next;
              // if we didn't call the onwrite immediately, then
              // it means that we need to wait until it does.
              // also, that means that the chunk and cb are currently
              // being processed, so move the buffer counter past them.
              if (state.writing) {
                break;
              }
            }

            if (entry === null) state.lastBufferedRequest = null;
          }

          state.bufferedRequestCount = 0;
          state.bufferedRequest = entry;
          state.bufferProcessing = false;
        }

        Writable.prototype._write = function (chunk, encoding, cb) {
          cb(new Error('_write() is not implemented'));
        };

        Writable.prototype._writev = null;

        Writable.prototype.end = function (chunk, encoding, cb) {
          var state = this._writableState;

          if (typeof chunk === 'function') {
            cb = chunk;
            chunk = null;
            encoding = null;
          } else if (typeof encoding === 'function') {
            cb = encoding;
            encoding = null;
          }

          if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

          // .end() fully uncorks
          if (state.corked) {
            state.corked = 1;
            this.uncork();
          }

          // ignore unnecessary end() calls.
          if (!state.ending && !state.finished) endWritable(this, state, cb);
        };

        function needFinish(state) {
          return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
        }
        function callFinal(stream, state) {
          stream._final(function (err) {
            state.pendingcb--;
            if (err) {
              stream.emit('error', err);
            }
            state.prefinished = true;
            stream.emit('prefinish');
            finishMaybe(stream, state);
          });
        }
        function prefinish(stream, state) {
          if (!state.prefinished && !state.finalCalled) {
            if (typeof stream._final === 'function') {
              state.pendingcb++;
              state.finalCalled = true;
              processNextTick(callFinal, stream, state);
            } else {
              state.prefinished = true;
              stream.emit('prefinish');
            }
          }
        }

        function finishMaybe(stream, state) {
          var need = needFinish(state);
          if (need) {
            prefinish(stream, state);
            if (state.pendingcb === 0) {
              state.finished = true;
              stream.emit('finish');
            }
          }
          return need;
        }

        function endWritable(stream, state, cb) {
          state.ending = true;
          finishMaybe(stream, state);
          if (cb) {
            if (state.finished) processNextTick(cb);else stream.once('finish', cb);
          }
          state.ended = true;
          stream.writable = false;
        }

        function onCorkedFinish(corkReq, state, err) {
          var entry = corkReq.entry;
          corkReq.entry = null;
          while (entry) {
            var cb = entry.callback;
            state.pendingcb--;
            cb(err);
            entry = entry.next;
          }
          if (state.corkedRequestsFree) {
            state.corkedRequestsFree.next = corkReq;
          } else {
            state.corkedRequestsFree = corkReq;
          }
        }

        Object.defineProperty(Writable.prototype, 'destroyed', {
          get: function () {
            if (this._writableState === undefined) {
              return false;
            }
            return this._writableState.destroyed;
          },
          set: function (value) {
            // we ignore the value if the stream
            // has not been initialized yet
            if (!this._writableState) {
              return;
            }

            // backward compatibility, the user is explicitly
            // managing destroyed
            this._writableState.destroyed = value;
          }
        });

        Writable.prototype.destroy = destroyImpl.destroy;
        Writable.prototype._undestroy = destroyImpl.undestroy;
        Writable.prototype._destroy = function (err, cb) {
          this.end();
          cb(err);
        };
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "./_stream_duplex": 54, "./internal/streams/destroy": 60, "./internal/streams/stream": 61, "_process": 52, "core-util-is": 30, "inherits": 45, "process-nextick-args": 51, "safe-buffer": 67, "util-deprecate": 79 }], 59: [function (require, module, exports) {
      'use strict';

      /*<replacement>*/

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Buffer = require('safe-buffer').Buffer;
      /*</replacement>*/

      function copyBuffer(src, target, offset) {
        src.copy(target, offset);
      }

      module.exports = function () {
        function BufferList() {
          _classCallCheck(this, BufferList);

          this.head = null;
          this.tail = null;
          this.length = 0;
        }

        BufferList.prototype.push = function push(v) {
          var entry = { data: v, next: null };
          if (this.length > 0) this.tail.next = entry;else this.head = entry;
          this.tail = entry;
          ++this.length;
        };

        BufferList.prototype.unshift = function unshift(v) {
          var entry = { data: v, next: this.head };
          if (this.length === 0) this.tail = entry;
          this.head = entry;
          ++this.length;
        };

        BufferList.prototype.shift = function shift() {
          if (this.length === 0) return;
          var ret = this.head.data;
          if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
          --this.length;
          return ret;
        };

        BufferList.prototype.clear = function clear() {
          this.head = this.tail = null;
          this.length = 0;
        };

        BufferList.prototype.join = function join(s) {
          if (this.length === 0) return '';
          var p = this.head;
          var ret = '' + p.data;
          while (p = p.next) {
            ret += s + p.data;
          }return ret;
        };

        BufferList.prototype.concat = function concat(n) {
          if (this.length === 0) return Buffer.alloc(0);
          if (this.length === 1) return this.head.data;
          var ret = Buffer.allocUnsafe(n >>> 0);
          var p = this.head;
          var i = 0;
          while (p) {
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
          }
          return ret;
        };

        return BufferList;
      }();
    }, { "safe-buffer": 67 }], 60: [function (require, module, exports) {
      'use strict';

      /*<replacement>*/

      var processNextTick = require('process-nextick-args');
      /*</replacement>*/

      // undocumented cb() API, needed for core, not for public API
      function destroy(err, cb) {
        var _this = this;

        var readableDestroyed = this._readableState && this._readableState.destroyed;
        var writableDestroyed = this._writableState && this._writableState.destroyed;

        if (readableDestroyed || writableDestroyed) {
          if (cb) {
            cb(err);
          } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
            processNextTick(emitErrorNT, this, err);
          }
          return;
        }

        // we set destroyed to true before firing error callbacks in order
        // to make it re-entrance safe in case destroy() is called within callbacks

        if (this._readableState) {
          this._readableState.destroyed = true;
        }

        // if this is a duplex stream mark the writable part as destroyed as well
        if (this._writableState) {
          this._writableState.destroyed = true;
        }

        this._destroy(err || null, function (err) {
          if (!cb && err) {
            processNextTick(emitErrorNT, _this, err);
            if (_this._writableState) {
              _this._writableState.errorEmitted = true;
            }
          } else if (cb) {
            cb(err);
          }
        });
      }

      function undestroy() {
        if (this._readableState) {
          this._readableState.destroyed = false;
          this._readableState.reading = false;
          this._readableState.ended = false;
          this._readableState.endEmitted = false;
        }

        if (this._writableState) {
          this._writableState.destroyed = false;
          this._writableState.ended = false;
          this._writableState.ending = false;
          this._writableState.finished = false;
          this._writableState.errorEmitted = false;
        }
      }

      function emitErrorNT(self, err) {
        self.emit('error', err);
      }

      module.exports = {
        destroy: destroy,
        undestroy: undestroy
      };
    }, { "process-nextick-args": 51 }], 61: [function (require, module, exports) {
      module.exports = require('events').EventEmitter;
    }, { "events": 41 }], 62: [function (require, module, exports) {
      module.exports = require('./readable').PassThrough;
    }, { "./readable": 63 }], 63: [function (require, module, exports) {
      exports = module.exports = require('./lib/_stream_readable.js');
      exports.Stream = exports;
      exports.Readable = exports;
      exports.Writable = require('./lib/_stream_writable.js');
      exports.Duplex = require('./lib/_stream_duplex.js');
      exports.Transform = require('./lib/_stream_transform.js');
      exports.PassThrough = require('./lib/_stream_passthrough.js');
    }, { "./lib/_stream_duplex.js": 54, "./lib/_stream_passthrough.js": 55, "./lib/_stream_readable.js": 56, "./lib/_stream_transform.js": 57, "./lib/_stream_writable.js": 58 }], 64: [function (require, module, exports) {
      module.exports = require('./readable').Transform;
    }, { "./readable": 63 }], 65: [function (require, module, exports) {
      module.exports = require('./lib/_stream_writable.js');
    }, { "./lib/_stream_writable.js": 58 }], 66: [function (require, module, exports) {
      (function (Buffer) {
        'use strict';

        var inherits = require('inherits');
        var HashBase = require('hash-base');

        function RIPEMD160() {
          HashBase.call(this, 64);

          // state
          this._a = 0x67452301;
          this._b = 0xefcdab89;
          this._c = 0x98badcfe;
          this._d = 0x10325476;
          this._e = 0xc3d2e1f0;
        }

        inherits(RIPEMD160, HashBase);

        RIPEMD160.prototype._update = function () {
          var m = new Array(16);
          for (var i = 0; i < 16; ++i) m[i] = this._block.readInt32LE(i * 4);

          var al = this._a;
          var bl = this._b;
          var cl = this._c;
          var dl = this._d;
          var el = this._e;

          // Mj = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
          // K = 0x00000000
          // Sj = 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8
          al = fn1(al, bl, cl, dl, el, m[0], 0x00000000, 11);cl = rotl(cl, 10);
          el = fn1(el, al, bl, cl, dl, m[1], 0x00000000, 14);bl = rotl(bl, 10);
          dl = fn1(dl, el, al, bl, cl, m[2], 0x00000000, 15);al = rotl(al, 10);
          cl = fn1(cl, dl, el, al, bl, m[3], 0x00000000, 12);el = rotl(el, 10);
          bl = fn1(bl, cl, dl, el, al, m[4], 0x00000000, 5);dl = rotl(dl, 10);
          al = fn1(al, bl, cl, dl, el, m[5], 0x00000000, 8);cl = rotl(cl, 10);
          el = fn1(el, al, bl, cl, dl, m[6], 0x00000000, 7);bl = rotl(bl, 10);
          dl = fn1(dl, el, al, bl, cl, m[7], 0x00000000, 9);al = rotl(al, 10);
          cl = fn1(cl, dl, el, al, bl, m[8], 0x00000000, 11);el = rotl(el, 10);
          bl = fn1(bl, cl, dl, el, al, m[9], 0x00000000, 13);dl = rotl(dl, 10);
          al = fn1(al, bl, cl, dl, el, m[10], 0x00000000, 14);cl = rotl(cl, 10);
          el = fn1(el, al, bl, cl, dl, m[11], 0x00000000, 15);bl = rotl(bl, 10);
          dl = fn1(dl, el, al, bl, cl, m[12], 0x00000000, 6);al = rotl(al, 10);
          cl = fn1(cl, dl, el, al, bl, m[13], 0x00000000, 7);el = rotl(el, 10);
          bl = fn1(bl, cl, dl, el, al, m[14], 0x00000000, 9);dl = rotl(dl, 10);
          al = fn1(al, bl, cl, dl, el, m[15], 0x00000000, 8);cl = rotl(cl, 10);

          // Mj = 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8
          // K = 0x5a827999
          // Sj = 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12
          el = fn2(el, al, bl, cl, dl, m[7], 0x5a827999, 7);bl = rotl(bl, 10);
          dl = fn2(dl, el, al, bl, cl, m[4], 0x5a827999, 6);al = rotl(al, 10);
          cl = fn2(cl, dl, el, al, bl, m[13], 0x5a827999, 8);el = rotl(el, 10);
          bl = fn2(bl, cl, dl, el, al, m[1], 0x5a827999, 13);dl = rotl(dl, 10);
          al = fn2(al, bl, cl, dl, el, m[10], 0x5a827999, 11);cl = rotl(cl, 10);
          el = fn2(el, al, bl, cl, dl, m[6], 0x5a827999, 9);bl = rotl(bl, 10);
          dl = fn2(dl, el, al, bl, cl, m[15], 0x5a827999, 7);al = rotl(al, 10);
          cl = fn2(cl, dl, el, al, bl, m[3], 0x5a827999, 15);el = rotl(el, 10);
          bl = fn2(bl, cl, dl, el, al, m[12], 0x5a827999, 7);dl = rotl(dl, 10);
          al = fn2(al, bl, cl, dl, el, m[0], 0x5a827999, 12);cl = rotl(cl, 10);
          el = fn2(el, al, bl, cl, dl, m[9], 0x5a827999, 15);bl = rotl(bl, 10);
          dl = fn2(dl, el, al, bl, cl, m[5], 0x5a827999, 9);al = rotl(al, 10);
          cl = fn2(cl, dl, el, al, bl, m[2], 0x5a827999, 11);el = rotl(el, 10);
          bl = fn2(bl, cl, dl, el, al, m[14], 0x5a827999, 7);dl = rotl(dl, 10);
          al = fn2(al, bl, cl, dl, el, m[11], 0x5a827999, 13);cl = rotl(cl, 10);
          el = fn2(el, al, bl, cl, dl, m[8], 0x5a827999, 12);bl = rotl(bl, 10);

          // Mj = 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12
          // K = 0x6ed9eba1
          // Sj = 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5
          dl = fn3(dl, el, al, bl, cl, m[3], 0x6ed9eba1, 11);al = rotl(al, 10);
          cl = fn3(cl, dl, el, al, bl, m[10], 0x6ed9eba1, 13);el = rotl(el, 10);
          bl = fn3(bl, cl, dl, el, al, m[14], 0x6ed9eba1, 6);dl = rotl(dl, 10);
          al = fn3(al, bl, cl, dl, el, m[4], 0x6ed9eba1, 7);cl = rotl(cl, 10);
          el = fn3(el, al, bl, cl, dl, m[9], 0x6ed9eba1, 14);bl = rotl(bl, 10);
          dl = fn3(dl, el, al, bl, cl, m[15], 0x6ed9eba1, 9);al = rotl(al, 10);
          cl = fn3(cl, dl, el, al, bl, m[8], 0x6ed9eba1, 13);el = rotl(el, 10);
          bl = fn3(bl, cl, dl, el, al, m[1], 0x6ed9eba1, 15);dl = rotl(dl, 10);
          al = fn3(al, bl, cl, dl, el, m[2], 0x6ed9eba1, 14);cl = rotl(cl, 10);
          el = fn3(el, al, bl, cl, dl, m[7], 0x6ed9eba1, 8);bl = rotl(bl, 10);
          dl = fn3(dl, el, al, bl, cl, m[0], 0x6ed9eba1, 13);al = rotl(al, 10);
          cl = fn3(cl, dl, el, al, bl, m[6], 0x6ed9eba1, 6);el = rotl(el, 10);
          bl = fn3(bl, cl, dl, el, al, m[13], 0x6ed9eba1, 5);dl = rotl(dl, 10);
          al = fn3(al, bl, cl, dl, el, m[11], 0x6ed9eba1, 12);cl = rotl(cl, 10);
          el = fn3(el, al, bl, cl, dl, m[5], 0x6ed9eba1, 7);bl = rotl(bl, 10);
          dl = fn3(dl, el, al, bl, cl, m[12], 0x6ed9eba1, 5);al = rotl(al, 10);

          // Mj = 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2
          // K = 0x8f1bbcdc
          // Sj = 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12
          cl = fn4(cl, dl, el, al, bl, m[1], 0x8f1bbcdc, 11);el = rotl(el, 10);
          bl = fn4(bl, cl, dl, el, al, m[9], 0x8f1bbcdc, 12);dl = rotl(dl, 10);
          al = fn4(al, bl, cl, dl, el, m[11], 0x8f1bbcdc, 14);cl = rotl(cl, 10);
          el = fn4(el, al, bl, cl, dl, m[10], 0x8f1bbcdc, 15);bl = rotl(bl, 10);
          dl = fn4(dl, el, al, bl, cl, m[0], 0x8f1bbcdc, 14);al = rotl(al, 10);
          cl = fn4(cl, dl, el, al, bl, m[8], 0x8f1bbcdc, 15);el = rotl(el, 10);
          bl = fn4(bl, cl, dl, el, al, m[12], 0x8f1bbcdc, 9);dl = rotl(dl, 10);
          al = fn4(al, bl, cl, dl, el, m[4], 0x8f1bbcdc, 8);cl = rotl(cl, 10);
          el = fn4(el, al, bl, cl, dl, m[13], 0x8f1bbcdc, 9);bl = rotl(bl, 10);
          dl = fn4(dl, el, al, bl, cl, m[3], 0x8f1bbcdc, 14);al = rotl(al, 10);
          cl = fn4(cl, dl, el, al, bl, m[7], 0x8f1bbcdc, 5);el = rotl(el, 10);
          bl = fn4(bl, cl, dl, el, al, m[15], 0x8f1bbcdc, 6);dl = rotl(dl, 10);
          al = fn4(al, bl, cl, dl, el, m[14], 0x8f1bbcdc, 8);cl = rotl(cl, 10);
          el = fn4(el, al, bl, cl, dl, m[5], 0x8f1bbcdc, 6);bl = rotl(bl, 10);
          dl = fn4(dl, el, al, bl, cl, m[6], 0x8f1bbcdc, 5);al = rotl(al, 10);
          cl = fn4(cl, dl, el, al, bl, m[2], 0x8f1bbcdc, 12);el = rotl(el, 10);

          // Mj = 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
          // K = 0xa953fd4e
          // Sj = 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
          bl = fn5(bl, cl, dl, el, al, m[4], 0xa953fd4e, 9);dl = rotl(dl, 10);
          al = fn5(al, bl, cl, dl, el, m[0], 0xa953fd4e, 15);cl = rotl(cl, 10);
          el = fn5(el, al, bl, cl, dl, m[5], 0xa953fd4e, 5);bl = rotl(bl, 10);
          dl = fn5(dl, el, al, bl, cl, m[9], 0xa953fd4e, 11);al = rotl(al, 10);
          cl = fn5(cl, dl, el, al, bl, m[7], 0xa953fd4e, 6);el = rotl(el, 10);
          bl = fn5(bl, cl, dl, el, al, m[12], 0xa953fd4e, 8);dl = rotl(dl, 10);
          al = fn5(al, bl, cl, dl, el, m[2], 0xa953fd4e, 13);cl = rotl(cl, 10);
          el = fn5(el, al, bl, cl, dl, m[10], 0xa953fd4e, 12);bl = rotl(bl, 10);
          dl = fn5(dl, el, al, bl, cl, m[14], 0xa953fd4e, 5);al = rotl(al, 10);
          cl = fn5(cl, dl, el, al, bl, m[1], 0xa953fd4e, 12);el = rotl(el, 10);
          bl = fn5(bl, cl, dl, el, al, m[3], 0xa953fd4e, 13);dl = rotl(dl, 10);
          al = fn5(al, bl, cl, dl, el, m[8], 0xa953fd4e, 14);cl = rotl(cl, 10);
          el = fn5(el, al, bl, cl, dl, m[11], 0xa953fd4e, 11);bl = rotl(bl, 10);
          dl = fn5(dl, el, al, bl, cl, m[6], 0xa953fd4e, 8);al = rotl(al, 10);
          cl = fn5(cl, dl, el, al, bl, m[15], 0xa953fd4e, 5);el = rotl(el, 10);
          bl = fn5(bl, cl, dl, el, al, m[13], 0xa953fd4e, 6);dl = rotl(dl, 10);

          var ar = this._a;
          var br = this._b;
          var cr = this._c;
          var dr = this._d;
          var er = this._e;

          // M'j = 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12
          // K' = 0x50a28be6
          // S'j = 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6
          ar = fn5(ar, br, cr, dr, er, m[5], 0x50a28be6, 8);cr = rotl(cr, 10);
          er = fn5(er, ar, br, cr, dr, m[14], 0x50a28be6, 9);br = rotl(br, 10);
          dr = fn5(dr, er, ar, br, cr, m[7], 0x50a28be6, 9);ar = rotl(ar, 10);
          cr = fn5(cr, dr, er, ar, br, m[0], 0x50a28be6, 11);er = rotl(er, 10);
          br = fn5(br, cr, dr, er, ar, m[9], 0x50a28be6, 13);dr = rotl(dr, 10);
          ar = fn5(ar, br, cr, dr, er, m[2], 0x50a28be6, 15);cr = rotl(cr, 10);
          er = fn5(er, ar, br, cr, dr, m[11], 0x50a28be6, 15);br = rotl(br, 10);
          dr = fn5(dr, er, ar, br, cr, m[4], 0x50a28be6, 5);ar = rotl(ar, 10);
          cr = fn5(cr, dr, er, ar, br, m[13], 0x50a28be6, 7);er = rotl(er, 10);
          br = fn5(br, cr, dr, er, ar, m[6], 0x50a28be6, 7);dr = rotl(dr, 10);
          ar = fn5(ar, br, cr, dr, er, m[15], 0x50a28be6, 8);cr = rotl(cr, 10);
          er = fn5(er, ar, br, cr, dr, m[8], 0x50a28be6, 11);br = rotl(br, 10);
          dr = fn5(dr, er, ar, br, cr, m[1], 0x50a28be6, 14);ar = rotl(ar, 10);
          cr = fn5(cr, dr, er, ar, br, m[10], 0x50a28be6, 14);er = rotl(er, 10);
          br = fn5(br, cr, dr, er, ar, m[3], 0x50a28be6, 12);dr = rotl(dr, 10);
          ar = fn5(ar, br, cr, dr, er, m[12], 0x50a28be6, 6);cr = rotl(cr, 10);

          // M'j = 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2
          // K' = 0x5c4dd124
          // S'j = 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11
          er = fn4(er, ar, br, cr, dr, m[6], 0x5c4dd124, 9);br = rotl(br, 10);
          dr = fn4(dr, er, ar, br, cr, m[11], 0x5c4dd124, 13);ar = rotl(ar, 10);
          cr = fn4(cr, dr, er, ar, br, m[3], 0x5c4dd124, 15);er = rotl(er, 10);
          br = fn4(br, cr, dr, er, ar, m[7], 0x5c4dd124, 7);dr = rotl(dr, 10);
          ar = fn4(ar, br, cr, dr, er, m[0], 0x5c4dd124, 12);cr = rotl(cr, 10);
          er = fn4(er, ar, br, cr, dr, m[13], 0x5c4dd124, 8);br = rotl(br, 10);
          dr = fn4(dr, er, ar, br, cr, m[5], 0x5c4dd124, 9);ar = rotl(ar, 10);
          cr = fn4(cr, dr, er, ar, br, m[10], 0x5c4dd124, 11);er = rotl(er, 10);
          br = fn4(br, cr, dr, er, ar, m[14], 0x5c4dd124, 7);dr = rotl(dr, 10);
          ar = fn4(ar, br, cr, dr, er, m[15], 0x5c4dd124, 7);cr = rotl(cr, 10);
          er = fn4(er, ar, br, cr, dr, m[8], 0x5c4dd124, 12);br = rotl(br, 10);
          dr = fn4(dr, er, ar, br, cr, m[12], 0x5c4dd124, 7);ar = rotl(ar, 10);
          cr = fn4(cr, dr, er, ar, br, m[4], 0x5c4dd124, 6);er = rotl(er, 10);
          br = fn4(br, cr, dr, er, ar, m[9], 0x5c4dd124, 15);dr = rotl(dr, 10);
          ar = fn4(ar, br, cr, dr, er, m[1], 0x5c4dd124, 13);cr = rotl(cr, 10);
          er = fn4(er, ar, br, cr, dr, m[2], 0x5c4dd124, 11);br = rotl(br, 10);

          // M'j = 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13
          // K' = 0x6d703ef3
          // S'j = 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5
          dr = fn3(dr, er, ar, br, cr, m[15], 0x6d703ef3, 9);ar = rotl(ar, 10);
          cr = fn3(cr, dr, er, ar, br, m[5], 0x6d703ef3, 7);er = rotl(er, 10);
          br = fn3(br, cr, dr, er, ar, m[1], 0x6d703ef3, 15);dr = rotl(dr, 10);
          ar = fn3(ar, br, cr, dr, er, m[3], 0x6d703ef3, 11);cr = rotl(cr, 10);
          er = fn3(er, ar, br, cr, dr, m[7], 0x6d703ef3, 8);br = rotl(br, 10);
          dr = fn3(dr, er, ar, br, cr, m[14], 0x6d703ef3, 6);ar = rotl(ar, 10);
          cr = fn3(cr, dr, er, ar, br, m[6], 0x6d703ef3, 6);er = rotl(er, 10);
          br = fn3(br, cr, dr, er, ar, m[9], 0x6d703ef3, 14);dr = rotl(dr, 10);
          ar = fn3(ar, br, cr, dr, er, m[11], 0x6d703ef3, 12);cr = rotl(cr, 10);
          er = fn3(er, ar, br, cr, dr, m[8], 0x6d703ef3, 13);br = rotl(br, 10);
          dr = fn3(dr, er, ar, br, cr, m[12], 0x6d703ef3, 5);ar = rotl(ar, 10);
          cr = fn3(cr, dr, er, ar, br, m[2], 0x6d703ef3, 14);er = rotl(er, 10);
          br = fn3(br, cr, dr, er, ar, m[10], 0x6d703ef3, 13);dr = rotl(dr, 10);
          ar = fn3(ar, br, cr, dr, er, m[0], 0x6d703ef3, 13);cr = rotl(cr, 10);
          er = fn3(er, ar, br, cr, dr, m[4], 0x6d703ef3, 7);br = rotl(br, 10);
          dr = fn3(dr, er, ar, br, cr, m[13], 0x6d703ef3, 5);ar = rotl(ar, 10);

          // M'j = 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14
          // K' = 0x7a6d76e9
          // S'j = 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8
          cr = fn2(cr, dr, er, ar, br, m[8], 0x7a6d76e9, 15);er = rotl(er, 10);
          br = fn2(br, cr, dr, er, ar, m[6], 0x7a6d76e9, 5);dr = rotl(dr, 10);
          ar = fn2(ar, br, cr, dr, er, m[4], 0x7a6d76e9, 8);cr = rotl(cr, 10);
          er = fn2(er, ar, br, cr, dr, m[1], 0x7a6d76e9, 11);br = rotl(br, 10);
          dr = fn2(dr, er, ar, br, cr, m[3], 0x7a6d76e9, 14);ar = rotl(ar, 10);
          cr = fn2(cr, dr, er, ar, br, m[11], 0x7a6d76e9, 14);er = rotl(er, 10);
          br = fn2(br, cr, dr, er, ar, m[15], 0x7a6d76e9, 6);dr = rotl(dr, 10);
          ar = fn2(ar, br, cr, dr, er, m[0], 0x7a6d76e9, 14);cr = rotl(cr, 10);
          er = fn2(er, ar, br, cr, dr, m[5], 0x7a6d76e9, 6);br = rotl(br, 10);
          dr = fn2(dr, er, ar, br, cr, m[12], 0x7a6d76e9, 9);ar = rotl(ar, 10);
          cr = fn2(cr, dr, er, ar, br, m[2], 0x7a6d76e9, 12);er = rotl(er, 10);
          br = fn2(br, cr, dr, er, ar, m[13], 0x7a6d76e9, 9);dr = rotl(dr, 10);
          ar = fn2(ar, br, cr, dr, er, m[9], 0x7a6d76e9, 12);cr = rotl(cr, 10);
          er = fn2(er, ar, br, cr, dr, m[7], 0x7a6d76e9, 5);br = rotl(br, 10);
          dr = fn2(dr, er, ar, br, cr, m[10], 0x7a6d76e9, 15);ar = rotl(ar, 10);
          cr = fn2(cr, dr, er, ar, br, m[14], 0x7a6d76e9, 8);er = rotl(er, 10);

          // M'j = 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
          // K' = 0x00000000
          // S'j = 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
          br = fn1(br, cr, dr, er, ar, m[12], 0x00000000, 8);dr = rotl(dr, 10);
          ar = fn1(ar, br, cr, dr, er, m[15], 0x00000000, 5);cr = rotl(cr, 10);
          er = fn1(er, ar, br, cr, dr, m[10], 0x00000000, 12);br = rotl(br, 10);
          dr = fn1(dr, er, ar, br, cr, m[4], 0x00000000, 9);ar = rotl(ar, 10);
          cr = fn1(cr, dr, er, ar, br, m[1], 0x00000000, 12);er = rotl(er, 10);
          br = fn1(br, cr, dr, er, ar, m[5], 0x00000000, 5);dr = rotl(dr, 10);
          ar = fn1(ar, br, cr, dr, er, m[8], 0x00000000, 14);cr = rotl(cr, 10);
          er = fn1(er, ar, br, cr, dr, m[7], 0x00000000, 6);br = rotl(br, 10);
          dr = fn1(dr, er, ar, br, cr, m[6], 0x00000000, 8);ar = rotl(ar, 10);
          cr = fn1(cr, dr, er, ar, br, m[2], 0x00000000, 13);er = rotl(er, 10);
          br = fn1(br, cr, dr, er, ar, m[13], 0x00000000, 6);dr = rotl(dr, 10);
          ar = fn1(ar, br, cr, dr, er, m[14], 0x00000000, 5);cr = rotl(cr, 10);
          er = fn1(er, ar, br, cr, dr, m[0], 0x00000000, 15);br = rotl(br, 10);
          dr = fn1(dr, er, ar, br, cr, m[3], 0x00000000, 13);ar = rotl(ar, 10);
          cr = fn1(cr, dr, er, ar, br, m[9], 0x00000000, 11);er = rotl(er, 10);
          br = fn1(br, cr, dr, er, ar, m[11], 0x00000000, 11);dr = rotl(dr, 10);

          // change state
          var t = this._b + cl + dr | 0;
          this._b = this._c + dl + er | 0;
          this._c = this._d + el + ar | 0;
          this._d = this._e + al + br | 0;
          this._e = this._a + bl + cr | 0;
          this._a = t;
        };

        RIPEMD160.prototype._digest = function () {
          // create padding and handle blocks
          this._block[this._blockOffset++] = 0x80;
          if (this._blockOffset > 56) {
            this._block.fill(0, this._blockOffset, 64);
            this._update();
            this._blockOffset = 0;
          }

          this._block.fill(0, this._blockOffset, 56);
          this._block.writeUInt32LE(this._length[0], 56);
          this._block.writeUInt32LE(this._length[1], 60);
          this._update();

          // produce result
          var buffer = new Buffer(20);
          buffer.writeInt32LE(this._a, 0);
          buffer.writeInt32LE(this._b, 4);
          buffer.writeInt32LE(this._c, 8);
          buffer.writeInt32LE(this._d, 12);
          buffer.writeInt32LE(this._e, 16);
          return buffer;
        };

        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }

        function fn1(a, b, c, d, e, m, k, s) {
          return rotl(a + (b ^ c ^ d) + m + k | 0, s) + e | 0;
        }

        function fn2(a, b, c, d, e, m, k, s) {
          return rotl(a + (b & c | ~b & d) + m + k | 0, s) + e | 0;
        }

        function fn3(a, b, c, d, e, m, k, s) {
          return rotl(a + ((b | ~c) ^ d) + m + k | 0, s) + e | 0;
        }

        function fn4(a, b, c, d, e, m, k, s) {
          return rotl(a + (b & d | c & ~d) + m + k | 0, s) + e | 0;
        }

        function fn5(a, b, c, d, e, m, k, s) {
          return rotl(a + (b ^ (c | ~d)) + m + k | 0, s) + e | 0;
        }

        module.exports = RIPEMD160;
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27, "hash-base": 43, "inherits": 45 }], 67: [function (require, module, exports) {
      /* eslint-disable node/no-deprecated-api */
      var buffer = require('buffer');
      var Buffer = buffer.Buffer;

      // alternative to using Object.keys for old browsers
      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }
      if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        // Copy properties from require('buffer')
        copyProps(buffer, exports);
        exports.Buffer = SafeBuffer;
      }

      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer(arg, encodingOrOffset, length);
      }

      // Copy static methods from Buffer
      copyProps(Buffer, SafeBuffer);

      SafeBuffer.from = function (arg, encodingOrOffset, length) {
        if (typeof arg === 'number') {
          throw new TypeError('Argument must not be a number');
        }
        return Buffer(arg, encodingOrOffset, length);
      };

      SafeBuffer.alloc = function (size, fill, encoding) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }
        var buf = Buffer(size);
        if (fill !== undefined) {
          if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }
        return buf;
      };

      SafeBuffer.allocUnsafe = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }
        return Buffer(size);
      };

      SafeBuffer.allocUnsafeSlow = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }
        return buffer.SlowBuffer(size);
      };
    }, { "buffer": 27 }], 68: [function (require, module, exports) {
      (function (process, Buffer) {
        !function (globals) {
          'use strict';

          //*** UMD BEGIN

          if (typeof define !== 'undefined' && define.amd) {
            //require.js / AMD
            define([], function () {
              return secureRandom;
            });
          } else if (typeof module !== 'undefined' && module.exports) {
            //CommonJS
            module.exports = secureRandom;
          } else {
            //script / browser
            globals.secureRandom = secureRandom;
          }
          //*** UMD END

          //options.type is the only valid option
          function secureRandom(count, options) {
            options = options || { type: 'Array'
              //we check for process.pid to prevent browserify from tricking us
            };if (typeof process != 'undefined' && typeof process.pid == 'number') {
              return nodeRandom(count, options);
            } else {
              var crypto = window.crypto || window.msCrypto;
              if (!crypto) throw new Error("Your browser does not support window.crypto.");
              return browserRandom(count, options);
            }
          }

          function nodeRandom(count, options) {
            var crypto = require('crypto');
            var buf = crypto.randomBytes(count);

            switch (options.type) {
              case 'Array':
                return [].slice.call(buf);
              case 'Buffer':
                return buf;
              case 'Uint8Array':
                var arr = new Uint8Array(count);
                for (var i = 0; i < count; ++i) {
                  arr[i] = buf.readUInt8(i);
                }
                return arr;
              default:
                throw new Error(options.type + " is unsupported.");
            }
          }

          function browserRandom(count, options) {
            var nativeArr = new Uint8Array(count);
            var crypto = window.crypto || window.msCrypto;
            crypto.getRandomValues(nativeArr);

            switch (options.type) {
              case 'Array':
                return [].slice.call(nativeArr);
              case 'Buffer':
                try {
                  var b = new Buffer(1);
                } catch (e) {
                  throw new Error('Buffer not supported in this environment. Use Node.js or Browserify for browser support.');
                }
                return new Buffer(nativeArr);
              case 'Uint8Array':
                return nativeArr;
              default:
                throw new Error(options.type + " is unsupported.");
            }
          }

          secureRandom.randomArray = function (byteCount) {
            return secureRandom(byteCount, { type: 'Array' });
          };

          secureRandom.randomUint8Array = function (byteCount) {
            return secureRandom(byteCount, { type: 'Uint8Array' });
          };

          secureRandom.randomBuffer = function (byteCount) {
            return secureRandom(byteCount, { type: 'Buffer' });
          };
        }(this);
      }).call(this, require('_process'), require("buffer").Buffer);
    }, { "_process": 52, "buffer": 27, "crypto": 9 }], 69: [function (require, module, exports) {
      (function (Buffer) {
        // prototype class for hash functions
        function Hash(blockSize, finalSize) {
          this._block = new Buffer(blockSize);
          this._finalSize = finalSize;
          this._blockSize = blockSize;
          this._len = 0;
          this._s = 0;
        }

        Hash.prototype.update = function (data, enc) {
          if (typeof data === 'string') {
            enc = enc || 'utf8';
            data = new Buffer(data, enc);
          }

          var l = this._len += data.length;
          var s = this._s || 0;
          var f = 0;
          var buffer = this._block;

          while (s < l) {
            var t = Math.min(data.length, f + this._blockSize - s % this._blockSize);
            var ch = t - f;

            for (var i = 0; i < ch; i++) {
              buffer[s % this._blockSize + i] = data[i + f];
            }

            s += ch;
            f += ch;

            if (s % this._blockSize === 0) {
              this._update(buffer);
            }
          }
          this._s = s;

          return this;
        };

        Hash.prototype.digest = function (enc) {
          // Suppose the length of the message M, in bits, is l
          var l = this._len * 8;

          // Append the bit 1 to the end of the message
          this._block[this._len % this._blockSize] = 0x80;

          // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
          this._block.fill(0, this._len % this._blockSize + 1);

          if (l % (this._blockSize * 8) >= this._finalSize * 8) {
            this._update(this._block);
            this._block.fill(0);
          }

          // to this append the block which is equal to the number l written in binary
          // TODO: handle case where l is > Math.pow(2, 29)
          this._block.writeInt32BE(l, this._blockSize - 4);

          var hash = this._update(this._block) || this._hash();

          return enc ? hash.toString(enc) : hash;
        };

        Hash.prototype._update = function () {
          throw new Error('_update must be implemented by subclass');
        };

        module.exports = Hash;
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 27 }], 70: [function (require, module, exports) {
      var exports = module.exports = function SHA(algorithm) {
        algorithm = algorithm.toLowerCase();

        var Algorithm = exports[algorithm];
        if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)');

        return new Algorithm();
      };

      exports.sha = require('./sha');
      exports.sha1 = require('./sha1');
      exports.sha224 = require('./sha224');
      exports.sha256 = require('./sha256');
      exports.sha384 = require('./sha384');
      exports.sha512 = require('./sha512');
    }, { "./sha": 71, "./sha1": 72, "./sha224": 73, "./sha256": 74, "./sha384": 75, "./sha512": 76 }], 71: [function (require, module, exports) {
      (function (Buffer) {
        /*
         * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
         * in FIPS PUB 180-1
         * This source code is derived from sha1.js of the same repository.
         * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
         * operation was added.
         */

        var inherits = require('inherits');
        var Hash = require('./hash');

        var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];

        var W = new Array(80);

        function Sha() {
          this.init();
          this._w = W;

          Hash.call(this, 64, 56);
        }

        inherits(Sha, Hash);

        Sha.prototype.init = function () {
          this._a = 0x67452301;
          this._b = 0xefcdab89;
          this._c = 0x98badcfe;
          this._d = 0x10325476;
          this._e = 0xc3d2e1f0;

          return this;
        };

        function rotl5(num) {
          return num << 5 | num >>> 27;
        }

        function rotl30(num) {
          return num << 30 | num >>> 2;
        }

        function ft(s, b, c, d) {
          if (s === 0) return b & c | ~b & d;
          if (s === 2) return b & c | b & d | c & d;
          return b ^ c ^ d;
        }

        Sha.prototype._update = function (M) {
          var W = this._w;

          var a = this._a | 0;
          var b = this._b | 0;
          var c = this._c | 0;
          var d = this._d | 0;
          var e = this._e | 0;

          for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
          for (; i < 80; ++i) W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];

          for (var j = 0; j < 80; ++j) {
            var s = ~~(j / 20);
            var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;

            e = d;
            d = c;
            c = rotl30(b);
            b = a;
            a = t;
          }

          this._a = a + this._a | 0;
          this._b = b + this._b | 0;
          this._c = c + this._c | 0;
          this._d = d + this._d | 0;
          this._e = e + this._e | 0;
        };

        Sha.prototype._hash = function () {
          var H = new Buffer(20);

          H.writeInt32BE(this._a | 0, 0);
          H.writeInt32BE(this._b | 0, 4);
          H.writeInt32BE(this._c | 0, 8);
          H.writeInt32BE(this._d | 0, 12);
          H.writeInt32BE(this._e | 0, 16);

          return H;
        };

        module.exports = Sha;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 69, "buffer": 27, "inherits": 45 }], 72: [function (require, module, exports) {
      (function (Buffer) {
        /*
         * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
         * in FIPS PUB 180-1
         * Version 2.1a Copyright Paul Johnston 2000 - 2002.
         * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
         * Distributed under the BSD License
         * See http://pajhome.org.uk/crypt/md5 for details.
         */

        var inherits = require('inherits');
        var Hash = require('./hash');

        var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];

        var W = new Array(80);

        function Sha1() {
          this.init();
          this._w = W;

          Hash.call(this, 64, 56);
        }

        inherits(Sha1, Hash);

        Sha1.prototype.init = function () {
          this._a = 0x67452301;
          this._b = 0xefcdab89;
          this._c = 0x98badcfe;
          this._d = 0x10325476;
          this._e = 0xc3d2e1f0;

          return this;
        };

        function rotl1(num) {
          return num << 1 | num >>> 31;
        }

        function rotl5(num) {
          return num << 5 | num >>> 27;
        }

        function rotl30(num) {
          return num << 30 | num >>> 2;
        }

        function ft(s, b, c, d) {
          if (s === 0) return b & c | ~b & d;
          if (s === 2) return b & c | b & d | c & d;
          return b ^ c ^ d;
        }

        Sha1.prototype._update = function (M) {
          var W = this._w;

          var a = this._a | 0;
          var b = this._b | 0;
          var c = this._c | 0;
          var d = this._d | 0;
          var e = this._e | 0;

          for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
          for (; i < 80; ++i) W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);

          for (var j = 0; j < 80; ++j) {
            var s = ~~(j / 20);
            var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;

            e = d;
            d = c;
            c = rotl30(b);
            b = a;
            a = t;
          }

          this._a = a + this._a | 0;
          this._b = b + this._b | 0;
          this._c = c + this._c | 0;
          this._d = d + this._d | 0;
          this._e = e + this._e | 0;
        };

        Sha1.prototype._hash = function () {
          var H = new Buffer(20);

          H.writeInt32BE(this._a | 0, 0);
          H.writeInt32BE(this._b | 0, 4);
          H.writeInt32BE(this._c | 0, 8);
          H.writeInt32BE(this._d | 0, 12);
          H.writeInt32BE(this._e | 0, 16);

          return H;
        };

        module.exports = Sha1;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 69, "buffer": 27, "inherits": 45 }], 73: [function (require, module, exports) {
      (function (Buffer) {
        /**
         * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
         * in FIPS 180-2
         * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
         * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
         *
         */

        var inherits = require('inherits');
        var Sha256 = require('./sha256');
        var Hash = require('./hash');

        var W = new Array(64);

        function Sha224() {
          this.init();

          this._w = W; // new Array(64)

          Hash.call(this, 64, 56);
        }

        inherits(Sha224, Sha256);

        Sha224.prototype.init = function () {
          this._a = 0xc1059ed8;
          this._b = 0x367cd507;
          this._c = 0x3070dd17;
          this._d = 0xf70e5939;
          this._e = 0xffc00b31;
          this._f = 0x68581511;
          this._g = 0x64f98fa7;
          this._h = 0xbefa4fa4;

          return this;
        };

        Sha224.prototype._hash = function () {
          var H = new Buffer(28);

          H.writeInt32BE(this._a, 0);
          H.writeInt32BE(this._b, 4);
          H.writeInt32BE(this._c, 8);
          H.writeInt32BE(this._d, 12);
          H.writeInt32BE(this._e, 16);
          H.writeInt32BE(this._f, 20);
          H.writeInt32BE(this._g, 24);

          return H;
        };

        module.exports = Sha224;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 69, "./sha256": 74, "buffer": 27, "inherits": 45 }], 74: [function (require, module, exports) {
      (function (Buffer) {
        /**
         * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
         * in FIPS 180-2
         * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
         * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
         *
         */

        var inherits = require('inherits');
        var Hash = require('./hash');

        var K = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];

        var W = new Array(64);

        function Sha256() {
          this.init();

          this._w = W; // new Array(64)

          Hash.call(this, 64, 56);
        }

        inherits(Sha256, Hash);

        Sha256.prototype.init = function () {
          this._a = 0x6a09e667;
          this._b = 0xbb67ae85;
          this._c = 0x3c6ef372;
          this._d = 0xa54ff53a;
          this._e = 0x510e527f;
          this._f = 0x9b05688c;
          this._g = 0x1f83d9ab;
          this._h = 0x5be0cd19;

          return this;
        };

        function ch(x, y, z) {
          return z ^ x & (y ^ z);
        }

        function maj(x, y, z) {
          return x & y | z & (x | y);
        }

        function sigma0(x) {
          return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
        }

        function sigma1(x) {
          return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
        }

        function gamma0(x) {
          return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
        }

        function gamma1(x) {
          return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
        }

        Sha256.prototype._update = function (M) {
          var W = this._w;

          var a = this._a | 0;
          var b = this._b | 0;
          var c = this._c | 0;
          var d = this._d | 0;
          var e = this._e | 0;
          var f = this._f | 0;
          var g = this._g | 0;
          var h = this._h | 0;

          for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
          for (; i < 64; ++i) W[i] = gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16] | 0;

          for (var j = 0; j < 64; ++j) {
            var T1 = h + sigma1(e) + ch(e, f, g) + K[j] + W[j] | 0;
            var T2 = sigma0(a) + maj(a, b, c) | 0;

            h = g;
            g = f;
            f = e;
            e = d + T1 | 0;
            d = c;
            c = b;
            b = a;
            a = T1 + T2 | 0;
          }

          this._a = a + this._a | 0;
          this._b = b + this._b | 0;
          this._c = c + this._c | 0;
          this._d = d + this._d | 0;
          this._e = e + this._e | 0;
          this._f = f + this._f | 0;
          this._g = g + this._g | 0;
          this._h = h + this._h | 0;
        };

        Sha256.prototype._hash = function () {
          var H = new Buffer(32);

          H.writeInt32BE(this._a, 0);
          H.writeInt32BE(this._b, 4);
          H.writeInt32BE(this._c, 8);
          H.writeInt32BE(this._d, 12);
          H.writeInt32BE(this._e, 16);
          H.writeInt32BE(this._f, 20);
          H.writeInt32BE(this._g, 24);
          H.writeInt32BE(this._h, 28);

          return H;
        };

        module.exports = Sha256;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 69, "buffer": 27, "inherits": 45 }], 75: [function (require, module, exports) {
      (function (Buffer) {
        var inherits = require('inherits');
        var SHA512 = require('./sha512');
        var Hash = require('./hash');

        var W = new Array(160);

        function Sha384() {
          this.init();
          this._w = W;

          Hash.call(this, 128, 112);
        }

        inherits(Sha384, SHA512);

        Sha384.prototype.init = function () {
          this._ah = 0xcbbb9d5d;
          this._bh = 0x629a292a;
          this._ch = 0x9159015a;
          this._dh = 0x152fecd8;
          this._eh = 0x67332667;
          this._fh = 0x8eb44a87;
          this._gh = 0xdb0c2e0d;
          this._hh = 0x47b5481d;

          this._al = 0xc1059ed8;
          this._bl = 0x367cd507;
          this._cl = 0x3070dd17;
          this._dl = 0xf70e5939;
          this._el = 0xffc00b31;
          this._fl = 0x68581511;
          this._gl = 0x64f98fa7;
          this._hl = 0xbefa4fa4;

          return this;
        };

        Sha384.prototype._hash = function () {
          var H = new Buffer(48);

          function writeInt64BE(h, l, offset) {
            H.writeInt32BE(h, offset);
            H.writeInt32BE(l, offset + 4);
          }

          writeInt64BE(this._ah, this._al, 0);
          writeInt64BE(this._bh, this._bl, 8);
          writeInt64BE(this._ch, this._cl, 16);
          writeInt64BE(this._dh, this._dl, 24);
          writeInt64BE(this._eh, this._el, 32);
          writeInt64BE(this._fh, this._fl, 40);

          return H;
        };

        module.exports = Sha384;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 69, "./sha512": 76, "buffer": 27, "inherits": 45 }], 76: [function (require, module, exports) {
      (function (Buffer) {
        var inherits = require('inherits');
        var Hash = require('./hash');

        var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

        var W = new Array(160);

        function Sha512() {
          this.init();
          this._w = W;

          Hash.call(this, 128, 112);
        }

        inherits(Sha512, Hash);

        Sha512.prototype.init = function () {
          this._ah = 0x6a09e667;
          this._bh = 0xbb67ae85;
          this._ch = 0x3c6ef372;
          this._dh = 0xa54ff53a;
          this._eh = 0x510e527f;
          this._fh = 0x9b05688c;
          this._gh = 0x1f83d9ab;
          this._hh = 0x5be0cd19;

          this._al = 0xf3bcc908;
          this._bl = 0x84caa73b;
          this._cl = 0xfe94f82b;
          this._dl = 0x5f1d36f1;
          this._el = 0xade682d1;
          this._fl = 0x2b3e6c1f;
          this._gl = 0xfb41bd6b;
          this._hl = 0x137e2179;

          return this;
        };

        function Ch(x, y, z) {
          return z ^ x & (y ^ z);
        }

        function maj(x, y, z) {
          return x & y | z & (x | y);
        }

        function sigma0(x, xl) {
          return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
        }

        function sigma1(x, xl) {
          return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
        }

        function Gamma0(x, xl) {
          return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
        }

        function Gamma0l(x, xl) {
          return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
        }

        function Gamma1(x, xl) {
          return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
        }

        function Gamma1l(x, xl) {
          return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
        }

        function getCarry(a, b) {
          return a >>> 0 < b >>> 0 ? 1 : 0;
        }

        Sha512.prototype._update = function (M) {
          var W = this._w;

          var ah = this._ah | 0;
          var bh = this._bh | 0;
          var ch = this._ch | 0;
          var dh = this._dh | 0;
          var eh = this._eh | 0;
          var fh = this._fh | 0;
          var gh = this._gh | 0;
          var hh = this._hh | 0;

          var al = this._al | 0;
          var bl = this._bl | 0;
          var cl = this._cl | 0;
          var dl = this._dl | 0;
          var el = this._el | 0;
          var fl = this._fl | 0;
          var gl = this._gl | 0;
          var hl = this._hl | 0;

          for (var i = 0; i < 32; i += 2) {
            W[i] = M.readInt32BE(i * 4);
            W[i + 1] = M.readInt32BE(i * 4 + 4);
          }
          for (; i < 160; i += 2) {
            var xh = W[i - 15 * 2];
            var xl = W[i - 15 * 2 + 1];
            var gamma0 = Gamma0(xh, xl);
            var gamma0l = Gamma0l(xl, xh);

            xh = W[i - 2 * 2];
            xl = W[i - 2 * 2 + 1];
            var gamma1 = Gamma1(xh, xl);
            var gamma1l = Gamma1l(xl, xh);

            // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
            var Wi7h = W[i - 7 * 2];
            var Wi7l = W[i - 7 * 2 + 1];

            var Wi16h = W[i - 16 * 2];
            var Wi16l = W[i - 16 * 2 + 1];

            var Wil = gamma0l + Wi7l | 0;
            var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
            Wil = Wil + gamma1l | 0;
            Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
            Wil = Wil + Wi16l | 0;
            Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;

            W[i] = Wih;
            W[i + 1] = Wil;
          }

          for (var j = 0; j < 160; j += 2) {
            Wih = W[j];
            Wil = W[j + 1];

            var majh = maj(ah, bh, ch);
            var majl = maj(al, bl, cl);

            var sigma0h = sigma0(ah, al);
            var sigma0l = sigma0(al, ah);
            var sigma1h = sigma1(eh, el);
            var sigma1l = sigma1(el, eh);

            // t1 = h + sigma1 + ch + K[j] + W[j]
            var Kih = K[j];
            var Kil = K[j + 1];

            var chh = Ch(eh, fh, gh);
            var chl = Ch(el, fl, gl);

            var t1l = hl + sigma1l | 0;
            var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
            t1l = t1l + chl | 0;
            t1h = t1h + chh + getCarry(t1l, chl) | 0;
            t1l = t1l + Kil | 0;
            t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
            t1l = t1l + Wil | 0;
            t1h = t1h + Wih + getCarry(t1l, Wil) | 0;

            // t2 = sigma0 + maj
            var t2l = sigma0l + majl | 0;
            var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;

            hh = gh;
            hl = gl;
            gh = fh;
            gl = fl;
            fh = eh;
            fl = el;
            el = dl + t1l | 0;
            eh = dh + t1h + getCarry(el, dl) | 0;
            dh = ch;
            dl = cl;
            ch = bh;
            cl = bl;
            bh = ah;
            bl = al;
            al = t1l + t2l | 0;
            ah = t1h + t2h + getCarry(al, t1l) | 0;
          }

          this._al = this._al + al | 0;
          this._bl = this._bl + bl | 0;
          this._cl = this._cl + cl | 0;
          this._dl = this._dl + dl | 0;
          this._el = this._el + el | 0;
          this._fl = this._fl + fl | 0;
          this._gl = this._gl + gl | 0;
          this._hl = this._hl + hl | 0;

          this._ah = this._ah + ah + getCarry(this._al, al) | 0;
          this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
          this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
          this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
          this._eh = this._eh + eh + getCarry(this._el, el) | 0;
          this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
          this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
          this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
        };

        Sha512.prototype._hash = function () {
          var H = new Buffer(64);

          function writeInt64BE(h, l, offset) {
            H.writeInt32BE(h, offset);
            H.writeInt32BE(l, offset + 4);
          }

          writeInt64BE(this._ah, this._al, 0);
          writeInt64BE(this._bh, this._bl, 8);
          writeInt64BE(this._ch, this._cl, 16);
          writeInt64BE(this._dh, this._dl, 24);
          writeInt64BE(this._eh, this._el, 32);
          writeInt64BE(this._fh, this._fl, 40);
          writeInt64BE(this._gh, this._gl, 48);
          writeInt64BE(this._hh, this._hl, 56);

          return H;
        };

        module.exports = Sha512;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 69, "buffer": 27, "inherits": 45 }], 77: [function (require, module, exports) {
      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      module.exports = Stream;

      var EE = require('events').EventEmitter;
      var inherits = require('inherits');

      inherits(Stream, EE);
      Stream.Readable = require('readable-stream/readable.js');
      Stream.Writable = require('readable-stream/writable.js');
      Stream.Duplex = require('readable-stream/duplex.js');
      Stream.Transform = require('readable-stream/transform.js');
      Stream.PassThrough = require('readable-stream/passthrough.js');

      // Backwards-compat with node 0.4.x
      Stream.Stream = Stream;

      // old-style streams.  Note that the pipe method (the only relevant
      // part of this class) is overridden in the Readable class.

      function Stream() {
        EE.call(this);
      }

      Stream.prototype.pipe = function (dest, options) {
        var source = this;

        function ondata(chunk) {
          if (dest.writable) {
            if (false === dest.write(chunk) && source.pause) {
              source.pause();
            }
          }
        }

        source.on('data', ondata);

        function ondrain() {
          if (source.readable && source.resume) {
            source.resume();
          }
        }

        dest.on('drain', ondrain);

        // If the 'end' option is not supplied, dest.end() will be called when
        // source gets the 'end' or 'close' events.  Only dest.end() once.
        if (!dest._isStdio && (!options || options.end !== false)) {
          source.on('end', onend);
          source.on('close', onclose);
        }

        var didOnEnd = false;
        function onend() {
          if (didOnEnd) return;
          didOnEnd = true;

          dest.end();
        }

        function onclose() {
          if (didOnEnd) return;
          didOnEnd = true;

          if (typeof dest.destroy === 'function') dest.destroy();
        }

        // don't leave dangling pipes when there are errors.
        function onerror(er) {
          cleanup();
          if (EE.listenerCount(this, 'error') === 0) {
            throw er; // Unhandled stream error in pipe.
          }
        }

        source.on('error', onerror);
        dest.on('error', onerror);

        // remove all the event listeners that were added.
        function cleanup() {
          source.removeListener('data', ondata);
          dest.removeListener('drain', ondrain);

          source.removeListener('end', onend);
          source.removeListener('close', onclose);

          source.removeListener('error', onerror);
          dest.removeListener('error', onerror);

          source.removeListener('end', cleanup);
          source.removeListener('close', cleanup);

          dest.removeListener('close', cleanup);
        }

        source.on('end', cleanup);
        source.on('close', cleanup);

        dest.on('close', cleanup);

        dest.emit('pipe', source);

        // Allow for unix-like usage: A.pipe(B).pipe(C)
        return dest;
      };
    }, { "events": 41, "inherits": 45, "readable-stream/duplex.js": 53, "readable-stream/passthrough.js": 62, "readable-stream/readable.js": 63, "readable-stream/transform.js": 64, "readable-stream/writable.js": 65 }], 78: [function (require, module, exports) {
      'use strict';

      var Buffer = require('safe-buffer').Buffer;

      var isEncoding = Buffer.isEncoding || function (encoding) {
        encoding = '' + encoding;
        switch (encoding && encoding.toLowerCase()) {
          case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
            return true;
          default:
            return false;
        }
      };

      function _normalizeEncoding(enc) {
        if (!enc) return 'utf8';
        var retried;
        while (true) {
          switch (enc) {
            case 'utf8':
            case 'utf-8':
              return 'utf8';
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 'utf16le';
            case 'latin1':
            case 'binary':
              return 'latin1';
            case 'base64':
            case 'ascii':
            case 'hex':
              return enc;
            default:
              if (retried) return; // undefined
              enc = ('' + enc).toLowerCase();
              retried = true;
          }
        }
      };

      // Do not cache `Buffer.isEncoding` when checking encoding names as some
      // modules monkey-patch it to support additional encodings
      function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);
        if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
        return nenc || enc;
      }

      // StringDecoder provides an interface for efficiently splitting a series of
      // buffers into a series of JS strings without breaking apart multi-byte
      // characters.
      exports.StringDecoder = StringDecoder;
      function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;
        switch (this.encoding) {
          case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
          case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
          case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
          default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer.allocUnsafe(nb);
      }

      StringDecoder.prototype.write = function (buf) {
        if (buf.length === 0) return '';
        var r;
        var i;
        if (this.lastNeed) {
          r = this.fillLast(buf);
          if (r === undefined) return '';
          i = this.lastNeed;
          this.lastNeed = 0;
        } else {
          i = 0;
        }
        if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
        return r || '';
      };

      StringDecoder.prototype.end = utf8End;

      // Returns only complete characters in a Buffer
      StringDecoder.prototype.text = utf8Text;

      // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
      StringDecoder.prototype.fillLast = function (buf) {
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
      };

      // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
      // continuation byte.
      function utf8CheckByte(byte) {
        if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
        return -1;
      }

      // Checks at most 3 bytes at the end of a Buffer in order to detect an
      // incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
      // needed to complete the UTF-8 character (if applicable) are returned.
      function utf8CheckIncomplete(self, buf, i) {
        var j = buf.length - 1;
        if (j < i) return 0;
        var nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) self.lastNeed = nb - 1;
          return nb;
        }
        if (--j < i) return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) self.lastNeed = nb - 2;
          return nb;
        }
        if (--j < i) return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) {
            if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
          }
          return nb;
        }
        return 0;
      }

      // Validates as many continuation bytes for a multi-byte UTF-8 character as
      // needed or are available. If we see a non-continuation byte where we expect
      // one, we "replace" the validated continuation bytes we've seen so far with
      // UTF-8 replacement characters ('\ufffd'), to match v8's UTF-8 decoding
      // behavior. The continuation byte check is included three times in the case
      // where all of the continuation bytes for a character exist in the same buffer.
      // It is also done this way as a slight performance increase instead of using a
      // loop.
      function utf8CheckExtraBytes(self, buf, p) {
        if ((buf[0] & 0xC0) !== 0x80) {
          self.lastNeed = 0;
          return '\ufffd'.repeat(p);
        }
        if (self.lastNeed > 1 && buf.length > 1) {
          if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return '\ufffd'.repeat(p + 1);
          }
          if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
              self.lastNeed = 2;
              return '\ufffd'.repeat(p + 2);
            }
          }
        }
      }

      // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
      function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, buf, p);
        if (r !== undefined) return r;
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, p, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, p, 0, buf.length);
        this.lastNeed -= buf.length;
      }

      // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
      // partial character, the character's bytes are buffered until the required
      // number of bytes are available.
      function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed) return buf.toString('utf8', i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString('utf8', i, end);
      }

      // For UTF-8, a replacement character for each buffered byte of a (partial)
      // character needs to be added to the output.
      function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) return r + '\ufffd'.repeat(this.lastTotal - this.lastNeed);
        return r;
      }

      // UTF-16LE typically needs two bytes per character, but even if we have an even
      // number of bytes available, we need to check if we end on a leading/high
      // surrogate. In that case, we need to wait for the next two bytes in order to
      // decode the last character properly.
      function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
          var r = buf.toString('utf16le', i);
          if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = buf[buf.length - 2];
              this.lastChar[1] = buf[buf.length - 1];
              return r.slice(0, -1);
            }
          }
          return r;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString('utf16le', i, buf.length - 1);
      }

      // For UTF-16LE we do not explicitly append special replacement characters if we
      // end on a partial character, we simply let v8 handle that.
      function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) {
          var end = this.lastTotal - this.lastNeed;
          return r + this.lastChar.toString('utf16le', 0, end);
        }
        return r;
      }

      function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        if (n === 0) return buf.toString('base64', i);
        this.lastNeed = 3 - n;
        this.lastTotal = 3;
        if (n === 1) {
          this.lastChar[0] = buf[buf.length - 1];
        } else {
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
        }
        return buf.toString('base64', i, buf.length - n);
      }

      function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
        return r;
      }

      // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
      function simpleWrite(buf) {
        return buf.toString(this.encoding);
      }

      function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : '';
      }
    }, { "safe-buffer": 67 }], 79: [function (require, module, exports) {
      (function (global) {

        /**
         * Module exports.
         */

        module.exports = deprecate;

        /**
         * Mark that a method should not be used.
         * Returns a modified function which warns once by default.
         *
         * If `localStorage.noDeprecation = true` is set, then it is a no-op.
         *
         * If `localStorage.throwDeprecation = true` is set, then deprecated functions
         * will throw an Error when invoked.
         *
         * If `localStorage.traceDeprecation = true` is set, then deprecated functions
         * will invoke `console.trace()` instead of `console.error()`.
         *
         * @param {Function} fn - the function to deprecate
         * @param {String} msg - the string to print to the console when `fn` is invoked
         * @returns {Function} a new "deprecated" version of `fn`
         * @api public
         */

        function deprecate(fn, msg) {
          if (config('noDeprecation')) {
            return fn;
          }

          var warned = false;
          function deprecated() {
            if (!warned) {
              if (config('throwDeprecation')) {
                throw new Error(msg);
              } else if (config('traceDeprecation')) {
                console.trace(msg);
              } else {
                console.warn(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }

          return deprecated;
        }

        /**
         * Checks `localStorage` for boolean values for the given `name`.
         *
         * @param {String} name
         * @returns {Boolean}
         * @api private
         */

        function config(name) {
          // accessing global.localStorage can trigger a DOMException in sandboxed iframes
          try {
            if (!global.localStorage) return false;
          } catch (_) {
            return false;
          }
          var val = global.localStorage[name];
          if (null == val) return false;
          return String(val).toLowerCase() === 'true';
        }
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}], 80: [function (require, module, exports) {
      arguments[4][45][0].apply(exports, arguments);
    }, { "dup": 45 }], 81: [function (require, module, exports) {
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };
    }, {}], 82: [function (require, module, exports) {
      (function (process, global) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        var formatRegExp = /%[sdj%]/g;
        exports.format = function (f) {
          if (!isString(f)) {
            var objects = [];
            for (var i = 0; i < arguments.length; i++) {
              objects.push(inspect(arguments[i]));
            }
            return objects.join(' ');
          }

          var i = 1;
          var args = arguments;
          var len = args.length;
          var str = String(f).replace(formatRegExp, function (x) {
            if (x === '%%') return '%';
            if (i >= len) return x;
            switch (x) {
              case '%s':
                return String(args[i++]);
              case '%d':
                return Number(args[i++]);
              case '%j':
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return '[Circular]';
                }
              default:
                return x;
            }
          });
          for (var x = args[i]; i < len; x = args[++i]) {
            if (isNull(x) || !isObject(x)) {
              str += ' ' + x;
            } else {
              str += ' ' + inspect(x);
            }
          }
          return str;
        };

        // Mark that a method should not be used.
        // Returns a modified function which warns once by default.
        // If --no-deprecation is set, then it is a no-op.
        exports.deprecate = function (fn, msg) {
          // Allow for deprecating things in the process of starting up.
          if (isUndefined(global.process)) {
            return function () {
              return exports.deprecate(fn, msg).apply(this, arguments);
            };
          }

          if (process.noDeprecation === true) {
            return fn;
          }

          var warned = false;
          function deprecated() {
            if (!warned) {
              if (process.throwDeprecation) {
                throw new Error(msg);
              } else if (process.traceDeprecation) {
                console.trace(msg);
              } else {
                console.error(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }

          return deprecated;
        };

        var debugs = {};
        var debugEnviron;
        exports.debuglog = function (set) {
          if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
          set = set.toUpperCase();
          if (!debugs[set]) {
            if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
              var pid = process.pid;
              debugs[set] = function () {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
              };
            } else {
              debugs[set] = function () {};
            }
          }
          return debugs[set];
        };

        /**
         * Echos the value of a value. Trys to print the value out
         * in the best way possible given the different types.
         *
         * @param {Object} obj The object to print out.
         * @param {Object} opts Optional options object that alters the output.
         */
        /* legacy: obj, showHidden, depth, colors*/
        function inspect(obj, opts) {
          // default options
          var ctx = {
            seen: [],
            stylize: stylizeNoColor
          };
          // legacy...
          if (arguments.length >= 3) ctx.depth = arguments[2];
          if (arguments.length >= 4) ctx.colors = arguments[3];
          if (isBoolean(opts)) {
            // legacy...
            ctx.showHidden = opts;
          } else if (opts) {
            // got an "options" object
            exports._extend(ctx, opts);
          }
          // set default options
          if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
          if (isUndefined(ctx.depth)) ctx.depth = 2;
          if (isUndefined(ctx.colors)) ctx.colors = false;
          if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
          if (ctx.colors) ctx.stylize = stylizeWithColor;
          return formatValue(ctx, obj, ctx.depth);
        }
        exports.inspect = inspect;

        // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
        inspect.colors = {
          'bold': [1, 22],
          'italic': [3, 23],
          'underline': [4, 24],
          'inverse': [7, 27],
          'white': [37, 39],
          'grey': [90, 39],
          'black': [30, 39],
          'blue': [34, 39],
          'cyan': [36, 39],
          'green': [32, 39],
          'magenta': [35, 39],
          'red': [31, 39],
          'yellow': [33, 39]
        };

        // Don't use 'blue' not visible on cmd.exe
        inspect.styles = {
          'special': 'cyan',
          'number': 'yellow',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',
          // "name": intentionally not styling
          'regexp': 'red'
        };

        function stylizeWithColor(str, styleType) {
          var style = inspect.styles[styleType];

          if (style) {
            return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
          } else {
            return str;
          }
        }

        function stylizeNoColor(str, styleType) {
          return str;
        }

        function arrayToHash(array) {
          var hash = {};

          array.forEach(function (val, idx) {
            hash[val] = true;
          });

          return hash;
        }

        function formatValue(ctx, value, recurseTimes) {
          // Provide a hook for user-specified inspect functions.
          // Check that value is an object with an inspect function on it
          if (ctx.customInspect && value && isFunction(value.inspect) &&
          // Filter out the util module, it's inspect function is special
          value.inspect !== exports.inspect &&
          // Also filter out any prototype objects using the circular check.
          !(value.constructor && value.constructor.prototype === value)) {
            var ret = value.inspect(recurseTimes, ctx);
            if (!isString(ret)) {
              ret = formatValue(ctx, ret, recurseTimes);
            }
            return ret;
          }

          // Primitive types cannot have properties
          var primitive = formatPrimitive(ctx, value);
          if (primitive) {
            return primitive;
          }

          // Look up the keys of the object.
          var keys = Object.keys(value);
          var visibleKeys = arrayToHash(keys);

          if (ctx.showHidden) {
            keys = Object.getOwnPropertyNames(value);
          }

          // IE doesn't make error fields non-enumerable
          // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
          if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
            return formatError(value);
          }

          // Some type of object without properties can be shortcutted.
          if (keys.length === 0) {
            if (isFunction(value)) {
              var name = value.name ? ': ' + value.name : '';
              return ctx.stylize('[Function' + name + ']', 'special');
            }
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            }
            if (isDate(value)) {
              return ctx.stylize(Date.prototype.toString.call(value), 'date');
            }
            if (isError(value)) {
              return formatError(value);
            }
          }

          var base = '',
              array = false,
              braces = ['{', '}'];

          // Make Array say that they are Array
          if (isArray(value)) {
            array = true;
            braces = ['[', ']'];
          }

          // Make functions say that they are functions
          if (isFunction(value)) {
            var n = value.name ? ': ' + value.name : '';
            base = ' [Function' + n + ']';
          }

          // Make RegExps say that they are RegExps
          if (isRegExp(value)) {
            base = ' ' + RegExp.prototype.toString.call(value);
          }

          // Make dates with properties first say the date
          if (isDate(value)) {
            base = ' ' + Date.prototype.toUTCString.call(value);
          }

          // Make error with message first say the error
          if (isError(value)) {
            base = ' ' + formatError(value);
          }

          if (keys.length === 0 && (!array || value.length == 0)) {
            return braces[0] + base + braces[1];
          }

          if (recurseTimes < 0) {
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            } else {
              return ctx.stylize('[Object]', 'special');
            }
          }

          ctx.seen.push(value);

          var output;
          if (array) {
            output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
          } else {
            output = keys.map(function (key) {
              return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            });
          }

          ctx.seen.pop();

          return reduceToSingleString(output, base, braces);
        }

        function formatPrimitive(ctx, value) {
          if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
          if (isString(value)) {
            var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
            return ctx.stylize(simple, 'string');
          }
          if (isNumber(value)) return ctx.stylize('' + value, 'number');
          if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
          // For some reason typeof null is "object", so special case here.
          if (isNull(value)) return ctx.stylize('null', 'null');
        }

        function formatError(value) {
          return '[' + Error.prototype.toString.call(value) + ']';
        }

        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
          var output = [];
          for (var i = 0, l = value.length; i < l; ++i) {
            if (hasOwnProperty(value, String(i))) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
            } else {
              output.push('');
            }
          }
          keys.forEach(function (key) {
            if (!key.match(/^\d+$/)) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
            }
          });
          return output;
        }

        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
          var name, str, desc;
          desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
          if (desc.get) {
            if (desc.set) {
              str = ctx.stylize('[Getter/Setter]', 'special');
            } else {
              str = ctx.stylize('[Getter]', 'special');
            }
          } else {
            if (desc.set) {
              str = ctx.stylize('[Setter]', 'special');
            }
          }
          if (!hasOwnProperty(visibleKeys, key)) {
            name = '[' + key + ']';
          }
          if (!str) {
            if (ctx.seen.indexOf(desc.value) < 0) {
              if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
              } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
              }
              if (str.indexOf('\n') > -1) {
                if (array) {
                  str = str.split('\n').map(function (line) {
                    return '  ' + line;
                  }).join('\n').substr(2);
                } else {
                  str = '\n' + str.split('\n').map(function (line) {
                    return '   ' + line;
                  }).join('\n');
                }
              }
            } else {
              str = ctx.stylize('[Circular]', 'special');
            }
          }
          if (isUndefined(name)) {
            if (array && key.match(/^\d+$/)) {
              return str;
            }
            name = JSON.stringify('' + key);
            if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              name = name.substr(1, name.length - 2);
              name = ctx.stylize(name, 'name');
            } else {
              name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
              name = ctx.stylize(name, 'string');
            }
          }

          return name + ': ' + str;
        }

        function reduceToSingleString(output, base, braces) {
          var numLinesEst = 0;
          var length = output.reduce(function (prev, cur) {
            numLinesEst++;
            if (cur.indexOf('\n') >= 0) numLinesEst++;
            return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
          }, 0);

          if (length > 60) {
            return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
          }

          return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }

        // NOTE: These type checking functions intentionally don't use `instanceof`
        // because it is fragile and can be easily faked with `Object.create()`.
        function isArray(ar) {
          return Array.isArray(ar);
        }
        exports.isArray = isArray;

        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;

        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;

        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;

        function isNumber(arg) {
          return typeof arg === 'number';
        }
        exports.isNumber = isNumber;

        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;

        function isSymbol(arg) {
          return typeof arg === 'symbol';
        }
        exports.isSymbol = isSymbol;

        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;

        function isRegExp(re) {
          return isObject(re) && objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;

        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }
        exports.isObject = isObject;

        function isDate(d) {
          return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;

        function isError(e) {
          return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;

        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;

        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
          typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;

        exports.isBuffer = require('./support/isBuffer');

        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }

        function pad(n) {
          return n < 10 ? '0' + n.toString(10) : n.toString(10);
        }

        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // 26 Feb 16:19:34
        function timestamp() {
          var d = new Date();
          var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
          return [d.getDate(), months[d.getMonth()], time].join(' ');
        }

        // log is just a thin wrapper to console.log that prepends a timestamp
        exports.log = function () {
          console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
        };

        /**
         * Inherit the prototype methods from one constructor into another.
         *
         * The Function.prototype.inherits from lang.js rewritten as a standalone
         * function (not on Function.prototype). NOTE: If this file is to be loaded
         * during bootstrapping this function needs to be rewritten using some native
         * functions as prototype setup using normal JavaScript does not work as
         * expected during bootstrapping (see mirror.js in r114903).
         *
         * @param {function} ctor Constructor function which needs to inherit the
         *     prototype.
         * @param {function} superCtor Constructor function to inherit prototype from.
         */
        exports.inherits = require('inherits');

        exports._extend = function (origin, add) {
          // Don't do anything if add isn't an object
          if (!add || !isObject(add)) return origin;

          var keys = Object.keys(add);
          var i = keys.length;
          while (i--) {
            origin[keys[i]] = add[keys[i]];
          }
          return origin;
        };

        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "./support/isBuffer": 81, "_process": 52, "inherits": 80 }], 83: [function (require, module, exports) {
      (function (Buffer) {
        const secureRandom = require('secure-random');
        const ByteBuffer = require('bytebuffer');
        const crypto = require('browserify-aes');
        const assert = require('assert');
        const PublicKey = require('./key_public');
        const PrivateKey = require('./key_private');
        const hash = require('./hash');

        const Long = ByteBuffer.Long;

        module.exports = {
          encrypt,
          decrypt

          /**
              Spec: http://localhost:3002/steem/@dantheman/how-to-encrypt-a-memo-when-transferring-steem
              @throws {Error|TypeError} - "Invalid Key, ..."
              @arg {PrivateKey} private_key - required and used for decryption
              @arg {PublicKey} public_key - required and used to calcualte the shared secret
              @arg {string} [nonce = uniqueNonce()] - assigned a random unique uint64
          
              @return {object}
              @property {string} nonce - random or unique uint64, provides entropy when re-using the same private/public keys.
              @property {Buffer} message - Plain text message
              @property {number} checksum - shared secret checksum
          */
        };function encrypt(private_key, public_key, message, nonce = uniqueNonce()) {
          return crypt(private_key, public_key, nonce, message);
        }

        /**
            Spec: http://localhost:3002/steem/@dantheman/how-to-encrypt-a-memo-when-transferring-steem
            @arg {PrivateKey} private_key - required and used for decryption
            @arg {PublicKey} public_key - required and used to calcualte the shared secret
            @arg {string} nonce - random or unique uint64, provides entropy when re-using the same private/public keys.
            @arg {Buffer} message - Encrypted or plain text message
            @arg {number} checksum - shared secret checksum
            @throws {Error|TypeError} - "Invalid Key, ..."
            @return {Buffer} - message
        */
        function decrypt(private_key, public_key, nonce, message, checksum) {
          return crypt(private_key, public_key, nonce, message, checksum).message;
        }

        /**
            @arg {Buffer} message - Encrypted or plain text message (see checksum)
            @arg {number} checksum - shared secret checksum (null to encrypt, non-null to decrypt)
            @private
        */
        function crypt(private_key, public_key, nonce, message, checksum) {
          private_key = toPrivateObj(private_key);
          if (!private_key) throw new TypeError('private_key is required');

          public_key = toPublicObj(public_key);
          if (!public_key) throw new TypeError('public_key is required');

          nonce = toLongObj(nonce);
          if (!nonce) throw new TypeError('nonce is required');

          if (!Buffer.isBuffer(message)) {
            if (typeof message !== 'string') throw new TypeError('message should be buffer or string');
            message = new Buffer(message, 'binary');
          }
          if (checksum && typeof checksum !== 'number') throw new TypeError('checksum should be a number');

          const S = private_key.getSharedSecret(public_key);
          let ebuf = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
          ebuf.writeUint64(nonce);
          ebuf.append(S.toString('binary'), 'binary');
          ebuf = new Buffer(ebuf.copy(0, ebuf.offset).toBinary(), 'binary');
          const encryption_key = hash.sha512(ebuf);

          // D E B U G
          // console.log('crypt', {
          //     priv_to_pub: private_key.toPublicKey().toString(),
          //     pub: public_key.toString(),
          //     nonce: nonce.toString(),
          //     message: message.length,
          //     checksum,
          //     S: S.toString('hex'),
          //     encryption_key: encryption_key.toString('hex'),
          // })

          const iv = encryption_key.slice(32, 48);
          const key = encryption_key.slice(0, 32);

          // check is first 64 bit of sha256 hash treated as uint64_t truncated to 32 bits.
          let check = hash.sha256(encryption_key);
          check = check.slice(0, 4);
          const cbuf = ByteBuffer.fromBinary(check.toString('binary'), ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
          check = cbuf.readUint32();

          if (checksum) {
            if (check !== checksum) throw new Error('Invalid key');
            message = cryptoJsDecrypt(message, key, iv);
          } else {
            message = cryptoJsEncrypt(message, key, iv);
          }
          return { nonce, message, checksum: check };
        }

        /** This method does not use a checksum, the returned data must be validated some other way.
            @arg {string|Buffer} ciphertext - binary format
            @return {Buffer}
        */
        function cryptoJsDecrypt(message, key, iv) {
          assert(message, "Missing cipher text");
          message = toBinaryBuffer(message);
          const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
          // decipher.setAutoPadding(true)
          message = Buffer.concat([decipher.update(message), decipher.final()]);
          return message;
        }

        /** This method does not use a checksum, the returned data must be validated some other way.
            @arg {string|Buffer} plaintext - binary format
            @return {Buffer} binary
        */
        function cryptoJsEncrypt(message, key, iv) {
          assert(message, "Missing plain text");
          message = toBinaryBuffer(message);
          const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
          // cipher.setAutoPadding(true)
          message = Buffer.concat([cipher.update(message), cipher.final()]);
          return message;
        }

        /** @return {string} unique 64 bit unsigned number string.  Being time based, this is careful to never choose the same nonce twice.  This value could be recorded in the blockchain for a long time.
        */
        function uniqueNonce() {
          if (unique_nonce_entropy === null) {
            const b = secureRandom.randomUint8Array(2);
            unique_nonce_entropy = parseInt(b[0] << 8 | b[1], 10);
          }
          let long = Long.fromNumber(Date.now());
          const entropy = ++unique_nonce_entropy % 0xFFFF;
          // console.log('uniqueNonce date\t', ByteBuffer.allocate(8).writeUint64(long).toHex(0))
          // console.log('uniqueNonce entropy\t', ByteBuffer.allocate(8).writeUint64(Long.fromNumber(entropy)).toHex(0))
          long = long.shiftLeft(16).or(Long.fromNumber(entropy));
          // console.log('uniqueNonce final\t', ByteBuffer.allocate(8).writeUint64(long).toHex(0))
          return long.toString();
        }
        let unique_nonce_entropy = null;
        // for(let i=1; i < 10; i++) key.uniqueNonce()

        const toPrivateObj = o => o ? o.d ? o : PrivateKey.fromWif(o) : o /*null or undefined*/;
        const toPublicObj = o => o ? o.Q ? o : PublicKey.fromString(o) : o /*null or undefined*/;
        const toLongObj = o => o ? Long.isLong(o) ? o : Long.fromString(o) : o;
        const toBinaryBuffer = o => o ? Buffer.isBuffer(o) ? o : new Buffer(o, 'binary') : o;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 88, "./key_private": 89, "./key_public": 90, "assert": 2, "browserify-aes": 12, "buffer": 27, "bytebuffer": 28, "secure-random": 68 }], 84: [function (require, module, exports) {

      module.exports = {
        address_prefix: 'EOS'
      };
    }, {}], 85: [function (require, module, exports) {
      (function (Buffer) {
        var assert = require('assert'); // from github.com/bitcoinjs/bitcoinjs-lib from github.com/cryptocoinjs/ecdsa
        var crypto = require('./hash');
        var enforceType = require('./enforce_types');

        var BigInteger = require('bigi');
        var ECSignature = require('./ecsignature');

        // https://tools.ietf.org/html/rfc6979#section-3.2
        function deterministicGenerateK(curve, hash, d, checkSig, nonce) {

          enforceType('Buffer', hash);
          enforceType(BigInteger, d);

          if (nonce) {
            hash = crypto.sha256(Buffer.concat([hash, new Buffer(nonce)]));
          }

          // sanity check
          assert.equal(hash.length, 32, 'Hash must be 256 bit');

          var x = d.toBuffer(32);
          var k = new Buffer(32);
          var v = new Buffer(32);

          // Step B
          v.fill(1);

          // Step C
          k.fill(0);

          // Step D
          k = crypto.HmacSHA256(Buffer.concat([v, new Buffer([0]), x, hash]), k);

          // Step E
          v = crypto.HmacSHA256(v, k);

          // Step F
          k = crypto.HmacSHA256(Buffer.concat([v, new Buffer([1]), x, hash]), k);

          // Step G
          v = crypto.HmacSHA256(v, k);

          // Step H1/H2a, ignored as tlen === qlen (256 bit)
          // Step H2b
          v = crypto.HmacSHA256(v, k);

          var T = BigInteger.fromBuffer(v);

          // Step H3, repeat until T is within the interval [1, n - 1]
          while (T.signum() <= 0 || T.compareTo(curve.n) >= 0 || !checkSig(T)) {
            k = crypto.HmacSHA256(Buffer.concat([v, new Buffer([0])]), k);
            v = crypto.HmacSHA256(v, k);

            // Step H1/H2a, again, ignored as tlen === qlen (256 bit)
            // Step H2b again
            v = crypto.HmacSHA256(v, k);

            T = BigInteger.fromBuffer(v);
          }

          return T;
        }

        function sign(curve, hash, d, nonce) {

          var e = BigInteger.fromBuffer(hash);
          var n = curve.n;
          var G = curve.G;

          var r, s;
          var k = deterministicGenerateK(curve, hash, d, function (k) {
            // find canonically valid signature
            var Q = G.multiply(k);

            if (curve.isInfinity(Q)) return false;

            r = Q.affineX.mod(n);
            if (r.signum() === 0) return false;

            s = k.modInverse(n).multiply(e.add(d.multiply(r))).mod(n);
            if (s.signum() === 0) return false;

            return true;
          }, nonce);

          var N_OVER_TWO = n.shiftRight(1);

          // enforce low S values, see bip62: 'low s values in signatures'
          if (s.compareTo(N_OVER_TWO) > 0) {
            s = n.subtract(s);
          }

          return new ECSignature(r, s);
        }

        function verifyRaw(curve, e, signature, Q) {
          var n = curve.n;
          var G = curve.G;

          var r = signature.r;
          var s = signature.s;

          // 1.4.1 Enforce r and s are both integers in the interval [1, n − 1]
          if (r.signum() <= 0 || r.compareTo(n) >= 0) return false;
          if (s.signum() <= 0 || s.compareTo(n) >= 0) return false;

          // c = s^-1 mod n
          var c = s.modInverse(n);

          // 1.4.4 Compute u1 = es^−1 mod n
          //               u2 = rs^−1 mod n
          var u1 = e.multiply(c).mod(n);
          var u2 = r.multiply(c).mod(n);

          // 1.4.5 Compute R = (xR, yR) = u1G + u2Q
          var R = G.multiplyTwo(u1, Q, u2);

          // 1.4.5 (cont.) Enforce R is not at infinity
          if (curve.isInfinity(R)) return false;

          // 1.4.6 Convert the field element R.x to an integer
          var xR = R.affineX;

          // 1.4.7 Set v = xR mod n
          var v = xR.mod(n);

          // 1.4.8 If v = r, output "valid", and if v != r, output "invalid"
          return v.equals(r);
        }

        function verify(curve, hash, signature, Q) {
          // 1.4.2 H = Hash(M), already done by the user
          // 1.4.3 e = H
          var e = BigInteger.fromBuffer(hash);
          return verifyRaw(curve, e, signature, Q);
        }

        /**
          * Recover a public key from a signature.
          *
          * See SEC 1: Elliptic Curve Cryptography, section 4.1.6, "Public
          * Key Recovery Operation".
          *
          * http://www.secg.org/download/aid-780/sec1-v2.pdf
          */
        function recoverPubKey(curve, e, signature, i) {
          assert.strictEqual(i & 3, i, 'Recovery param is more than two bits');

          var n = curve.n;
          var G = curve.G;

          var r = signature.r;
          var s = signature.s;

          assert(r.signum() > 0 && r.compareTo(n) < 0, 'Invalid r value');
          assert(s.signum() > 0 && s.compareTo(n) < 0, 'Invalid s value');

          // A set LSB signifies that the y-coordinate is odd
          var isYOdd = i & 1;

          // The more significant bit specifies whether we should use the
          // first or second candidate key.
          var isSecondKey = i >> 1;

          // 1.1 Let x = r + jn
          var x = isSecondKey ? r.add(n) : r;
          var R = curve.pointFromX(isYOdd, x);

          // 1.4 Check that nR is at infinity
          var nR = R.multiply(n);
          assert(curve.isInfinity(nR), 'nR is not a valid curve point');

          // Compute -e from e
          var eNeg = e.negate().mod(n);

          // 1.6.1 Compute Q = r^-1 (sR -  eG)
          //               Q = r^-1 (sR + -eG)
          var rInv = r.modInverse(n);

          var Q = R.multiplyTwo(s, G, eNeg).multiply(rInv);
          curve.validate(Q);

          return Q;
        }

        /**
          * Calculate pubkey extraction parameter.
          *
          * When extracting a pubkey from a signature, we have to
          * distinguish four different cases. Rather than putting this
          * burden on the verifier, Bitcoin includes a 2-bit value with the
          * signature.
          *
          * This function simply tries all four cases and returns the value
          * that resulted in a successful pubkey recovery.
          */
        function calcPubKeyRecoveryParam(curve, e, signature, Q) {
          for (var i = 0; i < 4; i++) {
            var Qprime = recoverPubKey(curve, e, signature, i);

            // 1.6.2 Verify Q
            if (Qprime.equals(Q)) {
              return i;
            }
          }

          throw new Error('Unable to find valid recovery factor');
        }

        module.exports = {
          calcPubKeyRecoveryParam: calcPubKeyRecoveryParam,
          deterministicGenerateK: deterministicGenerateK,
          recoverPubKey: recoverPubKey,
          sign: sign,
          verify: verify,
          verifyRaw: verifyRaw
        };
      }).call(this, require("buffer").Buffer);
    }, { "./ecsignature": 86, "./enforce_types": 87, "./hash": 88, "assert": 2, "bigi": 7, "buffer": 27 }], 86: [function (require, module, exports) {
      (function (Buffer) {
        var assert = require('assert'); // from https://github.com/bitcoinjs/bitcoinjs-lib
        var enforceType = require('./enforce_types');

        var BigInteger = require('bigi');

        function ECSignature(r, s) {
          enforceType(BigInteger, r);
          enforceType(BigInteger, s);

          this.r = r;
          this.s = s;
        }

        // Import operations
        ECSignature.parseCompact = function (buffer) {
          assert.equal(buffer.length, 65, 'Invalid signature length');
          var i = buffer.readUInt8(0) - 27;

          // At most 3 bits
          assert.equal(i, i & 7, 'Invalid signature parameter');
          var compressed = !!(i & 4);

          // Recovery param only
          i = i & 3;

          var r = BigInteger.fromBuffer(buffer.slice(1, 33));
          var s = BigInteger.fromBuffer(buffer.slice(33));

          return {
            compressed: compressed,
            i: i,
            signature: new ECSignature(r, s)
          };
        };

        ECSignature.fromDER = function (buffer) {
          assert.equal(buffer.readUInt8(0), 0x30, 'Not a DER sequence');
          assert.equal(buffer.readUInt8(1), buffer.length - 2, 'Invalid sequence length');
          assert.equal(buffer.readUInt8(2), 0x02, 'Expected a DER integer');

          var rLen = buffer.readUInt8(3);
          assert(rLen > 0, 'R length is zero');

          var offset = 4 + rLen;
          assert.equal(buffer.readUInt8(offset), 0x02, 'Expected a DER integer (2)');

          var sLen = buffer.readUInt8(offset + 1);
          assert(sLen > 0, 'S length is zero');

          var rB = buffer.slice(4, offset);
          var sB = buffer.slice(offset + 2);
          offset += 2 + sLen;

          if (rLen > 1 && rB.readUInt8(0) === 0x00) {
            assert(rB.readUInt8(1) & 0x80, 'R value excessively padded');
          }

          if (sLen > 1 && sB.readUInt8(0) === 0x00) {
            assert(sB.readUInt8(1) & 0x80, 'S value excessively padded');
          }

          assert.equal(offset, buffer.length, 'Invalid DER encoding');
          var r = BigInteger.fromDERInteger(rB);
          var s = BigInteger.fromDERInteger(sB);

          assert(r.signum() >= 0, 'R value is negative');
          assert(s.signum() >= 0, 'S value is negative');

          return new ECSignature(r, s);
        };

        // FIXME: 0x00, 0x04, 0x80 are SIGHASH_* boundary constants, importing Transaction causes a circular dependency
        ECSignature.parseScriptSignature = function (buffer) {
          var hashType = buffer.readUInt8(buffer.length - 1);
          var hashTypeMod = hashType & ~0x80;

          assert(hashTypeMod > 0x00 && hashTypeMod < 0x04, 'Invalid hashType');

          return {
            signature: ECSignature.fromDER(buffer.slice(0, -1)),
            hashType: hashType
          };
        };

        // Export operations
        ECSignature.prototype.toCompact = function (i, compressed) {
          if (compressed) i += 4;
          i += 27;

          var buffer = new Buffer(65);
          buffer.writeUInt8(i, 0);

          this.r.toBuffer(32).copy(buffer, 1);
          this.s.toBuffer(32).copy(buffer, 33);

          return buffer;
        };

        ECSignature.prototype.toDER = function () {
          var rBa = this.r.toDERInteger();
          var sBa = this.s.toDERInteger();

          var sequence = [];

          // INTEGER
          sequence.push(0x02, rBa.length);
          sequence = sequence.concat(rBa);

          // INTEGER
          sequence.push(0x02, sBa.length);
          sequence = sequence.concat(sBa);

          // SEQUENCE
          sequence.unshift(0x30, sequence.length);

          return new Buffer(sequence);
        };

        ECSignature.prototype.toScriptSignature = function (hashType) {
          var hashTypeBuffer = new Buffer(1);
          hashTypeBuffer.writeUInt8(hashType, 0);

          return Buffer.concat([this.toDER(), hashTypeBuffer]);
        };

        module.exports = ECSignature;
      }).call(this, require("buffer").Buffer);
    }, { "./enforce_types": 87, "assert": 2, "bigi": 7, "buffer": 27 }], 87: [function (require, module, exports) {
      (function (Buffer) {
        module.exports = function enforce(type, value) {
          // Copied from https://github.com/bitcoinjs/bitcoinjs-lib
          switch (type) {
            case 'Array':
              {
                if (Array.isArray(value)) return;
                break;
              }

            case 'Boolean':
              {
                if (typeof value === 'boolean') return;
                break;
              }

            case 'Buffer':
              {
                if (Buffer.isBuffer(value)) return;
                break;
              }

            case 'Number':
              {
                if (typeof value === 'number') return;
                break;
              }

            case 'String':
              {
                if (typeof value === 'string') return;
                break;
              }

            default:
              {
                if (getName(value.constructor) === getName(type)) return;
              }
          }

          throw new TypeError('Expected ' + (getName(type) || type) + ', got ' + value);
        };

        function getName(fn) {
          // Why not fn.name: https://kangax.github.io/compat-table/es6/#function_name_property
          var match = fn.toString().match(/function (.*?)\(/);
          return match ? match[1] : null;
        }
      }).call(this, { "isBuffer": require("../node_modules/is-buffer/index.js") });
    }, { "../node_modules/is-buffer/index.js": 46 }], 88: [function (require, module, exports) {
      const createHash = require('create-hash');
      const createHmac = require('create-hmac');

      /** @arg {string|Buffer} data
          @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
          @return {string|Buffer} - Buffer when digest is null, or string
      */
      function sha1(data, encoding) {
        return createHash('sha1').update(data).digest(encoding);
      }

      /** @arg {string|Buffer} data
          @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
          @return {string|Buffer} - Buffer when digest is null, or string
      */
      function sha256(data, encoding) {
        return createHash('sha256').update(data).digest(encoding);
      }

      /** @arg {string|Buffer} data
          @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
          @return {string|Buffer} - Buffer when digest is null, or string
      */
      function sha512(data, encoding) {
        return createHash('sha512').update(data).digest(encoding);
      }

      function HmacSHA256(buffer, secret) {
        return createHmac('sha256', secret).update(buffer).digest();
      }

      function ripemd160(data) {
        return createHash('rmd160').update(data).digest();
      }

      // function hash160(buffer) {
      //   return ripemd160(sha256(buffer))
      // }
      //
      // function hash256(buffer) {
      //   return sha256(sha256(buffer))
      // }

      //
      // function HmacSHA512(buffer, secret) {
      //   return crypto.createHmac('sha512', secret).update(buffer).digest()
      // }

      module.exports = {
        sha1: sha1,
        sha256: sha256,
        sha512: sha512,
        HmacSHA256: HmacSHA256,
        ripemd160: ripemd160
        // hash160: hash160,
        // hash256: hash256,
        // HmacSHA512: HmacSHA512
      };
    }, { "create-hash": 31, "create-hmac": 34 }], 89: [function (require, module, exports) {
      (function (Buffer) {
        const ecurve = require('ecurve');
        const Point = ecurve.Point;
        const secp256k1 = ecurve.getCurveByName('secp256k1');
        const BigInteger = require('bigi');
        const base58 = require('bs58');
        const assert = require('assert');
        const hash = require('./hash');
        const PublicKey = require('./key_public');
        const keyUtils = require('./key_utils');

        const G = secp256k1.G;
        const n = secp256k1.n;

        class PrivateKey {

          /**
              @private see static functions
              @param {BigInteger}
          */
          constructor(d) {
            this.d = d;
          }

          static fromBuffer(buf) {
            if (!Buffer.isBuffer(buf)) {
              throw new Error("Expecting parameter to be a Buffer type");
            }
            if (32 !== buf.length) {
              console.log(`WARN: Expecting 32 bytes, instead got ${buf.length}, stack trace:`, new Error().stack);
            }
            if (buf.length === 0) {
              throw new Error("Empty buffer");
            }
            return new PrivateKey(BigInteger.fromBuffer(buf));
          }

          /** @arg {string} seed - any length string.  This is private, the same seed produces the same private key every time.  */
          static fromSeed(seed) {
            // generate_private_key
            if (!(typeof seed === 'string')) {
              throw new Error('seed must be of type string');
            }
            return PrivateKey.fromBuffer(hash.sha256(seed));
          }

          static isWif(text) {
            try {
              this.fromWif(text);
              return true;
            } catch (e) {
              return false;
            }
          }

          /**
              @throws {AssertError|Error} parsing key
              @return {string} Wallet Import Format (still a secret, Not encrypted)
          */
          static fromWif(_private_wif) {
            var private_wif = new Buffer(base58.decode(_private_wif));
            var version = private_wif.readUInt8(0);
            assert.equal(0x80, version, `Expected version ${0x80}, instead got ${version}`);
            // checksum includes the version
            var private_key = private_wif.slice(0, -4);
            var checksum = private_wif.slice(-4);
            var new_checksum = hash.sha256(private_key);
            new_checksum = hash.sha256(new_checksum);
            new_checksum = new_checksum.slice(0, 4);
            if (checksum.toString() !== new_checksum.toString()) throw new Error('Invalid WIF key (checksum miss-match)');

            private_key = private_key.slice(1);
            return PrivateKey.fromBuffer(private_key);
          }

          static randomKey() {
            return PrivateKey.fromBuffer(keyUtils.random32ByteBuffer());
          }

          toWif() {
            var private_key = this.toBuffer();
            // checksum includes the version
            private_key = Buffer.concat([new Buffer([0x80]), private_key]);
            var checksum = hash.sha256(private_key);
            checksum = hash.sha256(checksum);
            checksum = checksum.slice(0, 4);
            var private_wif = Buffer.concat([private_key, checksum]);
            return base58.encode(private_wif);
          }

          /** Alias for {@link toWif} */
          toString() {
            return this.toWif();
          }

          /**
              @return {Point}
          */
          toPublicKeyPoint() {
            var Q;
            return Q = secp256k1.G.multiply(this.d);
          }

          toPublic() {
            if (this.public_key) {
              return this.public_key;
            }
            return this.public_key = PublicKey.fromPoint(this.toPublicKeyPoint());
          }

          toBuffer() {
            return this.d.toBuffer(32);
          }

          /** ECIES */
          getSharedSecret(public_key) {
            public_key = toPublic(public_key);
            let KB = public_key.toUncompressed().toBuffer();
            let KBP = Point.fromAffine(secp256k1, BigInteger.fromBuffer(KB.slice(1, 33)), // x
            BigInteger.fromBuffer(KB.slice(33, 65)) // y
            );
            let r = this.toBuffer();
            let P = KBP.multiply(BigInteger.fromBuffer(r));
            let S = P.affineX.toBuffer({ size: 32 });
            // SHA512 used in ECIES
            return hash.sha512(S);
          }

          // /** ECIES (does not always match the Point.fromAffine version above) */
          // getSharedSecret(public_key){
          //     public_key = toPublic(public_key)
          //     var P = public_key.Q.multiply( this.d );
          //     var S = P.affineX.toBuffer({size: 32});
          //     // ECIES, adds an extra sha512
          //     return hash.sha512(S);
          // }

          /** @throws {Error} - overflow of the key could not be derived */
          child(offset) {
            offset = Buffer.concat([this.toPublicKey().toBuffer(), offset]);
            offset = hash.sha256(offset);
            let c = BigInteger.fromBuffer(offset);

            if (c.compareTo(n) >= 0) throw new Error("Child offset went out of bounds, try again");

            let derived = this.d.add(c); //.mod(n)

            if (derived.signum() === 0) throw new Error("Child offset derived to an invalid key, try again");

            return new PrivateKey(derived);
          }

          // toByteBuffer() {
          //     var b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
          //     this.appendByteBuffer(b);
          //     return b.copy(0, b.offset);
          // }

          static fromHex(hex) {
            return PrivateKey.fromBuffer(new Buffer(hex, 'hex'));
          }

          toHex() {
            return this.toBuffer().toString('hex');
          }

          toPublicKey() {
            return this.toPublic();
          }

          /* </helper_functions> */
        }

        module.exports = PrivateKey;

        const toPublic = data => data == null ? data : data.Q ? data : PublicKey.fromStringOrThrow(data);
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 88, "./key_public": 90, "./key_utils": 91, "assert": 2, "bigi": 7, "bs58": 25, "buffer": 27, "ecurve": 38 }], 90: [function (require, module, exports) {
      (function (Buffer) {
        const BigInteger = require('bigi');
        const ecurve = require('ecurve');
        const secp256k1 = ecurve.getCurveByName('secp256k1');
        const base58 = require('bs58');
        const hash = require('./hash');
        const config = require('./config');
        const assert = require('assert');

        var G = secp256k1.G;
        var n = secp256k1.n;

        class PublicKey {

          /** @param {ecurve.Point} public key */
          constructor(Q) {
            this.Q = Q;
          }

          static fromBinary(bin) {
            return PublicKey.fromBuffer(new Buffer(bin, 'binary'));
          }

          static fromBuffer(buffer) {
            return new PublicKey(ecurve.Point.decodeFrom(secp256k1, buffer));
          }

          toBuffer(compressed = this.Q.compressed) {
            return this.Q.getEncoded(compressed);
          }

          static fromPoint(point) {
            return new PublicKey(point);
          }

          toUncompressed() {
            var buf = this.Q.getEncoded(false);
            var point = ecurve.Point.decodeFrom(secp256k1, buf);
            return PublicKey.fromPoint(point);
          }

          /** bts::blockchain::address (unique but not a full public key) */
          toBlockchainAddress() {
            var pub_buf = this.toBuffer();
            var pub_sha = hash.sha512(pub_buf);
            return hash.ripemd160(pub_sha);
          }

          toString(address_prefix = config.address_prefix) {
            return this.toPublicKeyString(address_prefix);
          }

          /**
              Full public key
              {return} string
          */
          toPublicKeyString(address_prefix = config.address_prefix) {
            if (this.pubdata) return address_prefix + this.pubdata;
            const pub_buf = this.toBuffer();
            const checksum = hash.ripemd160(pub_buf);
            const addy = Buffer.concat([pub_buf, checksum.slice(0, 4)]);
            this.pubdata = base58.encode(addy);
            return address_prefix + this.pubdata;
          }

          /**
              @arg {string} public_key - like STMXyz...
              @arg {string} address_prefix - like STM
              @return PublicKey or `null` (if the public_key string is invalid)
              @deprecated fromPublicKeyString (use fromString instead)
          */
          static fromString(public_key, address_prefix = config.address_prefix) {
            try {
              return PublicKey.fromStringOrThrow(public_key, address_prefix);
            } catch (e) {
              return null;
            }
          }

          /**
              @arg {string} public_key - like STMXyz...
              @arg {string} address_prefix - like STM
              @throws {Error} if public key is invalid
              @return PublicKey
          */
          static fromStringOrThrow(public_key, address_prefix = config.address_prefix) {
            var prefix = public_key.slice(0, address_prefix.length);
            assert.equal(address_prefix, prefix, `Expecting key to begin with ${address_prefix}, instead got ${prefix}`);
            public_key = public_key.slice(address_prefix.length);

            public_key = new Buffer(base58.decode(public_key), 'binary');
            var checksum = public_key.slice(-4);
            public_key = public_key.slice(0, -4);
            var new_checksum = hash.ripemd160(public_key);
            new_checksum = new_checksum.slice(0, 4);
            assert.deepEqual(checksum, new_checksum, 'Checksum did not match');
            return PublicKey.fromBuffer(public_key);
          }

          toAddressString(address_prefix = config.address_prefix) {
            var pub_buf = this.toBuffer();
            var pub_sha = hash.sha512(pub_buf);
            var addy = hash.ripemd160(pub_sha);
            var checksum = hash.ripemd160(addy);
            addy = Buffer.concat([addy, checksum.slice(0, 4)]);
            return address_prefix + base58.encode(addy);
          }

          toPtsAddy() {
            var pub_buf = this.toBuffer();
            var pub_sha = hash.sha256(pub_buf);
            var addy = hash.ripemd160(pub_sha);
            addy = Buffer.concat([new Buffer([0x38]), addy]); //version 56(decimal)

            var checksum = hash.sha256(addy);
            checksum = hash.sha256(checksum);

            addy = Buffer.concat([addy, checksum.slice(0, 4)]);
            return base58.encode(addy);
          }

          child(offset) {

            assert(Buffer.isBuffer(offset), "Buffer required: offset");
            assert.equal(offset.length, 32, "offset length");

            offset = Buffer.concat([this.toBuffer(), offset]);
            offset = hash.sha256(offset);

            let c = BigInteger.fromBuffer(offset);

            if (c.compareTo(n) >= 0) throw new Error("Child offset went out of bounds, try again");

            let cG = G.multiply(c);
            let Qprime = this.Q.add(cG);

            if (secp256k1.isInfinity(Qprime)) throw new Error("Child offset derived to an invalid key, try again");

            return PublicKey.fromPoint(Qprime);
          }

          // toByteBuffer() {
          //     var b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
          //     this.appendByteBuffer(b);
          //     return b.copy(0, b.offset);
          // }

          static fromHex(hex) {
            return PublicKey.fromBuffer(new Buffer(hex, 'hex'));
          }

          toHex() {
            return this.toBuffer().toString('hex');
          }

          static fromStringHex(hex) {
            return PublicKey.fromString(new Buffer(hex, 'hex'));
          }

          /* </HEX> */
        }

        module.exports = PublicKey;
      }).call(this, require("buffer").Buffer);
    }, { "./config": 84, "./hash": 88, "assert": 2, "bigi": 7, "bs58": 25, "buffer": 27, "ecurve": 38 }], 91: [function (require, module, exports) {
      (function (Buffer) {

        const secureRandom = require('secure-random');
        const hash = require('./hash');

        module.exports = {
          random32ByteBuffer,
          addEntropy

          /**
              @return a random buffer obtained from the secure random number generator.  Additional entropy is used.
          
              Additional forms of entropy are used.  A week random number generator can run out of entropy.  This should ensure even the worst random number implementation will be reasonably safe.
          */
        };function random32ByteBuffer() {
          if (entropyCount > 0) {
            console.log(`Additional private key entropy: ${entropyCount} events`);
            entropyCount = 0;
          }
          const hash_array = [];
          hash_array.push(secureRandom.randomBuffer(32));
          hash_array.push(Buffer.from(cpuEntropy()));
          hash_array.push(externalEntropyArray);
          hash_array.push(browserEntropy());
          return hash.sha256(Buffer.concat(hash_array));
        }

        let entropyPos = 0,
            entropyCount = 0;
        const externalEntropyArray = secureRandom.randomBuffer(101);

        /**
            Add entropy via external events (like mouse events).  This may be called many times while the amount of data saved is limited.  Data is retained in RAM for the life of this module.
        
            @example React <code>
            componentDidMount() {
                this.refs.MyComponent.addEventListener("mousemove", this.onEntropyEvent, {capture: false, passive: true})
            }
            componentWillUnmount() {
                this.refs.MyComponent.removeEventListener("mousemove", this.onEntropyEvent);
            }
            onEntropyEvent = (e) => {
                if(e.type === 'mousemove')
                    key_utils.addEntropy(e.pageX, e.pageY, e.screenX, e.screenY)
                else
                    console.log('onEntropyEvent Unknown', e.type, e)
            }
            </code>
        */
        function addEntropy(...ints) {
          entropyCount++;
          for (const i of ints) {
            const pos = entropyPos++ % 101;
            const i2 = externalEntropyArray[pos] += i;
            if (i2 > 9007199254740991) externalEntropyArray[pos] = 0;
          }
        }

        /**
            This runs in just under 1 second and ensures a minimum of 512 bits of entropy are gathered.
        
            @return {array} counts gathered by measuring variations in the CPU speed during floating point operations.
        
            Based on more-entropy.
            @see https://github.com/keybase/more-entropy/blob/master/src/generator.iced
        */
        function cpuEntropy() {
          // The sample size probably should not be configurable, that could be an attack vector.
          const samples = 128;
          let collected = [];
          let lastCount = null;
          let lowEntropySamples = 0;
          while (collected.length < samples) {
            const count = floatingPointCount();
            if (lastCount != null) {
              const delta = count - lastCount;
              if (Math.abs(delta) < 1) {
                lowEntropySamples++;
                continue;
              }
              // how many bits of entropy were in this sample
              const bits = Math.floor(log2(Math.abs(delta)) + 1);
              if (bits < 4) {
                lowEntropySamples++;
                continue;
              }
              collected.push(delta);
            }
            lastCount = count;
          }
          if (lowEntropySamples > 10) {
            const pct = Number(lowEntropySamples / samples * 100).toFixed(2);
            console.error(`WARN: ${pct}% low CPU entropy re-sampled`);
          }
          return collected;
        }

        /**
            Count while performing floating point operations during a fixed time (7 ms for example).  Using a fixed time makes this algorithm predictable in runtime.
        */
        function floatingPointCount() {
          const workMinMs = 7;
          const d = Date.now();
          let i = 0,
              x = 0;
          while (Date.now() < d + workMinMs + 1) {
            x = Math.sin(Math.sqrt(Math.log(++i + x)));
          }
          return i;
        }

        const log2 = x => Math.log(x) / Math.LN2;

        /**
            Attempt to gather and hash information from the browser's window, history, and supported mime types.  For non-browser environments this simply includes secure random data.  In any event, the information is re-hashed in a loop for .25 seconds.
        
            @return {Buffer} 32 bytes
        */
        function browserEntropy() {
          let entropyStr = Array(secureRandom.randomBuffer(101)).join();
          try {
            entropyStr += new Date().toString() + " " + window.screen.height + " " + window.screen.width + " " + window.screen.colorDepth + " " + " " + window.screen.availHeight + " " + window.screen.availWidth + " " + window.screen.pixelDepth + navigator.language + " " + window.location + " " + window.history.length;

            for (let i = 0, mimeType; i < navigator.mimeTypes.length; i++) {
              mimeType = navigator.mimeTypes[i];
              entropyStr += mimeType.description + " " + mimeType.type + " " + mimeType.suffixes + " ";
            }
          } catch (error) {
            //nodejs:ReferenceError: window is not defined
            entropyStr += hash.sha256(new Date().toString());
          }

          const b = new Buffer(entropyStr);
          entropyStr += b.toString('binary') + " " + new Date().toString();

          let entropy = entropyStr;
          const start_t = Date.now();
          while (Date.now() - start_t < 250) entropy = hash.sha256(entropy);

          return entropy;
        }
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 88, "buffer": 27, "secure-random": 68 }], 92: [function (require, module, exports) {
      (function (Buffer) {
        var ecdsa = require('./ecdsa');
        var hash = require('./hash');
        var curve = require('ecurve').getCurveByName('secp256k1');
        var assert = require('assert');
        var BigInteger = require('bigi');
        var PublicKey = require('./key_public');
        var PrivateKey = require('./key_private');

        class Signature {

          constructor(r1, s1, i1) {
            this.r = r1;
            this.s = s1;
            this.i = i1;
            assert.equal(this.r != null, true, 'Missing parameter');
            assert.equal(this.s != null, true, 'Missing parameter');
            assert.equal(this.i != null, true, 'Missing parameter');
          }

          static fromBuffer(buf) {
            var i, r, s;
            assert.equal(buf.length, 65, 'Invalid signature length');
            i = buf.readUInt8(0);
            assert.equal(i - 27, i - 27 & 7, 'Invalid signature parameter');
            r = BigInteger.fromBuffer(buf.slice(1, 33));
            s = BigInteger.fromBuffer(buf.slice(33));
            return new Signature(r, s, i);
          }

          toBuffer() {
            var buf;
            buf = new Buffer(65);
            buf.writeUInt8(this.i, 0);
            this.r.toBuffer(32).copy(buf, 1);
            this.s.toBuffer(32).copy(buf, 33);
            return buf;
          }

          recoverPublicKeyFromBuffer(buffer) {
            return this.recoverPublicKey(hash.sha256(buffer));
          }

          /**
              @return {PublicKey}
          */
          recoverPublicKey(sha256_buffer) {
            let Q, e, i;
            e = BigInteger.fromBuffer(sha256_buffer);
            i = this.i;
            i -= 27;
            i = i & 3;
            Q = ecdsa.recoverPubKey(curve, e, this, i);
            return PublicKey.fromPoint(Q);
          }

          /**
              @param {Buffer} buf
              @param {PrivateKey} private_key
              @return {Signature}
          */
          static signBuffer(buf, private_key) {
            var _hash = hash.sha256(buf);
            return Signature.signBufferSha256(_hash, private_key);
          }

          /** Sign a buffer of exactally 32 bytes in size (sha256(text))
              @param {Buffer} buf - 32 bytes binary
              @param {PrivateKey} private_key
              @return {Signature}
          */
          static signBufferSha256(buf_sha256, private_key) {
            if (buf_sha256.length !== 32 || !Buffer.isBuffer(buf_sha256)) throw new Error("buf_sha256: 32 byte buffer requred");
            private_key = toPrivateObj(private_key);
            assert(private_key, 'private_key required');

            var der, e, ecsignature, i, lenR, lenS, nonce;
            i = null;
            nonce = 0;
            e = BigInteger.fromBuffer(buf_sha256);
            while (true) {
              ecsignature = ecdsa.sign(curve, buf_sha256, private_key.d, nonce++);
              der = ecsignature.toDER();
              lenR = der[3];
              lenS = der[5 + lenR];
              if (lenR === 32 && lenS === 32) {
                i = ecdsa.calcPubKeyRecoveryParam(curve, e, ecsignature, private_key.toPublicKey().Q);
                i += 4; // compressed
                i += 27; // compact  //  24 or 27 :( forcing odd-y 2nd key candidate)
                break;
              }
              if (nonce % 10 === 0) {
                console.log("WARN: " + nonce + " attempts to find canonical signature");
              }
            }
            return new Signature(ecsignature.r, ecsignature.s, i);
          }

          static sign(string, private_key) {
            return Signature.signBuffer(new Buffer(string), private_key);
          }

          /**
              @param {Buffer} un-hashed
              @param {./PublicKey}
              @return {boolean}
          */
          verifyBuffer(buf, public_key) {
            var _hash = hash.sha256(buf);
            return this.verifyHash(_hash, public_key);
          }

          verifyHash(hash, public_key) {
            assert.equal(hash.length, 32, "A SHA 256 should be 32 bytes long, instead got " + hash.length);
            return ecdsa.verify(curve, hash, {
              r: this.r,
              s: this.s
            }, public_key.Q);
          }

          // toByteBuffer() {
          //     var b;
          //     b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
          //     this.appendByteBuffer(b);
          //     return b.copy(0, b.offset);
          // };

          static fromHex(hex) {
            return Signature.fromBuffer(new Buffer(hex, "hex"));
          }

          toHex() {
            return this.toBuffer().toString("hex");
          }

          static signHex(hex, private_key) {
            var buf;
            buf = new Buffer(hex, 'hex');
            return Signature.signBuffer(buf, private_key);
          }

          verifyHex(hex, public_key) {
            var buf;
            buf = new Buffer(hex, 'hex');
            return this.verifyBuffer(buf, public_key);
          }
        }
        const toPrivateObj = o => o ? o.d ? o : PrivateKey.fromWif(o) : o /*null or undefined*/;
        module.exports = Signature;
      }).call(this, require("buffer").Buffer);
    }, { "./ecdsa": 85, "./hash": 88, "./key_private": 89, "./key_public": 90, "assert": 2, "bigi": 7, "buffer": 27, "ecurve": 38 }] }, {}, [1])(1);
});
// Hack to get at Register and Transfer logs
const LogWatcher = (block_first = 'latest', block_last = 'latest', contract_events_log = () => {}, query = {}, settle = () => {}, callback = () => {}, onSuccess = () => {}, onError = () => {}, timeout = 5000, blocks_per_call = 10000) => {

  let start;
  let end;

  let watchers = [];

  if (typeof onError === "array") [onResultError, onWatcherError] = onError;

  let poll = () => {

    let watcher = contract_events_log(query, { fromBlock: start, toBlock: end }, function (error, result) {
      //Using a fork to eat tomatoe bisque in a survival situation. 
      if (!error) callback(result);else log("error" < 'Error: LogWatcher Result'), settle(onError(), null);
    });

    let _timeout = setTimeout(() => {

      let error;

      try {
        watcher.stopWatching();
        watcher = undefined;
        start = end;
        end += blocks_per_call;
      } catch (e) {
        error = true, log("error", `Watcher Error, Retrying in 5 seconds (Block ${start} -> ${end})`);
      } finally {
        if (start <= block_last || error) setTimeout(() => {
          !error ? poll() : error_correction();
        }, 1000);else setTimeout(() => settle(null, onSuccess()), 2000);
      }
    }, timeout);
  };

  let error_correction = () => {
    // adjust()
    setTimeout(poll, 5000);
  };

  let reset = () => {
    start = block_first;
    end = block_first + blocks_per_call;
  };

  reset();
  poll();
};
!function (e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var n;n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.StackTrace = e();
  }
}(function () {
  var e;return function n(e, r, t) {
    function o(a, s) {
      if (!r[a]) {
        if (!e[a]) {
          var u = "function" == typeof require && require;if (!s && u) return u(a, !0);if (i) return i(a, !0);var c = new Error("Cannot find module '" + a + "'");throw c.code = "MODULE_NOT_FOUND", c;
        }var l = r[a] = { exports: {} };e[a][0].call(l.exports, function (n) {
          var r = e[a][1][n];return o(r ? r : n);
        }, l, l.exports, n, e, r, t);
      }return r[a].exports;
    }for (var i = "function" == typeof require && require, a = 0; a < t.length; a++) o(t[a]);return o;
  }({ 1: [function (n, r, t) {
      !function (o, i) {
        "use strict";
        "function" == typeof e && e.amd ? e("error-stack-parser", ["stackframe"], i) : "object" == typeof t ? r.exports = i(n("stackframe")) : o.ErrorStackParser = i(o.StackFrame);
      }(this, function (e) {
        "use strict";
        var n = /(^|@)\S+\:\d+/,
            r = /^\s*at .*(\S+\:\d+|\(native\))/m,
            t = /^(eval@)?(\[native code\])?$/;return { parse: function (e) {
            if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"]) return this.parseOpera(e);if (e.stack && e.stack.match(r)) return this.parseV8OrIE(e);if (e.stack) return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object");
          }, extractLocation: function (e) {
            if (e.indexOf(":") === -1) return [e];var n = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/,
                r = n.exec(e.replace(/[\(\)]/g, ""));return [r[1], r[2] || void 0, r[3] || void 0];
          }, parseV8OrIE: function (n) {
            var t = n.stack.split("\n").filter(function (e) {
              return !!e.match(r);
            }, this);return t.map(function (n) {
              n.indexOf("(eval ") > -1 && (n = n.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));var r = n.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1),
                  t = this.extractLocation(r.pop()),
                  o = r.join(" ") || void 0,
                  i = ["eval", "<anonymous>"].indexOf(t[0]) > -1 ? void 0 : t[0];return new e({ functionName: o, fileName: i, lineNumber: t[1], columnNumber: t[2], source: n });
            }, this);
          }, parseFFOrSafari: function (n) {
            var r = n.stack.split("\n").filter(function (e) {
              return !e.match(t);
            }, this);return r.map(function (n) {
              if (n.indexOf(" > eval") > -1 && (n = n.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), n.indexOf("@") === -1 && n.indexOf(":") === -1) return new e({ functionName: n });var r = n.split("@"),
                  t = this.extractLocation(r.pop()),
                  o = r.join("@") || void 0;return new e({ functionName: o, fileName: t[0], lineNumber: t[1], columnNumber: t[2], source: n });
            }, this);
          }, parseOpera: function (e) {
            return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
          }, parseOpera9: function (n) {
            for (var r = /Line (\d+).*script (?:in )?(\S+)/i, t = n.message.split("\n"), o = [], i = 2, a = t.length; i < a; i += 2) {
              var s = r.exec(t[i]);s && o.push(new e({ fileName: s[2], lineNumber: s[1], source: t[i] }));
            }return o;
          }, parseOpera10: function (n) {
            for (var r = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, t = n.stacktrace.split("\n"), o = [], i = 0, a = t.length; i < a; i += 2) {
              var s = r.exec(t[i]);s && o.push(new e({ functionName: s[3] || void 0, fileName: s[2], lineNumber: s[1], source: t[i] }));
            }return o;
          }, parseOpera11: function (r) {
            var t = r.stack.split("\n").filter(function (e) {
              return !!e.match(n) && !e.match(/^Error created at/);
            }, this);return t.map(function (n) {
              var r,
                  t = n.split("@"),
                  o = this.extractLocation(t.pop()),
                  i = t.shift() || "",
                  a = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;i.match(/\(([^\)]*)\)/) && (r = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));var s = void 0 === r || "[arguments not available]" === r ? void 0 : r.split(",");return new e({ functionName: a, args: s, fileName: o[0], lineNumber: o[1], columnNumber: o[2], source: n });
            }, this);
          } };
      });
    }, { stackframe: 10 }], 2: [function (e, n, r) {
      function t() {
        this._array = [], this._set = Object.create(null);
      }var o = e("./util"),
          i = Object.prototype.hasOwnProperty;t.fromArray = function (e, n) {
        for (var r = new t(), o = 0, i = e.length; o < i; o++) r.add(e[o], n);return r;
      }, t.prototype.size = function () {
        return Object.getOwnPropertyNames(this._set).length;
      }, t.prototype.add = function (e, n) {
        var r = o.toSetString(e),
            t = i.call(this._set, r),
            a = this._array.length;t && !n || this._array.push(e), t || (this._set[r] = a);
      }, t.prototype.has = function (e) {
        var n = o.toSetString(e);return i.call(this._set, n);
      }, t.prototype.indexOf = function (e) {
        var n = o.toSetString(e);if (i.call(this._set, n)) return this._set[n];throw new Error('"' + e + '" is not in the set.');
      }, t.prototype.at = function (e) {
        if (e >= 0 && e < this._array.length) return this._array[e];throw new Error("No element indexed by " + e);
      }, t.prototype.toArray = function () {
        return this._array.slice();
      }, r.ArraySet = t;
    }, { "./util": 8 }], 3: [function (e, n, r) {
      function t(e) {
        return e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
      }function o(e) {
        var n = 1 === (1 & e),
            r = e >> 1;return n ? -r : r;
      }var i = e("./base64"),
          a = 5,
          s = 1 << a,
          u = s - 1,
          c = s;r.encode = function (e) {
        var n,
            r = "",
            o = t(e);do n = o & u, o >>>= a, o > 0 && (n |= c), r += i.encode(n); while (o > 0);return r;
      }, r.decode = function (e, n, r) {
        var t,
            s,
            l = e.length,
            f = 0,
            p = 0;do {
          if (n >= l) throw new Error("Expected more digits in base 64 VLQ value.");if (s = i.decode(e.charCodeAt(n++)), s === -1) throw new Error("Invalid base64 digit: " + e.charAt(n - 1));t = !!(s & c), s &= u, f += s << p, p += a;
        } while (t);r.value = o(f), r.rest = n;
      };
    }, { "./base64": 4 }], 4: [function (e, n, r) {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");r.encode = function (e) {
        if (0 <= e && e < t.length) return t[e];throw new TypeError("Must be between 0 and 63: " + e);
      }, r.decode = function (e) {
        var n = 65,
            r = 90,
            t = 97,
            o = 122,
            i = 48,
            a = 57,
            s = 43,
            u = 47,
            c = 26,
            l = 52;return n <= e && e <= r ? e - n : t <= e && e <= o ? e - t + c : i <= e && e <= a ? e - i + l : e == s ? 62 : e == u ? 63 : -1;
      };
    }, {}], 5: [function (e, n, r) {
      function t(e, n, o, i, a, s) {
        var u = Math.floor((n - e) / 2) + e,
            c = a(o, i[u], !0);return 0 === c ? u : c > 0 ? n - u > 1 ? t(u, n, o, i, a, s) : s == r.LEAST_UPPER_BOUND ? n < i.length ? n : -1 : u : u - e > 1 ? t(e, u, o, i, a, s) : s == r.LEAST_UPPER_BOUND ? u : e < 0 ? -1 : e;
      }r.GREATEST_LOWER_BOUND = 1, r.LEAST_UPPER_BOUND = 2, r.search = function (e, n, o, i) {
        if (0 === n.length) return -1;var a = t(-1, n.length, e, n, o, i || r.GREATEST_LOWER_BOUND);if (a < 0) return -1;for (; a - 1 >= 0 && 0 === o(n[a], n[a - 1], !0);) --a;return a;
      };
    }, {}], 6: [function (e, n, r) {
      function t(e, n, r) {
        var t = e[n];e[n] = e[r], e[r] = t;
      }function o(e, n) {
        return Math.round(e + Math.random() * (n - e));
      }function i(e, n, r, a) {
        if (r < a) {
          var s = o(r, a),
              u = r - 1;t(e, s, a);for (var c = e[a], l = r; l < a; l++) n(e[l], c) <= 0 && (u += 1, t(e, u, l));t(e, u + 1, l);var f = u + 1;i(e, n, r, f - 1), i(e, n, f + 1, a);
        }
      }r.quickSort = function (e, n) {
        i(e, n, 0, e.length - 1);
      };
    }, {}], 7: [function (e, n, r) {
      function t(e) {
        var n = e;return "string" == typeof e && (n = JSON.parse(e.replace(/^\)\]\}'/, ""))), null != n.sections ? new a(n) : new o(n);
      }function o(e) {
        var n = e;"string" == typeof e && (n = JSON.parse(e.replace(/^\)\]\}'/, "")));var r = s.getArg(n, "version"),
            t = s.getArg(n, "sources"),
            o = s.getArg(n, "names", []),
            i = s.getArg(n, "sourceRoot", null),
            a = s.getArg(n, "sourcesContent", null),
            u = s.getArg(n, "mappings"),
            l = s.getArg(n, "file", null);if (r != this._version) throw new Error("Unsupported version: " + r);t = t.map(String).map(s.normalize).map(function (e) {
          return i && s.isAbsolute(i) && s.isAbsolute(e) ? s.relative(i, e) : e;
        }), this._names = c.fromArray(o.map(String), !0), this._sources = c.fromArray(t, !0), this.sourceRoot = i, this.sourcesContent = a, this._mappings = u, this.file = l;
      }function i() {
        this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
      }function a(e) {
        var n = e;"string" == typeof e && (n = JSON.parse(e.replace(/^\)\]\}'/, "")));var r = s.getArg(n, "version"),
            o = s.getArg(n, "sections");if (r != this._version) throw new Error("Unsupported version: " + r);this._sources = new c(), this._names = new c();var i = { line: -1, column: 0 };this._sections = o.map(function (e) {
          if (e.url) throw new Error("Support for url field in sections not implemented.");var n = s.getArg(e, "offset"),
              r = s.getArg(n, "line"),
              o = s.getArg(n, "column");if (r < i.line || r === i.line && o < i.column) throw new Error("Section offsets must be ordered and non-overlapping.");return i = n, { generatedOffset: { generatedLine: r + 1, generatedColumn: o + 1 }, consumer: new t(s.getArg(e, "map")) };
        });
      }var s = e("./util"),
          u = e("./binary-search"),
          c = e("./array-set").ArraySet,
          l = e("./base64-vlq"),
          f = e("./quick-sort").quickSort;t.fromSourceMap = function (e) {
        return o.fromSourceMap(e);
      }, t.prototype._version = 3, t.prototype.__generatedMappings = null, Object.defineProperty(t.prototype, "_generatedMappings", { get: function () {
          return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
        } }), t.prototype.__originalMappings = null, Object.defineProperty(t.prototype, "_originalMappings", { get: function () {
          return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
        } }), t.prototype._charIsMappingSeparator = function (e, n) {
        var r = e.charAt(n);return ";" === r || "," === r;
      }, t.prototype._parseMappings = function (e, n) {
        throw new Error("Subclasses must implement _parseMappings");
      }, t.GENERATED_ORDER = 1, t.ORIGINAL_ORDER = 2, t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.prototype.eachMapping = function (e, n, r) {
        var o,
            i = n || null,
            a = r || t.GENERATED_ORDER;switch (a) {case t.GENERATED_ORDER:
            o = this._generatedMappings;break;case t.ORIGINAL_ORDER:
            o = this._originalMappings;break;default:
            throw new Error("Unknown order of iteration.");}var u = this.sourceRoot;o.map(function (e) {
          var n = null === e.source ? null : this._sources.at(e.source);return null != n && null != u && (n = s.join(u, n)), { source: n, generatedLine: e.generatedLine, generatedColumn: e.generatedColumn, originalLine: e.originalLine, originalColumn: e.originalColumn, name: null === e.name ? null : this._names.at(e.name) };
        }, this).forEach(e, i);
      }, t.prototype.allGeneratedPositionsFor = function (e) {
        var n = s.getArg(e, "line"),
            r = { source: s.getArg(e, "source"), originalLine: n, originalColumn: s.getArg(e, "column", 0) };if (null != this.sourceRoot && (r.source = s.relative(this.sourceRoot, r.source)), !this._sources.has(r.source)) return [];r.source = this._sources.indexOf(r.source);var t = [],
            o = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", s.compareByOriginalPositions, u.LEAST_UPPER_BOUND);if (o >= 0) {
          var i = this._originalMappings[o];if (void 0 === e.column) for (var a = i.originalLine; i && i.originalLine === a;) t.push({ line: s.getArg(i, "generatedLine", null), column: s.getArg(i, "generatedColumn", null), lastColumn: s.getArg(i, "lastGeneratedColumn", null) }), i = this._originalMappings[++o];else for (var c = i.originalColumn; i && i.originalLine === n && i.originalColumn == c;) t.push({ line: s.getArg(i, "generatedLine", null), column: s.getArg(i, "generatedColumn", null), lastColumn: s.getArg(i, "lastGeneratedColumn", null) }), i = this._originalMappings[++o];
        }return t;
      }, r.SourceMapConsumer = t, o.prototype = Object.create(t.prototype), o.prototype.consumer = t, o.fromSourceMap = function (e) {
        var n = Object.create(o.prototype),
            r = n._names = c.fromArray(e._names.toArray(), !0),
            t = n._sources = c.fromArray(e._sources.toArray(), !0);n.sourceRoot = e._sourceRoot, n.sourcesContent = e._generateSourcesContent(n._sources.toArray(), n.sourceRoot), n.file = e._file;for (var a = e._mappings.toArray().slice(), u = n.__generatedMappings = [], l = n.__originalMappings = [], p = 0, g = a.length; p < g; p++) {
          var h = a[p],
              m = new i();m.generatedLine = h.generatedLine, m.generatedColumn = h.generatedColumn, h.source && (m.source = t.indexOf(h.source), m.originalLine = h.originalLine, m.originalColumn = h.originalColumn, h.name && (m.name = r.indexOf(h.name)), l.push(m)), u.push(m);
        }return f(n.__originalMappings, s.compareByOriginalPositions), n;
      }, o.prototype._version = 3, Object.defineProperty(o.prototype, "sources", { get: function () {
          return this._sources.toArray().map(function (e) {
            return null != this.sourceRoot ? s.join(this.sourceRoot, e) : e;
          }, this);
        } }), o.prototype._parseMappings = function (e, n) {
        for (var r, t, o, a, u, c = 1, p = 0, g = 0, h = 0, m = 0, d = 0, v = e.length, _ = 0, y = {}, w = {}, b = [], C = []; _ < v;) if (";" === e.charAt(_)) c++, _++, p = 0;else if ("," === e.charAt(_)) _++;else {
          for (r = new i(), r.generatedLine = c, a = _; a < v && !this._charIsMappingSeparator(e, a); a++);if (t = e.slice(_, a), o = y[t]) _ += t.length;else {
            for (o = []; _ < a;) l.decode(e, _, w), u = w.value, _ = w.rest, o.push(u);if (2 === o.length) throw new Error("Found a source, but no line and column");if (3 === o.length) throw new Error("Found a source and line, but no column");y[t] = o;
          }r.generatedColumn = p + o[0], p = r.generatedColumn, o.length > 1 && (r.source = m + o[1], m += o[1], r.originalLine = g + o[2], g = r.originalLine, r.originalLine += 1, r.originalColumn = h + o[3], h = r.originalColumn, o.length > 4 && (r.name = d + o[4], d += o[4])), C.push(r), "number" == typeof r.originalLine && b.push(r);
        }f(C, s.compareByGeneratedPositionsDeflated), this.__generatedMappings = C, f(b, s.compareByOriginalPositions), this.__originalMappings = b;
      }, o.prototype._findMapping = function (e, n, r, t, o, i) {
        if (e[r] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);if (e[t] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[t]);return u.search(e, n, o, i);
      }, o.prototype.computeColumnSpans = function () {
        for (var e = 0; e < this._generatedMappings.length; ++e) {
          var n = this._generatedMappings[e];if (e + 1 < this._generatedMappings.length) {
            var r = this._generatedMappings[e + 1];if (n.generatedLine === r.generatedLine) {
              n.lastGeneratedColumn = r.generatedColumn - 1;continue;
            }
          }n.lastGeneratedColumn = 1 / 0;
        }
      }, o.prototype.originalPositionFor = function (e) {
        var n = { generatedLine: s.getArg(e, "line"), generatedColumn: s.getArg(e, "column") },
            r = this._findMapping(n, this._generatedMappings, "generatedLine", "generatedColumn", s.compareByGeneratedPositionsDeflated, s.getArg(e, "bias", t.GREATEST_LOWER_BOUND));if (r >= 0) {
          var o = this._generatedMappings[r];if (o.generatedLine === n.generatedLine) {
            var i = s.getArg(o, "source", null);null !== i && (i = this._sources.at(i), null != this.sourceRoot && (i = s.join(this.sourceRoot, i)));var a = s.getArg(o, "name", null);return null !== a && (a = this._names.at(a)), { source: i, line: s.getArg(o, "originalLine", null), column: s.getArg(o, "originalColumn", null), name: a };
          }
        }return { source: null, line: null, column: null, name: null };
      }, o.prototype.hasContentsOfAllSources = function () {
        return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (e) {
          return null == e;
        });
      }, o.prototype.sourceContentFor = function (e, n) {
        if (!this.sourcesContent) return null;if (null != this.sourceRoot && (e = s.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];var r;if (null != this.sourceRoot && (r = s.urlParse(this.sourceRoot))) {
          var t = e.replace(/^file:\/\//, "");if ("file" == r.scheme && this._sources.has(t)) return this.sourcesContent[this._sources.indexOf(t)];if ((!r.path || "/" == r.path) && this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)];
        }if (n) return null;throw new Error('"' + e + '" is not in the SourceMap.');
      }, o.prototype.generatedPositionFor = function (e) {
        var n = s.getArg(e, "source");if (null != this.sourceRoot && (n = s.relative(this.sourceRoot, n)), !this._sources.has(n)) return { line: null, column: null, lastColumn: null };n = this._sources.indexOf(n);var r = { source: n, originalLine: s.getArg(e, "line"), originalColumn: s.getArg(e, "column") },
            o = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", s.compareByOriginalPositions, s.getArg(e, "bias", t.GREATEST_LOWER_BOUND));if (o >= 0) {
          var i = this._originalMappings[o];if (i.source === r.source) return { line: s.getArg(i, "generatedLine", null), column: s.getArg(i, "generatedColumn", null), lastColumn: s.getArg(i, "lastGeneratedColumn", null) };
        }return { line: null, column: null, lastColumn: null };
      }, r.BasicSourceMapConsumer = o, a.prototype = Object.create(t.prototype), a.prototype.constructor = t, a.prototype._version = 3, Object.defineProperty(a.prototype, "sources", { get: function () {
          for (var e = [], n = 0; n < this._sections.length; n++) for (var r = 0; r < this._sections[n].consumer.sources.length; r++) e.push(this._sections[n].consumer.sources[r]);return e;
        } }), a.prototype.originalPositionFor = function (e) {
        var n = { generatedLine: s.getArg(e, "line"), generatedColumn: s.getArg(e, "column") },
            r = u.search(n, this._sections, function (e, n) {
          var r = e.generatedLine - n.generatedOffset.generatedLine;return r ? r : e.generatedColumn - n.generatedOffset.generatedColumn;
        }),
            t = this._sections[r];return t ? t.consumer.originalPositionFor({ line: n.generatedLine - (t.generatedOffset.generatedLine - 1), column: n.generatedColumn - (t.generatedOffset.generatedLine === n.generatedLine ? t.generatedOffset.generatedColumn - 1 : 0), bias: e.bias }) : { source: null, line: null, column: null, name: null };
      }, a.prototype.hasContentsOfAllSources = function () {
        return this._sections.every(function (e) {
          return e.consumer.hasContentsOfAllSources();
        });
      }, a.prototype.sourceContentFor = function (e, n) {
        for (var r = 0; r < this._sections.length; r++) {
          var t = this._sections[r],
              o = t.consumer.sourceContentFor(e, !0);if (o) return o;
        }if (n) return null;throw new Error('"' + e + '" is not in the SourceMap.');
      }, a.prototype.generatedPositionFor = function (e) {
        for (var n = 0; n < this._sections.length; n++) {
          var r = this._sections[n];if (r.consumer.sources.indexOf(s.getArg(e, "source")) !== -1) {
            var t = r.consumer.generatedPositionFor(e);if (t) {
              var o = { line: t.line + (r.generatedOffset.generatedLine - 1), column: t.column + (r.generatedOffset.generatedLine === t.line ? r.generatedOffset.generatedColumn - 1 : 0) };return o;
            }
          }
        }return { line: null, column: null };
      }, a.prototype._parseMappings = function (e, n) {
        this.__generatedMappings = [], this.__originalMappings = [];for (var r = 0; r < this._sections.length; r++) for (var t = this._sections[r], o = t.consumer._generatedMappings, i = 0; i < o.length; i++) {
          var a = o[i],
              u = t.consumer._sources.at(a.source);null !== t.consumer.sourceRoot && (u = s.join(t.consumer.sourceRoot, u)), this._sources.add(u), u = this._sources.indexOf(u);var c = t.consumer._names.at(a.name);this._names.add(c), c = this._names.indexOf(c);var l = { source: u, generatedLine: a.generatedLine + (t.generatedOffset.generatedLine - 1), generatedColumn: a.generatedColumn + (t.generatedOffset.generatedLine === a.generatedLine ? t.generatedOffset.generatedColumn - 1 : 0), originalLine: a.originalLine, originalColumn: a.originalColumn, name: c };this.__generatedMappings.push(l), "number" == typeof l.originalLine && this.__originalMappings.push(l);
        }f(this.__generatedMappings, s.compareByGeneratedPositionsDeflated), f(this.__originalMappings, s.compareByOriginalPositions);
      }, r.IndexedSourceMapConsumer = a;
    }, { "./array-set": 2, "./base64-vlq": 3, "./binary-search": 5, "./quick-sort": 6, "./util": 8 }], 8: [function (e, n, r) {
      function t(e, n, r) {
        if (n in e) return e[n];if (3 === arguments.length) return r;throw new Error('"' + n + '" is a required argument.');
      }function o(e) {
        var n = e.match(v);return n ? { scheme: n[1], auth: n[2], host: n[3], port: n[4], path: n[5] } : null;
      }function i(e) {
        var n = "";return e.scheme && (n += e.scheme + ":"), n += "//", e.auth && (n += e.auth + "@"), e.host && (n += e.host), e.port && (n += ":" + e.port), e.path && (n += e.path), n;
      }function a(e) {
        var n = e,
            t = o(e);if (t) {
          if (!t.path) return e;n = t.path;
        }for (var a, s = r.isAbsolute(n), u = n.split(/\/+/), c = 0, l = u.length - 1; l >= 0; l--) a = u[l], "." === a ? u.splice(l, 1) : ".." === a ? c++ : c > 0 && ("" === a ? (u.splice(l + 1, c), c = 0) : (u.splice(l, 2), c--));return n = u.join("/"), "" === n && (n = s ? "/" : "."), t ? (t.path = n, i(t)) : n;
      }function s(e, n) {
        "" === e && (e = "."), "" === n && (n = ".");var r = o(n),
            t = o(e);if (t && (e = t.path || "/"), r && !r.scheme) return t && (r.scheme = t.scheme), i(r);if (r || n.match(_)) return n;if (t && !t.host && !t.path) return t.host = n, i(t);var s = "/" === n.charAt(0) ? n : a(e.replace(/\/+$/, "") + "/" + n);return t ? (t.path = s, i(t)) : s;
      }function u(e, n) {
        "" === e && (e = "."), e = e.replace(/\/$/, "");for (var r = 0; 0 !== n.indexOf(e + "/");) {
          var t = e.lastIndexOf("/");if (t < 0) return n;if (e = e.slice(0, t), e.match(/^([^\/]+:\/)?\/*$/)) return n;++r;
        }return Array(r + 1).join("../") + n.substr(e.length + 1);
      }function c(e) {
        return e;
      }function l(e) {
        return p(e) ? "$" + e : e;
      }function f(e) {
        return p(e) ? e.slice(1) : e;
      }function p(e) {
        if (!e) return !1;var n = e.length;if (n < 9) return !1;if (95 !== e.charCodeAt(n - 1) || 95 !== e.charCodeAt(n - 2) || 111 !== e.charCodeAt(n - 3) || 116 !== e.charCodeAt(n - 4) || 111 !== e.charCodeAt(n - 5) || 114 !== e.charCodeAt(n - 6) || 112 !== e.charCodeAt(n - 7) || 95 !== e.charCodeAt(n - 8) || 95 !== e.charCodeAt(n - 9)) return !1;for (var r = n - 10; r >= 0; r--) if (36 !== e.charCodeAt(r)) return !1;return !0;
      }function g(e, n, r) {
        var t = e.source - n.source;return 0 !== t ? t : (t = e.originalLine - n.originalLine, 0 !== t ? t : (t = e.originalColumn - n.originalColumn, 0 !== t || r ? t : (t = e.generatedColumn - n.generatedColumn, 0 !== t ? t : (t = e.generatedLine - n.generatedLine, 0 !== t ? t : e.name - n.name))));
      }function h(e, n, r) {
        var t = e.generatedLine - n.generatedLine;return 0 !== t ? t : (t = e.generatedColumn - n.generatedColumn, 0 !== t || r ? t : (t = e.source - n.source, 0 !== t ? t : (t = e.originalLine - n.originalLine, 0 !== t ? t : (t = e.originalColumn - n.originalColumn, 0 !== t ? t : e.name - n.name))));
      }function m(e, n) {
        return e === n ? 0 : e > n ? 1 : -1;
      }function d(e, n) {
        var r = e.generatedLine - n.generatedLine;return 0 !== r ? r : (r = e.generatedColumn - n.generatedColumn, 0 !== r ? r : (r = m(e.source, n.source), 0 !== r ? r : (r = e.originalLine - n.originalLine, 0 !== r ? r : (r = e.originalColumn - n.originalColumn, 0 !== r ? r : m(e.name, n.name)))));
      }r.getArg = t;var v = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
          _ = /^data:.+\,.+$/;r.urlParse = o, r.urlGenerate = i, r.normalize = a, r.join = s, r.isAbsolute = function (e) {
        return "/" === e.charAt(0) || !!e.match(v);
      }, r.relative = u;var y = function () {
        var e = Object.create(null);return !("__proto__" in e);
      }();r.toSetString = y ? c : l, r.fromSetString = y ? c : f, r.compareByOriginalPositions = g, r.compareByGeneratedPositionsDeflated = h, r.compareByGeneratedPositionsInflated = d;
    }, {}], 9: [function (n, r, t) {
      !function (o, i) {
        "use strict";
        "function" == typeof e && e.amd ? e("stack-generator", ["stackframe"], i) : "object" == typeof t ? r.exports = i(n("stackframe")) : o.StackGenerator = i(o.StackFrame);
      }(this, function (e) {
        return { backtrace: function (n) {
            var r = [],
                t = 10;"object" == typeof n && "number" == typeof n.maxStackSize && (t = n.maxStackSize);for (var o = arguments.callee; o && r.length < t;) {
              for (var i = new Array(o.arguments.length), a = 0; a < i.length; ++a) i[a] = o.arguments[a];/function(?:\s+([\w$]+))+\s*\(/.test(o.toString()) ? r.push(new e({ functionName: RegExp.$1 || void 0, args: i })) : r.push(new e({ args: i }));try {
                o = o.caller;
              } catch (s) {
                break;
              }
            }return r;
          } };
      });
    }, { stackframe: 10 }], 10: [function (n, r, t) {
      !function (n, o) {
        "use strict";
        "function" == typeof e && e.amd ? e("stackframe", [], o) : "object" == typeof t ? r.exports = o() : n.StackFrame = o();
      }(this, function () {
        "use strict";
        function e(e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }function n(e) {
          return e.charAt(0).toUpperCase() + e.substring(1);
        }function r(e) {
          return function () {
            return this[e];
          };
        }function t(e) {
          if (e instanceof Object) for (var r = 0; r < u.length; r++) e.hasOwnProperty(u[r]) && void 0 !== e[u[r]] && this["set" + n(u[r])](e[u[r]]);
        }var o = ["isConstructor", "isEval", "isNative", "isToplevel"],
            i = ["columnNumber", "lineNumber"],
            a = ["fileName", "functionName", "source"],
            s = ["args"],
            u = o.concat(i, a, s);t.prototype = { getArgs: function () {
            return this.args;
          }, setArgs: function (e) {
            if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");this.args = e;
          }, getEvalOrigin: function () {
            return this.evalOrigin;
          }, setEvalOrigin: function (e) {
            if (e instanceof t) this.evalOrigin = e;else {
              if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin = new t(e);
            }
          }, toString: function () {
            var n = this.getFunctionName() || "{anonymous}",
                r = "(" + (this.getArgs() || []).join(",") + ")",
                t = this.getFileName() ? "@" + this.getFileName() : "",
                o = e(this.getLineNumber()) ? ":" + this.getLineNumber() : "",
                i = e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";return n + r + t + o + i;
          } };for (var c = 0; c < o.length; c++) t.prototype["get" + n(o[c])] = r(o[c]), t.prototype["set" + n(o[c])] = function (e) {
          return function (n) {
            this[e] = Boolean(n);
          };
        }(o[c]);for (var l = 0; l < i.length; l++) t.prototype["get" + n(i[l])] = r(i[l]), t.prototype["set" + n(i[l])] = function (n) {
          return function (r) {
            if (!e(r)) throw new TypeError(n + " must be a Number");this[n] = Number(r);
          };
        }(i[l]);for (var f = 0; f < a.length; f++) t.prototype["get" + n(a[f])] = r(a[f]), t.prototype["set" + n(a[f])] = function (e) {
          return function (n) {
            this[e] = String(n);
          };
        }(a[f]);return t;
      });
    }, {}], 11: [function (n, r, t) {
      !function (o, i) {
        "use strict";
        "function" == typeof e && e.amd ? e("stacktrace-gps", ["source-map", "stackframe"], i) : "object" == typeof t ? r.exports = i(n("source-map/lib/source-map-consumer"), n("stackframe")) : o.StackTraceGPS = i(o.SourceMap || o.sourceMap, o.StackFrame);
      }(this, function (e, n) {
        "use strict";
        function r(e) {
          return new Promise(function (n, r) {
            var t = new XMLHttpRequest();t.open("get", e), t.onerror = r, t.onreadystatechange = function () {
              4 === t.readyState && (t.status >= 200 && t.status < 300 || "file://" === e.substr(0, 7) && t.responseText ? n(t.responseText) : r(new Error("HTTP status: " + t.status + " retrieving " + e)));
            }, t.send();
          });
        }function t(e) {
          if ("undefined" != typeof window && window.atob) return window.atob(e);throw new Error("You must supply a polyfill for window.atob in this environment");
        }function o(e) {
          if ("undefined" != typeof JSON && JSON.parse) return JSON.parse(e);throw new Error("You must supply a polyfill for JSON.parse in this environment");
        }function i(e, n) {
          for (var r = [/['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/, /function\s+([^('"`]*?)\s*\(([^)]*)\)/, /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/, /\b(?!(?:if|for|switch|while|with|catch)\b)(?:(?:static)\s+)?(\S+)\s*\(.*?\)\s*\{/, /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*\(.*?\)\s*=>/], t = e.split("\n"), o = "", i = Math.min(n, 20), a = 0; a < i; ++a) {
            var s = t[n - a - 1],
                u = s.indexOf("//");if (u >= 0 && (s = s.substr(0, u)), s) {
              o = s + o;for (var c = r.length, l = 0; l < c; l++) {
                var f = r[l].exec(o);if (f && f[1]) return f[1];
              }
            }
          }
        }function a() {
          if ("function" != typeof Object.defineProperty || "function" != typeof Object.create) throw new Error("Unable to consume source maps in older browsers");
        }function s(e) {
          if ("object" != typeof e) throw new TypeError("Given StackFrame is not an object");if ("string" != typeof e.fileName) throw new TypeError("Given file name is not a String");if ("number" != typeof e.lineNumber || e.lineNumber % 1 !== 0 || e.lineNumber < 1) throw new TypeError("Given line number must be a positive integer");if ("number" != typeof e.columnNumber || e.columnNumber % 1 !== 0 || e.columnNumber < 0) throw new TypeError("Given column number must be a non-negative integer");return !0;
        }function u(e) {
          for (var n, r, t = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm; r = t.exec(e);) n = r[1];if (n) return n;throw new Error("sourceMappingURL not found");
        }function c(e, r, t) {
          return new Promise(function (o, i) {
            var a = r.originalPositionFor({ line: e.lineNumber, column: e.columnNumber });if (a.source) {
              var s = r.sourceContentFor(a.source);s && (t[a.source] = s), o(new n({ functionName: a.name || e.functionName, args: e.args, fileName: a.source, lineNumber: a.line, columnNumber: a.column }));
            } else i(new Error("Could not get original source for given stackframe and source map"));
          });
        }return function l(f) {
          return this instanceof l ? (f = f || {}, this.sourceCache = f.sourceCache || {}, this.sourceMapConsumerCache = f.sourceMapConsumerCache || {}, this.ajax = f.ajax || r, this._atob = f.atob || t, this._get = function (e) {
            return new Promise(function (n, r) {
              var t = "data:" === e.substr(0, 5);if (this.sourceCache[e]) n(this.sourceCache[e]);else if (f.offline && !t) r(new Error("Cannot make network requests in offline mode"));else if (t) {
                var o = /^data:application\/json;([\w=:"-]+;)*base64,/,
                    i = e.match(o);if (i) {
                  var a = i[0].length,
                      s = e.substr(a),
                      u = this._atob(s);this.sourceCache[e] = u, n(u);
                } else r(new Error("The encoding of the inline sourcemap is not supported"));
              } else {
                var c = this.ajax(e, { method: "get" });this.sourceCache[e] = c, c.then(n, r);
              }
            }.bind(this));
          }, this._getSourceMapConsumer = function (n, r) {
            return new Promise(function (t, i) {
              if (this.sourceMapConsumerCache[n]) t(this.sourceMapConsumerCache[n]);else {
                var a = new Promise(function (t, i) {
                  return this._get(n).then(function (n) {
                    "string" == typeof n && (n = o(n.replace(/^\)\]\}'/, ""))), "undefined" == typeof n.sourceRoot && (n.sourceRoot = r), t(new e.SourceMapConsumer(n));
                  }, i);
                }.bind(this));this.sourceMapConsumerCache[n] = a, t(a);
              }
            }.bind(this));
          }, this.pinpoint = function (e) {
            return new Promise(function (n, r) {
              this.getMappedLocation(e).then(function (e) {
                function r() {
                  n(e);
                }this.findFunctionName(e).then(n, r)["catch"](r);
              }.bind(this), r);
            }.bind(this));
          }, this.findFunctionName = function (e) {
            return new Promise(function (r, t) {
              s(e), this._get(e.fileName).then(function (t) {
                var o = e.lineNumber,
                    a = e.columnNumber,
                    s = i(t, o, a);r(s ? new n({ functionName: s, args: e.args, fileName: e.fileName, lineNumber: o, columnNumber: a }) : e);
              }, t)["catch"](t);
            }.bind(this));
          }, void (this.getMappedLocation = function (e) {
            return new Promise(function (n, r) {
              a(), s(e);var t = this.sourceCache,
                  o = e.fileName;this._get(o).then(function (r) {
                var i = u(r),
                    a = "data:" === i.substr(0, 5),
                    s = o.substring(0, o.lastIndexOf("/") + 1);return "/" === i[0] || a || /^https?:\/\/|^\/\//i.test(i) || (i = s + i), this._getSourceMapConsumer(i, s).then(function (r) {
                  return c(e, r, t).then(n)["catch"](function () {
                    n(e);
                  });
                });
              }.bind(this), r)["catch"](r);
            }.bind(this));
          })) : new l(f);
        };
      });
    }, { "source-map/lib/source-map-consumer": 7, stackframe: 10 }], 12: [function (n, r, t) {
      !function (o, i) {
        "use strict";
        "function" == typeof e && e.amd ? e("stacktrace", ["error-stack-parser", "stack-generator", "stacktrace-gps"], i) : "object" == typeof t ? r.exports = i(n("error-stack-parser"), n("stack-generator"), n("stacktrace-gps")) : o.StackTrace = i(o.ErrorStackParser, o.StackGenerator, o.StackTraceGPS);
      }(this, function (e, n, r) {
        function t(e, n) {
          var r = {};return [e, n].forEach(function (e) {
            for (var n in e) e.hasOwnProperty(n) && (r[n] = e[n]);return r;
          }), r;
        }function o(e) {
          return e.stack || e["opera#sourceloc"];
        }function i(e, n) {
          return "function" == typeof n ? e.filter(n) : e;
        }var a = { filter: function (e) {
            return (e.functionName || "").indexOf("StackTrace$$") === -1 && (e.functionName || "").indexOf("ErrorStackParser$$") === -1 && (e.functionName || "").indexOf("StackTraceGPS$$") === -1 && (e.functionName || "").indexOf("StackGenerator$$") === -1;
          }, sourceCache: {} },
            s = function () {
          try {
            throw new Error();
          } catch (e) {
            return e;
          }
        };return { get: function (e) {
            var n = s();return o(n) ? this.fromError(n, e) : this.generateArtificially(e);
          }, getSync: function (r) {
            r = t(a, r);var u = s(),
                c = o(u) ? e.parse(u) : n.backtrace(r);return i(c, r.filter);
          }, fromError: function (n, o) {
            o = t(a, o);var s = new r(o);return new Promise(function (r) {
              var t = i(e.parse(n), o.filter);r(Promise.all(t.map(function (e) {
                return new Promise(function (n) {
                  function r() {
                    n(e);
                  }s.pinpoint(e).then(n, r)["catch"](r);
                });
              })));
            }.bind(this));
          }, generateArtificially: function (e) {
            e = t(a, e);var r = n.backtrace(e);return "function" == typeof e.filter && (r = r.filter(e.filter)), Promise.resolve(r);
          }, instrument: function (e, n, r, t) {
            if ("function" != typeof e) throw new Error("Cannot instrument non-function object");if ("function" == typeof e.__stacktraceOriginalFn) return e;var i = function () {
              try {
                return this.get().then(n, r)["catch"](r), e.apply(t || this, arguments);
              } catch (i) {
                throw o(i) && this.fromError(i).then(n, r)["catch"](r), i;
              }
            }.bind(this);return i.__stacktraceOriginalFn = e, i;
          }, deinstrument: function (e) {
            if ("function" != typeof e) throw new Error("Cannot de-instrument non-function object");return "function" == typeof e.__stacktraceOriginalFn ? e.__stacktraceOriginalFn : e;
          }, report: function (e, n, r, t) {
            return new Promise(function (o, i) {
              var a = new XMLHttpRequest();if (a.onerror = i, a.onreadystatechange = function () {
                4 === a.readyState && (a.status >= 200 && a.status < 400 ? o(a.responseText) : i(new Error("POST to " + n + " failed with status: " + a.status)));
              }, a.open("post", n), a.setRequestHeader("Content-Type", "application/json"), t && "object" == typeof t.headers) {
                var s = t.headers;for (var u in s) s.hasOwnProperty(u) && a.setRequestHeader(u, s[u]);
              }var c = { stack: e };void 0 !== r && null !== r && (c.message = r), a.send(JSON.stringify(c));
            });
          } };
      });
    }, { "error-stack-parser": 1, "stack-generator": 9, "stacktrace-gps": 11 }] }, {}, [12])(12);
});
//# sourceMappingURL=stacktrace.min.js.map
require = function t(e, n, r) {
  function o(a, s) {
    if (!n[a]) {
      if (!e[a]) {
        var c = "function" == typeof require && require;if (!s && c) return c(a, !0);if (i) return i(a, !0);var u = new Error("Cannot find module '" + a + "'");throw u.code = "MODULE_NOT_FOUND", u;
      }var f = n[a] = { exports: {} };e[a][0].call(f.exports, function (t) {
        var n = e[a][1][t];return o(n || t);
      }, f, f.exports, t, e, n, r);
    }return n[a].exports;
  }for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);return o;
}({ 1: [function (t, e, n) {
    e.exports = [{ constant: !0, inputs: [{ name: "_owner", type: "address" }], name: "name", outputs: [{ name: "o_name", type: "bytes32" }], type: "function" }, { constant: !0, inputs: [{ name: "_name", type: "bytes32" }], name: "owner", outputs: [{ name: "", type: "address" }], type: "function" }, { constant: !0, inputs: [{ name: "_name", type: "bytes32" }], name: "content", outputs: [{ name: "", type: "bytes32" }], type: "function" }, { constant: !0, inputs: [{ name: "_name", type: "bytes32" }], name: "addr", outputs: [{ name: "", type: "address" }], type: "function" }, { constant: !1, inputs: [{ name: "_name", type: "bytes32" }], name: "reserve", outputs: [], type: "function" }, { constant: !0, inputs: [{ name: "_name", type: "bytes32" }], name: "subRegistrar", outputs: [{ name: "", type: "address" }], type: "function" }, { constant: !1, inputs: [{ name: "_name", type: "bytes32" }, { name: "_newOwner", type: "address" }], name: "transfer", outputs: [], type: "function" }, { constant: !1, inputs: [{ name: "_name", type: "bytes32" }, { name: "_registrar", type: "address" }], name: "setSubRegistrar", outputs: [], type: "function" }, { constant: !1, inputs: [], name: "Registrar", outputs: [], type: "function" }, { constant: !1, inputs: [{ name: "_name", type: "bytes32" }, { name: "_a", type: "address" }, { name: "_primary", type: "bool" }], name: "setAddress", outputs: [], type: "function" }, { constant: !1, inputs: [{ name: "_name", type: "bytes32" }, { name: "_content", type: "bytes32" }], name: "setContent", outputs: [], type: "function" }, { constant: !1, inputs: [{ name: "_name", type: "bytes32" }], name: "disown", outputs: [], type: "function" }, { anonymous: !1, inputs: [{ indexed: !0, name: "_name", type: "bytes32" }, { indexed: !1, name: "_winner", type: "address" }], name: "AuctionEnded", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "_name", type: "bytes32" }, { indexed: !1, name: "_bidder", type: "address" }, { indexed: !1, name: "_value", type: "uint256" }], name: "NewBid", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "name", type: "bytes32" }], name: "Changed", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "name", type: "bytes32" }, { indexed: !0, name: "addr", type: "address" }], name: "PrimaryChanged", type: "event" }];
  }, {}], 2: [function (t, e, n) {
    e.exports = [{ constant: !0, inputs: [{ name: "_name", type: "bytes32" }], name: "owner", outputs: [{ name: "", type: "address" }], type: "function" }, { constant: !1, inputs: [{ name: "_name", type: "bytes32" }, { name: "_refund", type: "address" }], name: "disown", outputs: [], type: "function" }, { constant: !0, inputs: [{ name: "_name", type: "bytes32" }], name: "addr", outputs: [{ name: "", type: "address" }], type: "function" }, { constant: !1, inputs: [{ name: "_name", type: "bytes32" }], name: "reserve", outputs: [], type: "function" }, { constant: !1, inputs: [{ name: "_name", type: "bytes32" }, { name: "_newOwner", type: "address" }], name: "transfer", outputs: [], type: "function" }, { constant: !1, inputs: [{ name: "_name", type: "bytes32" }, { name: "_a", type: "address" }], name: "setAddr", outputs: [], type: "function" }, { anonymous: !1, inputs: [{ indexed: !0, name: "name", type: "bytes32" }], name: "Changed", type: "event" }];
  }, {}], 3: [function (t, e, n) {
    e.exports = [{ constant: !1, inputs: [{ name: "from", type: "bytes32" }, { name: "to", type: "address" }, { name: "value", type: "uint256" }], name: "transfer", outputs: [], type: "function" }, { constant: !1, inputs: [{ name: "from", type: "bytes32" }, { name: "to", type: "address" }, { name: "indirectId", type: "bytes32" }, { name: "value", type: "uint256" }], name: "icapTransfer", outputs: [], type: "function" }, { constant: !1, inputs: [{ name: "to", type: "bytes32" }], name: "deposit", outputs: [], payable: !0, type: "function" }, { anonymous: !1, inputs: [{ indexed: !0, name: "from", type: "address" }, { indexed: !1, name: "value", type: "uint256" }], name: "AnonymousDeposit", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "from", type: "address" }, { indexed: !0, name: "to", type: "bytes32" }, { indexed: !1, name: "value", type: "uint256" }], name: "Deposit", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "from", type: "bytes32" }, { indexed: !0, name: "to", type: "address" }, { indexed: !1, name: "value", type: "uint256" }], name: "Transfer", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "from", type: "bytes32" }, { indexed: !0, name: "to", type: "address" }, { indexed: !1, name: "indirectId", type: "bytes32" }, { indexed: !1, name: "value", type: "uint256" }], name: "IcapTransfer", type: "event" }];
  }, {}], 4: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./type"),
        i = function () {
      this._inputFormatter = r.formatInputInt, this._outputFormatter = r.formatOutputAddress;
    };(i.prototype = new o({})).constructor = i, i.prototype.isType = function (t) {
      return !!t.match(/address(\[([0-9]*)\])?/);
    }, e.exports = i;
  }, { "./formatters": 9, "./type": 14 }], 5: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./type"),
        i = function () {
      this._inputFormatter = r.formatInputBool, this._outputFormatter = r.formatOutputBool;
    };(i.prototype = new o({})).constructor = i, i.prototype.isType = function (t) {
      return !!t.match(/^bool(\[([0-9]*)\])*$/);
    }, e.exports = i;
  }, { "./formatters": 9, "./type": 14 }], 6: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./type"),
        i = function () {
      this._inputFormatter = r.formatInputBytes, this._outputFormatter = r.formatOutputBytes;
    };(i.prototype = new o({})).constructor = i, i.prototype.isType = function (t) {
      return !!t.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/);
    }, e.exports = i;
  }, { "./formatters": 9, "./type": 14 }], 7: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./address"),
        i = t("./bool"),
        a = t("./int"),
        s = t("./uint"),
        c = t("./dynamicbytes"),
        u = t("./string"),
        f = t("./real"),
        l = t("./ureal"),
        p = t("./bytes"),
        h = function (t, e) {
      return t.isDynamicType(e) || t.isDynamicArray(e);
    },
        d = function (t) {
      this._types = t;
    };d.prototype._requireType = function (t) {
      var e = this._types.filter(function (e) {
        return e.isType(t);
      })[0];if (!e) throw Error("invalid solidity type!: " + t);return e;
    }, d.prototype.encodeParam = function (t, e) {
      return this.encodeParams([t], [e]);
    }, d.prototype.encodeParams = function (t, e) {
      var n = this.getSolidityTypes(t),
          r = n.map(function (n, r) {
        return n.encode(e[r], t[r]);
      }),
          o = n.reduce(function (e, r, o) {
        var i = r.staticPartLength(t[o]),
            a = 32 * Math.floor((i + 31) / 32);return e + (h(n[o], t[o]) ? 32 : a);
      }, 0);return this.encodeMultiWithOffset(t, n, r, o);
    }, d.prototype.encodeMultiWithOffset = function (t, e, n, o) {
      var i = "",
          a = this;return t.forEach(function (s, c) {
        if (h(e[c], t[c])) {
          i += r.formatInputInt(o).encode();var u = a.encodeWithOffset(t[c], e[c], n[c], o);o += u.length / 2;
        } else i += a.encodeWithOffset(t[c], e[c], n[c], o);
      }), t.forEach(function (r, s) {
        if (h(e[s], t[s])) {
          var c = a.encodeWithOffset(t[s], e[s], n[s], o);o += c.length / 2, i += c;
        }
      }), i;
    }, d.prototype.encodeWithOffset = function (t, e, n, o) {
      var i = this;return e.isDynamicArray(t) ? function () {
        var a = e.nestedName(t),
            s = e.staticPartLength(a),
            c = n[0];return function () {
          var t = 2;if (e.isDynamicArray(a)) for (var i = 1; i < n.length; i++) t += +n[i - 1][0] || 0, c += r.formatInputInt(o + i * s + 32 * t).encode();
        }(), function () {
          for (var t = 0; t < n.length - 1; t++) {
            var r = c / 2;c += i.encodeWithOffset(a, e, n[t + 1], o + r);
          }
        }(), c;
      }() : e.isStaticArray(t) ? function () {
        var a = e.nestedName(t),
            s = e.staticPartLength(a),
            c = "";return e.isDynamicArray(a) && function () {
          for (var t = 0, e = 0; e < n.length; e++) t += +(n[e - 1] || [])[0] || 0, c += r.formatInputInt(o + e * s + 32 * t).encode();
        }(), function () {
          for (var t = 0; t < n.length; t++) {
            var r = c / 2;c += i.encodeWithOffset(a, e, n[t], o + r);
          }
        }(), c;
      }() : n;
    }, d.prototype.decodeParam = function (t, e) {
      return this.decodeParams([t], e)[0];
    }, d.prototype.decodeParams = function (t, e) {
      var n = this.getSolidityTypes(t),
          r = this.getOffsets(t, n);return n.map(function (n, o) {
        return n.decode(e, r[o], t[o], o);
      });
    }, d.prototype.getOffsets = function (t, e) {
      for (var n = e.map(function (e, n) {
        return e.staticPartLength(t[n]);
      }), r = 1; r < n.length; r++) n[r] += n[r - 1];return n.map(function (n, r) {
        return n - e[r].staticPartLength(t[r]);
      });
    }, d.prototype.getSolidityTypes = function (t) {
      var e = this;return t.map(function (t) {
        return e._requireType(t);
      });
    };var m = new d([new o(), new i(), new a(), new s(), new c(), new p(), new u(), new f(), new l()]);e.exports = m;
  }, { "./address": 4, "./bool": 5, "./bytes": 6, "./dynamicbytes": 8, "./formatters": 9, "./int": 10, "./real": 12, "./string": 13, "./uint": 15, "./ureal": 16 }], 8: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./type"),
        i = function () {
      this._inputFormatter = r.formatInputDynamicBytes, this._outputFormatter = r.formatOutputDynamicBytes;
    };(i.prototype = new o({})).constructor = i, i.prototype.isType = function (t) {
      return !!t.match(/^bytes(\[([0-9]*)\])*$/);
    }, i.prototype.isDynamicType = function () {
      return !0;
    }, e.exports = i;
  }, { "./formatters": 9, "./type": 14 }], 9: [function (t, e, n) {
    var r = t("bignumber.js"),
        o = t("../utils/utils"),
        i = t("../utils/config"),
        a = t("./param"),
        s = function (t) {
      r.config(i.ETH_BIGNUMBER_ROUNDING_MODE);var e = o.padLeft(o.toTwosComplement(t).toString(16), 64);return new a(e);
    },
        c = function (t) {
      return "1" === new r(t.substr(0, 1), 16).toString(2).substr(0, 1);
    },
        u = function (t) {
      var e = t.staticPart() || "0";return c(e) ? new r(e, 16).minus(new r("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16)).minus(1) : new r(e, 16);
    },
        f = function (t) {
      var e = t.staticPart() || "0";return new r(e, 16);
    };e.exports = { formatInputInt: s, formatInputBytes: function (t) {
        var e = o.toHex(t).substr(2),
            n = Math.floor((e.length + 63) / 64);return e = o.padRight(e, 64 * n), new a(e);
      }, formatInputDynamicBytes: function (t) {
        var e = o.toHex(t).substr(2),
            n = e.length / 2,
            r = Math.floor((e.length + 63) / 64);return e = o.padRight(e, 64 * r), new a(s(n).value + e);
      }, formatInputString: function (t) {
        var e = o.fromUtf8(t).substr(2),
            n = e.length / 2,
            r = Math.floor((e.length + 63) / 64);return e = o.padRight(e, 64 * r), new a(s(n).value + e);
      }, formatInputBool: function (t) {
        return new a("000000000000000000000000000000000000000000000000000000000000000" + (t ? "1" : "0"));
      }, formatInputReal: function (t) {
        return s(new r(t).times(new r(2).pow(128)));
      }, formatOutputInt: u, formatOutputUInt: f, formatOutputReal: function (t) {
        return u(t).dividedBy(new r(2).pow(128));
      }, formatOutputUReal: function (t) {
        return f(t).dividedBy(new r(2).pow(128));
      }, formatOutputBool: function (t) {
        return "0000000000000000000000000000000000000000000000000000000000000001" === t.staticPart();
      }, formatOutputBytes: function (t, e) {
        var n = e.match(/^bytes([0-9]*)/),
            r = parseInt(n[1]);return "0x" + t.staticPart().slice(0, 2 * r);
      }, formatOutputDynamicBytes: function (t) {
        var e = 2 * new r(t.dynamicPart().slice(0, 64), 16).toNumber();return "0x" + t.dynamicPart().substr(64, e);
      }, formatOutputString: function (t) {
        var e = 2 * new r(t.dynamicPart().slice(0, 64), 16).toNumber();return o.toUtf8(t.dynamicPart().substr(64, e));
      }, formatOutputAddress: function (t) {
        var e = t.staticPart();return "0x" + e.slice(e.length - 40, e.length);
      } };
  }, { "../utils/config": 18, "../utils/utils": 20, "./param": 11, "bignumber.js": "bignumber.js" }], 10: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./type"),
        i = function () {
      this._inputFormatter = r.formatInputInt, this._outputFormatter = r.formatOutputInt;
    };(i.prototype = new o({})).constructor = i, i.prototype.isType = function (t) {
      return !!t.match(/^int([0-9]*)?(\[([0-9]*)\])*$/);
    }, e.exports = i;
  }, { "./formatters": 9, "./type": 14 }], 11: [function (t, e, n) {
    var r = t("../utils/utils"),
        o = function (t, e) {
      this.value = t || "", this.offset = e;
    };o.prototype.dynamicPartLength = function () {
      return this.dynamicPart().length / 2;
    }, o.prototype.withOffset = function (t) {
      return new o(this.value, t);
    }, o.prototype.combine = function (t) {
      return new o(this.value + t.value);
    }, o.prototype.isDynamic = function () {
      return void 0 !== this.offset;
    }, o.prototype.offsetAsBytes = function () {
      return this.isDynamic() ? r.padLeft(r.toTwosComplement(this.offset).toString(16), 64) : "";
    }, o.prototype.staticPart = function () {
      return this.isDynamic() ? this.offsetAsBytes() : this.value;
    }, o.prototype.dynamicPart = function () {
      return this.isDynamic() ? this.value : "";
    }, o.prototype.encode = function () {
      return this.staticPart() + this.dynamicPart();
    }, o.encodeList = function (t) {
      var e = 32 * t.length,
          n = t.map(function (t) {
        if (!t.isDynamic()) return t;var n = e;return e += t.dynamicPartLength(), t.withOffset(n);
      });return n.reduce(function (t, e) {
        return t + e.dynamicPart();
      }, n.reduce(function (t, e) {
        return t + e.staticPart();
      }, ""));
    }, e.exports = o;
  }, { "../utils/utils": 20 }], 12: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./type"),
        i = function () {
      this._inputFormatter = r.formatInputReal, this._outputFormatter = r.formatOutputReal;
    };(i.prototype = new o({})).constructor = i, i.prototype.isType = function (t) {
      return !!t.match(/real([0-9]*)?(\[([0-9]*)\])?/);
    }, e.exports = i;
  }, { "./formatters": 9, "./type": 14 }], 13: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./type"),
        i = function () {
      this._inputFormatter = r.formatInputString, this._outputFormatter = r.formatOutputString;
    };(i.prototype = new o({})).constructor = i, i.prototype.isType = function (t) {
      return !!t.match(/^string(\[([0-9]*)\])*$/);
    }, i.prototype.isDynamicType = function () {
      return !0;
    }, e.exports = i;
  }, { "./formatters": 9, "./type": 14 }], 14: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./param"),
        i = function (t) {
      this._inputFormatter = t.inputFormatter, this._outputFormatter = t.outputFormatter;
    };i.prototype.isType = function (t) {
      throw "this method should be overrwritten for type " + t;
    }, i.prototype.staticPartLength = function (t) {
      return (this.nestedTypes(t) || ["[1]"]).map(function (t) {
        return parseInt(t.slice(1, -1), 10) || 1;
      }).reduce(function (t, e) {
        return t * e;
      }, 32);
    }, i.prototype.isDynamicArray = function (t) {
      var e = this.nestedTypes(t);return !!e && !e[e.length - 1].match(/[0-9]{1,}/g);
    }, i.prototype.isStaticArray = function (t) {
      var e = this.nestedTypes(t);return !!e && !!e[e.length - 1].match(/[0-9]{1,}/g);
    }, i.prototype.staticArrayLength = function (t) {
      var e = this.nestedTypes(t);return e ? parseInt(e[e.length - 1].match(/[0-9]{1,}/g) || 1) : 1;
    }, i.prototype.nestedName = function (t) {
      var e = this.nestedTypes(t);return e ? t.substr(0, t.length - e[e.length - 1].length) : t;
    }, i.prototype.isDynamicType = function () {
      return !1;
    }, i.prototype.nestedTypes = function (t) {
      return t.match(/(\[[0-9]*\])/g);
    }, i.prototype.encode = function (t, e) {
      var n = this;return this.isDynamicArray(e) ? function () {
        var o = t.length,
            i = n.nestedName(e),
            a = [];return a.push(r.formatInputInt(o).encode()), t.forEach(function (t) {
          a.push(n.encode(t, i));
        }), a;
      }() : this.isStaticArray(e) ? function () {
        for (var r = n.staticArrayLength(e), o = n.nestedName(e), i = [], a = 0; a < r; a++) i.push(n.encode(t[a], o));return i;
      }() : this._inputFormatter(t, e).encode();
    }, i.prototype.decode = function (t, e, n) {
      var r = this;if (this.isDynamicArray(n)) return function () {
        for (var o = parseInt("0x" + t.substr(2 * e, 64)), i = parseInt("0x" + t.substr(2 * o, 64)), a = o + 32, s = r.nestedName(n), c = r.staticPartLength(s), u = 32 * Math.floor((c + 31) / 32), f = [], l = 0; l < i * u; l += u) f.push(r.decode(t, a + l, s));return f;
      }();if (this.isStaticArray(n)) return function () {
        for (var o = r.staticArrayLength(n), i = e, a = r.nestedName(n), s = r.staticPartLength(a), c = 32 * Math.floor((s + 31) / 32), u = [], f = 0; f < o * c; f += c) u.push(r.decode(t, i + f, a));return u;
      }();if (this.isDynamicType(n)) return function () {
        var i = parseInt("0x" + t.substr(2 * e, 64)),
            a = parseInt("0x" + t.substr(2 * i, 64)),
            s = Math.floor((a + 31) / 32),
            c = new o(t.substr(2 * i, 64 * (1 + s)), 0);return r._outputFormatter(c, n);
      }();var i = this.staticPartLength(n),
          a = new o(t.substr(2 * e, 2 * i));return this._outputFormatter(a, n);
    }, e.exports = i;
  }, { "./formatters": 9, "./param": 11 }], 15: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./type"),
        i = function () {
      this._inputFormatter = r.formatInputInt, this._outputFormatter = r.formatOutputUInt;
    };(i.prototype = new o({})).constructor = i, i.prototype.isType = function (t) {
      return !!t.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/);
    }, e.exports = i;
  }, { "./formatters": 9, "./type": 14 }], 16: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./type"),
        i = function () {
      this._inputFormatter = r.formatInputReal, this._outputFormatter = r.formatOutputUReal;
    };(i.prototype = new o({})).constructor = i, i.prototype.isType = function (t) {
      return !!t.match(/^ureal([0-9]*)?(\[([0-9]*)\])*$/);
    }, e.exports = i;
  }, { "./formatters": 9, "./type": 14 }], 17: [function (t, e, n) {
    "use strict";
    "undefined" == typeof XMLHttpRequest ? n.XMLHttpRequest = {} : n.XMLHttpRequest = XMLHttpRequest;
  }, {}], 18: [function (t, e, n) {
    var r = t("bignumber.js"),
        o = ["wei", "kwei", "Mwei", "Gwei", "szabo", "finney", "femtoether", "picoether", "nanoether", "microether", "milliether", "nano", "micro", "milli", "ether", "grand", "Mether", "Gether", "Tether", "Pether", "Eether", "Zether", "Yether", "Nether", "Dether", "Vether", "Uether"];e.exports = { ETH_PADDING: 32, ETH_SIGNATURE_LENGTH: 4, ETH_UNITS: o, ETH_BIGNUMBER_ROUNDING_MODE: { ROUNDING_MODE: r.ROUND_DOWN }, ETH_POLLING_TIMEOUT: 500, defaultBlock: "latest", defaultAccount: void 0 };
  }, { "bignumber.js": "bignumber.js" }], 19: [function (t, e, n) {
    var r = t("crypto-js"),
        o = t("crypto-js/sha3");e.exports = function (t, e) {
      return e && "hex" === e.encoding && (t.length > 2 && "0x" === t.substr(0, 2) && (t = t.substr(2)), t = r.enc.Hex.parse(t)), o(t, { outputLength: 256 }).toString();
    };
  }, { "crypto-js": 58, "crypto-js/sha3": 79 }], 20: [function (t, e, n) {
    var r = t("bignumber.js"),
        o = t("./sha3.js"),
        i = t("utf8"),
        a = { noether: "0", wei: "1", kwei: "1000", Kwei: "1000", babbage: "1000", femtoether: "1000", mwei: "1000000", Mwei: "1000000", lovelace: "1000000", picoether: "1000000", gwei: "1000000000", Gwei: "1000000000", shannon: "1000000000", nanoether: "1000000000", nano: "1000000000", szabo: "1000000000000", microether: "1000000000000", micro: "1000000000000", finney: "1000000000000000", milliether: "1000000000000000", milli: "1000000000000000", ether: "1000000000000000000", kether: "1000000000000000000000", grand: "1000000000000000000000", mether: "1000000000000000000000000", gether: "1000000000000000000000000000", tether: "1000000000000000000000000000000" },
        s = function (t, e, n) {
      return new Array(e - t.length + 1).join(n || "0") + t;
    },
        c = function (t) {
      t = i.encode(t);for (var e = "", n = 0; n < t.length; n++) {
        var r = t.charCodeAt(n);if (0 === r) break;var o = r.toString(16);e += o.length < 2 ? "0" + o : o;
      }return "0x" + e;
    },
        u = function (t) {
      for (var e = "", n = 0; n < t.length; n++) {
        var r = t.charCodeAt(n).toString(16);e += r.length < 2 ? "0" + r : r;
      }return "0x" + e;
    },
        f = function (t) {
      var e = h(t),
          n = e.toString(16);return e.lessThan(0) ? "-0x" + n.substr(1) : "0x" + n;
    },
        l = function (t) {
      if (v(t)) return f(+t);if (y(t)) return f(t);if ("object" == typeof t) return c(JSON.stringify(t));if (g(t)) {
        if (0 === t.indexOf("-0x")) return f(t);if (0 === t.indexOf("0x")) return t;if (!isFinite(t)) return u(t);
      }return f(t);
    },
        p = function (t) {
      t = t ? t.toLowerCase() : "ether";var e = a[t];if (void 0 === e) throw new Error("This unit doesn't exists, please use the one of the following units" + JSON.stringify(a, null, 2));return new r(e, 10);
    },
        h = function (t) {
      return t = t || 0, y(t) ? t : !g(t) || 0 !== t.indexOf("0x") && 0 !== t.indexOf("-0x") ? new r(t.toString(10), 10) : new r(t.replace("0x", ""), 16);
    },
        d = function (t) {
      return (/^0x[0-9a-f]{40}$/i.test(t)
      );
    },
        m = function (t) {
      t = t.replace("0x", "");for (var e = o(t.toLowerCase()), n = 0; n < 40; n++) if (parseInt(e[n], 16) > 7 && t[n].toUpperCase() !== t[n] || parseInt(e[n], 16) <= 7 && t[n].toLowerCase() !== t[n]) return !1;return !0;
    },
        y = function (t) {
      return t instanceof r || t && t.constructor && "BigNumber" === t.constructor.name;
    },
        g = function (t) {
      return "string" == typeof t || t && t.constructor && "String" === t.constructor.name;
    },
        v = function (t) {
      return "boolean" == typeof t;
    };e.exports = { padLeft: s, padRight: function (t, e, n) {
        return t + new Array(e - t.length + 1).join(n || "0");
      }, toHex: l, toDecimal: function (t) {
        return h(t).toNumber();
      }, fromDecimal: f, toUtf8: function (t) {
        var e = "",
            n = 0,
            r = t.length;for ("0x" === t.substring(0, 2) && (n = 2); n < r; n += 2) {
          var o = parseInt(t.substr(n, 2), 16);if (0 === o) break;e += String.fromCharCode(o);
        }return i.decode(e);
      }, toAscii: function (t) {
        var e = "",
            n = 0,
            r = t.length;for ("0x" === t.substring(0, 2) && (n = 2); n < r; n += 2) {
          var o = parseInt(t.substr(n, 2), 16);e += String.fromCharCode(o);
        }return e;
      }, fromUtf8: c, fromAscii: u, transformToFullName: function (t) {
        if (-1 !== t.name.indexOf("(")) return t.name;var e = t.inputs.map(function (t) {
          return t.type;
        }).join();return t.name + "(" + e + ")";
      }, extractDisplayName: function (t) {
        var e = t.indexOf("(");return -1 !== e ? t.substr(0, e) : t;
      }, extractTypeName: function (t) {
        var e = t.indexOf("(");return -1 !== e ? t.substr(e + 1, t.length - 1 - (e + 1)).replace(" ", "") : "";
      }, toWei: function (t, e) {
        var n = h(t).times(p(e));return y(t) ? n : n.toString(10);
      }, fromWei: function (t, e) {
        var n = h(t).dividedBy(p(e));return y(t) ? n : n.toString(10);
      }, toBigNumber: h, toTwosComplement: function (t) {
        var e = h(t).round();return e.lessThan(0) ? new r("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16).plus(e).plus(1) : e;
      }, toAddress: function (t) {
        return d(t) ? t : /^[0-9a-f]{40}$/.test(t) ? "0x" + t : "0x" + s(l(t).substr(2), 40);
      }, isBigNumber: y, isStrictAddress: d, isAddress: function (t) {
        return !!/^(0x)?[0-9a-f]{40}$/i.test(t) && (!(!/^(0x)?[0-9a-f]{40}$/.test(t) && !/^(0x)?[0-9A-F]{40}$/.test(t)) || m(t));
      }, isChecksumAddress: m, toChecksumAddress: function (t) {
        if (void 0 === t) return "";t = t.toLowerCase().replace("0x", "");for (var e = o(t), n = "0x", r = 0; r < t.length; r++) parseInt(e[r], 16) > 7 ? n += t[r].toUpperCase() : n += t[r];return n;
      }, isFunction: function (t) {
        return "function" == typeof t;
      }, isString: g, isObject: function (t) {
        return null !== t && !(t instanceof Array) && "object" == typeof t;
      }, isBoolean: v, isArray: function (t) {
        return t instanceof Array;
      }, isJson: function (t) {
        try {
          return !!JSON.parse(t);
        } catch (t) {
          return !1;
        }
      }, isBloom: function (t) {
        return !(!/^(0x)?[0-9a-f]{512}$/i.test(t) || !/^(0x)?[0-9a-f]{512}$/.test(t) && !/^(0x)?[0-9A-F]{512}$/.test(t));
      }, isTopic: function (t) {
        return !(!/^(0x)?[0-9a-f]{64}$/i.test(t) || !/^(0x)?[0-9a-f]{64}$/.test(t) && !/^(0x)?[0-9A-F]{64}$/.test(t));
      } };
  }, { "./sha3.js": 19, "bignumber.js": "bignumber.js", utf8: 84 }], 21: [function (t, e, n) {
    e.exports = { version: "0.20.1" };
  }, {}], 22: [function (t, e, n) {
    function r(t) {
      this._requestManager = new o(t), this.currentProvider = t, this.eth = new a(this), this.db = new s(this), this.shh = new c(this), this.net = new u(this), this.personal = new f(this), this.bzz = new l(this), this.settings = new p(), this.version = { api: h.version }, this.providers = { HttpProvider: b, IpcProvider: _ }, this._extend = y(this), this._extend({ properties: x() });
    }var o = t("./web3/requestmanager"),
        i = t("./web3/iban"),
        a = t("./web3/methods/eth"),
        s = t("./web3/methods/db"),
        c = t("./web3/methods/shh"),
        u = t("./web3/methods/net"),
        f = t("./web3/methods/personal"),
        l = t("./web3/methods/swarm"),
        p = t("./web3/settings"),
        h = t("./version.json"),
        d = t("./utils/utils"),
        m = t("./utils/sha3"),
        y = t("./web3/extend"),
        g = t("./web3/batch"),
        v = t("./web3/property"),
        b = t("./web3/httpprovider"),
        _ = t("./web3/ipcprovider"),
        w = t("bignumber.js");r.providers = { HttpProvider: b, IpcProvider: _ }, r.prototype.setProvider = function (t) {
      this._requestManager.setProvider(t), this.currentProvider = t;
    }, r.prototype.reset = function (t) {
      this._requestManager.reset(t), this.settings = new p();
    }, r.prototype.BigNumber = w, r.prototype.toHex = d.toHex, r.prototype.toAscii = d.toAscii, r.prototype.toUtf8 = d.toUtf8, r.prototype.fromAscii = d.fromAscii, r.prototype.fromUtf8 = d.fromUtf8, r.prototype.toDecimal = d.toDecimal, r.prototype.fromDecimal = d.fromDecimal, r.prototype.toBigNumber = d.toBigNumber, r.prototype.toWei = d.toWei, r.prototype.fromWei = d.fromWei, r.prototype.isAddress = d.isAddress, r.prototype.isChecksumAddress = d.isChecksumAddress, r.prototype.toChecksumAddress = d.toChecksumAddress, r.prototype.isIBAN = d.isIBAN, r.prototype.padLeft = d.padLeft, r.prototype.padRight = d.padRight, r.prototype.sha3 = function (t, e) {
      return "0x" + m(t, e);
    }, r.prototype.fromICAP = function (t) {
      return new i(t).address();
    };var x = function () {
      return [new v({ name: "version.node", getter: "web3_clientVersion" }), new v({ name: "version.network", getter: "net_version", inputFormatter: d.toDecimal }), new v({ name: "version.ethereum", getter: "eth_protocolVersion", inputFormatter: d.toDecimal }), new v({ name: "version.whisper", getter: "shh_version", inputFormatter: d.toDecimal })];
    };r.prototype.isConnected = function () {
      return this.currentProvider && this.currentProvider.isConnected();
    }, r.prototype.createBatch = function () {
      return new g(this);
    }, e.exports = r;
  }, { "./utils/sha3": 19, "./utils/utils": 20, "./version.json": 21, "./web3/batch": 24, "./web3/extend": 28, "./web3/httpprovider": 32, "./web3/iban": 33, "./web3/ipcprovider": 34, "./web3/methods/db": 37, "./web3/methods/eth": 38, "./web3/methods/net": 39, "./web3/methods/personal": 40, "./web3/methods/shh": 41, "./web3/methods/swarm": 42, "./web3/property": 45, "./web3/requestmanager": 46, "./web3/settings": 47, "bignumber.js": "bignumber.js" }], 23: [function (t, e, n) {
    var r = t("../utils/sha3"),
        o = t("./event"),
        i = t("./formatters"),
        a = t("../utils/utils"),
        s = t("./filter"),
        c = t("./methods/watches"),
        u = function (t, e, n) {
      this._requestManager = t, this._json = e, this._address = n;
    };u.prototype.encode = function (t) {
      t = t || {};var e = {};return ["fromBlock", "toBlock"].filter(function (e) {
        return void 0 !== t[e];
      }).forEach(function (n) {
        e[n] = i.inputBlockNumberFormatter(t[n]);
      }), e.address = this._address, e;
    }, u.prototype.decode = function (t) {
      t.data = t.data || "", t.topics = t.topics || [];var e = t.topics[0].slice(2),
          n = this._json.filter(function (t) {
        return e === r(a.transformToFullName(t));
      })[0];return n ? new o(this._requestManager, n, this._address).decode(t) : (console.warn("cannot find event for log"), t);
    }, u.prototype.execute = function (t, e) {
      a.isFunction(arguments[arguments.length - 1]) && (e = arguments[arguments.length - 1], 1 === arguments.length && (t = null));var n = this.encode(t),
          r = this.decode.bind(this);return new s(n, "eth", this._requestManager, c.eth(), r, e);
    }, u.prototype.attachToContract = function (t) {
      var e = this.execute.bind(this);t.allEvents = e;
    }, e.exports = u;
  }, { "../utils/sha3": 19, "../utils/utils": 20, "./event": 27, "./filter": 29, "./formatters": 30, "./methods/watches": 43 }], 24: [function (t, e, n) {
    var r = t("./jsonrpc"),
        o = t("./errors"),
        i = function (t) {
      this.requestManager = t._requestManager, this.requests = [];
    };i.prototype.add = function (t) {
      this.requests.push(t);
    }, i.prototype.execute = function () {
      var t = this.requests;this.requestManager.sendBatch(t, function (e, n) {
        n = n || [], t.map(function (t, e) {
          return n[e] || {};
        }).forEach(function (e, n) {
          if (t[n].callback) {
            if (!r.isValidResponse(e)) return t[n].callback(o.InvalidResponse(e));t[n].callback(null, t[n].format ? t[n].format(e.result) : e.result);
          }
        });
      });
    }, e.exports = i;
  }, { "./errors": 26, "./jsonrpc": 35 }], 25: [function (t, e, n) {
    var r = t("../utils/utils"),
        o = t("../solidity/coder"),
        i = t("./event"),
        a = t("./function"),
        s = t("./allevents"),
        c = function (t, e) {
      return t.filter(function (t) {
        return "constructor" === t.type && t.inputs.length === e.length;
      }).map(function (t) {
        return t.inputs.map(function (t) {
          return t.type;
        });
      }).map(function (t) {
        return o.encodeParams(t, e);
      })[0] || "";
    },
        u = function (t) {
      t.abi.filter(function (t) {
        return "function" === t.type;
      }).map(function (e) {
        return new a(t._eth, e, t.address);
      }).forEach(function (e) {
        e.attachToContract(t);
      });
    },
        f = function (t) {
      var e = t.abi.filter(function (t) {
        return "event" === t.type;
      });new s(t._eth._requestManager, e, t.address).attachToContract(t), e.map(function (e) {
        return new i(t._eth._requestManager, e, t.address);
      }).forEach(function (e) {
        e.attachToContract(t);
      });
    },
        l = function (t, e) {
      var n = 0,
          r = !1,
          o = t._eth.filter("latest", function (i) {
        if (!i && !r) if (++n > 50) {
          if (o.stopWatching(function () {}), r = !0, !e) throw new Error("Contract transaction couldn't be found after 50 blocks");e(new Error("Contract transaction couldn't be found after 50 blocks"));
        } else t._eth.getTransactionReceipt(t.transactionHash, function (n, i) {
          i && !r && t._eth.getCode(i.contractAddress, function (n, a) {
            if (!r && a) if (o.stopWatching(function () {}), r = !0, a.length > 3) t.address = i.contractAddress, u(t), f(t), e && e(null, t);else {
              if (!e) throw new Error("The contract code couldn't be stored, please check your gas amount.");e(new Error("The contract code couldn't be stored, please check your gas amount."));
            }
          });
        });
      });
    },
        p = function (t, e) {
      this.eth = t, this.abi = e, this.new = function () {
        var t,
            n = new h(this.eth, this.abi),
            o = {},
            i = Array.prototype.slice.call(arguments);r.isFunction(i[i.length - 1]) && (t = i.pop());var a = i[i.length - 1];if (r.isObject(a) && !r.isArray(a) && (o = i.pop()), o.value > 0 && !(e.filter(function (t) {
          return "constructor" === t.type && t.inputs.length === i.length;
        })[0] || {}).payable) throw new Error("Cannot send value to non-payable constructor");var s = c(this.abi, i);if (o.data += s, t) this.eth.sendTransaction(o, function (e, r) {
          e ? t(e) : (n.transactionHash = r, t(null, n), l(n, t));
        });else {
          var u = this.eth.sendTransaction(o);n.transactionHash = u, l(n);
        }return n;
      }, this.new.getData = this.getData.bind(this);
    };p.prototype.at = function (t, e) {
      var n = new h(this.eth, this.abi, t);return u(n), f(n), e && e(null, n), n;
    }, p.prototype.getData = function () {
      var t = {},
          e = Array.prototype.slice.call(arguments),
          n = e[e.length - 1];r.isObject(n) && !r.isArray(n) && (t = e.pop());var o = c(this.abi, e);return t.data += o, t.data;
    };var h = function (t, e, n) {
      this._eth = t, this.transactionHash = null, this.address = n, this.abi = e;
    };e.exports = p;
  }, { "../solidity/coder": 7, "../utils/utils": 20, "./allevents": 23, "./event": 27, "./function": 31 }], 26: [function (t, e, n) {
    e.exports = { InvalidNumberOfSolidityArgs: function () {
        return new Error("Invalid number of arguments to Solidity function");
      }, InvalidNumberOfRPCParams: function () {
        return new Error("Invalid number of input parameters to RPC method");
      }, InvalidConnection: function (t) {
        return new Error("CONNECTION ERROR: Couldn't connect to node " + t + ".");
      }, InvalidProvider: function () {
        return new Error("Provider not set or invalid");
      }, InvalidResponse: function (t) {
        var e = t && t.error && t.error.message ? t.error.message : "Invalid JSON RPC response: " + JSON.stringify(t);return new Error(e);
      }, ConnectionTimeout: function (t) {
        return new Error("CONNECTION TIMEOUT: timeout of " + t + " ms achived");
      } };
  }, {}], 27: [function (t, e, n) {
    var r = t("../utils/utils"),
        o = t("../solidity/coder"),
        i = t("./formatters"),
        a = t("../utils/sha3"),
        s = t("./filter"),
        c = t("./methods/watches"),
        u = function (t, e, n) {
      this._requestManager = t, this._params = e.inputs, this._name = r.transformToFullName(e), this._address = n, this._anonymous = e.anonymous;
    };u.prototype.types = function (t) {
      return this._params.filter(function (e) {
        return e.indexed === t;
      }).map(function (t) {
        return t.type;
      });
    }, u.prototype.displayName = function () {
      return r.extractDisplayName(this._name);
    }, u.prototype.typeName = function () {
      return r.extractTypeName(this._name);
    }, u.prototype.signature = function () {
      return a(this._name);
    }, u.prototype.encode = function (t, e) {
      t = t || {}, e = e || {};var n = {};["fromBlock", "toBlock"].filter(function (t) {
        return void 0 !== e[t];
      }).forEach(function (t) {
        n[t] = i.inputBlockNumberFormatter(e[t]);
      }), n.topics = [], n.address = this._address, this._anonymous || n.topics.push("0x" + this.signature());var a = this._params.filter(function (t) {
        return !0 === t.indexed;
      }).map(function (e) {
        var n = t[e.name];return void 0 === n || null === n ? null : r.isArray(n) ? n.map(function (t) {
          return "0x" + o.encodeParam(e.type, t);
        }) : "0x" + o.encodeParam(e.type, n);
      });return n.topics = n.topics.concat(a), n;
    }, u.prototype.decode = function (t) {
      t.data = t.data || "", t.topics = t.topics || [];var e = (this._anonymous ? t.topics : t.topics.slice(1)).map(function (t) {
        return t.slice(2);
      }).join(""),
          n = o.decodeParams(this.types(!0), e),
          r = t.data.slice(2),
          a = o.decodeParams(this.types(!1), r),
          s = i.outputLogFormatter(t);return s.event = this.displayName(), s.address = t.address, s.args = this._params.reduce(function (t, e) {
        return t[e.name] = e.indexed ? n.shift() : a.shift(), t;
      }, {}), delete s.data, delete s.topics, s;
    }, u.prototype.execute = function (t, e, n) {
      r.isFunction(arguments[arguments.length - 1]) && (n = arguments[arguments.length - 1], 2 === arguments.length && (e = null), 1 === arguments.length && (e = null, t = {}));var o = this.encode(t, e),
          i = this.decode.bind(this);return new s(o, "eth", this._requestManager, c.eth(), i, n);
    }, u.prototype.attachToContract = function (t) {
      var e = this.execute.bind(this),
          n = this.displayName();t[n] || (t[n] = e), t[n][this.typeName()] = this.execute.bind(this, t);
    }, e.exports = u;
  }, { "../solidity/coder": 7, "../utils/sha3": 19, "../utils/utils": 20, "./filter": 29, "./formatters": 30, "./methods/watches": 43 }], 28: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("./../utils/utils"),
        i = t("./method"),
        a = t("./property");e.exports = function (t) {
      var e = function (e) {
        var n;e.property ? (t[e.property] || (t[e.property] = {}), n = t[e.property]) : n = t, e.methods && e.methods.forEach(function (e) {
          e.attachToObject(n), e.setRequestManager(t._requestManager);
        }), e.properties && e.properties.forEach(function (e) {
          e.attachToObject(n), e.setRequestManager(t._requestManager);
        });
      };return e.formatters = r, e.utils = o, e.Method = i, e.Property = a, e;
    };
  }, { "./../utils/utils": 20, "./formatters": 30, "./method": 36, "./property": 45 }], 29: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("../utils/utils"),
        i = function (t) {
      return null === t || void 0 === t ? null : 0 === (t = String(t)).indexOf("0x") ? t : o.fromUtf8(t);
    },
        a = function (t, e) {
      if (o.isString(t)) return t;switch (t = t || {}, e) {case "eth":
          return t.topics = t.topics || [], t.topics = t.topics.map(function (t) {
            return o.isArray(t) ? t.map(i) : i(t);
          }), { topics: t.topics, from: t.from, to: t.to, address: t.address, fromBlock: r.inputBlockNumberFormatter(t.fromBlock), toBlock: r.inputBlockNumberFormatter(t.toBlock) };case "shh":
          return t;}
    },
        s = function (t, e) {
      o.isString(t.options) || t.get(function (t, n) {
        t && e(t), o.isArray(n) && n.forEach(function (t) {
          e(null, t);
        });
      });
    },
        c = function (t) {
      t.requestManager.startPolling({ method: t.implementation.poll.call, params: [t.filterId] }, t.filterId, function (e, n) {
        if (e) return t.callbacks.forEach(function (t) {
          t(e);
        });o.isArray(n) && n.forEach(function (e) {
          e = t.formatter ? t.formatter(e) : e, t.callbacks.forEach(function (t) {
            t(null, e);
          });
        });
      }, t.stopWatching.bind(t));
    },
        u = function (t, e, n, r, o, i, u) {
      var f = this,
          l = {};return r.forEach(function (t) {
        t.setRequestManager(n), t.attachToObject(l);
      }), this.requestManager = n, this.options = a(t, e), this.implementation = l, this.filterId = null, this.callbacks = [], this.getLogsCallbacks = [], this.pollFilters = [], this.formatter = o, this.implementation.newFilter(this.options, function (t, e) {
        if (t) f.callbacks.forEach(function (e) {
          e(t);
        }), "function" == typeof u && u(t);else if (f.filterId = e, f.getLogsCallbacks.forEach(function (t) {
          f.get(t);
        }), f.getLogsCallbacks = [], f.callbacks.forEach(function (t) {
          s(f, t);
        }), f.callbacks.length > 0 && c(f), "function" == typeof i) return f.watch(i);
      }), this;
    };u.prototype.watch = function (t) {
      return this.callbacks.push(t), this.filterId && (s(this, t), c(this)), this;
    }, u.prototype.stopWatching = function (t) {
      if (this.requestManager.stopPolling(this.filterId), this.callbacks = [], !t) return this.implementation.uninstallFilter(this.filterId);this.implementation.uninstallFilter(this.filterId, t);
    }, u.prototype.get = function (t) {
      var e = this;if (!o.isFunction(t)) {
        if (null === this.filterId) throw new Error("Filter ID Error: filter().get() can't be chained synchronous, please provide a callback for the get() method.");return this.implementation.getLogs(this.filterId).map(function (t) {
          return e.formatter ? e.formatter(t) : t;
        });
      }return null === this.filterId ? this.getLogsCallbacks.push(t) : this.implementation.getLogs(this.filterId, function (n, r) {
        n ? t(n) : t(null, r.map(function (t) {
          return e.formatter ? e.formatter(t) : t;
        }));
      }), this;
    }, e.exports = u;
  }, { "../utils/utils": 20, "./formatters": 30 }], 30: [function (t, e, n) {
    "use strict";
    var r = t("../utils/utils"),
        o = t("../utils/config"),
        i = t("./iban"),
        a = function (t) {
      return "latest" === t || "pending" === t || "earliest" === t;
    },
        s = function (t) {
      if (void 0 !== t) return a(t) ? t : r.toHex(t);
    },
        c = function (t) {
      return null !== t.blockNumber && (t.blockNumber = r.toDecimal(t.blockNumber)), null !== t.transactionIndex && (t.transactionIndex = r.toDecimal(t.transactionIndex)), t.nonce = r.toDecimal(t.nonce), t.gas = r.toDecimal(t.gas), t.gasPrice = r.toBigNumber(t.gasPrice), t.value = r.toBigNumber(t.value), t;
    },
        u = function (t) {
      return t.blockNumber && (t.blockNumber = r.toDecimal(t.blockNumber)), t.transactionIndex && (t.transactionIndex = r.toDecimal(t.transactionIndex)), t.logIndex && (t.logIndex = r.toDecimal(t.logIndex)), t;
    },
        f = function (t) {
      var e = new i(t);if (e.isValid() && e.isDirect()) return "0x" + e.address();if (r.isStrictAddress(t)) return t;if (r.isAddress(t)) return "0x" + t;throw new Error("invalid address");
    };e.exports = { inputDefaultBlockNumberFormatter: function (t) {
        return void 0 === t ? o.defaultBlock : s(t);
      }, inputBlockNumberFormatter: s, inputCallFormatter: function (t) {
        return t.from = t.from || o.defaultAccount, t.from && (t.from = f(t.from)), t.to && (t.to = f(t.to)), ["gasPrice", "gas", "value", "nonce"].filter(function (e) {
          return void 0 !== t[e];
        }).forEach(function (e) {
          t[e] = r.fromDecimal(t[e]);
        }), t;
      }, inputTransactionFormatter: function (t) {
        return t.from = t.from || o.defaultAccount, t.from = f(t.from), t.to && (t.to = f(t.to)), ["gasPrice", "gas", "value", "nonce"].filter(function (e) {
          return void 0 !== t[e];
        }).forEach(function (e) {
          t[e] = r.fromDecimal(t[e]);
        }), t;
      }, inputAddressFormatter: f, inputPostFormatter: function (t) {
        return t.ttl = r.fromDecimal(t.ttl), t.workToProve = r.fromDecimal(t.workToProve), t.priority = r.fromDecimal(t.priority), r.isArray(t.topics) || (t.topics = t.topics ? [t.topics] : []), t.topics = t.topics.map(function (t) {
          return 0 === t.indexOf("0x") ? t : r.fromUtf8(t);
        }), t;
      }, outputBigNumberFormatter: function (t) {
        return r.toBigNumber(t);
      }, outputTransactionFormatter: c, outputTransactionReceiptFormatter: function (t) {
        return null !== t.blockNumber && (t.blockNumber = r.toDecimal(t.blockNumber)), null !== t.transactionIndex && (t.transactionIndex = r.toDecimal(t.transactionIndex)), t.cumulativeGasUsed = r.toDecimal(t.cumulativeGasUsed), t.gasUsed = r.toDecimal(t.gasUsed), r.isArray(t.logs) && (t.logs = t.logs.map(function (t) {
          return u(t);
        })), t;
      }, outputBlockFormatter: function (t) {
        return t.gasLimit = r.toDecimal(t.gasLimit), t.gasUsed = r.toDecimal(t.gasUsed), t.size = r.toDecimal(t.size), t.timestamp = r.toDecimal(t.timestamp), null !== t.number && (t.number = r.toDecimal(t.number)), t.difficulty = r.toBigNumber(t.difficulty), t.totalDifficulty = r.toBigNumber(t.totalDifficulty), r.isArray(t.transactions) && t.transactions.forEach(function (t) {
          if (!r.isString(t)) return c(t);
        }), t;
      }, outputLogFormatter: u, outputPostFormatter: function (t) {
        return t.expiry = r.toDecimal(t.expiry), t.sent = r.toDecimal(t.sent), t.ttl = r.toDecimal(t.ttl), t.workProved = r.toDecimal(t.workProved), t.topics || (t.topics = []), t.topics = t.topics.map(function (t) {
          return r.toAscii(t);
        }), t;
      }, outputSyncingFormatter: function (t) {
        return t ? (t.startingBlock = r.toDecimal(t.startingBlock), t.currentBlock = r.toDecimal(t.currentBlock), t.highestBlock = r.toDecimal(t.highestBlock), t.knownStates && (t.knownStates = r.toDecimal(t.knownStates), t.pulledStates = r.toDecimal(t.pulledStates)), t) : t;
      } };
  }, { "../utils/config": 18, "../utils/utils": 20, "./iban": 33 }], 31: [function (t, e, n) {
    var r = t("../solidity/coder"),
        o = t("../utils/utils"),
        i = t("./errors"),
        a = t("./formatters"),
        s = t("../utils/sha3"),
        c = function (t, e, n) {
      this._eth = t, this._inputTypes = e.inputs.map(function (t) {
        return t.type;
      }), this._outputTypes = e.outputs.map(function (t) {
        return t.type;
      }), this._constant = e.constant, this._payable = e.payable, this._name = o.transformToFullName(e), this._address = n;
    };c.prototype.extractCallback = function (t) {
      if (o.isFunction(t[t.length - 1])) return t.pop();
    }, c.prototype.extractDefaultBlock = function (t) {
      if (t.length > this._inputTypes.length && !o.isObject(t[t.length - 1])) return a.inputDefaultBlockNumberFormatter(t.pop());
    }, c.prototype.validateArgs = function (t) {
      if (t.filter(function (t) {
        return !(!0 === o.isObject(t) && !1 === o.isArray(t) && !1 === o.isBigNumber(t));
      }).length !== this._inputTypes.length) throw i.InvalidNumberOfSolidityArgs();
    }, c.prototype.toPayload = function (t) {
      var e = {};return t.length > this._inputTypes.length && o.isObject(t[t.length - 1]) && (e = t[t.length - 1]), this.validateArgs(t), e.to = this._address, e.data = "0x" + this.signature() + r.encodeParams(this._inputTypes, t), e;
    }, c.prototype.signature = function () {
      return s(this._name).slice(0, 8);
    }, c.prototype.unpackOutput = function (t) {
      if (t) {
        t = t.length >= 2 ? t.slice(2) : t;var e = r.decodeParams(this._outputTypes, t);return 1 === e.length ? e[0] : e;
      }
    }, c.prototype.call = function () {
      var t = Array.prototype.slice.call(arguments).filter(function (t) {
        return void 0 !== t;
      }),
          e = this.extractCallback(t),
          n = this.extractDefaultBlock(t),
          r = this.toPayload(t);if (!e) {
        var o = this._eth.call(r, n);return this.unpackOutput(o);
      }var i = this;this._eth.call(r, n, function (t, n) {
        if (t) return e(t, null);var r = null;try {
          r = i.unpackOutput(n);
        } catch (e) {
          t = e;
        }e(t, r);
      });
    }, c.prototype.sendTransaction = function () {
      var t = Array.prototype.slice.call(arguments).filter(function (t) {
        return void 0 !== t;
      }),
          e = this.extractCallback(t),
          n = this.toPayload(t);if (n.value > 0 && !this._payable) throw new Error("Cannot send value to non-payable function");if (!e) return this._eth.sendTransaction(n);this._eth.sendTransaction(n, e);
    }, c.prototype.estimateGas = function () {
      var t = Array.prototype.slice.call(arguments),
          e = this.extractCallback(t),
          n = this.toPayload(t);if (!e) return this._eth.estimateGas(n);this._eth.estimateGas(n, e);
    }, c.prototype.getData = function () {
      var t = Array.prototype.slice.call(arguments);return this.toPayload(t).data;
    }, c.prototype.displayName = function () {
      return o.extractDisplayName(this._name);
    }, c.prototype.typeName = function () {
      return o.extractTypeName(this._name);
    }, c.prototype.request = function () {
      var t = Array.prototype.slice.call(arguments),
          e = this.extractCallback(t),
          n = this.toPayload(t),
          r = this.unpackOutput.bind(this);return { method: this._constant ? "eth_call" : "eth_sendTransaction", callback: e, params: [n], format: r };
    }, c.prototype.execute = function () {
      return !this._constant ? this.sendTransaction.apply(this, Array.prototype.slice.call(arguments)) : this.call.apply(this, Array.prototype.slice.call(arguments));
    }, c.prototype.attachToContract = function (t) {
      var e = this.execute.bind(this);e.request = this.request.bind(this), e.call = this.call.bind(this), e.sendTransaction = this.sendTransaction.bind(this), e.estimateGas = this.estimateGas.bind(this), e.getData = this.getData.bind(this);var n = this.displayName();t[n] || (t[n] = e), t[n][this.typeName()] = e;
    }, e.exports = c;
  }, { "../solidity/coder": 7, "../utils/sha3": 19, "../utils/utils": 20, "./errors": 26, "./formatters": 30 }], 32: [function (t, e, n) {
    var r = t("./errors");"undefined" != typeof window && window.XMLHttpRequest ? XMLHttpRequest = window.XMLHttpRequest : XMLHttpRequest = t("xmlhttprequest").XMLHttpRequest;var o = t("xhr2"),
        i = function (t, e, n, r) {
      this.host = t || "http://localhost:8545", this.timeout = e || 0, this.user = n, this.password = r;
    };i.prototype.prepareRequest = function (t) {
      var e;if (t ? (e = new o()).timeout = this.timeout : e = new XMLHttpRequest(), e.open("POST", this.host, t), this.user && this.password) {
        var n = "Basic " + new Buffer(this.user + ":" + this.password).toString("base64");e.setRequestHeader("Authorization", n);
      }return e.setRequestHeader("Content-Type", "application/json"), e;
    }, i.prototype.send = function (t) {
      var e = this.prepareRequest(!1);try {
        e.send(JSON.stringify(t));
      } catch (t) {
        throw r.InvalidConnection(this.host);
      }var n = e.responseText;try {
        n = JSON.parse(n);
      } catch (t) {
        throw r.InvalidResponse(e.responseText);
      }return n;
    }, i.prototype.sendAsync = function (t, e) {
      var n = this.prepareRequest(!0);n.onreadystatechange = function () {
        if (4 === n.readyState && 1 !== n.timeout) {
          var t = n.responseText,
              o = null;try {
            t = JSON.parse(t);
          } catch (t) {
            o = r.InvalidResponse(n.responseText);
          }e(o, t);
        }
      }, n.ontimeout = function () {
        e(r.ConnectionTimeout(this.timeout));
      };try {
        n.send(JSON.stringify(t));
      } catch (t) {
        e(r.InvalidConnection(this.host));
      }
    }, i.prototype.isConnected = function () {
      try {
        return this.send({ id: 9999999999, jsonrpc: "2.0", method: "net_listening", params: [] }), !0;
      } catch (t) {
        return !1;
      }
    }, e.exports = i;
  }, { "./errors": 26, xhr2: 85, xmlhttprequest: 17 }], 33: [function (t, e, n) {
    var r = t("bignumber.js"),
        o = function (t, e) {
      for (var n = t; n.length < 2 * e;) n = "0" + n;return n;
    },
        i = function (t) {
      var e = "A".charCodeAt(0),
          n = "Z".charCodeAt(0);return t = t.toUpperCase(), (t = t.substr(4) + t.substr(0, 4)).split("").map(function (t) {
        var r = t.charCodeAt(0);return r >= e && r <= n ? r - e + 10 : t;
      }).join("");
    },
        a = function (t) {
      for (var e, n = t; n.length > 2;) e = n.slice(0, 9), n = parseInt(e, 10) % 97 + n.slice(e.length);return parseInt(n, 10) % 97;
    },
        s = function (t) {
      this._iban = t;
    };s.fromAddress = function (t) {
      var e = new r(t, 16).toString(36),
          n = o(e, 15);return s.fromBban(n.toUpperCase());
    }, s.fromBban = function (t) {
      var e = ("0" + (98 - a(i("XE00" + t)))).slice(-2);return new s("XE" + e + t);
    }, s.createIndirect = function (t) {
      return s.fromBban("ETH" + t.institution + t.identifier);
    }, s.isValid = function (t) {
      return new s(t).isValid();
    }, s.prototype.isValid = function () {
      return (/^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban) && 1 === a(i(this._iban))
      );
    }, s.prototype.isDirect = function () {
      return 34 === this._iban.length || 35 === this._iban.length;
    }, s.prototype.isIndirect = function () {
      return 20 === this._iban.length;
    }, s.prototype.checksum = function () {
      return this._iban.substr(2, 2);
    }, s.prototype.institution = function () {
      return this.isIndirect() ? this._iban.substr(7, 4) : "";
    }, s.prototype.client = function () {
      return this.isIndirect() ? this._iban.substr(11) : "";
    }, s.prototype.address = function () {
      if (this.isDirect()) {
        var t = this._iban.substr(4),
            e = new r(t, 36);return o(e.toString(16), 20);
      }return "";
    }, s.prototype.toString = function () {
      return this._iban;
    }, e.exports = s;
  }, { "bignumber.js": "bignumber.js" }], 34: [function (t, e, n) {
    "use strict";
    var r = t("../utils/utils"),
        o = t("./errors"),
        i = function (t, e) {
      var n = this;this.responseCallbacks = {}, this.path = t, this.connection = e.connect({ path: this.path }), this.connection.on("error", function (t) {
        console.error("IPC Connection Error", t), n._timeout();
      }), this.connection.on("end", function () {
        n._timeout();
      }), this.connection.on("data", function (t) {
        n._parseResponse(t.toString()).forEach(function (t) {
          var e = null;r.isArray(t) ? t.forEach(function (t) {
            n.responseCallbacks[t.id] && (e = t.id);
          }) : e = t.id, n.responseCallbacks[e] && (n.responseCallbacks[e](null, t), delete n.responseCallbacks[e]);
        });
      });
    };i.prototype._parseResponse = function (t) {
      var e = this,
          n = [];return t.replace(/\}[\n\r]?\{/g, "}|--|{").replace(/\}\][\n\r]?\[\{/g, "}]|--|[{").replace(/\}[\n\r]?\[\{/g, "}|--|[{").replace(/\}\][\n\r]?\{/g, "}]|--|{").split("|--|").forEach(function (t) {
        e.lastChunk && (t = e.lastChunk + t);var r = null;try {
          r = JSON.parse(t);
        } catch (n) {
          return e.lastChunk = t, clearTimeout(e.lastChunkTimeout), void (e.lastChunkTimeout = setTimeout(function () {
            throw e._timeout(), o.InvalidResponse(t);
          }, 15e3));
        }clearTimeout(e.lastChunkTimeout), e.lastChunk = null, r && n.push(r);
      }), n;
    }, i.prototype._addResponseCallback = function (t, e) {
      var n = t.id || t[0].id,
          r = t.method || t[0].method;this.responseCallbacks[n] = e, this.responseCallbacks[n].method = r;
    }, i.prototype._timeout = function () {
      for (var t in this.responseCallbacks) this.responseCallbacks.hasOwnProperty(t) && (this.responseCallbacks[t](o.InvalidConnection("on IPC")), delete this.responseCallbacks[t]);
    }, i.prototype.isConnected = function () {
      var t = this;return t.connection.writable || t.connection.connect({ path: t.path }), !!this.connection.writable;
    }, i.prototype.send = function (t) {
      if (this.connection.writeSync) {
        var e;this.connection.writable || this.connection.connect({ path: this.path });var n = this.connection.writeSync(JSON.stringify(t));try {
          e = JSON.parse(n);
        } catch (t) {
          throw o.InvalidResponse(n);
        }return e;
      }throw new Error('You tried to send "' + t.method + '" synchronously. Synchronous requests are not supported by the IPC provider.');
    }, i.prototype.sendAsync = function (t, e) {
      this.connection.writable || this.connection.connect({ path: this.path }), this.connection.write(JSON.stringify(t)), this._addResponseCallback(t, e);
    }, e.exports = i;
  }, { "../utils/utils": 20, "./errors": 26 }], 35: [function (t, e, n) {
    var r = { messageId: 0 };r.toPayload = function (t, e) {
      return t || console.error("jsonrpc method should be specified!"), r.messageId++, { jsonrpc: "2.0", id: r.messageId, method: t, params: e || [] };
    }, r.isValidResponse = function (t) {
      function e(t) {
        return !!t && !t.error && "2.0" === t.jsonrpc && "number" == typeof t.id && void 0 !== t.result;
      }return Array.isArray(t) ? t.every(e) : e(t);
    }, r.toBatchPayload = function (t) {
      return t.map(function (t) {
        return r.toPayload(t.method, t.params);
      });
    }, e.exports = r;
  }, {}], 36: [function (t, e, n) {
    var r = t("../utils/utils"),
        o = t("./errors"),
        i = function (t) {
      this.name = t.name, this.call = t.call, this.params = t.params || 0, this.inputFormatter = t.inputFormatter, this.outputFormatter = t.outputFormatter, this.requestManager = null;
    };i.prototype.setRequestManager = function (t) {
      this.requestManager = t;
    }, i.prototype.getCall = function (t) {
      return r.isFunction(this.call) ? this.call(t) : this.call;
    }, i.prototype.extractCallback = function (t) {
      if (r.isFunction(t[t.length - 1])) return t.pop();
    }, i.prototype.validateArgs = function (t) {
      if (t.length !== this.params) throw o.InvalidNumberOfRPCParams();
    }, i.prototype.formatInput = function (t) {
      return this.inputFormatter ? this.inputFormatter.map(function (e, n) {
        return e ? e(t[n]) : t[n];
      }) : t;
    }, i.prototype.formatOutput = function (t) {
      return this.outputFormatter && t ? this.outputFormatter(t) : t;
    }, i.prototype.toPayload = function (t) {
      var e = this.getCall(t),
          n = this.extractCallback(t),
          r = this.formatInput(t);return this.validateArgs(r), { method: e, params: r, callback: n };
    }, i.prototype.attachToObject = function (t) {
      var e = this.buildCall();e.call = this.call;var n = this.name.split(".");n.length > 1 ? (t[n[0]] = t[n[0]] || {}, t[n[0]][n[1]] = e) : t[n[0]] = e;
    }, i.prototype.buildCall = function () {
      var t = this,
          e = function () {
        var e = t.toPayload(Array.prototype.slice.call(arguments));return e.callback ? t.requestManager.sendAsync(e, function (n, r) {
          e.callback(n, t.formatOutput(r));
        }) : t.formatOutput(t.requestManager.send(e));
      };return e.request = this.request.bind(this), e;
    }, i.prototype.request = function () {
      var t = this.toPayload(Array.prototype.slice.call(arguments));return t.format = this.formatOutput.bind(this), t;
    }, e.exports = i;
  }, { "../utils/utils": 20, "./errors": 26 }], 37: [function (t, e, n) {
    var r = t("../method"),
        o = function () {
      return [new r({ name: "putString", call: "db_putString", params: 3 }), new r({ name: "getString", call: "db_getString", params: 2 }), new r({ name: "putHex", call: "db_putHex", params: 3 }), new r({ name: "getHex", call: "db_getHex", params: 2 })];
    };e.exports = function (t) {
      this._requestManager = t._requestManager;var e = this;o().forEach(function (n) {
        n.attachToObject(e), n.setRequestManager(t._requestManager);
      });
    };
  }, { "../method": 36 }], 38: [function (t, e, n) {
    "use strict";
    function r(t) {
      this._requestManager = t._requestManager;var e = this;w().forEach(function (t) {
        t.attachToObject(e), t.setRequestManager(e._requestManager);
      }), x().forEach(function (t) {
        t.attachToObject(e), t.setRequestManager(e._requestManager);
      }), this.iban = d, this.sendIBANTransaction = m.bind(null, this);
    }var o = t("../formatters"),
        i = t("../../utils/utils"),
        a = t("../method"),
        s = t("../property"),
        c = t("../../utils/config"),
        u = t("../contract"),
        f = t("./watches"),
        l = t("../filter"),
        p = t("../syncing"),
        h = t("../namereg"),
        d = t("../iban"),
        m = t("../transfer"),
        y = function (t) {
      return i.isString(t[0]) && 0 === t[0].indexOf("0x") ? "eth_getBlockByHash" : "eth_getBlockByNumber";
    },
        g = function (t) {
      return i.isString(t[0]) && 0 === t[0].indexOf("0x") ? "eth_getTransactionByBlockHashAndIndex" : "eth_getTransactionByBlockNumberAndIndex";
    },
        v = function (t) {
      return i.isString(t[0]) && 0 === t[0].indexOf("0x") ? "eth_getUncleByBlockHashAndIndex" : "eth_getUncleByBlockNumberAndIndex";
    },
        b = function (t) {
      return i.isString(t[0]) && 0 === t[0].indexOf("0x") ? "eth_getBlockTransactionCountByHash" : "eth_getBlockTransactionCountByNumber";
    },
        _ = function (t) {
      return i.isString(t[0]) && 0 === t[0].indexOf("0x") ? "eth_getUncleCountByBlockHash" : "eth_getUncleCountByBlockNumber";
    };Object.defineProperty(r.prototype, "defaultBlock", { get: function () {
        return c.defaultBlock;
      }, set: function (t) {
        return c.defaultBlock = t, t;
      } }), Object.defineProperty(r.prototype, "defaultAccount", { get: function () {
        return c.defaultAccount;
      }, set: function (t) {
        return c.defaultAccount = t, t;
      } });var w = function () {
      var t = new a({ name: "getBalance", call: "eth_getBalance", params: 2, inputFormatter: [o.inputAddressFormatter, o.inputDefaultBlockNumberFormatter], outputFormatter: o.outputBigNumberFormatter }),
          e = new a({ name: "getStorageAt", call: "eth_getStorageAt", params: 3, inputFormatter: [null, i.toHex, o.inputDefaultBlockNumberFormatter] }),
          n = new a({ name: "getCode", call: "eth_getCode", params: 2, inputFormatter: [o.inputAddressFormatter, o.inputDefaultBlockNumberFormatter] }),
          r = new a({ name: "getBlock", call: y, params: 2, inputFormatter: [o.inputBlockNumberFormatter, function (t) {
          return !!t;
        }], outputFormatter: o.outputBlockFormatter }),
          s = new a({ name: "getUncle", call: v, params: 2, inputFormatter: [o.inputBlockNumberFormatter, i.toHex], outputFormatter: o.outputBlockFormatter }),
          c = new a({ name: "getCompilers", call: "eth_getCompilers", params: 0 }),
          u = new a({ name: "getBlockTransactionCount", call: b, params: 1, inputFormatter: [o.inputBlockNumberFormatter], outputFormatter: i.toDecimal }),
          f = new a({ name: "getBlockUncleCount", call: _, params: 1, inputFormatter: [o.inputBlockNumberFormatter], outputFormatter: i.toDecimal }),
          l = new a({ name: "getTransaction", call: "eth_getTransactionByHash", params: 1, outputFormatter: o.outputTransactionFormatter }),
          p = new a({ name: "getTransactionFromBlock", call: g, params: 2, inputFormatter: [o.inputBlockNumberFormatter, i.toHex], outputFormatter: o.outputTransactionFormatter }),
          h = new a({ name: "getTransactionReceipt", call: "eth_getTransactionReceipt", params: 1, outputFormatter: o.outputTransactionReceiptFormatter }),
          d = new a({ name: "getTransactionCount", call: "eth_getTransactionCount", params: 2, inputFormatter: [null, o.inputDefaultBlockNumberFormatter], outputFormatter: i.toDecimal }),
          m = new a({ name: "sendRawTransaction", call: "eth_sendRawTransaction", params: 1, inputFormatter: [null] }),
          w = new a({ name: "sendTransaction", call: "eth_sendTransaction", params: 1, inputFormatter: [o.inputTransactionFormatter] }),
          x = new a({ name: "signTransaction", call: "eth_signTransaction", params: 1, inputFormatter: [o.inputTransactionFormatter] }),
          k = new a({ name: "sign", call: "eth_sign", params: 2, inputFormatter: [o.inputAddressFormatter, null] });return [t, e, n, r, s, c, u, f, l, p, h, d, new a({ name: "call", call: "eth_call", params: 2, inputFormatter: [o.inputCallFormatter, o.inputDefaultBlockNumberFormatter] }), new a({ name: "estimateGas", call: "eth_estimateGas", params: 1, inputFormatter: [o.inputCallFormatter], outputFormatter: i.toDecimal }), m, x, w, k, new a({ name: "compile.solidity", call: "eth_compileSolidity", params: 1 }), new a({ name: "compile.lll", call: "eth_compileLLL", params: 1 }), new a({ name: "compile.serpent", call: "eth_compileSerpent", params: 1 }), new a({ name: "submitWork", call: "eth_submitWork", params: 3 }), new a({ name: "getWork", call: "eth_getWork", params: 0 })];
    },
        x = function () {
      return [new s({ name: "coinbase", getter: "eth_coinbase" }), new s({ name: "mining", getter: "eth_mining" }), new s({ name: "hashrate", getter: "eth_hashrate", outputFormatter: i.toDecimal }), new s({ name: "syncing", getter: "eth_syncing", outputFormatter: o.outputSyncingFormatter }), new s({ name: "gasPrice", getter: "eth_gasPrice", outputFormatter: o.outputBigNumberFormatter }), new s({ name: "accounts", getter: "eth_accounts" }), new s({ name: "blockNumber", getter: "eth_blockNumber", outputFormatter: i.toDecimal }), new s({ name: "protocolVersion", getter: "eth_protocolVersion" })];
    };r.prototype.contract = function (t) {
      return new u(this, t);
    }, r.prototype.filter = function (t, e, n) {
      return new l(t, "eth", this._requestManager, f.eth(), o.outputLogFormatter, e, n);
    }, r.prototype.namereg = function () {
      return this.contract(h.global.abi).at(h.global.address);
    }, r.prototype.icapNamereg = function () {
      return this.contract(h.icap.abi).at(h.icap.address);
    }, r.prototype.isSyncing = function (t) {
      return new p(this._requestManager, t);
    }, e.exports = r;
  }, { "../../utils/config": 18, "../../utils/utils": 20, "../contract": 25, "../filter": 29, "../formatters": 30, "../iban": 33, "../method": 36, "../namereg": 44, "../property": 45, "../syncing": 48, "../transfer": 49, "./watches": 43 }], 39: [function (t, e, n) {
    var r = t("../../utils/utils"),
        o = t("../property"),
        i = function () {
      return [new o({ name: "listening", getter: "net_listening" }), new o({ name: "peerCount", getter: "net_peerCount", outputFormatter: r.toDecimal })];
    };e.exports = function (t) {
      this._requestManager = t._requestManager;var e = this;i().forEach(function (n) {
        n.attachToObject(e), n.setRequestManager(t._requestManager);
      });
    };
  }, { "../../utils/utils": 20, "../property": 45 }], 40: [function (t, e, n) {
    "use strict";
    var r = t("../method"),
        o = t("../property"),
        i = t("../formatters"),
        a = function () {
      var t = new r({ name: "newAccount", call: "personal_newAccount", params: 1, inputFormatter: [null] }),
          e = new r({ name: "importRawKey", call: "personal_importRawKey", params: 2 }),
          n = new r({ name: "sign", call: "personal_sign", params: 3, inputFormatter: [null, i.inputAddressFormatter, null] }),
          o = new r({ name: "ecRecover", call: "personal_ecRecover", params: 2 });return [t, e, new r({ name: "unlockAccount", call: "personal_unlockAccount", params: 3, inputFormatter: [i.inputAddressFormatter, null, null] }), o, n, new r({ name: "sendTransaction", call: "personal_sendTransaction", params: 2, inputFormatter: [i.inputTransactionFormatter, null] }), new r({ name: "lockAccount", call: "personal_lockAccount", params: 1, inputFormatter: [i.inputAddressFormatter] })];
    },
        s = function () {
      return [new o({ name: "listAccounts", getter: "personal_listAccounts" })];
    };e.exports = function (t) {
      this._requestManager = t._requestManager;var e = this;a().forEach(function (t) {
        t.attachToObject(e), t.setRequestManager(e._requestManager);
      }), s().forEach(function (t) {
        t.attachToObject(e), t.setRequestManager(e._requestManager);
      });
    };
  }, { "../formatters": 30, "../method": 36, "../property": 45 }], 41: [function (t, e, n) {
    var r = t("../method"),
        o = t("../filter"),
        i = t("./watches"),
        a = function (t) {
      this._requestManager = t._requestManager;var e = this;s().forEach(function (t) {
        t.attachToObject(e), t.setRequestManager(e._requestManager);
      });
    };a.prototype.newMessageFilter = function (t, e, n) {
      return new o(t, "shh", this._requestManager, i.shh(), null, e, n);
    };var s = function () {
      return [new r({ name: "version", call: "shh_version", params: 0 }), new r({ name: "info", call: "shh_info", params: 0 }), new r({ name: "setMaxMessageSize", call: "shh_setMaxMessageSize", params: 1 }), new r({ name: "setMinPoW", call: "shh_setMinPoW", params: 1 }), new r({ name: "markTrustedPeer", call: "shh_markTrustedPeer", params: 1 }), new r({ name: "newKeyPair", call: "shh_newKeyPair", params: 0 }), new r({ name: "addPrivateKey", call: "shh_addPrivateKey", params: 1 }), new r({ name: "deleteKeyPair", call: "shh_deleteKeyPair", params: 1 }), new r({ name: "hasKeyPair", call: "shh_hasKeyPair", params: 1 }), new r({ name: "getPublicKey", call: "shh_getPublicKey", params: 1 }), new r({ name: "getPrivateKey", call: "shh_getPrivateKey", params: 1 }), new r({ name: "newSymKey", call: "shh_newSymKey", params: 0 }), new r({ name: "addSymKey", call: "shh_addSymKey", params: 1 }), new r({ name: "generateSymKeyFromPassword", call: "shh_generateSymKeyFromPassword", params: 1 }), new r({ name: "hasSymKey", call: "shh_hasSymKey", params: 1 }), new r({ name: "getSymKey", call: "shh_getSymKey", params: 1 }), new r({ name: "deleteSymKey", call: "shh_deleteSymKey", params: 1 }), new r({ name: "post", call: "shh_post", params: 1, inputFormatter: [null] })];
    };e.exports = a;
  }, { "../filter": 29, "../method": 36, "./watches": 43 }], 42: [function (t, e, n) {
    "use strict";
    var r = t("../method"),
        o = t("../property"),
        i = function () {
      return [new r({ name: "blockNetworkRead", call: "bzz_blockNetworkRead", params: 1, inputFormatter: [null] }), new r({ name: "syncEnabled", call: "bzz_syncEnabled", params: 1, inputFormatter: [null] }), new r({ name: "swapEnabled", call: "bzz_swapEnabled", params: 1, inputFormatter: [null] }), new r({ name: "download", call: "bzz_download", params: 2, inputFormatter: [null, null] }), new r({ name: "upload", call: "bzz_upload", params: 2, inputFormatter: [null, null] }), new r({ name: "retrieve", call: "bzz_retrieve", params: 1, inputFormatter: [null] }), new r({ name: "store", call: "bzz_store", params: 2, inputFormatter: [null, null] }), new r({ name: "get", call: "bzz_get", params: 1, inputFormatter: [null] }), new r({ name: "put", call: "bzz_put", params: 2, inputFormatter: [null, null] }), new r({ name: "modify", call: "bzz_modify", params: 4, inputFormatter: [null, null, null, null] })];
    },
        a = function () {
      return [new o({ name: "hive", getter: "bzz_hive" }), new o({ name: "info", getter: "bzz_info" })];
    };e.exports = function (t) {
      this._requestManager = t._requestManager;var e = this;i().forEach(function (t) {
        t.attachToObject(e), t.setRequestManager(e._requestManager);
      }), a().forEach(function (t) {
        t.attachToObject(e), t.setRequestManager(e._requestManager);
      });
    };
  }, { "../method": 36, "../property": 45 }], 43: [function (t, e, n) {
    var r = t("../method");e.exports = { eth: function () {
        return [new r({ name: "newFilter", call: function (t) {
            switch (t[0]) {case "latest":
                return t.shift(), this.params = 0, "eth_newBlockFilter";case "pending":
                return t.shift(), this.params = 0, "eth_newPendingTransactionFilter";default:
                return "eth_newFilter";}
          }, params: 1 }), new r({ name: "uninstallFilter", call: "eth_uninstallFilter", params: 1 }), new r({ name: "getLogs", call: "eth_getFilterLogs", params: 1 }), new r({ name: "poll", call: "eth_getFilterChanges", params: 1 })];
      }, shh: function () {
        return [new r({ name: "newFilter", call: "shh_newMessageFilter", params: 1 }), new r({ name: "uninstallFilter", call: "shh_deleteMessageFilter", params: 1 }), new r({ name: "getLogs", call: "shh_getFilterMessages", params: 1 }), new r({ name: "poll", call: "shh_getFilterMessages", params: 1 })];
      } };
  }, { "../method": 36 }], 44: [function (t, e, n) {
    var r = t("../contracts/GlobalRegistrar.json"),
        o = t("../contracts/ICAPRegistrar.json");e.exports = { global: { abi: r, address: "0xc6d9d2cd449a754c494264e1809c50e34d64562b" }, icap: { abi: o, address: "0xa1a111bc074c9cfa781f0c38e63bd51c91b8af00" } };
  }, { "../contracts/GlobalRegistrar.json": 1, "../contracts/ICAPRegistrar.json": 2 }], 45: [function (t, e, n) {
    var r = t("../utils/utils"),
        o = function (t) {
      this.name = t.name, this.getter = t.getter, this.setter = t.setter, this.outputFormatter = t.outputFormatter, this.inputFormatter = t.inputFormatter, this.requestManager = null;
    };o.prototype.setRequestManager = function (t) {
      this.requestManager = t;
    }, o.prototype.formatInput = function (t) {
      return this.inputFormatter ? this.inputFormatter(t) : t;
    }, o.prototype.formatOutput = function (t) {
      return this.outputFormatter && null !== t && void 0 !== t ? this.outputFormatter(t) : t;
    }, o.prototype.extractCallback = function (t) {
      if (r.isFunction(t[t.length - 1])) return t.pop();
    }, o.prototype.attachToObject = function (t) {
      var e = { get: this.buildGet(), enumerable: !0 },
          n = this.name.split("."),
          r = n[0];n.length > 1 && (t[n[0]] = t[n[0]] || {}, t = t[n[0]], r = n[1]), Object.defineProperty(t, r, e), t[i(r)] = this.buildAsyncGet();
    };var i = function (t) {
      return "get" + t.charAt(0).toUpperCase() + t.slice(1);
    };o.prototype.buildGet = function () {
      var t = this;return function () {
        return t.formatOutput(t.requestManager.send({ method: t.getter }));
      };
    }, o.prototype.buildAsyncGet = function () {
      var t = this,
          e = function (e) {
        t.requestManager.sendAsync({ method: t.getter }, function (n, r) {
          e(n, t.formatOutput(r));
        });
      };return e.request = this.request.bind(this), e;
    }, o.prototype.request = function () {
      var t = { method: this.getter, params: [], callback: this.extractCallback(Array.prototype.slice.call(arguments)) };return t.format = this.formatOutput.bind(this), t;
    }, e.exports = o;
  }, { "../utils/utils": 20 }], 46: [function (t, e, n) {
    var r = t("./jsonrpc"),
        o = t("../utils/utils"),
        i = t("../utils/config"),
        a = t("./errors"),
        s = function (t) {
      this.provider = t, this.polls = {}, this.timeout = null;
    };s.prototype.send = function (t) {
      if (!this.provider) return console.error(a.InvalidProvider()), null;var e = r.toPayload(t.method, t.params),
          n = this.provider.send(e);if (!r.isValidResponse(n)) throw a.InvalidResponse(n);return n.result;
    }, s.prototype.sendAsync = function (t, e) {
      if (!this.provider) return e(a.InvalidProvider());var n = r.toPayload(t.method, t.params);this.provider.sendAsync(n, function (t, n) {
        return t ? e(t) : r.isValidResponse(n) ? void e(null, n.result) : e(a.InvalidResponse(n));
      });
    }, s.prototype.sendBatch = function (t, e) {
      if (!this.provider) return e(a.InvalidProvider());var n = r.toBatchPayload(t);this.provider.sendAsync(n, function (t, n) {
        return t ? e(t) : o.isArray(n) ? void e(t, n) : e(a.InvalidResponse(n));
      });
    }, s.prototype.setProvider = function (t) {
      this.provider = t;
    }, s.prototype.startPolling = function (t, e, n, r) {
      this.polls[e] = { data: t, id: e, callback: n, uninstall: r }, this.timeout || this.poll();
    }, s.prototype.stopPolling = function (t) {
      delete this.polls[t], 0 === Object.keys(this.polls).length && this.timeout && (clearTimeout(this.timeout), this.timeout = null);
    }, s.prototype.reset = function (t) {
      for (var e in this.polls) t && -1 !== e.indexOf("syncPoll_") || (this.polls[e].uninstall(), delete this.polls[e]);0 === Object.keys(this.polls).length && this.timeout && (clearTimeout(this.timeout), this.timeout = null);
    }, s.prototype.poll = function () {
      if (this.timeout = setTimeout(this.poll.bind(this), i.ETH_POLLING_TIMEOUT), 0 !== Object.keys(this.polls).length) if (this.provider) {
        var t = [],
            e = [];for (var n in this.polls) t.push(this.polls[n].data), e.push(n);if (0 !== t.length) {
          var s = r.toBatchPayload(t),
              c = {};s.forEach(function (t, n) {
            c[t.id] = e[n];
          });var u = this;this.provider.sendAsync(s, function (t, e) {
            if (!t) {
              if (!o.isArray(e)) throw a.InvalidResponse(e);e.map(function (t) {
                var e = c[t.id];return !!u.polls[e] && (t.callback = u.polls[e].callback, t);
              }).filter(function (t) {
                return !!t;
              }).filter(function (t) {
                var e = r.isValidResponse(t);return e || t.callback(a.InvalidResponse(t)), e;
              }).forEach(function (t) {
                t.callback(null, t.result);
              });
            }
          });
        }
      } else console.error(a.InvalidProvider());
    }, e.exports = s;
  }, { "../utils/config": 18, "../utils/utils": 20, "./errors": 26, "./jsonrpc": 35 }], 47: [function (t, e, n) {
    e.exports = function () {
      this.defaultBlock = "latest", this.defaultAccount = void 0;
    };
  }, {}], 48: [function (t, e, n) {
    var r = t("./formatters"),
        o = t("../utils/utils"),
        i = 1,
        a = function (t) {
      t.requestManager.startPolling({ method: "eth_syncing", params: [] }, t.pollId, function (e, n) {
        if (e) return t.callbacks.forEach(function (t) {
          t(e);
        });o.isObject(n) && n.startingBlock && (n = r.outputSyncingFormatter(n)), t.callbacks.forEach(function (e) {
          t.lastSyncState !== n && (!t.lastSyncState && o.isObject(n) && e(null, !0), setTimeout(function () {
            e(null, n);
          }, 0), t.lastSyncState = n);
        });
      }, t.stopWatching.bind(t));
    },
        s = function (t, e) {
      return this.requestManager = t, this.pollId = "syncPoll_" + i++, this.callbacks = [], this.addCallback(e), this.lastSyncState = !1, a(this), this;
    };s.prototype.addCallback = function (t) {
      return t && this.callbacks.push(t), this;
    }, s.prototype.stopWatching = function () {
      this.requestManager.stopPolling(this.pollId), this.callbacks = [];
    }, e.exports = s;
  }, { "../utils/utils": 20, "./formatters": 30 }], 49: [function (t, e, n) {
    var r = t("./iban"),
        o = t("../contracts/SmartExchange.json"),
        i = function (t, e, n, r, o) {
      return t.sendTransaction({ address: n, from: e, value: r }, o);
    },
        a = function (t, e, n, r, i, a) {
      var s = o;return t.contract(s).at(n).deposit(i, { from: e, value: r }, a);
    };e.exports = function (t, e, n, o, s) {
      var c = new r(n);if (!c.isValid()) throw new Error("invalid iban address");if (c.isDirect()) return i(t, e, c.address(), o, s);if (!s) {
        var u = t.icapNamereg().addr(c.institution());return a(t, e, u, o, c.client());
      }t.icapNamereg().addr(c.institution(), function (n, r) {
        return a(t, e, r, o, c.client(), s);
      });
    };
  }, { "../contracts/SmartExchange.json": 3, "./iban": 33 }], 50: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./enc-base64"), t("./md5"), t("./evpkdf"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        var e = t,
            n = e.lib.BlockCipher,
            r = e.algo,
            o = [],
            i = [],
            a = [],
            s = [],
            c = [],
            u = [],
            f = [],
            l = [],
            p = [],
            h = [];!function () {
          for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;for (var n = 0, r = 0, e = 0; e < 256; e++) {
            var d = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;d = d >>> 8 ^ 255 & d ^ 99, o[n] = d, i[d] = n;var m = t[n],
                y = t[m],
                g = t[y],
                v = 257 * t[d] ^ 16843008 * d;a[n] = v << 24 | v >>> 8, s[n] = v << 16 | v >>> 16, c[n] = v << 8 | v >>> 24, u[n] = v;v = 16843009 * g ^ 65537 * y ^ 257 * m ^ 16843008 * n;f[d] = v << 24 | v >>> 8, l[d] = v << 16 | v >>> 16, p[d] = v << 8 | v >>> 24, h[d] = v, n ? (n = m ^ t[t[t[g ^ m]]], r ^= t[t[r]]) : n = r = 1;
          }
        }();var d = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            m = r.AES = n.extend({ _doReset: function () {
            if (!this._nRounds || this._keyPriorReset !== this._key) {
              for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), i = this._keySchedule = [], a = 0; a < r; a++) if (a < n) i[a] = e[a];else {
                u = i[a - 1];a % n ? n > 6 && a % n == 4 && (u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u]) : (u = o[(u = u << 8 | u >>> 24) >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u], u ^= d[a / n | 0] << 24), i[a] = i[a - n] ^ u;
              }for (var s = this._invKeySchedule = [], c = 0; c < r; c++) {
                a = r - c;if (c % 4) u = i[a];else var u = i[a - 4];s[c] = c < 4 || a <= 4 ? u : f[o[u >>> 24]] ^ l[o[u >>> 16 & 255]] ^ p[o[u >>> 8 & 255]] ^ h[o[255 & u]];
              }
            }
          }, encryptBlock: function (t, e) {
            this._doCryptBlock(t, e, this._keySchedule, a, s, c, u, o);
          }, decryptBlock: function (t, e) {
            n = t[e + 1];t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, f, l, p, h, i);var n = t[e + 1];t[e + 1] = t[e + 3], t[e + 3] = n;
          }, _doCryptBlock: function (t, e, n, r, o, i, a, s) {
            for (var c = this._nRounds, u = t[e] ^ n[0], f = t[e + 1] ^ n[1], l = t[e + 2] ^ n[2], p = t[e + 3] ^ n[3], h = 4, d = 1; d < c; d++) {
              var m = r[u >>> 24] ^ o[f >>> 16 & 255] ^ i[l >>> 8 & 255] ^ a[255 & p] ^ n[h++],
                  y = r[f >>> 24] ^ o[l >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & u] ^ n[h++],
                  g = r[l >>> 24] ^ o[p >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & f] ^ n[h++],
                  v = r[p >>> 24] ^ o[u >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & l] ^ n[h++];u = m, f = y, l = g, p = v;
            }var m = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ n[h++],
                y = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & u]) ^ n[h++],
                g = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & f]) ^ n[h++],
                v = (s[p >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[h++];t[e] = m, t[e + 1] = y, t[e + 2] = g, t[e + 3] = v;
          }, keySize: 8 });e.AES = n._createHelper(m);
      }(), t.AES;
    });
  }, { "./cipher-core": 51, "./core": 52, "./enc-base64": 53, "./evpkdf": 55, "./md5": 60 }], 51: [function (t, e, n) {
    !function (r, o) {
      "object" == typeof n ? e.exports = n = o(t("./core")) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      t.lib.Cipher || function (e) {
        var n = t,
            r = n.lib,
            o = r.Base,
            i = r.WordArray,
            a = r.BufferedBlockAlgorithm,
            s = n.enc,
            c = (s.Utf8, s.Base64),
            u = n.algo.EvpKDF,
            f = r.Cipher = a.extend({ cfg: o.extend(), createEncryptor: function (t, e) {
            return this.create(this._ENC_XFORM_MODE, t, e);
          }, createDecryptor: function (t, e) {
            return this.create(this._DEC_XFORM_MODE, t, e);
          }, init: function (t, e, n) {
            this.cfg = this.cfg.extend(n), this._xformMode = t, this._key = e, this.reset();
          }, reset: function () {
            a.reset.call(this), this._doReset();
          }, process: function (t) {
            return this._append(t), this._process();
          }, finalize: function (t) {
            return t && this._append(t), this._doFinalize();
          }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function () {
            function t(t) {
              return "string" == typeof t ? b : g;
            }return function (e) {
              return { encrypt: function (n, r, o) {
                  return t(r).encrypt(e, n, r, o);
                }, decrypt: function (n, r, o) {
                  return t(r).decrypt(e, n, r, o);
                } };
            };
          }() }),
            l = (r.StreamCipher = f.extend({ _doFinalize: function () {
            return this._process(!0);
          }, blockSize: 1 }), n.mode = {}),
            p = r.BlockCipherMode = o.extend({ createEncryptor: function (t, e) {
            return this.Encryptor.create(t, e);
          }, createDecryptor: function (t, e) {
            return this.Decryptor.create(t, e);
          }, init: function (t, e) {
            this._cipher = t, this._iv = e;
          } }),
            h = l.CBC = function () {
          function t(t, n, r) {
            var o = this._iv;if (o) {
              i = o;this._iv = e;
            } else var i = this._prevBlock;for (var a = 0; a < r; a++) t[n + a] ^= i[a];
          }var n = p.extend();return n.Encryptor = n.extend({ processBlock: function (e, n) {
              var r = this._cipher,
                  o = r.blockSize;t.call(this, e, n, o), r.encryptBlock(e, n), this._prevBlock = e.slice(n, n + o);
            } }), n.Decryptor = n.extend({ processBlock: function (e, n) {
              var r = this._cipher,
                  o = r.blockSize,
                  i = e.slice(n, n + o);r.decryptBlock(e, n), t.call(this, e, n, o), this._prevBlock = i;
            } }), n;
        }(),
            d = (n.pad = {}).Pkcs7 = { pad: function (t, e) {
            for (var n = 4 * e, r = n - t.sigBytes % n, o = r << 24 | r << 16 | r << 8 | r, a = [], s = 0; s < r; s += 4) a.push(o);var c = i.create(a, r);t.concat(c);
          }, unpad: function (t) {
            var e = 255 & t.words[t.sigBytes - 1 >>> 2];t.sigBytes -= e;
          } },
            m = (r.BlockCipher = f.extend({ cfg: f.cfg.extend({ mode: h, padding: d }), reset: function () {
            f.reset.call(this);var t = this.cfg,
                e = t.iv,
                n = t.mode;if (this._xformMode == this._ENC_XFORM_MODE) r = n.createEncryptor;else {
              var r = n.createDecryptor;this._minBufferSize = 1;
            }this._mode = r.call(n, this, e && e.words);
          }, _doProcessBlock: function (t, e) {
            this._mode.processBlock(t, e);
          }, _doFinalize: function () {
            var t = this.cfg.padding;if (this._xformMode == this._ENC_XFORM_MODE) {
              t.pad(this._data, this.blockSize);e = this._process(!0);
            } else {
              var e = this._process(!0);t.unpad(e);
            }return e;
          }, blockSize: 4 }), r.CipherParams = o.extend({ init: function (t) {
            this.mixIn(t);
          }, toString: function (t) {
            return (t || this.formatter).stringify(this);
          } })),
            y = (n.format = {}).OpenSSL = { stringify: function (t) {
            var e = t.ciphertext,
                n = t.salt;if (n) r = i.create([1398893684, 1701076831]).concat(n).concat(e);else var r = e;return r.toString(c);
          }, parse: function (t) {
            var e = c.parse(t),
                n = e.words;if (1398893684 == n[0] && 1701076831 == n[1]) {
              var r = i.create(n.slice(2, 4));n.splice(0, 4), e.sigBytes -= 16;
            }return m.create({ ciphertext: e, salt: r });
          } },
            g = r.SerializableCipher = o.extend({ cfg: o.extend({ format: y }), encrypt: function (t, e, n, r) {
            r = this.cfg.extend(r);var o = t.createEncryptor(n, r),
                i = o.finalize(e),
                a = o.cfg;return m.create({ ciphertext: i, key: n, iv: a.iv, algorithm: t, mode: a.mode, padding: a.padding, blockSize: t.blockSize, formatter: r.format });
          }, decrypt: function (t, e, n, r) {
            return r = this.cfg.extend(r), e = this._parse(e, r.format), t.createDecryptor(n, r).finalize(e.ciphertext);
          }, _parse: function (t, e) {
            return "string" == typeof t ? e.parse(t, this) : t;
          } }),
            v = (n.kdf = {}).OpenSSL = { execute: function (t, e, n, r) {
            r || (r = i.random(8));var o = u.create({ keySize: e + n }).compute(t, r),
                a = i.create(o.words.slice(e), 4 * n);return o.sigBytes = 4 * e, m.create({ key: o, iv: a, salt: r });
          } },
            b = r.PasswordBasedCipher = g.extend({ cfg: g.cfg.extend({ kdf: v }), encrypt: function (t, e, n, r) {
            var o = (r = this.cfg.extend(r)).kdf.execute(n, t.keySize, t.ivSize);r.iv = o.iv;var i = g.encrypt.call(this, t, e, o.key, r);return i.mixIn(o), i;
          }, decrypt: function (t, e, n, r) {
            r = this.cfg.extend(r), e = this._parse(e, r.format);var o = r.kdf.execute(n, t.keySize, t.ivSize, e.salt);return r.iv = o.iv, g.decrypt.call(this, t, e, o.key, r);
          } });
      }();
    });
  }, { "./core": 52 }], 52: [function (t, e, n) {
    !function (t, r) {
      "object" == typeof n ? e.exports = n = r() : "function" == typeof define && define.amd ? define([], r) : t.CryptoJS = r();
    }(this, function () {
      var t = t || function (t, e) {
        var n = Object.create || function () {
          function t() {}return function (e) {
            var n;return t.prototype = e, n = new t(), t.prototype = null, n;
          };
        }(),
            r = {},
            o = r.lib = {},
            i = o.Base = { extend: function (t) {
            var e = n(this);return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
              e.$super.init.apply(this, arguments);
            }), e.init.prototype = e, e.$super = this, e;
          }, create: function () {
            var t = this.extend();return t.init.apply(t, arguments), t;
          }, init: function () {}, mixIn: function (t) {
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);t.hasOwnProperty("toString") && (this.toString = t.toString);
          }, clone: function () {
            return this.init.prototype.extend(this);
          } },
            a = o.WordArray = i.extend({ init: function (t, e) {
            t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length;
          }, toString: function (t) {
            return (t || c).stringify(this);
          }, concat: function (t) {
            var e = this.words,
                n = t.words,
                r = this.sigBytes,
                o = t.sigBytes;if (this.clamp(), r % 4) for (a = 0; a < o; a++) {
              var i = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;e[r + a >>> 2] |= i << 24 - (r + a) % 4 * 8;
            } else for (var a = 0; a < o; a += 4) e[r + a >>> 2] = n[a >>> 2];return this.sigBytes += o, this;
          }, clamp: function () {
            var e = this.words,
                n = this.sigBytes;e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4);
          }, clone: function () {
            var t = i.clone.call(this);return t.words = this.words.slice(0), t;
          }, random: function (e) {
            for (var n, r = [], o = 0; o < e; o += 4) {
              var i = function (e) {
                var e = e,
                    n = 987654321,
                    r = 4294967295;return function () {
                  var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;return o /= 4294967296, (o += .5) * (t.random() > .5 ? 1 : -1);
                };
              }(4294967296 * (n || t.random()));n = 987654071 * i(), r.push(4294967296 * i() | 0);
            }return new a.init(r, e);
          } }),
            s = r.enc = {},
            c = s.Hex = { stringify: function (t) {
            for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) {
              var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16));
            }return r.join("");
          }, parse: function (t) {
            for (var e = t.length, n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;return new a.init(n, e / 2);
          } },
            u = s.Latin1 = { stringify: function (t) {
            for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o++) {
              var i = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push(String.fromCharCode(i));
            }return r.join("");
          }, parse: function (t) {
            for (var e = t.length, n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;return new a.init(n, e);
          } },
            f = s.Utf8 = { stringify: function (t) {
            try {
              return decodeURIComponent(escape(u.stringify(t)));
            } catch (t) {
              throw new Error("Malformed UTF-8 data");
            }
          }, parse: function (t) {
            return u.parse(unescape(encodeURIComponent(t)));
          } },
            l = o.BufferedBlockAlgorithm = i.extend({ reset: function () {
            this._data = new a.init(), this._nDataBytes = 0;
          }, _append: function (t) {
            "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
          }, _process: function (e) {
            var n = this._data,
                r = n.words,
                o = n.sigBytes,
                i = this.blockSize,
                s = o / (4 * i),
                c = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * i,
                u = t.min(4 * c, o);if (c) {
              for (var f = 0; f < c; f += i) this._doProcessBlock(r, f);var l = r.splice(0, c);n.sigBytes -= u;
            }return new a.init(l, u);
          }, clone: function () {
            var t = i.clone.call(this);return t._data = this._data.clone(), t;
          }, _minBufferSize: 0 }),
            p = (o.Hasher = l.extend({ cfg: i.extend(), init: function (t) {
            this.cfg = this.cfg.extend(t), this.reset();
          }, reset: function () {
            l.reset.call(this), this._doReset();
          }, update: function (t) {
            return this._append(t), this._process(), this;
          }, finalize: function (t) {
            return t && this._append(t), this._doFinalize();
          }, blockSize: 16, _createHelper: function (t) {
            return function (e, n) {
              return new t.init(n).finalize(e);
            };
          }, _createHmacHelper: function (t) {
            return function (e, n) {
              return new p.HMAC.init(t, n).finalize(e);
            };
          } }), r.algo = {});return r;
      }(Math);return t;
    });
  }, {}], 53: [function (t, e, n) {
    !function (r, o) {
      "object" == typeof n ? e.exports = n = o(t("./core")) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        function e(t, e, n) {
          for (var o = [], i = 0, a = 0; a < e; a++) if (a % 4) {
            var s = n[t.charCodeAt(a - 1)] << a % 4 * 2,
                c = n[t.charCodeAt(a)] >>> 6 - a % 4 * 2;o[i >>> 2] |= (s | c) << 24 - i % 4 * 8, i++;
          }return r.create(o, i);
        }var n = t,
            r = n.lib.WordArray;n.enc.Base64 = { stringify: function (t) {
            var e = t.words,
                n = t.sigBytes,
                r = this._map;t.clamp();for (var o = [], i = 0; i < n; i += 3) for (var a = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; s < 4 && i + .75 * s < n; s++) o.push(r.charAt(a >>> 6 * (3 - s) & 63));var c = r.charAt(64);if (c) for (; o.length % 4;) o.push(c);return o.join("");
          }, parse: function (t) {
            var n = t.length,
                r = this._map,
                o = this._reverseMap;if (!o) {
              o = this._reverseMap = [];for (var i = 0; i < r.length; i++) o[r.charCodeAt(i)] = i;
            }var a = r.charAt(64);if (a) {
              var s = t.indexOf(a);-1 !== s && (n = s);
            }return e(t, n, o);
          }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
      }(), t.enc.Base64;
    });
  }, { "./core": 52 }], 54: [function (t, e, n) {
    !function (r, o) {
      "object" == typeof n ? e.exports = n = o(t("./core")) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        function e(t) {
          return t << 8 & 4278255360 | t >>> 8 & 16711935;
        }var n = t,
            r = n.lib.WordArray,
            o = n.enc;o.Utf16 = o.Utf16BE = { stringify: function (t) {
            for (var e = t.words, n = t.sigBytes, r = [], o = 0; o < n; o += 2) {
              var i = e[o >>> 2] >>> 16 - o % 4 * 8 & 65535;r.push(String.fromCharCode(i));
            }return r.join("");
          }, parse: function (t) {
            for (var e = t.length, n = [], o = 0; o < e; o++) n[o >>> 1] |= t.charCodeAt(o) << 16 - o % 2 * 16;return r.create(n, 2 * e);
          } };o.Utf16LE = { stringify: function (t) {
            for (var n = t.words, r = t.sigBytes, o = [], i = 0; i < r; i += 2) {
              var a = e(n[i >>> 2] >>> 16 - i % 4 * 8 & 65535);o.push(String.fromCharCode(a));
            }return o.join("");
          }, parse: function (t) {
            for (var n = t.length, o = [], i = 0; i < n; i++) o[i >>> 1] |= e(t.charCodeAt(i) << 16 - i % 2 * 16);return r.create(o, 2 * n);
          } };
      }(), t.enc.Utf16;
    });
  }, { "./core": 52 }], 55: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./sha1"), t("./hmac")) : "function" == typeof define && define.amd ? define(["./core", "./sha1", "./hmac"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        var e = t,
            n = e.lib,
            r = n.Base,
            o = n.WordArray,
            i = e.algo,
            a = i.MD5,
            s = i.EvpKDF = r.extend({ cfg: r.extend({ keySize: 4, hasher: a, iterations: 1 }), init: function (t) {
            this.cfg = this.cfg.extend(t);
          }, compute: function (t, e) {
            for (var n = this.cfg, r = n.hasher.create(), i = o.create(), a = i.words, s = n.keySize, c = n.iterations; a.length < s;) {
              u && r.update(u);var u = r.update(t).finalize(e);r.reset();for (var f = 1; f < c; f++) u = r.finalize(u), r.reset();i.concat(u);
            }return i.sigBytes = 4 * s, i;
          } });e.EvpKDF = function (t, e, n) {
          return s.create(n).compute(t, e);
        };
      }(), t.EvpKDF;
    });
  }, { "./core": 52, "./hmac": 57, "./sha1": 76 }], 56: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function (e) {
        var n = t,
            r = n.lib.CipherParams,
            o = n.enc.Hex;n.format.Hex = { stringify: function (t) {
            return t.ciphertext.toString(o);
          }, parse: function (t) {
            var e = o.parse(t);return r.create({ ciphertext: e });
          } };
      }(), t.format.Hex;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 57: [function (t, e, n) {
    !function (r, o) {
      "object" == typeof n ? e.exports = n = o(t("./core")) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      !function () {
        var e = t,
            n = e.lib.Base,
            r = e.enc.Utf8;e.algo.HMAC = n.extend({ init: function (t, e) {
            t = this._hasher = new t.init(), "string" == typeof e && (e = r.parse(e));var n = t.blockSize,
                o = 4 * n;e.sigBytes > o && (e = t.finalize(e)), e.clamp();for (var i = this._oKey = e.clone(), a = this._iKey = e.clone(), s = i.words, c = a.words, u = 0; u < n; u++) s[u] ^= 1549556828, c[u] ^= 909522486;i.sigBytes = a.sigBytes = o, this.reset();
          }, reset: function () {
            var t = this._hasher;t.reset(), t.update(this._iKey);
          }, update: function (t) {
            return this._hasher.update(t), this;
          }, finalize: function (t) {
            var e = this._hasher,
                n = e.finalize(t);return e.reset(), e.finalize(this._oKey.clone().concat(n));
          } });
      }();
    });
  }, { "./core": 52 }], 58: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./x64-core"), t("./lib-typedarrays"), t("./enc-utf16"), t("./enc-base64"), t("./md5"), t("./sha1"), t("./sha256"), t("./sha224"), t("./sha512"), t("./sha384"), t("./sha3"), t("./ripemd160"), t("./hmac"), t("./pbkdf2"), t("./evpkdf"), t("./cipher-core"), t("./mode-cfb"), t("./mode-ctr"), t("./mode-ctr-gladman"), t("./mode-ofb"), t("./mode-ecb"), t("./pad-ansix923"), t("./pad-iso10126"), t("./pad-iso97971"), t("./pad-zeropadding"), t("./pad-nopadding"), t("./format-hex"), t("./aes"), t("./tripledes"), t("./rc4"), t("./rabbit"), t("./rabbit-legacy")) : "function" == typeof define && define.amd ? define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], o) : r.CryptoJS = o(r.CryptoJS);
    }(this, function (t) {
      return t;
    });
  }, { "./aes": 50, "./cipher-core": 51, "./core": 52, "./enc-base64": 53, "./enc-utf16": 54, "./evpkdf": 55, "./format-hex": 56, "./hmac": 57, "./lib-typedarrays": 59, "./md5": 60, "./mode-cfb": 61, "./mode-ctr": 63, "./mode-ctr-gladman": 62, "./mode-ecb": 64, "./mode-ofb": 65, "./pad-ansix923": 66, "./pad-iso10126": 67, "./pad-iso97971": 68, "./pad-nopadding": 69, "./pad-zeropadding": 70, "./pbkdf2": 71, "./rabbit": 73, "./rabbit-legacy": 72, "./rc4": 74, "./ripemd160": 75, "./sha1": 76, "./sha224": 77, "./sha256": 78, "./sha3": 79, "./sha384": 80, "./sha512": 81, "./tripledes": 82, "./x64-core": 83 }], 59: [function (t, e, n) {
    !function (r, o) {
      "object" == typeof n ? e.exports = n = o(t("./core")) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        if ("function" == typeof ArrayBuffer) {
          var e = t.lib.WordArray,
              n = e.init;(e.init = function (t) {
            if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) {
              for (var e = t.byteLength, r = [], o = 0; o < e; o++) r[o >>> 2] |= t[o] << 24 - o % 4 * 8;n.call(this, r, e);
            } else n.apply(this, arguments);
          }).prototype = e;
        }
      }(), t.lib.WordArray;
    });
  }, { "./core": 52 }], 60: [function (t, e, n) {
    !function (r, o) {
      "object" == typeof n ? e.exports = n = o(t("./core")) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function (e) {
        function n(t, e, n, r, o, i, a) {
          var s = t + (e & n | ~e & r) + o + a;return (s << i | s >>> 32 - i) + e;
        }function r(t, e, n, r, o, i, a) {
          var s = t + (e & r | n & ~r) + o + a;return (s << i | s >>> 32 - i) + e;
        }function o(t, e, n, r, o, i, a) {
          var s = t + (e ^ n ^ r) + o + a;return (s << i | s >>> 32 - i) + e;
        }function i(t, e, n, r, o, i, a) {
          var s = t + (n ^ (e | ~r)) + o + a;return (s << i | s >>> 32 - i) + e;
        }var a = t,
            s = a.lib,
            c = s.WordArray,
            u = s.Hasher,
            f = a.algo,
            l = [];!function () {
          for (var t = 0; t < 64; t++) l[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }();var p = f.MD5 = u.extend({ _doReset: function () {
            this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878]);
          }, _doProcessBlock: function (t, e) {
            for (var a = 0; a < 16; a++) {
              var s = e + a,
                  c = t[s];t[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
            }var u = this._hash.words,
                f = t[e + 0],
                p = t[e + 1],
                h = t[e + 2],
                d = t[e + 3],
                m = t[e + 4],
                y = t[e + 5],
                g = t[e + 6],
                v = t[e + 7],
                b = t[e + 8],
                _ = t[e + 9],
                w = t[e + 10],
                x = t[e + 11],
                k = t[e + 12],
                B = t[e + 13],
                S = t[e + 14],
                C = t[e + 15],
                A = u[0],
                F = u[1],
                O = u[2],
                I = u[3];F = i(F = i(F = i(F = i(F = o(F = o(F = o(F = o(F = r(F = r(F = r(F = r(F = n(F = n(F = n(F = n(F, O = n(O, I = n(I, A = n(A, F, O, I, f, 7, l[0]), F, O, p, 12, l[1]), A, F, h, 17, l[2]), I, A, d, 22, l[3]), O = n(O, I = n(I, A = n(A, F, O, I, m, 7, l[4]), F, O, y, 12, l[5]), A, F, g, 17, l[6]), I, A, v, 22, l[7]), O = n(O, I = n(I, A = n(A, F, O, I, b, 7, l[8]), F, O, _, 12, l[9]), A, F, w, 17, l[10]), I, A, x, 22, l[11]), O = n(O, I = n(I, A = n(A, F, O, I, k, 7, l[12]), F, O, B, 12, l[13]), A, F, S, 17, l[14]), I, A, C, 22, l[15]), O = r(O, I = r(I, A = r(A, F, O, I, p, 5, l[16]), F, O, g, 9, l[17]), A, F, x, 14, l[18]), I, A, f, 20, l[19]), O = r(O, I = r(I, A = r(A, F, O, I, y, 5, l[20]), F, O, w, 9, l[21]), A, F, C, 14, l[22]), I, A, m, 20, l[23]), O = r(O, I = r(I, A = r(A, F, O, I, _, 5, l[24]), F, O, S, 9, l[25]), A, F, d, 14, l[26]), I, A, b, 20, l[27]), O = r(O, I = r(I, A = r(A, F, O, I, B, 5, l[28]), F, O, h, 9, l[29]), A, F, v, 14, l[30]), I, A, k, 20, l[31]), O = o(O, I = o(I, A = o(A, F, O, I, y, 4, l[32]), F, O, b, 11, l[33]), A, F, x, 16, l[34]), I, A, S, 23, l[35]), O = o(O, I = o(I, A = o(A, F, O, I, p, 4, l[36]), F, O, m, 11, l[37]), A, F, v, 16, l[38]), I, A, w, 23, l[39]), O = o(O, I = o(I, A = o(A, F, O, I, B, 4, l[40]), F, O, f, 11, l[41]), A, F, d, 16, l[42]), I, A, g, 23, l[43]), O = o(O, I = o(I, A = o(A, F, O, I, _, 4, l[44]), F, O, k, 11, l[45]), A, F, C, 16, l[46]), I, A, h, 23, l[47]), O = i(O, I = i(I, A = i(A, F, O, I, f, 6, l[48]), F, O, v, 10, l[49]), A, F, S, 15, l[50]), I, A, y, 21, l[51]), O = i(O, I = i(I, A = i(A, F, O, I, k, 6, l[52]), F, O, d, 10, l[53]), A, F, w, 15, l[54]), I, A, p, 21, l[55]), O = i(O, I = i(I, A = i(A, F, O, I, b, 6, l[56]), F, O, C, 10, l[57]), A, F, g, 15, l[58]), I, A, B, 21, l[59]), O = i(O, I = i(I, A = i(A, F, O, I, m, 6, l[60]), F, O, x, 10, l[61]), A, F, h, 15, l[62]), I, A, _, 21, l[63]), u[0] = u[0] + A | 0, u[1] = u[1] + F | 0, u[2] = u[2] + O | 0, u[3] = u[3] + I | 0;
          }, _doFinalize: function () {
            var t = this._data,
                n = t.words,
                r = 8 * this._nDataBytes,
                o = 8 * t.sigBytes;n[o >>> 5] |= 128 << 24 - o % 32;var i = e.floor(r / 4294967296),
                a = r;n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
              var f = c[u];c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
            }return s;
          }, clone: function () {
            var t = u.clone.call(this);return t._hash = this._hash.clone(), t;
          } });a.MD5 = u._createHelper(p), a.HmacMD5 = u._createHmacHelper(p);
      }(Math), t.MD5;
    });
  }, { "./core": 52 }], 61: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return t.mode.CFB = function () {
        function e(t, e, n, r) {
          var o = this._iv;if (o) {
            i = o.slice(0);this._iv = void 0;
          } else var i = this._prevBlock;r.encryptBlock(i, 0);for (var a = 0; a < n; a++) t[e + a] ^= i[a];
        }var n = t.lib.BlockCipherMode.extend();return n.Encryptor = n.extend({ processBlock: function (t, n) {
            var r = this._cipher,
                o = r.blockSize;e.call(this, t, n, o, r), this._prevBlock = t.slice(n, n + o);
          } }), n.Decryptor = n.extend({ processBlock: function (t, n) {
            var r = this._cipher,
                o = r.blockSize,
                i = t.slice(n, n + o);e.call(this, t, n, o, r), this._prevBlock = i;
          } }), n;
      }(), t.mode.CFB;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 62: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return t.mode.CTRGladman = function () {
        function e(t) {
          if (255 == (t >> 24 & 255)) {
            var e = t >> 16 & 255,
                n = t >> 8 & 255,
                r = 255 & t;255 === e ? (e = 0, 255 === n ? (n = 0, 255 === r ? r = 0 : ++r) : ++n) : ++e, t = 0, t += e << 16, t += n << 8, t += r;
          } else t += 1 << 24;return t;
        }function n(t) {
          return 0 === (t[0] = e(t[0])) && (t[1] = e(t[1])), t;
        }var r = t.lib.BlockCipherMode.extend(),
            o = r.Encryptor = r.extend({ processBlock: function (t, e) {
            var r = this._cipher,
                o = r.blockSize,
                i = this._iv,
                a = this._counter;i && (a = this._counter = i.slice(0), this._iv = void 0), n(a);var s = a.slice(0);r.encryptBlock(s, 0);for (var c = 0; c < o; c++) t[e + c] ^= s[c];
          } });return r.Decryptor = o, r;
      }(), t.mode.CTRGladman;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 63: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return t.mode.CTR = function () {
        var e = t.lib.BlockCipherMode.extend(),
            n = e.Encryptor = e.extend({ processBlock: function (t, e) {
            var n = this._cipher,
                r = n.blockSize,
                o = this._iv,
                i = this._counter;o && (i = this._counter = o.slice(0), this._iv = void 0);var a = i.slice(0);n.encryptBlock(a, 0), i[r - 1] = i[r - 1] + 1 | 0;for (var s = 0; s < r; s++) t[e + s] ^= a[s];
          } });return e.Decryptor = n, e;
      }(), t.mode.CTR;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 64: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return t.mode.ECB = function () {
        var e = t.lib.BlockCipherMode.extend();return e.Encryptor = e.extend({ processBlock: function (t, e) {
            this._cipher.encryptBlock(t, e);
          } }), e.Decryptor = e.extend({ processBlock: function (t, e) {
            this._cipher.decryptBlock(t, e);
          } }), e;
      }(), t.mode.ECB;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 65: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return t.mode.OFB = function () {
        var e = t.lib.BlockCipherMode.extend(),
            n = e.Encryptor = e.extend({ processBlock: function (t, e) {
            var n = this._cipher,
                r = n.blockSize,
                o = this._iv,
                i = this._keystream;o && (i = this._keystream = o.slice(0), this._iv = void 0), n.encryptBlock(i, 0);for (var a = 0; a < r; a++) t[e + a] ^= i[a];
          } });return e.Decryptor = n, e;
      }(), t.mode.OFB;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 66: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return t.pad.AnsiX923 = { pad: function (t, e) {
          var n = t.sigBytes,
              r = 4 * e,
              o = r - n % r,
              i = n + o - 1;t.clamp(), t.words[i >>> 2] |= o << 24 - i % 4 * 8, t.sigBytes += o;
        }, unpad: function (t) {
          var e = 255 & t.words[t.sigBytes - 1 >>> 2];t.sigBytes -= e;
        } }, t.pad.Ansix923;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 67: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return t.pad.Iso10126 = { pad: function (e, n) {
          var r = 4 * n,
              o = r - e.sigBytes % r;e.concat(t.lib.WordArray.random(o - 1)).concat(t.lib.WordArray.create([o << 24], 1));
        }, unpad: function (t) {
          var e = 255 & t.words[t.sigBytes - 1 >>> 2];t.sigBytes -= e;
        } }, t.pad.Iso10126;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 68: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return t.pad.Iso97971 = { pad: function (e, n) {
          e.concat(t.lib.WordArray.create([2147483648], 1)), t.pad.ZeroPadding.pad(e, n);
        }, unpad: function (e) {
          t.pad.ZeroPadding.unpad(e), e.sigBytes--;
        } }, t.pad.Iso97971;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 69: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return t.pad.NoPadding = { pad: function () {}, unpad: function () {} }, t.pad.NoPadding;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 70: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return t.pad.ZeroPadding = { pad: function (t, e) {
          var n = 4 * e;t.clamp(), t.sigBytes += n - (t.sigBytes % n || n);
        }, unpad: function (t) {
          for (var e = t.words, n = t.sigBytes - 1; !(e[n >>> 2] >>> 24 - n % 4 * 8 & 255);) n--;t.sigBytes = n + 1;
        } }, t.pad.ZeroPadding;
    });
  }, { "./cipher-core": 51, "./core": 52 }], 71: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./sha1"), t("./hmac")) : "function" == typeof define && define.amd ? define(["./core", "./sha1", "./hmac"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        var e = t,
            n = e.lib,
            r = n.Base,
            o = n.WordArray,
            i = e.algo,
            a = i.SHA1,
            s = i.HMAC,
            c = i.PBKDF2 = r.extend({ cfg: r.extend({ keySize: 4, hasher: a, iterations: 1 }), init: function (t) {
            this.cfg = this.cfg.extend(t);
          }, compute: function (t, e) {
            for (var n = this.cfg, r = s.create(n.hasher, t), i = o.create(), a = o.create([1]), c = i.words, u = a.words, f = n.keySize, l = n.iterations; c.length < f;) {
              var p = r.update(e).finalize(a);r.reset();for (var h = p.words, d = h.length, m = p, y = 1; y < l; y++) {
                m = r.finalize(m), r.reset();for (var g = m.words, v = 0; v < d; v++) h[v] ^= g[v];
              }i.concat(p), u[0]++;
            }return i.sigBytes = 4 * f, i;
          } });e.PBKDF2 = function (t, e, n) {
          return c.create(n).compute(t, e);
        };
      }(), t.PBKDF2;
    });
  }, { "./core": 52, "./hmac": 57, "./sha1": 76 }], 72: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./enc-base64"), t("./md5"), t("./evpkdf"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        function e() {
          for (var t = this._X, e = this._C, n = 0; n < 8; n++) i[n] = e[n];e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < i[7] >>> 0 ? 1 : 0;for (n = 0; n < 8; n++) {
            var r = t[n] + e[n],
                o = 65535 & r,
                s = r >>> 16,
                c = ((o * o >>> 17) + o * s >>> 15) + s * s,
                u = ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);a[n] = c ^ u;
          }t[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, t[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, t[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, t[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, t[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, t[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, t[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, t[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }var n = t,
            r = n.lib.StreamCipher,
            o = [],
            i = [],
            a = [],
            s = n.algo.RabbitLegacy = r.extend({ _doReset: function () {
            var t = this._key.words,
                n = this.cfg.iv,
                r = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
                o = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];this._b = 0;for (p = 0; p < 4; p++) e.call(this);for (p = 0; p < 8; p++) o[p] ^= r[p + 4 & 7];if (n) {
              var i = n.words,
                  a = i[0],
                  s = i[1],
                  c = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                  u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                  f = c >>> 16 | 4294901760 & u,
                  l = u << 16 | 65535 & c;o[0] ^= c, o[1] ^= f, o[2] ^= u, o[3] ^= l, o[4] ^= c, o[5] ^= f, o[6] ^= u, o[7] ^= l;for (var p = 0; p < 4; p++) e.call(this);
            }
          }, _doProcessBlock: function (t, n) {
            var r = this._X;e.call(this), o[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, o[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, o[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, o[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;for (var i = 0; i < 4; i++) o[i] = 16711935 & (o[i] << 8 | o[i] >>> 24) | 4278255360 & (o[i] << 24 | o[i] >>> 8), t[n + i] ^= o[i];
          }, blockSize: 4, ivSize: 2 });n.RabbitLegacy = r._createHelper(s);
      }(), t.RabbitLegacy;
    });
  }, { "./cipher-core": 51, "./core": 52, "./enc-base64": 53, "./evpkdf": 55, "./md5": 60 }], 73: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./enc-base64"), t("./md5"), t("./evpkdf"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        function e() {
          for (var t = this._X, e = this._C, n = 0; n < 8; n++) i[n] = e[n];e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < i[7] >>> 0 ? 1 : 0;for (n = 0; n < 8; n++) {
            var r = t[n] + e[n],
                o = 65535 & r,
                s = r >>> 16,
                c = ((o * o >>> 17) + o * s >>> 15) + s * s,
                u = ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);a[n] = c ^ u;
          }t[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, t[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, t[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, t[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, t[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, t[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, t[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, t[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }var n = t,
            r = n.lib.StreamCipher,
            o = [],
            i = [],
            a = [],
            s = n.algo.Rabbit = r.extend({ _doReset: function () {
            for (var t = this._key.words, n = this.cfg.iv, r = 0; r < 4; r++) t[r] = 16711935 & (t[r] << 8 | t[r] >>> 24) | 4278255360 & (t[r] << 24 | t[r] >>> 8);var o = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
                i = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];this._b = 0;for (r = 0; r < 4; r++) e.call(this);for (r = 0; r < 8; r++) i[r] ^= o[r + 4 & 7];if (n) {
              var a = n.words,
                  s = a[0],
                  c = a[1],
                  u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                  f = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8),
                  l = u >>> 16 | 4294901760 & f,
                  p = f << 16 | 65535 & u;i[0] ^= u, i[1] ^= l, i[2] ^= f, i[3] ^= p, i[4] ^= u, i[5] ^= l, i[6] ^= f, i[7] ^= p;for (r = 0; r < 4; r++) e.call(this);
            }
          }, _doProcessBlock: function (t, n) {
            var r = this._X;e.call(this), o[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, o[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, o[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, o[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;for (var i = 0; i < 4; i++) o[i] = 16711935 & (o[i] << 8 | o[i] >>> 24) | 4278255360 & (o[i] << 24 | o[i] >>> 8), t[n + i] ^= o[i];
          }, blockSize: 4, ivSize: 2 });n.Rabbit = r._createHelper(s);
      }(), t.Rabbit;
    });
  }, { "./cipher-core": 51, "./core": 52, "./enc-base64": 53, "./evpkdf": 55, "./md5": 60 }], 74: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./enc-base64"), t("./md5"), t("./evpkdf"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        function e() {
          for (var t = this._S, e = this._i, n = this._j, r = 0, o = 0; o < 4; o++) {
            n = (n + t[e = (e + 1) % 256]) % 256;var i = t[e];t[e] = t[n], t[n] = i, r |= t[(t[e] + t[n]) % 256] << 24 - 8 * o;
          }return this._i = e, this._j = n, r;
        }var n = t,
            r = n.lib.StreamCipher,
            o = n.algo,
            i = o.RC4 = r.extend({ _doReset: function () {
            for (var t = this._key, e = t.words, n = t.sigBytes, r = this._S = [], o = 0; o < 256; o++) r[o] = o;for (var o = 0, i = 0; o < 256; o++) {
              var a = o % n,
                  s = e[a >>> 2] >>> 24 - a % 4 * 8 & 255;i = (i + r[o] + s) % 256;var c = r[o];r[o] = r[i], r[i] = c;
            }this._i = this._j = 0;
          }, _doProcessBlock: function (t, n) {
            t[n] ^= e.call(this);
          }, keySize: 8, ivSize: 0 });n.RC4 = r._createHelper(i);var a = o.RC4Drop = i.extend({ cfg: i.cfg.extend({ drop: 192 }), _doReset: function () {
            i._doReset.call(this);for (var t = this.cfg.drop; t > 0; t--) e.call(this);
          } });n.RC4Drop = r._createHelper(a);
      }(), t.RC4;
    });
  }, { "./cipher-core": 51, "./core": 52, "./enc-base64": 53, "./evpkdf": 55, "./md5": 60 }], 75: [function (t, e, n) {
    !function (r, o) {
      "object" == typeof n ? e.exports = n = o(t("./core")) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function (e) {
        function n(t, e, n) {
          return t ^ e ^ n;
        }function r(t, e, n) {
          return t & e | ~t & n;
        }function o(t, e, n) {
          return (t | ~e) ^ n;
        }function i(t, e, n) {
          return t & n | e & ~n;
        }function a(t, e, n) {
          return t ^ (e | ~n);
        }function s(t, e) {
          return t << e | t >>> 32 - e;
        }var c = t,
            u = c.lib,
            f = u.WordArray,
            l = u.Hasher,
            p = c.algo,
            h = f.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
            d = f.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
            m = f.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
            y = f.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
            g = f.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
            v = f.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
            b = p.RIPEMD160 = l.extend({ _doReset: function () {
            this._hash = f.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          }, _doProcessBlock: function (t, e) {
            for (D = 0; D < 16; D++) {
              var c = e + D,
                  u = t[c];t[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
            }var f,
                l,
                p,
                b,
                _,
                w,
                x,
                k,
                B,
                S,
                C = this._hash.words,
                A = g.words,
                F = v.words,
                O = h.words,
                I = d.words,
                N = m.words,
                T = y.words;w = f = C[0], x = l = C[1], k = p = C[2], B = b = C[3], S = _ = C[4];for (var P, D = 0; D < 80; D += 1) P = f + t[e + O[D]] | 0, P += D < 16 ? n(l, p, b) + A[0] : D < 32 ? r(l, p, b) + A[1] : D < 48 ? o(l, p, b) + A[2] : D < 64 ? i(l, p, b) + A[3] : a(l, p, b) + A[4], P = (P = s(P |= 0, N[D])) + _ | 0, f = _, _ = b, b = s(p, 10), p = l, l = P, P = w + t[e + I[D]] | 0, P += D < 16 ? a(x, k, B) + F[0] : D < 32 ? i(x, k, B) + F[1] : D < 48 ? o(x, k, B) + F[2] : D < 64 ? r(x, k, B) + F[3] : n(x, k, B) + F[4], P = (P = s(P |= 0, T[D])) + S | 0, w = S, S = B, B = s(k, 10), k = x, x = P;P = C[1] + p + B | 0, C[1] = C[2] + b + S | 0, C[2] = C[3] + _ + w | 0, C[3] = C[4] + f + x | 0, C[4] = C[0] + l + k | 0, C[0] = P;
          }, _doFinalize: function () {
            var t = this._data,
                e = t.words,
                n = 8 * this._nDataBytes,
                r = 8 * t.sigBytes;e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), t.sigBytes = 4 * (e.length + 1), this._process();for (var o = this._hash, i = o.words, a = 0; a < 5; a++) {
              var s = i[a];i[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
            }return o;
          }, clone: function () {
            var t = l.clone.call(this);return t._hash = this._hash.clone(), t;
          } });c.RIPEMD160 = l._createHelper(b), c.HmacRIPEMD160 = l._createHmacHelper(b);
      }(Math), t.RIPEMD160;
    });
  }, { "./core": 52 }], 76: [function (t, e, n) {
    !function (r, o) {
      "object" == typeof n ? e.exports = n = o(t("./core")) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        var e = t,
            n = e.lib,
            r = n.WordArray,
            o = n.Hasher,
            i = [],
            a = e.algo.SHA1 = o.extend({ _doReset: function () {
            this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          }, _doProcessBlock: function (t, e) {
            for (var n = this._hash.words, r = n[0], o = n[1], a = n[2], s = n[3], c = n[4], u = 0; u < 80; u++) {
              if (u < 16) i[u] = 0 | t[e + u];else {
                var f = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];i[u] = f << 1 | f >>> 31;
              }var l = (r << 5 | r >>> 27) + c + i[u];l += u < 20 ? 1518500249 + (o & a | ~o & s) : u < 40 ? 1859775393 + (o ^ a ^ s) : u < 60 ? (o & a | o & s | a & s) - 1894007588 : (o ^ a ^ s) - 899497514, c = s, s = a, a = o << 30 | o >>> 2, o = r, r = l;
            }n[0] = n[0] + r | 0, n[1] = n[1] + o | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, n[4] = n[4] + c | 0;
          }, _doFinalize: function () {
            var t = this._data,
                e = t.words,
                n = 8 * this._nDataBytes,
                r = 8 * t.sigBytes;return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), e[15 + (r + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * e.length, this._process(), this._hash;
          }, clone: function () {
            var t = o.clone.call(this);return t._hash = this._hash.clone(), t;
          } });e.SHA1 = o._createHelper(a), e.HmacSHA1 = o._createHmacHelper(a);
      }(), t.SHA1;
    });
  }, { "./core": 52 }], 77: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./sha256")) : "function" == typeof define && define.amd ? define(["./core", "./sha256"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        var e = t,
            n = e.lib.WordArray,
            r = e.algo,
            o = r.SHA256,
            i = r.SHA224 = o.extend({ _doReset: function () {
            this._hash = new n.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
          }, _doFinalize: function () {
            var t = o._doFinalize.call(this);return t.sigBytes -= 4, t;
          } });e.SHA224 = o._createHelper(i), e.HmacSHA224 = o._createHmacHelper(i);
      }(), t.SHA224;
    });
  }, { "./core": 52, "./sha256": 78 }], 78: [function (t, e, n) {
    !function (r, o) {
      "object" == typeof n ? e.exports = n = o(t("./core")) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function (e) {
        var n = t,
            r = n.lib,
            o = r.WordArray,
            i = r.Hasher,
            a = n.algo,
            s = [],
            c = [];!function () {
          function t(t) {
            return 4294967296 * (t - (0 | t)) | 0;
          }for (var n = 2, r = 0; r < 64;) (function (t) {
            for (var n = e.sqrt(t), r = 2; r <= n; r++) if (!(t % r)) return !1;return !0;
          })(n) && (r < 8 && (s[r] = t(e.pow(n, .5))), c[r] = t(e.pow(n, 1 / 3)), r++), n++;
        }();var u = [],
            f = a.SHA256 = i.extend({ _doReset: function () {
            this._hash = new o.init(s.slice(0));
          }, _doProcessBlock: function (t, e) {
            for (var n = this._hash.words, r = n[0], o = n[1], i = n[2], a = n[3], s = n[4], f = n[5], l = n[6], p = n[7], h = 0; h < 64; h++) {
              if (h < 16) u[h] = 0 | t[e + h];else {
                var d = u[h - 15],
                    m = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3,
                    y = u[h - 2],
                    g = (y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10;u[h] = m + u[h - 7] + g + u[h - 16];
              }var v = r & o ^ r & i ^ o & i,
                  b = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                  _ = p + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & f ^ ~s & l) + c[h] + u[h];p = l, l = f, f = s, s = a + _ | 0, a = i, i = o, o = r, r = _ + (b + v) | 0;
            }n[0] = n[0] + r | 0, n[1] = n[1] + o | 0, n[2] = n[2] + i | 0, n[3] = n[3] + a | 0, n[4] = n[4] + s | 0, n[5] = n[5] + f | 0, n[6] = n[6] + l | 0, n[7] = n[7] + p | 0;
          }, _doFinalize: function () {
            var t = this._data,
                n = t.words,
                r = 8 * this._nDataBytes,
                o = 8 * t.sigBytes;return n[o >>> 5] |= 128 << 24 - o % 32, n[14 + (o + 64 >>> 9 << 4)] = e.floor(r / 4294967296), n[15 + (o + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * n.length, this._process(), this._hash;
          }, clone: function () {
            var t = i.clone.call(this);return t._hash = this._hash.clone(), t;
          } });n.SHA256 = i._createHelper(f), n.HmacSHA256 = i._createHmacHelper(f);
      }(Math), t.SHA256;
    });
  }, { "./core": 52 }], 79: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./x64-core")) : "function" == typeof define && define.amd ? define(["./core", "./x64-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function (e) {
        var n = t,
            r = n.lib,
            o = r.WordArray,
            i = r.Hasher,
            a = n.x64.Word,
            s = n.algo,
            c = [],
            u = [],
            f = [];!function () {
          for (var t = 1, e = 0, n = 0; n < 24; n++) {
            c[t + 5 * e] = (n + 1) * (n + 2) / 2 % 64;var r = (2 * t + 3 * e) % 5;t = e % 5, e = r;
          }for (t = 0; t < 5; t++) for (e = 0; e < 5; e++) u[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;for (var o = 1, i = 0; i < 24; i++) {
            for (var s = 0, l = 0, p = 0; p < 7; p++) {
              if (1 & o) {
                var h = (1 << p) - 1;h < 32 ? l ^= 1 << h : s ^= 1 << h - 32;
              }128 & o ? o = o << 1 ^ 113 : o <<= 1;
            }f[i] = a.create(s, l);
          }
        }();var l = [];!function () {
          for (var t = 0; t < 25; t++) l[t] = a.create();
        }();var p = s.SHA3 = i.extend({ cfg: i.cfg.extend({ outputLength: 512 }), _doReset: function () {
            for (var t = this._state = [], e = 0; e < 25; e++) t[e] = new a.init();this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          }, _doProcessBlock: function (t, e) {
            for (var n = this._state, r = this.blockSize / 2, o = 0; o < r; o++) {
              var i = t[e + 2 * o],
                  a = t[e + 2 * o + 1];i = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), (F = n[o]).high ^= a, F.low ^= i;
            }for (var s = 0; s < 24; s++) {
              for (A = 0; A < 5; A++) {
                for (var p = 0, h = 0, d = 0; d < 5; d++) p ^= (F = n[A + 5 * d]).high, h ^= F.low;var m = l[A];m.high = p, m.low = h;
              }for (A = 0; A < 5; A++) for (var y = l[(A + 4) % 5], g = l[(A + 1) % 5], v = g.high, b = g.low, p = y.high ^ (v << 1 | b >>> 31), h = y.low ^ (b << 1 | v >>> 31), d = 0; d < 5; d++) (F = n[A + 5 * d]).high ^= p, F.low ^= h;for (var _ = 1; _ < 25; _++) {
                var w = (F = n[_]).high,
                    x = F.low,
                    k = c[_];if (k < 32) var p = w << k | x >>> 32 - k,
                    h = x << k | w >>> 32 - k;else var p = x << k - 32 | w >>> 64 - k,
                    h = w << k - 32 | x >>> 64 - k;var B = l[u[_]];B.high = p, B.low = h;
              }var S = l[0],
                  C = n[0];S.high = C.high, S.low = C.low;for (var A = 0; A < 5; A++) for (d = 0; d < 5; d++) {
                var F = n[_ = A + 5 * d],
                    O = l[_],
                    I = l[(A + 1) % 5 + 5 * d],
                    N = l[(A + 2) % 5 + 5 * d];F.high = O.high ^ ~I.high & N.high, F.low = O.low ^ ~I.low & N.low;
              }var F = n[0],
                  T = f[s];F.high ^= T.high, F.low ^= T.low;
            }
          }, _doFinalize: function () {
            var t = this._data,
                n = t.words,
                r = (this._nDataBytes, 8 * t.sigBytes),
                i = 32 * this.blockSize;n[r >>> 5] |= 1 << 24 - r % 32, n[(e.ceil((r + 1) / i) * i >>> 5) - 1] |= 128, t.sigBytes = 4 * n.length, this._process();for (var a = this._state, s = this.cfg.outputLength / 8, c = s / 8, u = [], f = 0; f < c; f++) {
              var l = a[f],
                  p = l.high,
                  h = l.low;p = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8), h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8), u.push(h), u.push(p);
            }return new o.init(u, s);
          }, clone: function () {
            for (var t = i.clone.call(this), e = t._state = this._state.slice(0), n = 0; n < 25; n++) e[n] = e[n].clone();return t;
          } });n.SHA3 = i._createHelper(p), n.HmacSHA3 = i._createHmacHelper(p);
      }(Math), t.SHA3;
    });
  }, { "./core": 52, "./x64-core": 83 }], 80: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./x64-core"), t("./sha512")) : "function" == typeof define && define.amd ? define(["./core", "./x64-core", "./sha512"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        var e = t,
            n = e.x64,
            r = n.Word,
            o = n.WordArray,
            i = e.algo,
            a = i.SHA512,
            s = i.SHA384 = a.extend({ _doReset: function () {
            this._hash = new o.init([new r.init(3418070365, 3238371032), new r.init(1654270250, 914150663), new r.init(2438529370, 812702999), new r.init(355462360, 4144912697), new r.init(1731405415, 4290775857), new r.init(2394180231, 1750603025), new r.init(3675008525, 1694076839), new r.init(1203062813, 3204075428)]);
          }, _doFinalize: function () {
            var t = a._doFinalize.call(this);return t.sigBytes -= 16, t;
          } });e.SHA384 = a._createHelper(s), e.HmacSHA384 = a._createHmacHelper(s);
      }(), t.SHA384;
    });
  }, { "./core": 52, "./sha512": 81, "./x64-core": 83 }], 81: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./x64-core")) : "function" == typeof define && define.amd ? define(["./core", "./x64-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        function e() {
          return i.create.apply(i, arguments);
        }var n = t,
            r = n.lib.Hasher,
            o = n.x64,
            i = o.Word,
            a = o.WordArray,
            s = n.algo,
            c = [e(1116352408, 3609767458), e(1899447441, 602891725), e(3049323471, 3964484399), e(3921009573, 2173295548), e(961987163, 4081628472), e(1508970993, 3053834265), e(2453635748, 2937671579), e(2870763221, 3664609560), e(3624381080, 2734883394), e(310598401, 1164996542), e(607225278, 1323610764), e(1426881987, 3590304994), e(1925078388, 4068182383), e(2162078206, 991336113), e(2614888103, 633803317), e(3248222580, 3479774868), e(3835390401, 2666613458), e(4022224774, 944711139), e(264347078, 2341262773), e(604807628, 2007800933), e(770255983, 1495990901), e(1249150122, 1856431235), e(1555081692, 3175218132), e(1996064986, 2198950837), e(2554220882, 3999719339), e(2821834349, 766784016), e(2952996808, 2566594879), e(3210313671, 3203337956), e(3336571891, 1034457026), e(3584528711, 2466948901), e(113926993, 3758326383), e(338241895, 168717936), e(666307205, 1188179964), e(773529912, 1546045734), e(1294757372, 1522805485), e(1396182291, 2643833823), e(1695183700, 2343527390), e(1986661051, 1014477480), e(2177026350, 1206759142), e(2456956037, 344077627), e(2730485921, 1290863460), e(2820302411, 3158454273), e(3259730800, 3505952657), e(3345764771, 106217008), e(3516065817, 3606008344), e(3600352804, 1432725776), e(4094571909, 1467031594), e(275423344, 851169720), e(430227734, 3100823752), e(506948616, 1363258195), e(659060556, 3750685593), e(883997877, 3785050280), e(958139571, 3318307427), e(1322822218, 3812723403), e(1537002063, 2003034995), e(1747873779, 3602036899), e(1955562222, 1575990012), e(2024104815, 1125592928), e(2227730452, 2716904306), e(2361852424, 442776044), e(2428436474, 593698344), e(2756734187, 3733110249), e(3204031479, 2999351573), e(3329325298, 3815920427), e(3391569614, 3928383900), e(3515267271, 566280711), e(3940187606, 3454069534), e(4118630271, 4000239992), e(116418474, 1914138554), e(174292421, 2731055270), e(289380356, 3203993006), e(460393269, 320620315), e(685471733, 587496836), e(852142971, 1086792851), e(1017036298, 365543100), e(1126000580, 2618297676), e(1288033470, 3409855158), e(1501505948, 4234509866), e(1607167915, 987167468), e(1816402316, 1246189591)],
            u = [];!function () {
          for (var t = 0; t < 80; t++) u[t] = e();
        }();var f = s.SHA512 = r.extend({ _doReset: function () {
            this._hash = new a.init([new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209)]);
          }, _doProcessBlock: function (t, e) {
            for (var n = this._hash.words, r = n[0], o = n[1], i = n[2], a = n[3], s = n[4], f = n[5], l = n[6], p = n[7], h = r.high, d = r.low, m = o.high, y = o.low, g = i.high, v = i.low, b = a.high, _ = a.low, w = s.high, x = s.low, k = f.high, B = f.low, S = l.high, C = l.low, A = p.high, F = p.low, O = h, I = d, N = m, T = y, P = g, D = v, R = b, E = _, M = w, H = x, j = k, q = B, z = S, L = C, U = A, W = F, J = 0; J < 80; J++) {
              var K = u[J];if (J < 16) var G = K.high = 0 | t[e + 2 * J],
                  X = K.low = 0 | t[e + 2 * J + 1];else {
                var $ = u[J - 15],
                    V = $.high,
                    Z = $.low,
                    Y = (V >>> 1 | Z << 31) ^ (V >>> 8 | Z << 24) ^ V >>> 7,
                    Q = (Z >>> 1 | V << 31) ^ (Z >>> 8 | V << 24) ^ (Z >>> 7 | V << 25),
                    tt = u[J - 2],
                    et = tt.high,
                    nt = tt.low,
                    rt = (et >>> 19 | nt << 13) ^ (et << 3 | nt >>> 29) ^ et >>> 6,
                    ot = (nt >>> 19 | et << 13) ^ (nt << 3 | et >>> 29) ^ (nt >>> 6 | et << 26),
                    it = u[J - 7],
                    at = it.high,
                    st = it.low,
                    ct = u[J - 16],
                    ut = ct.high,
                    ft = ct.low,
                    G = (G = (G = Y + at + ((X = Q + st) >>> 0 < Q >>> 0 ? 1 : 0)) + rt + ((X = X + ot) >>> 0 < ot >>> 0 ? 1 : 0)) + ut + ((X = X + ft) >>> 0 < ft >>> 0 ? 1 : 0);K.high = G, K.low = X;
              }var lt = M & j ^ ~M & z,
                  pt = H & q ^ ~H & L,
                  ht = O & N ^ O & P ^ N & P,
                  dt = I & T ^ I & D ^ T & D,
                  mt = (O >>> 28 | I << 4) ^ (O << 30 | I >>> 2) ^ (O << 25 | I >>> 7),
                  yt = (I >>> 28 | O << 4) ^ (I << 30 | O >>> 2) ^ (I << 25 | O >>> 7),
                  gt = (M >>> 14 | H << 18) ^ (M >>> 18 | H << 14) ^ (M << 23 | H >>> 9),
                  vt = (H >>> 14 | M << 18) ^ (H >>> 18 | M << 14) ^ (H << 23 | M >>> 9),
                  bt = c[J],
                  _t = bt.high,
                  wt = bt.low,
                  xt = W + vt,
                  kt = (kt = (kt = (kt = U + gt + (xt >>> 0 < W >>> 0 ? 1 : 0)) + lt + ((xt = xt + pt) >>> 0 < pt >>> 0 ? 1 : 0)) + _t + ((xt = xt + wt) >>> 0 < wt >>> 0 ? 1 : 0)) + G + ((xt = xt + X) >>> 0 < X >>> 0 ? 1 : 0),
                  Bt = yt + dt,
                  St = mt + ht + (Bt >>> 0 < yt >>> 0 ? 1 : 0);U = z, W = L, z = j, L = q, j = M, q = H, M = R + kt + ((H = E + xt | 0) >>> 0 < E >>> 0 ? 1 : 0) | 0, R = P, E = D, P = N, D = T, N = O, T = I, O = kt + St + ((I = xt + Bt | 0) >>> 0 < xt >>> 0 ? 1 : 0) | 0;
            }d = r.low = d + I, r.high = h + O + (d >>> 0 < I >>> 0 ? 1 : 0), y = o.low = y + T, o.high = m + N + (y >>> 0 < T >>> 0 ? 1 : 0), v = i.low = v + D, i.high = g + P + (v >>> 0 < D >>> 0 ? 1 : 0), _ = a.low = _ + E, a.high = b + R + (_ >>> 0 < E >>> 0 ? 1 : 0), x = s.low = x + H, s.high = w + M + (x >>> 0 < H >>> 0 ? 1 : 0), B = f.low = B + q, f.high = k + j + (B >>> 0 < q >>> 0 ? 1 : 0), C = l.low = C + L, l.high = S + z + (C >>> 0 < L >>> 0 ? 1 : 0), F = p.low = F + W, p.high = A + U + (F >>> 0 < W >>> 0 ? 1 : 0);
          }, _doFinalize: function () {
            var t = this._data,
                e = t.words,
                n = 8 * this._nDataBytes,
                r = 8 * t.sigBytes;return e[r >>> 5] |= 128 << 24 - r % 32, e[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296), e[31 + (r + 128 >>> 10 << 5)] = n, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32();
          }, clone: function () {
            var t = r.clone.call(this);return t._hash = this._hash.clone(), t;
          }, blockSize: 32 });n.SHA512 = r._createHelper(f), n.HmacSHA512 = r._createHmacHelper(f);
      }(), t.SHA512;
    });
  }, { "./core": 52, "./x64-core": 83 }], 82: [function (t, e, n) {
    !function (r, o, i) {
      "object" == typeof n ? e.exports = n = o(t("./core"), t("./enc-base64"), t("./md5"), t("./evpkdf"), t("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function () {
        function e(t, e) {
          var n = (this._lBlock >>> t ^ this._rBlock) & e;this._rBlock ^= n, this._lBlock ^= n << t;
        }function n(t, e) {
          var n = (this._rBlock >>> t ^ this._lBlock) & e;this._lBlock ^= n, this._rBlock ^= n << t;
        }var r = t,
            o = r.lib,
            i = o.WordArray,
            a = o.BlockCipher,
            s = r.algo,
            c = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
            u = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
            f = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
            l = [{ 0: 8421888, 268435456: 32768, 536870912: 8421378, 805306368: 2, 1073741824: 512, 1342177280: 8421890, 1610612736: 8389122, 1879048192: 8388608, 2147483648: 514, 2415919104: 8389120, 2684354560: 33280, 2952790016: 8421376, 3221225472: 32770, 3489660928: 8388610, 3758096384: 0, 4026531840: 33282, 134217728: 0, 402653184: 8421890, 671088640: 33282, 939524096: 32768, 1207959552: 8421888, 1476395008: 512, 1744830464: 8421378, 2013265920: 2, 2281701376: 8389120, 2550136832: 33280, 2818572288: 8421376, 3087007744: 8389122, 3355443200: 8388610, 3623878656: 32770, 3892314112: 514, 4160749568: 8388608, 1: 32768, 268435457: 2, 536870913: 8421888, 805306369: 8388608, 1073741825: 8421378, 1342177281: 33280, 1610612737: 512, 1879048193: 8389122, 2147483649: 8421890, 2415919105: 8421376, 2684354561: 8388610, 2952790017: 33282, 3221225473: 514, 3489660929: 8389120, 3758096385: 32770, 4026531841: 0, 134217729: 8421890, 402653185: 8421376, 671088641: 8388608, 939524097: 512, 1207959553: 32768, 1476395009: 8388610, 1744830465: 2, 2013265921: 33282, 2281701377: 32770, 2550136833: 8389122, 2818572289: 514, 3087007745: 8421888, 3355443201: 8389120, 3623878657: 0, 3892314113: 33280, 4160749569: 8421378 }, { 0: 1074282512, 16777216: 16384, 33554432: 524288, 50331648: 1074266128, 67108864: 1073741840, 83886080: 1074282496, 100663296: 1073758208, 117440512: 16, 134217728: 540672, 150994944: 1073758224, 167772160: 1073741824, 184549376: 540688, 201326592: 524304, 218103808: 0, 234881024: 16400, 251658240: 1074266112, 8388608: 1073758208, 25165824: 540688, 41943040: 16, 58720256: 1073758224, 75497472: 1074282512, 92274688: 1073741824, 109051904: 524288, 125829120: 1074266128, 142606336: 524304, 159383552: 0, 176160768: 16384, 192937984: 1074266112, 209715200: 1073741840, 226492416: 540672, 243269632: 1074282496, 260046848: 16400, 268435456: 0, 285212672: 1074266128, 301989888: 1073758224, 318767104: 1074282496, 335544320: 1074266112, 352321536: 16, 369098752: 540688, 385875968: 16384, 402653184: 16400, 419430400: 524288, 436207616: 524304, 452984832: 1073741840, 469762048: 540672, 486539264: 1073758208, 503316480: 1073741824, 520093696: 1074282512, 276824064: 540688, 293601280: 524288, 310378496: 1074266112, 327155712: 16384, 343932928: 1073758208, 360710144: 1074282512, 377487360: 16, 394264576: 1073741824, 411041792: 1074282496, 427819008: 1073741840, 444596224: 1073758224, 461373440: 524304, 478150656: 0, 494927872: 16400, 511705088: 1074266128, 528482304: 540672 }, { 0: 260, 1048576: 0, 2097152: 67109120, 3145728: 65796, 4194304: 65540, 5242880: 67108868, 6291456: 67174660, 7340032: 67174400, 8388608: 67108864, 9437184: 67174656, 10485760: 65792, 11534336: 67174404, 12582912: 67109124, 13631488: 65536, 14680064: 4, 15728640: 256, 524288: 67174656, 1572864: 67174404, 2621440: 0, 3670016: 67109120, 4718592: 67108868, 5767168: 65536, 6815744: 65540, 7864320: 260, 8912896: 4, 9961472: 256, 11010048: 67174400, 12058624: 65796, 13107200: 65792, 14155776: 67109124, 15204352: 67174660, 16252928: 67108864, 16777216: 67174656, 17825792: 65540, 18874368: 65536, 19922944: 67109120, 20971520: 256, 22020096: 67174660, 23068672: 67108868, 24117248: 0, 25165824: 67109124, 26214400: 67108864, 27262976: 4, 28311552: 65792, 29360128: 67174400, 30408704: 260, 31457280: 65796, 32505856: 67174404, 17301504: 67108864, 18350080: 260, 19398656: 67174656, 20447232: 0, 21495808: 65540, 22544384: 67109120, 23592960: 256, 24641536: 67174404, 25690112: 65536, 26738688: 67174660, 27787264: 65796, 28835840: 67108868, 29884416: 67109124, 30932992: 67174400, 31981568: 4, 33030144: 65792 }, { 0: 2151682048, 65536: 2147487808, 131072: 4198464, 196608: 2151677952, 262144: 0, 327680: 4198400, 393216: 2147483712, 458752: 4194368, 524288: 2147483648, 589824: 4194304, 655360: 64, 720896: 2147487744, 786432: 2151678016, 851968: 4160, 917504: 4096, 983040: 2151682112, 32768: 2147487808, 98304: 64, 163840: 2151678016, 229376: 2147487744, 294912: 4198400, 360448: 2151682112, 425984: 0, 491520: 2151677952, 557056: 4096, 622592: 2151682048, 688128: 4194304, 753664: 4160, 819200: 2147483648, 884736: 4194368, 950272: 4198464, 1015808: 2147483712, 1048576: 4194368, 1114112: 4198400, 1179648: 2147483712, 1245184: 0, 1310720: 4160, 1376256: 2151678016, 1441792: 2151682048, 1507328: 2147487808, 1572864: 2151682112, 1638400: 2147483648, 1703936: 2151677952, 1769472: 4198464, 1835008: 2147487744, 1900544: 4194304, 1966080: 64, 2031616: 4096, 1081344: 2151677952, 1146880: 2151682112, 1212416: 0, 1277952: 4198400, 1343488: 4194368, 1409024: 2147483648, 1474560: 2147487808, 1540096: 64, 1605632: 2147483712, 1671168: 4096, 1736704: 2147487744, 1802240: 2151678016, 1867776: 4160, 1933312: 2151682048, 1998848: 4194304, 2064384: 4198464 }, { 0: 128, 4096: 17039360, 8192: 262144, 12288: 536870912, 16384: 537133184, 20480: 16777344, 24576: 553648256, 28672: 262272, 32768: 16777216, 36864: 537133056, 40960: 536871040, 45056: 553910400, 49152: 553910272, 53248: 0, 57344: 17039488, 61440: 553648128, 2048: 17039488, 6144: 553648256, 10240: 128, 14336: 17039360, 18432: 262144, 22528: 537133184, 26624: 553910272, 30720: 536870912, 34816: 537133056, 38912: 0, 43008: 553910400, 47104: 16777344, 51200: 536871040, 55296: 553648128, 59392: 16777216, 63488: 262272, 65536: 262144, 69632: 128, 73728: 536870912, 77824: 553648256, 81920: 16777344, 86016: 553910272, 90112: 537133184, 94208: 16777216, 98304: 553910400, 102400: 553648128, 106496: 17039360, 110592: 537133056, 114688: 262272, 118784: 536871040, 122880: 0, 126976: 17039488, 67584: 553648256, 71680: 16777216, 75776: 17039360, 79872: 537133184, 83968: 536870912, 88064: 17039488, 92160: 128, 96256: 553910272, 100352: 262272, 104448: 553910400, 108544: 0, 112640: 553648128, 116736: 16777344, 120832: 262144, 124928: 537133056, 129024: 536871040 }, { 0: 268435464, 256: 8192, 512: 270532608, 768: 270540808, 1024: 268443648, 1280: 2097152, 1536: 2097160, 1792: 268435456, 2048: 0, 2304: 268443656, 2560: 2105344, 2816: 8, 3072: 270532616, 3328: 2105352, 3584: 8200, 3840: 270540800, 128: 270532608, 384: 270540808, 640: 8, 896: 2097152, 1152: 2105352, 1408: 268435464, 1664: 268443648, 1920: 8200, 2176: 2097160, 2432: 8192, 2688: 268443656, 2944: 270532616, 3200: 0, 3456: 270540800, 3712: 2105344, 3968: 268435456, 4096: 268443648, 4352: 270532616, 4608: 270540808, 4864: 8200, 5120: 2097152, 5376: 268435456, 5632: 268435464, 5888: 2105344, 6144: 2105352, 6400: 0, 6656: 8, 6912: 270532608, 7168: 8192, 7424: 268443656, 7680: 270540800, 7936: 2097160, 4224: 8, 4480: 2105344, 4736: 2097152, 4992: 268435464, 5248: 268443648, 5504: 8200, 5760: 270540808, 6016: 270532608, 6272: 270540800, 6528: 270532616, 6784: 8192, 7040: 2105352, 7296: 2097160, 7552: 0, 7808: 268435456, 8064: 268443656 }, { 0: 1048576, 16: 33555457, 32: 1024, 48: 1049601, 64: 34604033, 80: 0, 96: 1, 112: 34603009, 128: 33555456, 144: 1048577, 160: 33554433, 176: 34604032, 192: 34603008, 208: 1025, 224: 1049600, 240: 33554432, 8: 34603009, 24: 0, 40: 33555457, 56: 34604032, 72: 1048576, 88: 33554433, 104: 33554432, 120: 1025, 136: 1049601, 152: 33555456, 168: 34603008, 184: 1048577, 200: 1024, 216: 34604033, 232: 1, 248: 1049600, 256: 33554432, 272: 1048576, 288: 33555457, 304: 34603009, 320: 1048577, 336: 33555456, 352: 34604032, 368: 1049601, 384: 1025, 400: 34604033, 416: 1049600, 432: 1, 448: 0, 464: 34603008, 480: 33554433, 496: 1024, 264: 1049600, 280: 33555457, 296: 34603009, 312: 1, 328: 33554432, 344: 1048576, 360: 1025, 376: 34604032, 392: 33554433, 408: 34603008, 424: 0, 440: 34604033, 456: 1049601, 472: 1024, 488: 33555456, 504: 1048577 }, { 0: 134219808, 1: 131072, 2: 134217728, 3: 32, 4: 131104, 5: 134350880, 6: 134350848, 7: 2048, 8: 134348800, 9: 134219776, 10: 133120, 11: 134348832, 12: 2080, 13: 0, 14: 134217760, 15: 133152, 2147483648: 2048, 2147483649: 134350880, 2147483650: 134219808, 2147483651: 134217728, 2147483652: 134348800, 2147483653: 133120, 2147483654: 133152, 2147483655: 32, 2147483656: 134217760, 2147483657: 2080, 2147483658: 131104, 2147483659: 134350848, 2147483660: 0, 2147483661: 134348832, 2147483662: 134219776, 2147483663: 131072, 16: 133152, 17: 134350848, 18: 32, 19: 2048, 20: 134219776, 21: 134217760, 22: 134348832, 23: 131072, 24: 0, 25: 131104, 26: 134348800, 27: 134219808, 28: 134350880, 29: 133120, 30: 2080, 31: 134217728, 2147483664: 131072, 2147483665: 2048, 2147483666: 134348832, 2147483667: 133152, 2147483668: 32, 2147483669: 134348800, 2147483670: 134217728, 2147483671: 134219808, 2147483672: 134350880, 2147483673: 134217760, 2147483674: 134219776, 2147483675: 0, 2147483676: 133120, 2147483677: 2080, 2147483678: 131104, 2147483679: 134350848 }],
            p = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
            h = s.DES = a.extend({ _doReset: function () {
            for (var t = this._key.words, e = [], n = 0; n < 56; n++) {
              var r = c[n] - 1;e[n] = t[r >>> 5] >>> 31 - r % 32 & 1;
            }for (var o = this._subKeys = [], i = 0; i < 16; i++) {
              for (var a = o[i] = [], s = f[i], n = 0; n < 24; n++) a[n / 6 | 0] |= e[(u[n] - 1 + s) % 28] << 31 - n % 6, a[4 + (n / 6 | 0)] |= e[28 + (u[n + 24] - 1 + s) % 28] << 31 - n % 6;a[0] = a[0] << 1 | a[0] >>> 31;for (n = 1; n < 7; n++) a[n] = a[n] >>> 4 * (n - 1) + 3;a[7] = a[7] << 5 | a[7] >>> 27;
            }for (var l = this._invSubKeys = [], n = 0; n < 16; n++) l[n] = o[15 - n];
          }, encryptBlock: function (t, e) {
            this._doCryptBlock(t, e, this._subKeys);
          }, decryptBlock: function (t, e) {
            this._doCryptBlock(t, e, this._invSubKeys);
          }, _doCryptBlock: function (t, r, o) {
            this._lBlock = t[r], this._rBlock = t[r + 1], e.call(this, 4, 252645135), e.call(this, 16, 65535), n.call(this, 2, 858993459), n.call(this, 8, 16711935), e.call(this, 1, 1431655765);for (var i = 0; i < 16; i++) {
              for (var a = o[i], s = this._lBlock, c = this._rBlock, u = 0, f = 0; f < 8; f++) u |= l[f][((c ^ a[f]) & p[f]) >>> 0];this._lBlock = c, this._rBlock = s ^ u;
            }var h = this._lBlock;this._lBlock = this._rBlock, this._rBlock = h, e.call(this, 1, 1431655765), n.call(this, 8, 16711935), n.call(this, 2, 858993459), e.call(this, 16, 65535), e.call(this, 4, 252645135), t[r] = this._lBlock, t[r + 1] = this._rBlock;
          }, keySize: 2, ivSize: 2, blockSize: 2 });r.DES = a._createHelper(h);var d = s.TripleDES = a.extend({ _doReset: function () {
            var t = this._key.words;this._des1 = h.createEncryptor(i.create(t.slice(0, 2))), this._des2 = h.createEncryptor(i.create(t.slice(2, 4))), this._des3 = h.createEncryptor(i.create(t.slice(4, 6)));
          }, encryptBlock: function (t, e) {
            this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e);
          }, decryptBlock: function (t, e) {
            this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e);
          }, keySize: 6, ivSize: 2, blockSize: 2 });r.TripleDES = a._createHelper(d);
      }(), t.TripleDES;
    });
  }, { "./cipher-core": 51, "./core": 52, "./enc-base64": 53, "./evpkdf": 55, "./md5": 60 }], 83: [function (t, e, n) {
    !function (r, o) {
      "object" == typeof n ? e.exports = n = o(t("./core")) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS);
    }(this, function (t) {
      return function (e) {
        var n = t,
            r = n.lib,
            o = r.Base,
            i = r.WordArray,
            a = n.x64 = {};a.Word = o.extend({ init: function (t, e) {
            this.high = t, this.low = e;
          } }), a.WordArray = o.extend({ init: function (t, e) {
            t = this.words = t || [], this.sigBytes = void 0 != e ? e : 8 * t.length;
          }, toX32: function () {
            for (var t = this.words, e = t.length, n = [], r = 0; r < e; r++) {
              var o = t[r];n.push(o.high), n.push(o.low);
            }return i.create(n, this.sigBytes);
          }, clone: function () {
            for (var t = o.clone.call(this), e = t.words = this.words.slice(0), n = e.length, r = 0; r < n; r++) e[r] = e[r].clone();return t;
          } });
      }(), t;
    });
  }, { "./core": 52 }], 84: [function (t, e, n) {
    !function (t) {
      function r(t) {
        for (var e, n, r = [], o = 0, i = t.length; o < i;) (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--) : r.push(e);return r;
      }function o(t) {
        for (var e, n = t.length, r = -1, o = ""; ++r < n;) (e = t[r]) > 65535 && (o += y((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += y(e);return o;
      }function i(t) {
        if (t >= 55296 && t <= 57343) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
      }function a(t, e) {
        return y(t >> e & 63 | 128);
      }function s(t) {
        if (0 == (4294967168 & t)) return y(t);var e = "";return 0 == (4294965248 & t) ? e = y(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (i(t), e = y(t >> 12 & 15 | 224), e += a(t, 6)) : 0 == (4292870144 & t) && (e = y(t >> 18 & 7 | 240), e += a(t, 12), e += a(t, 6)), e += y(63 & t | 128);
      }function c() {
        if (m >= d) throw Error("Invalid byte index");var t = 255 & h[m];if (m++, 128 == (192 & t)) return 63 & t;throw Error("Invalid continuation byte");
      }function u() {
        var t, e, n, r, o;if (m > d) throw Error("Invalid byte index");if (m == d) return !1;if (t = 255 & h[m], m++, 0 == (128 & t)) return t;if (192 == (224 & t)) {
          if (e = c(), (o = (31 & t) << 6 | e) >= 128) return o;throw Error("Invalid continuation byte");
        }if (224 == (240 & t)) {
          if (e = c(), n = c(), (o = (15 & t) << 12 | e << 6 | n) >= 2048) return i(o), o;throw Error("Invalid continuation byte");
        }if (240 == (248 & t) && (e = c(), n = c(), r = c(), (o = (7 & t) << 18 | e << 12 | n << 6 | r) >= 65536 && o <= 1114111)) return o;throw Error("Invalid UTF-8 detected");
      }var f = "object" == typeof n && n,
          l = "object" == typeof e && e && e.exports == f && e,
          p = "object" == typeof global && global;p.global !== p && p.window !== p || (t = p);var h,
          d,
          m,
          y = String.fromCharCode,
          g = { version: "2.1.2", encode: function (t) {
          for (var e = r(t), n = e.length, o = -1, i = ""; ++o < n;) i += s(e[o]);return i;
        }, decode: function (t) {
          h = r(t), d = h.length, m = 0;for (var e, n = []; !1 !== (e = u());) n.push(e);return o(n);
        } };if ("function" == typeof define && "object" == typeof define.amd && define.amd) define(function () {
        return g;
      });else if (f && !f.nodeType) {
        if (l) l.exports = g;else {
          var v = {}.hasOwnProperty;for (var b in g) v.call(g, b) && (f[b] = g[b]);
        }
      } else t.utf8 = g;
    }(this);
  }, {}], 85: [function (t, e, n) {
    e.exports = XMLHttpRequest;
  }, {}], "bignumber.js": [function (t, e, n) {
    !function (t) {
      "use strict";
      function n(t) {
        function e(t, n) {
          var r,
              o,
              i,
              a,
              s,
              c,
              u = this;if (!(u instanceof e)) return U && I(26, "constructor call without new", t), new e(t, n);if (null != n && W(n, 2, 64, D, "base")) {
            if (n |= 0, c = t + "", 10 == n) return u = new e(t instanceof e ? t : c), N(u, M + u.e + 1, H);if ((a = "number" == typeof t) && 0 * t != 0 || !new RegExp("^-?" + (r = "[" + b.slice(0, n) + "]+") + "(?:\\." + r + ")?$", n < 37 ? "i" : "").test(c)) return P(u, c, a, n);a ? (u.s = 1 / t < 0 ? (c = c.slice(1), -1) : 1, U && c.replace(/^0\.0*|\./, "").length > 15 && I(D, v, t), a = !1) : u.s = 45 === c.charCodeAt(0) ? (c = c.slice(1), -1) : 1, c = p(c, 10, n, u.s);
          } else {
            if (t instanceof e) return u.s = t.s, u.e = t.e, u.c = (t = t.c) ? t.slice() : t, void (D = 0);if ((a = "number" == typeof t) && 0 * t == 0) {
              if (u.s = 1 / t < 0 ? (t = -t, -1) : 1, t === ~~t) {
                for (o = 0, i = t; i >= 10; i /= 10, o++);return u.e = o, u.c = [t], void (D = 0);
              }c = t + "";
            } else {
              if (!h.test(c = t + "")) return P(u, c, a);u.s = 45 === c.charCodeAt(0) ? (c = c.slice(1), -1) : 1;
            }
          }for ((o = c.indexOf(".")) > -1 && (c = c.replace(".", "")), (i = c.search(/e/i)) > 0 ? (o < 0 && (o = i), o += +c.slice(i + 1), c = c.substring(0, i)) : o < 0 && (o = c.length), i = 0; 48 === c.charCodeAt(i); i++);for (s = c.length; 48 === c.charCodeAt(--s););if (c = c.slice(i, s + 1)) {
            if (s = c.length, a && U && s > 15 && (t > x || t !== m(t)) && I(D, v, u.s * t), (o = o - i - 1) > L) u.c = u.e = null;else if (o < z) u.c = [u.e = 0];else {
              if (u.e = o, u.c = [], i = (o + 1) % w, o < 0 && (i += w), i < s) {
                for (i && u.c.push(+c.slice(0, i)), s -= w; i < s;) u.c.push(+c.slice(i, i += w));c = c.slice(i), i = w - c.length;
              } else i -= s;for (; i--; c += "0");u.c.push(+c);
            }
          } else u.c = [u.e = 0];D = 0;
        }function p(t, n, r, i) {
          var a,
              s,
              u,
              l,
              p,
              h,
              d,
              m = t.indexOf("."),
              y = M,
              g = H;for (r < 37 && (t = t.toLowerCase()), m >= 0 && (u = G, G = 0, t = t.replace(".", ""), p = (d = new e(r)).pow(t.length - m), G = u, d.c = c(f(o(p.c), p.e), 10, n), d.e = d.c.length), s = u = (h = c(t, r, n)).length; 0 == h[--u]; h.pop());if (!h[0]) return "0";if (m < 0 ? --s : (p.c = h, p.e = s, p.s = i, h = (p = T(p, d, y, g, n)).c, l = p.r, s = p.e), a = s + y + 1, m = h[a], u = n / 2, l = l || a < 0 || null != h[a + 1], l = g < 4 ? (null != m || l) && (0 == g || g == (p.s < 0 ? 3 : 2)) : m > u || m == u && (4 == g || l || 6 == g && 1 & h[a - 1] || g == (p.s < 0 ? 8 : 7)), a < 1 || !h[0]) t = l ? f("1", -y) : "0";else {
            if (h.length = a, l) for (--n; ++h[--a] > n;) h[a] = 0, a || (++s, h.unshift(1));for (u = h.length; !h[--u];);for (m = 0, t = ""; m <= u; t += b.charAt(h[m++]));t = f(t, s);
          }return t;
        }function C(t, n, r, i) {
          var a, s, c, l, p;if (r = null != r && W(r, 0, 8, i, g) ? 0 | r : H, !t.c) return t.toString();if (a = t.c[0], c = t.e, null == n) p = o(t.c), p = 19 == i || 24 == i && c <= j ? u(p, c) : f(p, c);else if (t = N(new e(t), n, r), s = t.e, p = o(t.c), l = p.length, 19 == i || 24 == i && (n <= s || s <= j)) {
            for (; l < n; p += "0", l++);p = u(p, s);
          } else if (n -= c, p = f(p, s), s + 1 > l) {
            if (--n > 0) for (p += "."; n--; p += "0");
          } else if ((n += s - l) > 0) for (s + 1 == l && (p += "."); n--; p += "0");return t.s < 0 && a ? "-" + p : p;
        }function A(t, n) {
          var r,
              o,
              i = 0;for (s(t[0]) && (t = t[0]), r = new e(t[0]); ++i < t.length;) {
            if (!(o = new e(t[i])).s) {
              r = o;break;
            }n.call(r, o) && (r = o);
          }return r;
        }function F(t, e, n, r, o) {
          return (t < e || t > n || t != l(t)) && I(r, (o || "decimal places") + (t < e || t > n ? " out of range" : " not an integer"), t), !0;
        }function O(t, e, n) {
          for (var r = 1, o = e.length; !e[--o]; e.pop());for (o = e[0]; o >= 10; o /= 10, r++);return (n = r + n * w - 1) > L ? t.c = t.e = null : n < z ? t.c = [t.e = 0] : (t.e = n, t.c = e), t;
        }function I(t, e, n) {
          var r = new Error(["new BigNumber", "cmp", "config", "div", "divToInt", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "precision", "random", "round", "shift", "times", "toDigits", "toExponential", "toFixed", "toFormat", "toFraction", "pow", "toPrecision", "toString", "BigNumber"][t] + "() " + e + ": " + n);throw r.name = "BigNumber Error", D = 0, r;
        }function N(t, e, n, r) {
          var o,
              i,
              a,
              s,
              c,
              u,
              f,
              l = t.c,
              p = k;if (l) {
            t: {
              for (o = 1, s = l[0]; s >= 10; s /= 10, o++);if ((i = e - o) < 0) i += w, a = e, f = (c = l[u = 0]) / p[o - a - 1] % 10 | 0;else if ((u = d((i + 1) / w)) >= l.length) {
                if (!r) break t;for (; l.length <= u; l.push(0));c = f = 0, o = 1, a = (i %= w) - w + 1;
              } else {
                for (c = s = l[u], o = 1; s >= 10; s /= 10, o++);f = (a = (i %= w) - w + o) < 0 ? 0 : c / p[o - a - 1] % 10 | 0;
              }if (r = r || e < 0 || null != l[u + 1] || (a < 0 ? c : c % p[o - a - 1]), r = n < 4 ? (f || r) && (0 == n || n == (t.s < 0 ? 3 : 2)) : f > 5 || 5 == f && (4 == n || r || 6 == n && (i > 0 ? a > 0 ? c / p[o - a] : 0 : l[u - 1]) % 10 & 1 || n == (t.s < 0 ? 8 : 7)), e < 1 || !l[0]) return l.length = 0, r ? (e -= t.e + 1, l[0] = p[(w - e % w) % w], t.e = -e || 0) : l[0] = t.e = 0, t;if (0 == i ? (l.length = u, s = 1, u--) : (l.length = u + 1, s = p[w - i], l[u] = a > 0 ? m(c / p[o - a] % p[a]) * s : 0), r) for (;;) {
                if (0 == u) {
                  for (i = 1, a = l[0]; a >= 10; a /= 10, i++);for (a = l[0] += s, s = 1; a >= 10; a /= 10, s++);i != s && (t.e++, l[0] == _ && (l[0] = 1));break;
                }if (l[u] += s, l[u] != _) break;l[u--] = 0, s = 1;
              }for (i = l.length; 0 === l[--i]; l.pop());
            }t.e > L ? t.c = t.e = null : t.e < z && (t.c = [t.e = 0]);
          }return t;
        }var T,
            P,
            D = 0,
            R = e.prototype,
            E = new e(1),
            M = 20,
            H = 4,
            j = -7,
            q = 21,
            z = -1e7,
            L = 1e7,
            U = !0,
            W = F,
            J = !1,
            K = 1,
            G = 0,
            X = { decimalSeparator: ".", groupSeparator: ",", groupSize: 3, secondaryGroupSize: 0, fractionGroupSeparator: " ", fractionGroupSize: 0 };return e.another = n, e.ROUND_UP = 0, e.ROUND_DOWN = 1, e.ROUND_CEIL = 2, e.ROUND_FLOOR = 3, e.ROUND_HALF_UP = 4, e.ROUND_HALF_DOWN = 5, e.ROUND_HALF_EVEN = 6, e.ROUND_HALF_CEIL = 7, e.ROUND_HALF_FLOOR = 8, e.EUCLID = 9, e.config = e.set = function () {
          var t,
              e,
              n = 0,
              r = {},
              o = arguments,
              i = o[0],
              c = i && "object" == typeof i ? function () {
            if (i.hasOwnProperty(e)) return null != (t = i[e]);
          } : function () {
            if (o.length > n) return null != (t = o[n++]);
          };return c(e = "DECIMAL_PLACES") && W(t, 0, S, 2, e) && (M = 0 | t), r[e] = M, c(e = "ROUNDING_MODE") && W(t, 0, 8, 2, e) && (H = 0 | t), r[e] = H, c(e = "EXPONENTIAL_AT") && (s(t) ? W(t[0], -S, 0, 2, e) && W(t[1], 0, S, 2, e) && (j = 0 | t[0], q = 0 | t[1]) : W(t, -S, S, 2, e) && (j = -(q = 0 | (t < 0 ? -t : t)))), r[e] = [j, q], c(e = "RANGE") && (s(t) ? W(t[0], -S, -1, 2, e) && W(t[1], 1, S, 2, e) && (z = 0 | t[0], L = 0 | t[1]) : W(t, -S, S, 2, e) && (0 | t ? z = -(L = 0 | (t < 0 ? -t : t)) : U && I(2, e + " cannot be zero", t))), r[e] = [z, L], c(e = "ERRORS") && (t === !!t || 1 === t || 0 === t ? (D = 0, W = (U = !!t) ? F : a) : U && I(2, e + y, t)), r[e] = U, c(e = "CRYPTO") && (!0 === t || !1 === t || 1 === t || 0 === t ? t ? !(t = "undefined" == typeof crypto) && crypto && (crypto.getRandomValues || crypto.randomBytes) ? J = !0 : U ? I(2, "crypto unavailable", t ? void 0 : crypto) : J = !1 : J = !1 : U && I(2, e + y, t)), r[e] = J, c(e = "MODULO_MODE") && W(t, 0, 9, 2, e) && (K = 0 | t), r[e] = K, c(e = "POW_PRECISION") && W(t, 0, S, 2, e) && (G = 0 | t), r[e] = G, c(e = "FORMAT") && ("object" == typeof t ? X = t : U && I(2, e + " not an object", t)), r[e] = X, r;
        }, e.max = function () {
          return A(arguments, R.lt);
        }, e.min = function () {
          return A(arguments, R.gt);
        }, e.random = function () {
          var t = 9007199254740992 * Math.random() & 2097151 ? function () {
            return m(9007199254740992 * Math.random());
          } : function () {
            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0);
          };return function (n) {
            var r,
                o,
                i,
                a,
                s,
                c = 0,
                u = [],
                f = new e(E);if (n = null != n && W(n, 0, S, 14) ? 0 | n : M, a = d(n / w), J) if (crypto.getRandomValues) {
              for (r = crypto.getRandomValues(new Uint32Array(a *= 2)); c < a;) (s = 131072 * r[c] + (r[c + 1] >>> 11)) >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), r[c] = o[0], r[c + 1] = o[1]) : (u.push(s % 1e14), c += 2);c = a / 2;
            } else if (crypto.randomBytes) {
              for (r = crypto.randomBytes(a *= 7); c < a;) (s = 281474976710656 * (31 & r[c]) + 1099511627776 * r[c + 1] + 4294967296 * r[c + 2] + 16777216 * r[c + 3] + (r[c + 4] << 16) + (r[c + 5] << 8) + r[c + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, c) : (u.push(s % 1e14), c += 7);c = a / 7;
            } else J = !1, U && I(14, "crypto unavailable", crypto);if (!J) for (; c < a;) (s = t()) < 9e15 && (u[c++] = s % 1e14);for (a = u[--c], n %= w, a && n && (s = k[w - n], u[c] = m(a / s) * s); 0 === u[c]; u.pop(), c--);if (c < 0) u = [i = 0];else {
              for (i = -1; 0 === u[0]; u.shift(), i -= w);for (c = 1, s = u[0]; s >= 10; s /= 10, c++);c < w && (i -= w - c);
            }return f.e = i, f.c = u, f;
          };
        }(), T = function () {
          function t(t, e, n) {
            var r,
                o,
                i,
                a,
                s = 0,
                c = t.length,
                u = e % B,
                f = e / B | 0;for (t = t.slice(); c--;) s = ((o = u * (i = t[c] % B) + (r = f * i + (a = t[c] / B | 0) * u) % B * B + s) / n | 0) + (r / B | 0) + f * a, t[c] = o % n;return s && t.unshift(s), t;
          }function n(t, e, n, r) {
            var o, i;if (n != r) i = n > r ? 1 : -1;else for (o = i = 0; o < n; o++) if (t[o] != e[o]) {
              i = t[o] > e[o] ? 1 : -1;break;
            }return i;
          }function o(t, e, n, r) {
            for (var o = 0; n--;) t[n] -= o, o = t[n] < e[n] ? 1 : 0, t[n] = o * r + t[n] - e[n];for (; !t[0] && t.length > 1; t.shift());
          }return function (i, a, s, c, u) {
            var f,
                l,
                p,
                h,
                d,
                y,
                g,
                v,
                b,
                x,
                k,
                B,
                S,
                C,
                A,
                F,
                O,
                I = i.s == a.s ? 1 : -1,
                T = i.c,
                P = a.c;if (!(T && T[0] && P && P[0])) return new e(i.s && a.s && (T ? !P || T[0] != P[0] : P) ? T && 0 == T[0] || !P ? 0 * I : I / 0 : NaN);for (b = (v = new e(I)).c = [], I = s + (l = i.e - a.e) + 1, u || (u = _, l = r(i.e / w) - r(a.e / w), I = I / w | 0), p = 0; P[p] == (T[p] || 0); p++);if (P[p] > (T[p] || 0) && l--, I < 0) b.push(1), h = !0;else {
              for (C = T.length, F = P.length, p = 0, I += 2, (d = m(u / (P[0] + 1))) > 1 && (P = t(P, d, u), T = t(T, d, u), F = P.length, C = T.length), S = F, k = (x = T.slice(0, F)).length; k < F; x[k++] = 0);(O = P.slice()).unshift(0), A = P[0], P[1] >= u / 2 && A++;do {
                if (d = 0, (f = n(P, x, F, k)) < 0) {
                  if (B = x[0], F != k && (B = B * u + (x[1] || 0)), (d = m(B / A)) > 1) for (d >= u && (d = u - 1), g = (y = t(P, d, u)).length, k = x.length; 1 == n(y, x, g, k);) d--, o(y, F < g ? O : P, g, u), g = y.length, f = 1;else 0 == d && (f = d = 1), g = (y = P.slice()).length;if (g < k && y.unshift(0), o(x, y, k, u), k = x.length, -1 == f) for (; n(P, x, F, k) < 1;) d++, o(x, F < k ? O : P, k, u), k = x.length;
                } else 0 === f && (d++, x = [0]);b[p++] = d, x[0] ? x[k++] = T[S] || 0 : (x = [T[S]], k = 1);
              } while ((S++ < C || null != x[0]) && I--);h = null != x[0], b[0] || b.shift();
            }if (u == _) {
              for (p = 1, I = b[0]; I >= 10; I /= 10, p++);N(v, s + (v.e = p + l * w - 1) + 1, c, h);
            } else v.e = l, v.r = +h;return v;
          };
        }(), P = function () {
          var t = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
              n = /^([^.]+)\.$/,
              r = /^\.([^.]+)$/,
              o = /^-?(Infinity|NaN)$/,
              i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;return function (a, s, c, u) {
            var f,
                l = c ? s : s.replace(i, "");if (o.test(l)) a.s = isNaN(l) ? null : l < 0 ? -1 : 1;else {
              if (!c && (l = l.replace(t, function (t, e, n) {
                return f = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, u && u != f ? t : e;
              }), u && (f = u, l = l.replace(n, "$1").replace(r, "0.$1")), s != l)) return new e(l, f);U && I(D, "not a" + (u ? " base " + u : "") + " number", s), a.s = null;
            }a.c = a.e = null, D = 0;
          };
        }(), R.absoluteValue = R.abs = function () {
          var t = new e(this);return t.s < 0 && (t.s = 1), t;
        }, R.ceil = function () {
          return N(new e(this), this.e + 1, 2);
        }, R.comparedTo = R.cmp = function (t, n) {
          return D = 1, i(this, new e(t, n));
        }, R.decimalPlaces = R.dp = function () {
          var t,
              e,
              n = this.c;if (!n) return null;if (t = ((e = n.length - 1) - r(this.e / w)) * w, e = n[e]) for (; e % 10 == 0; e /= 10, t--);return t < 0 && (t = 0), t;
        }, R.dividedBy = R.div = function (t, n) {
          return D = 3, T(this, new e(t, n), M, H);
        }, R.dividedToIntegerBy = R.divToInt = function (t, n) {
          return D = 4, T(this, new e(t, n), 0, 1);
        }, R.equals = R.eq = function (t, n) {
          return D = 5, 0 === i(this, new e(t, n));
        }, R.floor = function () {
          return N(new e(this), this.e + 1, 3);
        }, R.greaterThan = R.gt = function (t, n) {
          return D = 6, i(this, new e(t, n)) > 0;
        }, R.greaterThanOrEqualTo = R.gte = function (t, n) {
          return D = 7, 1 === (n = i(this, new e(t, n))) || 0 === n;
        }, R.isFinite = function () {
          return !!this.c;
        }, R.isInteger = R.isInt = function () {
          return !!this.c && r(this.e / w) > this.c.length - 2;
        }, R.isNaN = function () {
          return !this.s;
        }, R.isNegative = R.isNeg = function () {
          return this.s < 0;
        }, R.isZero = function () {
          return !!this.c && 0 == this.c[0];
        }, R.lessThan = R.lt = function (t, n) {
          return D = 8, i(this, new e(t, n)) < 0;
        }, R.lessThanOrEqualTo = R.lte = function (t, n) {
          return D = 9, -1 === (n = i(this, new e(t, n))) || 0 === n;
        }, R.minus = R.sub = function (t, n) {
          var o,
              i,
              a,
              s,
              c = this,
              u = c.s;if (D = 10, t = new e(t, n), n = t.s, !u || !n) return new e(NaN);if (u != n) return t.s = -n, c.plus(t);var f = c.e / w,
              l = t.e / w,
              p = c.c,
              h = t.c;if (!f || !l) {
            if (!p || !h) return p ? (t.s = -n, t) : new e(h ? c : NaN);if (!p[0] || !h[0]) return h[0] ? (t.s = -n, t) : new e(p[0] ? c : 3 == H ? -0 : 0);
          }if (f = r(f), l = r(l), p = p.slice(), u = f - l) {
            for ((s = u < 0) ? (u = -u, a = p) : (l = f, a = h), a.reverse(), n = u; n--; a.push(0));a.reverse();
          } else for (i = (s = (u = p.length) < (n = h.length)) ? u : n, u = n = 0; n < i; n++) if (p[n] != h[n]) {
            s = p[n] < h[n];break;
          }if (s && (a = p, p = h, h = a, t.s = -t.s), (n = (i = h.length) - (o = p.length)) > 0) for (; n--; p[o++] = 0);for (n = _ - 1; i > u;) {
            if (p[--i] < h[i]) {
              for (o = i; o && !p[--o]; p[o] = n);--p[o], p[i] += _;
            }p[i] -= h[i];
          }for (; 0 == p[0]; p.shift(), --l);return p[0] ? O(t, p, l) : (t.s = 3 == H ? -1 : 1, t.c = [t.e = 0], t);
        }, R.modulo = R.mod = function (t, n) {
          var r,
              o,
              i = this;return D = 11, t = new e(t, n), !i.c || !t.s || t.c && !t.c[0] ? new e(NaN) : !t.c || i.c && !i.c[0] ? new e(i) : (9 == K ? (o = t.s, t.s = 1, r = T(i, t, 0, 3), t.s = o, r.s *= o) : r = T(i, t, 0, K), i.minus(r.times(t)));
        }, R.negated = R.neg = function () {
          var t = new e(this);return t.s = -t.s || null, t;
        }, R.plus = R.add = function (t, n) {
          var o,
              i = this,
              a = i.s;if (D = 12, t = new e(t, n), n = t.s, !a || !n) return new e(NaN);if (a != n) return t.s = -n, i.minus(t);var s = i.e / w,
              c = t.e / w,
              u = i.c,
              f = t.c;if (!s || !c) {
            if (!u || !f) return new e(a / 0);if (!u[0] || !f[0]) return f[0] ? t : new e(u[0] ? i : 0 * a);
          }if (s = r(s), c = r(c), u = u.slice(), a = s - c) {
            for (a > 0 ? (c = s, o = f) : (a = -a, o = u), o.reverse(); a--; o.push(0));o.reverse();
          }for ((a = u.length) - (n = f.length) < 0 && (o = f, f = u, u = o, n = a), a = 0; n;) a = (u[--n] = u[n] + f[n] + a) / _ | 0, u[n] = _ === u[n] ? 0 : u[n] % _;return a && (u.unshift(a), ++c), O(t, u, c);
        }, R.precision = R.sd = function (t) {
          var e,
              n,
              r = this,
              o = r.c;if (null != t && t !== !!t && 1 !== t && 0 !== t && (U && I(13, "argument" + y, t), t != !!t && (t = null)), !o) return null;if (n = o.length - 1, e = n * w + 1, n = o[n]) {
            for (; n % 10 == 0; n /= 10, e--);for (n = o[0]; n >= 10; n /= 10, e++);
          }return t && r.e + 1 > e && (e = r.e + 1), e;
        }, R.round = function (t, n) {
          var r = new e(this);return (null == t || W(t, 0, S, 15)) && N(r, ~~t + this.e + 1, null != n && W(n, 0, 8, 15, g) ? 0 | n : H), r;
        }, R.shift = function (t) {
          var n = this;return W(t, -x, x, 16, "argument") ? n.times("1e" + l(t)) : new e(n.c && n.c[0] && (t < -x || t > x) ? n.s * (t < 0 ? 0 : 1 / 0) : n);
        }, R.squareRoot = R.sqrt = function () {
          var t,
              n,
              i,
              a,
              s,
              c = this,
              u = c.c,
              f = c.s,
              l = c.e,
              p = M + 4,
              h = new e("0.5");if (1 !== f || !u || !u[0]) return new e(!f || f < 0 && (!u || u[0]) ? NaN : u ? c : 1 / 0);if (0 == (f = Math.sqrt(+c)) || f == 1 / 0 ? (((n = o(u)).length + l) % 2 == 0 && (n += "0"), f = Math.sqrt(n), l = r((l + 1) / 2) - (l < 0 || l % 2), i = new e(n = f == 1 / 0 ? "1e" + l : (n = f.toExponential()).slice(0, n.indexOf("e") + 1) + l)) : i = new e(f + ""), i.c[0]) for ((f = (l = i.e) + p) < 3 && (f = 0);;) if (s = i, i = h.times(s.plus(T(c, s, p, 1))), o(s.c).slice(0, f) === (n = o(i.c)).slice(0, f)) {
            if (i.e < l && --f, "9999" != (n = n.slice(f - 3, f + 1)) && (a || "4999" != n)) {
              +n && (+n.slice(1) || "5" != n.charAt(0)) || (N(i, i.e + M + 2, 1), t = !i.times(i).eq(c));break;
            }if (!a && (N(s, s.e + M + 2, 0), s.times(s).eq(c))) {
              i = s;break;
            }p += 4, f += 4, a = 1;
          }return N(i, i.e + M + 1, H, t);
        }, R.times = R.mul = function (t, n) {
          var o,
              i,
              a,
              s,
              c,
              u,
              f,
              l,
              p,
              h,
              d,
              m,
              y,
              g,
              v,
              b = this,
              x = b.c,
              k = (D = 17, t = new e(t, n)).c;if (!(x && k && x[0] && k[0])) return !b.s || !t.s || x && !x[0] && !k || k && !k[0] && !x ? t.c = t.e = t.s = null : (t.s *= b.s, x && k ? (t.c = [0], t.e = 0) : t.c = t.e = null), t;for (i = r(b.e / w) + r(t.e / w), t.s *= b.s, (f = x.length) < (h = k.length) && (y = x, x = k, k = y, a = f, f = h, h = a), a = f + h, y = []; a--; y.push(0));for (g = _, v = B, a = h; --a >= 0;) {
            for (o = 0, d = k[a] % v, m = k[a] / v | 0, s = a + (c = f); s > a;) o = ((l = d * (l = x[--c] % v) + (u = m * l + (p = x[c] / v | 0) * d) % v * v + y[s] + o) / g | 0) + (u / v | 0) + m * p, y[s--] = l % g;y[s] = o;
          }return o ? ++i : y.shift(), O(t, y, i);
        }, R.toDigits = function (t, n) {
          var r = new e(this);return t = null != t && W(t, 1, S, 18, "precision") ? 0 | t : null, n = null != n && W(n, 0, 8, 18, g) ? 0 | n : H, t ? N(r, t, n) : r;
        }, R.toExponential = function (t, e) {
          return C(this, null != t && W(t, 0, S, 19) ? 1 + ~~t : null, e, 19);
        }, R.toFixed = function (t, e) {
          return C(this, null != t && W(t, 0, S, 20) ? ~~t + this.e + 1 : null, e, 20);
        }, R.toFormat = function (t, e) {
          var n = C(this, null != t && W(t, 0, S, 21) ? ~~t + this.e + 1 : null, e, 21);if (this.c) {
            var r,
                o = n.split("."),
                i = +X.groupSize,
                a = +X.secondaryGroupSize,
                s = X.groupSeparator,
                c = o[0],
                u = o[1],
                f = this.s < 0,
                l = f ? c.slice(1) : c,
                p = l.length;if (a && (r = i, i = a, a = r, p -= r), i > 0 && p > 0) {
              for (r = p % i || i, c = l.substr(0, r); r < p; r += i) c += s + l.substr(r, i);a > 0 && (c += s + l.slice(r)), f && (c = "-" + c);
            }n = u ? c + X.decimalSeparator + ((a = +X.fractionGroupSize) ? u.replace(new RegExp("\\d{" + a + "}\\B", "g"), "$&" + X.fractionGroupSeparator) : u) : c;
          }return n;
        }, R.toFraction = function (t) {
          var n,
              r,
              i,
              a,
              s,
              c,
              u,
              f,
              l,
              p = U,
              h = this,
              d = h.c,
              m = new e(E),
              y = r = new e(E),
              g = u = new e(E);if (null != t && (U = !1, c = new e(t), U = p, (p = c.isInt()) && !c.lt(E) || (U && I(22, "max denominator " + (p ? "out of range" : "not an integer"), t), t = !p && c.c && N(c, c.e + 1, 1).gte(E) ? c : null)), !d) return h.toString();for (l = o(d), a = m.e = l.length - h.e - 1, m.c[0] = k[(s = a % w) < 0 ? w + s : s], t = !t || c.cmp(m) > 0 ? a > 0 ? m : y : c, s = L, L = 1 / 0, c = new e(l), u.c[0] = 0; f = T(c, m, 0, 1), 1 != (i = r.plus(f.times(g))).cmp(t);) r = g, g = i, y = u.plus(f.times(i = y)), u = i, m = c.minus(f.times(i = m)), c = i;return i = T(t.minus(r), g, 0, 1), u = u.plus(i.times(y)), r = r.plus(i.times(g)), u.s = y.s = h.s, a *= 2, n = T(y, g, a, H).minus(h).abs().cmp(T(u, r, a, H).minus(h).abs()) < 1 ? [y.toString(), g.toString()] : [u.toString(), r.toString()], L = s, n;
        }, R.toNumber = function () {
          return +this;
        }, R.toPower = R.pow = function (t, n) {
          var r,
              o,
              i,
              a = m(t < 0 ? -t : +t),
              s = this;if (null != n && (D = 23, n = new e(n)), !W(t, -x, x, 23, "exponent") && (!isFinite(t) || a > x && (t /= 0) || parseFloat(t) != t && !(t = NaN)) || 0 == t) return r = Math.pow(+s, t), new e(n ? r % n : r);for (n ? t > 1 && s.gt(E) && s.isInt() && n.gt(E) && n.isInt() ? s = s.mod(n) : (i = n, n = null) : G && (r = d(G / w + 2)), o = new e(E);;) {
            if (a % 2) {
              if (!(o = o.times(s)).c) break;r ? o.c.length > r && (o.c.length = r) : n && (o = o.mod(n));
            }if (!(a = m(a / 2))) break;s = s.times(s), r ? s.c && s.c.length > r && (s.c.length = r) : n && (s = s.mod(n));
          }return n ? o : (t < 0 && (o = E.div(o)), i ? o.mod(i) : r ? N(o, G, H) : o);
        }, R.toPrecision = function (t, e) {
          return C(this, null != t && W(t, 1, S, 24, "precision") ? 0 | t : null, e, 24);
        }, R.toString = function (t) {
          var e,
              n = this,
              r = n.s,
              i = n.e;return null === i ? r ? (e = "Infinity", r < 0 && (e = "-" + e)) : e = "NaN" : (e = o(n.c), e = null != t && W(t, 2, 64, 25, "base") ? p(f(e, i), 0 | t, 10, r) : i <= j || i >= q ? u(e, i) : f(e, i), r < 0 && n.c[0] && (e = "-" + e)), e;
        }, R.truncated = R.trunc = function () {
          return N(new e(this), this.e + 1, 1);
        }, R.valueOf = R.toJSON = function () {
          var t,
              e = this,
              n = e.e;return null === n ? e.toString() : (t = o(e.c), t = n <= j || n >= q ? u(t, n) : f(t, n), e.s < 0 ? "-" + t : t);
        }, R.isBigNumber = !0, null != t && e.config(t), e;
      }function r(t) {
        var e = 0 | t;return t > 0 || t === e ? e : e - 1;
      }function o(t) {
        for (var e, n, r = 1, o = t.length, i = t[0] + ""; r < o;) {
          for (e = t[r++] + "", n = w - e.length; n--; e = "0" + e);i += e;
        }for (o = i.length; 48 === i.charCodeAt(--o););return i.slice(0, o + 1 || 1);
      }function i(t, e) {
        var n,
            r,
            o = t.c,
            i = e.c,
            a = t.s,
            s = e.s,
            c = t.e,
            u = e.e;if (!a || !s) return null;if (n = o && !o[0], r = i && !i[0], n || r) return n ? r ? 0 : -s : a;if (a != s) return a;if (n = a < 0, r = c == u, !o || !i) return r ? 0 : !o ^ n ? 1 : -1;if (!r) return c > u ^ n ? 1 : -1;for (s = (c = o.length) < (u = i.length) ? c : u, a = 0; a < s; a++) if (o[a] != i[a]) return o[a] > i[a] ^ n ? 1 : -1;return c == u ? 0 : c > u ^ n ? 1 : -1;
      }function a(t, e, n) {
        return (t = l(t)) >= e && t <= n;
      }function s(t) {
        return "[object Array]" == Object.prototype.toString.call(t);
      }function c(t, e, n) {
        for (var r, o, i = [0], a = 0, s = t.length; a < s;) {
          for (o = i.length; o--; i[o] *= e);for (i[r = 0] += b.indexOf(t.charAt(a++)); r < i.length; r++) i[r] > n - 1 && (null == i[r + 1] && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
        }return i.reverse();
      }function u(t, e) {
        return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (e < 0 ? "e" : "e+") + e;
      }function f(t, e) {
        var n, r;if (e < 0) {
          for (r = "0."; ++e; r += "0");t = r + t;
        } else if (n = t.length, ++e > n) {
          for (r = "0", e -= n; --e; r += "0");t += r;
        } else e < n && (t = t.slice(0, e) + "." + t.slice(e));return t;
      }function l(t) {
        return (t = parseFloat(t)) < 0 ? d(t) : m(t);
      }var p,
          h = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          d = Math.ceil,
          m = Math.floor,
          y = " not a boolean or binary digit",
          g = "rounding mode",
          v = "number type has more than 15 significant digits",
          b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",
          _ = 1e14,
          w = 14,
          x = 9007199254740991,
          k = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
          B = 1e7,
          S = 1e9;(p = n()).default = p.BigNumber = p, "function" == typeof define && define.amd ? define(function () {
        return p;
      }) : void 0 !== e && e.exports ? e.exports = p : (t || (t = "undefined" != typeof self ? self : Function("return this")()), t.BigNumber = p);
    }(this);
  }, {}], web3: [function (t, e, n) {
    var r = t("./lib/web3");"undefined" != typeof window && void 0 === window.Web3 && (window.Web3 = r), e.exports = r;
  }, { "./lib/web3": 22 }] }, {}, ["web3"]);
