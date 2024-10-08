import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Option "mo:base/Option";
import Trie "mo:base/Trie";
import Nat32 "mo:base/Nat32";


actor{


  /**
   * Types
   */

  // The type of a user identifier.
  public type userId = Nat32;

  // The type of a user.
  public type user = {
    name :?Text;
    passkey:Nat;
    gg: Nat;
    lv_point:Nat;
    last_loggedin:Text;
    joined:Text;
    class_:Text;
    race:Text;
    gender:Text;
    background:Text;
    nft_image:Text;
  };

  /**
   * Application State
   */

 
  // The user data store.
  private stable var users : Trie.Trie<userId, user> = Trie.empty();

  /**
   * High-Level API
   */

  // Read all users data
  public query func ReadAllUsers() : async [user] {
    let array = Trie.toArray<userId,user,user>(
  users,
  func (k, v) = v
);
    array;
  };


 // Create a user.
  public func createUser(user : user) : async userId {
    let userId = Nat32.fromNat(user.passkey);
    users := Trie.replace(
      users,
      key(userId),
      Nat32.equal,
      ?user,
    ).0;
    return userId;
  };

  // Read a user.
  public query func readUser(user_id : Nat) : async ?user {
     let userId = Nat32.fromNat(user_id);
    let result = Trie.find(users, key(userId), Nat32.equal);
    return result;
  };

  // Update a user.
  public func updateUser(user_Id : Nat, user : user) : async Bool {
    let userId = Nat32.fromNat(user_Id);
    let result = Trie.find(users, key(userId), Nat32.equal);
    let exists = Option.isSome(result);
    if (exists) {
      users := Trie.replace(
        users,
        key(userId),
        Nat32.equal,
        ?user,
      ).0;
    };
    return exists;
  };

  // Delete a user.
  public func deleteUser(user_id : Nat) : async Bool {
    let userId = Nat32.fromNat(user_id);
    let result = Trie.find(users, key(userId), Nat32.equal);
    let exists = Option.isSome(result);
    if (exists) {
      users := Trie.replace(
        users,
        key(userId),
        Nat32.equal,
        null,
      ).0;
    };
    return exists;
  };

  /**
   * Utilities
   */
  // Create a trie key from a user identifier.
  private func key(x : userId) : Trie.Key<userId> {
    return { hash = x; key = x };
  }
}
