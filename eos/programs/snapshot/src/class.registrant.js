class Registrant {

  constructor( eth, eos = "", balance = 0 ){
    this.eth      = eth
    this.eos      = eos
    this.balance  = typeof balance == 'object' ? balance : new Balance()
    
    this.index    = null
    this.accepted = null
    this.error    = false
  }

  accept ( callback ) {
    this.accepted = true
    log("message", `[#${this.index}] accepted ${this.eth} => ${this.eos} => ${ this.balance.total.toFormat(4) }`)
  }

  reject () {
    this.accepted = false
    let msg = ""
    if(this.balance.exists('reclaimed'))
      log("reject", `[#${this.index}] rejected ${this.eth} => ${this.eos} => ${this.balance.total.toFormat(4)} => ${this.error} ( ${this.balance.reclaimed.toFormat(4)} reclaimed EOS tokens moved back to Reclaimable )`)
    else 
      log("reject", `[#${this.index}] rejected ${this.eth} => ${this.eos} => ${this.balance.total.toFormat(4)} => ${this.error}`)
  }

  judgement() {
    return this.valid() ? this.accept() : this.reject()
  }


  set ( key, value ) {
    return (typeof this[`set_${key}`] === "function") ? this[`set_${key}`](value) : this
  }


  set_index ( index ) {
    this.index = index
    return this //chaining
  }


  set_key ( eos_key ) {
    //remove whitespace
    eos_key = eos_key.trim()

    //Might be hex, try to convert it.
    if(eos_key.length == 106){                                    
      let eos_key_from_hex = web3.toAscii(eos_key) 
      if(eos_key_from_hex.startsWith('EOS') && eos_key_from_hex.length == 53) { 
        eos_key = eos_key_from_hex
      } 
    }
    //Might be user error
    else if(eos_key.startsWith('key')){                            
      let eos_key_mod = eos_key.substring(3) 
      if(eos_key_mod.startsWith('EOS') && eos_key_mod.length == 53) {
        eos_key = eos_key_mod
      } 
    }
    //Convert something that looks like a key to EOS key (STM, BTS, ETC)
    else if(!eos_key.startsWith('EOS') && !/[^a-zA-Z0-9]/.test(eos_key)) {
      let eos_key_test = `EOS${eos_key.slice(3, eos_key.length)}`
      eos_key = ( PublicKey.fromString(eos_key_test) != null ) ? eos_key_test : eos_key
    }

    this.eos = eos_key
    return this //chaining
  }


  // Reject bad keys and zero balances, elseif was fastest? :/
  valid() {

    //Reject balances lt 1
    if( this.balance.total.lt(1) ) {
      this.error = 'balance_insufficient'
    }
    
    //Key Validation
    else if(PublicKey.fromString(this.eos) == null) {

      //It's an empty key
      if(this.eos.length == 0) {
        this.error = 'key_is_empty'
      }
      
      //It may be an EOS private key
      else if(this.eos.startsWith('5')) { 
        this.error = 'key_is_private'
      }
      
      // It almost looks like an EOS key
      else if(this.eos.startsWith('EOS')) {
        this.error = 'key_is_malformed'
      }
      
      // ETH address
      else if(this.eos.startsWith('0x')) {
        this.error = 'key_is_eth'
      }
      
      //Reject everything else with junk label
      else {
        this.error = 'key_is_junk'
      }

    }

    return !this.error ? true : false

  }
}