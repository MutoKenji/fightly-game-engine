/***********************************************************************
 *
 * Fightly - Web Game Engine
 * http://fightly.com
 *
 * License: see LICENSE.txt
 *
 **********************************************************************/

/**
 * Class GameEngine
 *
 * @author Adrian Gaudebert - adrian@gaudebert.fr
 */
GameEngine = function() {
    this.comManager = null;
    this.messageBuilder = null;

    this._handlers = [];
};

GameEngine.prototype = {

    /**
     * Initialize the GameEngine, instanciate tools.
     * @return this
     */
    init: function() {
        this.messageBuilder = new MessageBuilder();

        this.comManager = new ComManager(this);
        return this;
    },

    /**
     * Start the GameEngine.
     * @return this
     */
    start: function() {
        this.comManager.init();
        return this;
    },

    trigger: function(event, data) {
        this._handlers[event].call(this, data);
        return this;
    },

    bind: function(event, callback) {
        this._handlers[event] = callback;
        return this;
    },

    unbind: function(event) {
        this._handlers.splice(event, 1);
    },

    onAuthenticationQuery: function() {
        var login = prompt("Username", "player");
        this.comManager.send(this.messageBuilder.createAuthenticationLogin(login));
    },

};

new GameEngine().init().start();
