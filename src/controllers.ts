/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./services.ts" />

/**
 * DashCtrl
 */
class DashCtrl{
  constructor(){}
}

/**
 * ChatsCtrl
 */
class ChatsCtrl{
  public $inject = ['Chats'];
  chats:Array<Services.IChatUser>;
  constructor(
    public Chats: Services.IChatsService
    ){
     this.chats = Chats.all();
  }
  remove = function(chat) {
    this.Chats.remove(chat);
  };
}

/**
 * ChatDetailCtrl
 */
class ChatDetailCtrl {
  public $inject = ['Chats','$stateParams'];
  chat: Services.IChatUser;
  constructor(
    public Chats: Services.IChatsService,
    public $stateParams: ng.ui.IStateParamsService
    ) {
    this.chat = Chats.get($stateParams['chatId']);
  }
}

/**
 * AccountCtrl
 */
class AccountCtrl {
  settings:Object;
  constructor() {
    this.settings = {
     enableFriends: true
    };
  }
}

angular.module('starter.controllers', [])
  .controller('DashCtrl', DashCtrl)
  .controller('ChatsCtrl', ChatsCtrl)
  .controller('ChatDetailCtrl', ChatDetailCtrl)
  .controller('AccountCtrl', AccountCtrl);
