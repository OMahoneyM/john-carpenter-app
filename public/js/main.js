document.addEventListener('DOMContentLoaded', function() {
    var sideNavEl = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sideNavEl);

    var mBoxEl = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(mBoxEl); 
});