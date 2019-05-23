$(function(){
    function ContactController(el) {

        this.$el = $(el);
        this.init = function(){
            console.log(this.$el);

            this.bindEvents();
            ContactVeiew.render(this.$el, []);
        }

        this.bindEvents = function(){

        }

        this.setView
    }

    $("[data-controller='Contact']").each(function(){
        let controller = new ContactController(this);
        controller.init();
    })
});