var acc = document.getElementsByClassName("ACCORDION");
var i;
var Gatherers = 0;
var TestLoop = setInterval(TestGather, 20);

for (i =0; i < acc.length; i++) {
	acc[i].addEventListener("click", function(){
		this.classList.toggle("ACTIVEACCORDION");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}
function Tab(evt, tab){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("TABCONTENT");
	for (i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("TABLINKS");
	for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" ACTIVEAGE", "");
    }
	document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " ACTIVEAGE";
}
function TestGather(){
	Gatherers = Gatherers + 1;
	var GatherDisplay = 'Gatherers: ' + Gatherers;
	document.getElementById('GATHERERS').innerText = GatherDisplay;
}