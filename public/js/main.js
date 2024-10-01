document.addEventListener('DOMContentLoaded', function() {
    //Initiate mobile nav functionality
    var sideNavEl = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sideNavEl);
    //Initiate image zoom
    var mBoxEl = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(mBoxEl); 
});

//Set variable for like class
const likeBtn = document.querySelectorAll('.like')

//addEventListener to every like button
Array.from(likeBtn).forEach((el) => {
    el.addEventListener('click', addLike)
})

async function addLike() {
    //Store film UUID from data-id value
    const likeID = this.parentNode.dataset.id
    try {
        //Send film UUID to likes route as PUT request
        const response = await fetch('likes', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'filmID': likeID
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.error(err)
    }
}