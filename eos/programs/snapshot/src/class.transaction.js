class Transaction {

  constructor( eth, tx, type = "transfer", amount ) {
    this.eth     = eth
    this.eos     = null
    this.hash    = tx
    this.amount  = amount
    this.claimed = false
    this.type    = type
  } 

  claim( eth ) {
    return ( eth == this.eth ) 
      ? ( 
        this.claimed = true,
        log("success", `reclaimed ${this.eth} => ${this.eos} => ${this.amount.div(WAD).toFormat(4)} EOS <<< tx: https://etherscan.io/tx/${this.hash}`) 
      ) : log("error", `${eth} should't be claiming ${this.eth}'s transaction`)
  }

}