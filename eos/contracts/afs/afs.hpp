/**
 *  @file
 *  @copyright defined in eos/LICENSE.txt
 */

#include <eoslib/eos.hpp>
#include <eoslib/token.hpp>
#include <eoslib/db.hpp>

/**
 *  @defgroup examplecontract Example Contract
 *  @brief Example Contract
 *  @ingroup contractapi
 *
 */


/**
 * Make it easy to change the account name the afs is deployed to.
 */
#ifndef TOKEN_NAME
#define TOKEN_NAME afs
#endif

namespace TOKEN_NAME {

  /**
   *  @defgroup afsapi afs Contract
   *  @brief Defines the curency contract example
   *  @ingroup examplecontract
   *
   *  @{
   */

   /**
   * Defines a afs token
   */
   typedef eosio::token<uint64_t,N(afs)> afs_tokens;

   /**
    *  transfer requires that the sender and receiver be the first two
    *  accounts notified and that the sender has provided authorization.
    *  @abi action
    */
   struct transfer {
      /**
      * account to transfer from
      */
      account_name       from;
      /**
      * account to transfer to
      */
      account_name       to;
      /**
      *  quantity to transfer
      */
      afs_tokens    quantity;
   };

   /**
    *  @brief row in account table stored within each scope
    *  @abi table
    */
   struct account {
      /**
      Constructor with default zero quantity (balance).
      */
      account( afs_tokens b = afs_tokens() ):balance(b){}

      /**
       *  The key is constant because there is only one record per scope/afs/accounts
       */
      const uint64_t     key = N(account);

      /**
      * Balance number of tokens in account
      **/
      afs_tokens     balance;

      /**
      Method to check if accoutn is empty.
      @return true if account balance is zero.
      **/
      bool  is_empty()const  { return balance.quantity == 0; }
   };

   /**
   Assert statement to verify structure packing for account
   **/
   //TODO: reintroduce static_assert if account and transfer are packed 
   //static_assert( sizeof(account) == sizeof(uint64_t)+sizeof(afs_tokens), "unexpected packing" );

   /**
   Defines the database table for account information
   **/
   using accounts = eosio::table<N(defaultscope),N(afs),N(account),account,uint64_t>;

   /**
    *  accounts information for owner is stored:
    *
    *  owner/TOKEN_NAME/account/account -> account
    *
    *  This API is made available for 3rd parties wanting read access to
    *  the users balance. If the account doesn't exist a default constructed
    *  account will be returned.
    *  @param owner The account owner
    *  @return account instance
    */
   inline account get_account( account_name owner ) {
      account owned_account;
      ///      scope, record
      accounts::get( owned_account, owner );
      return owned_account;
   }

} /// @} /// afsapi
