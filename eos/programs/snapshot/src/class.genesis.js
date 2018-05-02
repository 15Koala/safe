class Genesis {

  constructor( snapshot ){
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
    }

    if(snapshot) {
      this.json.initial_accounts = snapshot.map( registrant => { return { "name": registrant.eth, "owner_key": registrant.eos, "active_key": registrant.eos, "liquid_balance": `${registrant.balance} EOS`} } )
    }
  }

}