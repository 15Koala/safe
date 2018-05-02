class Balance {

  constructor(){
    this.wallet    = web3.toBigNumber(0)
    this.unclaimed = web3.toBigNumber(0)
    this.reclaimed = web3.toBigNumber(0)
    this.total     = web3.toBigNumber(0)
  }

  set( type, balance ){
    this[ type ] = balance
    return this //chaining
  }

  readable( type = 'total' ){
    this[ type ] = formatEOS( this[ type ] )
  }

  exists( type ){
    return (typeof this[ type ] !== "undefined" && this[type].gt( 0 ))
  }

  get( type ){
    return (typeof this[ type ] !== "undefined" && this[type].gt( 0 )) ? this[type] : false;
  }

  sum(){
    this.total      = this.wallet.plus(this.unclaimed).plus(this.reclaimed)
    return this //chaining
  }

  from_wei(){
    //Save some dust, higher accuracy. 
    this.total      = this.total.div(WAD)
    this.wallet     = this.wallet.div(WAD)
    this.unclaimed  = this.unclaimed.div(WAD)
    this.reclaimed  = this.reclaimed.div(WAD)
  }
} 