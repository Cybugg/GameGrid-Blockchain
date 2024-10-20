import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Option "mo:base/Option";
import Trie "mo:base/Trie";
import Nat32 "mo:base/Nat32";
import Types "./types";
import Utils "./utils"


actor{


  /**
   * Types
   */

  // The type of a user identifier.
  public type userId = Nat32;

// Level of character
  type characterLevel = Nat;


  //  Games in store
  stable var games:[Types.Game] = [];


  // Get Games List

  public query func getGames(): async [Types.Game]{
        games;
  };
  

  // Get Total Number of users online
public query func onlineUsers(): async Text{
        "1 user";
  };

//  Lists of collectables
public query func getCollectiblesList(): async [Text]{
  [""];
};
 /**
   * Application State using Array
   */





  /**
   * Application State using Trie
   */

 
  // The user data store.
  private stable var users : Trie.Trie<userId, Types.User> = Trie.empty();

  /**
   * High-Level API
   */

  // Read all users data
  public query func ReadAllUsers() : async [Types.User] {
    let array = Trie.toArray<userId,Types.User,Types.User>(
  users,
  func (k, v) = v
);
    array;
  };


 // Create a user.
  public func createUser(user : Types.User) : async userId {
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
  public query func readUser(user_id : Nat) : async ?Types.User {
     let userId = Nat32.fromNat(user_id);
    let result = Trie.find(users, key(userId), Nat32.equal);
    return result;
  };

  // Update a user.
  public func updateUser(user_Id : Nat, user : Types.User) : async Bool {
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
