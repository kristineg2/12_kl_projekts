function saktSpeli()
{
    let ievaditsVards = document.querySelector('#vards').value;
    if (ievaditsVards == '')
    {
        alert('Ievadi savu vardu!')
    }
    else
    {
        window.location = 'spele#' + ievaditsVards;
    }
}