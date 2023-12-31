function resizing()
{
    let width = window.outerWidth;
    let height = window.outerHeight;
    let response = "WIndow width: " + width + ", window height: " + height; 
    console.log(response);
    if(width < 420 && height < 870)
    {
        document.getElementById("img").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("img").style.visibility = "visible";
    }

}