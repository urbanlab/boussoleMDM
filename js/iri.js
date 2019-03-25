function masquerBlocs()
{
    const blocsAMasquer = document.getElementsByClassName('blocMasquable');
    for (let i = 0; i < blocsAMasquer.length; i++) {
        blocsAMasquer[i].style.display = 'none';
    }
}

function afficherBloc(idBlocAAfficher)
{
    document.getElementById(idBlocAAfficher).style.display='block';
}

function mettreAJourPrecisionsCriteres() {

}