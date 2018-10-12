{
var Population = 10;
var Food = 0;
var Thatch = 0;
var Hide = 0;
var Tool1 = 0;
var Tool2 = 0;
var Tool3 = 0;
var Gatherers = 0;
var Craftsmen = 0;
var Hunters = 0;
var Laborers = 0;
var Artisans = 0;
var Shelter = 0;
var EmptyShelter = 0;
var Unemployed = 10;
var Farmers = 0;
var Cutters = 0;
var Diggers = 0;
var Artificers = 0;
var Wood = 0;
var Rock = 0;
var Masons = 0;
var Carpenters = 0;
var Builders = 0;
var Lumber = 0;
var Stones = 0;
var Smelters = 0;
var Wrights = 0;
var Furnaces = 0;
var Forges = 0;
var CopperOre = 0;
var CopperBars = 0;
var Tool4 = 0;
var Leather = 0;
var Tin = 0;
var Bronze = 0;
var Tool5 = 0;
var Trappers = 0;
var Tanners = 0;
var Lumberjacks = 0;
var Miners = 0;
var BSmelters = 0;
var Smiths = 0;
var AlloyFurnaces = 0;
var BForges = 0;
var acc = document.getElementsByClassName("ACCORDION");
var i;
}
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
function Initialize(){
	Tab(event, 'ArchaicAge');
	Load();
	var Looper = setInterval(Loop, 20);
	var AutoSaver = setInterval(Save, 30000);
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
function Populate(){
	var NewFood = Food - Population/50;
	Food = Math.max(NewFood, 0);
	if(NewFood >= 0 && EmptyShelter >= Population*0.0002){
		Population += Population*0.0002;
	}
}
function UpdateDisp(){
	EmptyShelter = Math.max(Math.floor(Shelter) - Math.floor(Population), 0);
	{document.getElementById("Gatherers").innerHTML = Gatherers;
	document.getElementById("Unemployed").innerHTML = Unemployed;
	document.getElementById("EmptyShelter").innerHTML = EmptyShelter;
	document.getElementById("Population").innerHTML = Math.floor(Population);
	document.getElementById("Food").innerHTML = Math.floor(Food);
	document.getElementById("Shelter").innerHTML = Math.floor(Shelter);
	document.getElementById("Thatch").innerHTML = Math.floor(Thatch);
	document.getElementById("Hide").innerHTML = Math.floor(Hide);
	document.getElementById("Tool1").innerHTML = Math.floor(Tool1);
	document.getElementById("Tool2").innerHTML = Math.floor(Tool2);
	document.getElementById("Craftsmen").innerHTML = Craftsmen;
	document.getElementById("Hunters").innerHTML = Hunters;
	document.getElementById("Laborers").innerHTML = Laborers;
	document.getElementById("Artisans").innerHTML = Artisans;
	document.getElementById("Farmers").innerHTML = Farmers;
	document.getElementById("Cutters").innerHTML = Cutters;
	document.getElementById("Diggers").innerHTML = Diggers;
	document.getElementById("Artificers").innerHTML = Artificers;
	document.getElementById("Carpenters").innerHTML = Carpenters;
	document.getElementById("Masons").innerHTML = Masons;
	document.getElementById("Builders").innerHTML = Builders;
	document.getElementById("Wood").innerHTML = Math.floor(Wood);
	document.getElementById("Rock").innerHTML = Math.floor(Rock);
	document.getElementById("Lumber").innerHTML = Math.floor(Lumber);
	document.getElementById("Stones").innerHTML = Math.floor(Stones);
	document.getElementById("Smelters").innerHTML = Math.floor(Smelters);
	document.getElementById("Wrights").innerHTML = Math.floor(Wrights);
	document.getElementById("Furnaces").innerHTML = Math.floor(Furnaces);
	document.getElementById("Forges").innerHTML = Math.floor(Forges);
	document.getElementById("Tool3").innerHTML = Math.floor(Tool3);
	document.getElementById("CopperOre").innerHTML = Math.floor(CopperOre);
	document.getElementById("CopperBars").innerHTML = Math.floor(CopperBars);
	document.getElementById("Tool4").innerHTML = Math.floor(Tool4);
	document.getElementById("Leather").innerHTML = Math.floor(Leather);
	document.getElementById("Tin").innerHTML = Math.floor(Tin);
	document.getElementById("Bronze").innerHTML = Math.floor(Bronze);
	document.getElementById("Trappers").innerHTML = Math.floor(Trappers);
	document.getElementById("Tanners").innerHTML = Math.floor(Tanners);
	document.getElementById("Lumberjacks").innerHTML = Math.floor(Lumberjacks);
	document.getElementById("Miners").innerHTML = Math.floor(Miners);
	document.getElementById("BSmelters").innerHTML = Math.floor(BSmelters);
	document.getElementById("Smiths").innerHTML = Math.floor(Smiths);
	document.getElementById("AlloyFurnaces").innerHTML = Math.floor(AlloyFurnaces);
	document.getElementById("BForges").innerHTML = Math.floor(BForges);
	document.getElementById("Tool5").innerHTML = Math.floor(Tool5);}
	{document.getElementById("GathererFoodIncome").innerHTML = 1.25 * Gatherers;
	document.getElementById("GathererThatchIncome").innerHTML = 0.25 * Gatherers;
	document.getElementById("CraftsmanThatchConsumption").innerHTML = Craftsmen;
	document.getElementById("CraftsmanIncome").innerHTML = 0.2 * Craftsmen;
	document.getElementById("HunterFoodIncome").innerHTML = 1.25 * Hunters;
	document.getElementById("HunterHideIncome").innerHTML = 0.2 * Hunters;
	document.getElementById("LaborerConsumption").innerHTML = Craftsmen;
	document.getElementById("LaborerIncome").innerHTML = 0.2 * Laborers;
	document.getElementById("ArtisanHideConsumption").innerHTML = Artisans;
	document.getElementById("ArtisanToolConsumption").innerHTML = Artisans;
	document.getElementById("ArtisanIncome").innerHTML = 0.2 * Artisans;
	document.getElementById("FarmerIncome").innerHTML = 1.5 * Farmers;
	document.getElementById("CutterIncome").innerHTML = 0.5 * Cutters;
	document.getElementById("DiggerRockIncome").innerHTML = 0.25 * Diggers;
	document.getElementById("DiggerCopperOreIncome").innerHTML = 0.1 * Diggers;
	document.getElementById("ArtificerWoodConsumption").innerHTML = Artificers;
	document.getElementById("ArtificerRockConsumption").innerHTML = 1.25 * Artificers;
	document.getElementById("CarpenterConsumption").innerHTML = Carpenters;
	document.getElementById("CarpenterIncome").innerHTML = 0.5 * Carpenters;
	document.getElementById("MasonConsumption").innerHTML = Masons;
	document.getElementById("MasonIncome").innerHTML = 0.25 * Masons;
	document.getElementById("ArtificerIncome").innerHTML = 0.2 * Artificers;
	document.getElementById("SmelterIncome").innerHTML = 0.25 * Smelters;
	document.getElementById("SmelterConsumption").innerHTML = Smelters;
	document.getElementById("WrightLumberConsumption").innerHTML = Wrights;
	document.getElementById("WrightCopperConsumption").innerHTML = Wrights;
	document.getElementById("WrightIncome").innerHTML = 0.2 * Wrights;
	document.getElementById("TrapperHideIncome").innerHTML = Trappers;
	document.getElementById("TrapperFoodIncome").innerHTML = 1.5 * Trappers;
	document.getElementById("TannerIncome").innerHTML = Tanners;
	document.getElementById("TannerConsumption").innerHTML = 5 * Tanners;
	document.getElementById("LumberjackIncome").innerHTML = Lumberjacks;
	document.getElementById("MinerStoneIncome").innerHTML = Miners;
	document.getElementById("MinerTinIncome").innerHTML = 0.5 * Miners;
	document.getElementById("MinerCopperOreIncome").innerHTML = 0.5 * Miners;
	document.getElementById("BSmelterCopperOreConsumption").innerHTML = 9 * BSmelters;
	document.getElementById("BSmelterTinConsumption").innerHTML = BSmelters;
	document.getElementById("BSmelterIncome").innerHTML = BSmelters;
	document.getElementById("SmithBronzeConsumption").innerHTML = Smiths;
	document.getElementById("SmithLeatherConsumption").innerHTML = Smiths;
	document.getElementById("SmithLumberConsumption").innerHTML = Smiths;
	document.getElementById("SmithIncome").innerHTML = 0.2 * Smiths;}
	document.getElementById("FoodIncome").innerHTML = 1.25*(Gatherers + Hunters) + 1.5*(Farmers + Trappers) - Math.floor(Population);
}
function Gather(){
	Food = Food + Gatherers/40 + Hunters/40 + 1.5*Farmers/50 + 1.5*Trappers/50;
	Thatch = Thatch + Gatherers/200;
	Hide = Hide + Hunters/250 + Trappers/50;
	Wood = Wood + Cutters/100;
	Rock = Rock + Diggers/200;
	CopperOre = CopperOre + Diggers/250 + Miners/100;
	Stones = Stones + Miners/50;
	Lumber = Lumber + Lumberjacks/50;
	Tin = Tin + Miners/100;
	if(Thatch >= Craftsmen/50){
		Tool1 = Tool1 + Craftsmen/250;
		Thatch = Thatch - Craftsmen/50;
	};
	if(Thatch >= Laborers/50 && Hide >= Laborers/50){
		Shelter = Shelter + Laborers/250;
		Thatch = Thatch - Laborers/50;
		Hide = Hide - Laborers/50;
	};
	if(Hide >= Artisans/50 && Tool1 >= Artisans/50){
		Tool2 = Tool2 + Artisans/250;
		Hide = Hide - Artisans/50;
		Tool1 = Tool1 - Artisans/50;
	};
	if(Wood >= Artificers/25 && Rock >= Artificers/40){
		Tool3 = Tool3 + Artificers/250;
		Wood = Wood - Artificers/25;
		Rock = Rock - Artificers/40;
	};
	if(Wood >= Carpenters/50){
		Lumber = Lumber + Carpenters/100;
		Wood = Wood - Carpenters/50;
	};
	if(Rock >= Masons/50){
		Stones = Stones + 0.25*Masons/50
		Rock = Rock - Masons/50;
	};
	if(Lumber >= Builders/50 && Stones >= Builders/200){
		Shelter = Shelter + Builders/100;
		Lumber = Lumber - Builders/50;
		Stones = Stones - Builders/200;
	};
	if(CopperOre >= Smelters/50){
		CopperBars = CopperBars + Smelters/200;
		CopperOre = CopperOre - Smelters/50;
	};
	if(CopperBars >= Wrights/50 && Lumber >= Wrights/50){
		Tool4 = Tool4 + Wrights/250;
		CopperBars = CopperBars - Wrights/50;
		Lumber = Lumber - Wrights/50;
	};
	if(Hide >= Tanners/5){
		Leather = Leather + Tanners/50;
		Hide = Hide - Tanners/10;
	};
	if(CopperOre >= 9*BSmelters/50 && Tin >= BSmelters/50){
		Bronze = Bronze + BSmelters/50;
		CopperOre = CopperOre - BSmelters/25;
		Tin = Tin - BSmelters/50;
	};
	if(Bronze >= Smiths/50 && Leather >= Smiths/50 && Lumber >= Smiths/50){
		Tool5 = Tool5 + Smiths/250;
		Bronze = Bronze - Smiths/50;
		Leather = Leather - Smiths/50;
		Lumber = Lumber - Smiths/50;
	};
}
function AchievementCheck(){
	if(Thatch > 0){
		DISPTHATCH.style.display = "block";
		DISPCRAFTSMAN.style.display = "block";
	}
	if(Tool1 > 0){
		DISPHUNTER.style.display = "block";
		DISPTOOL1.style.display = "block";
	}
	if(Hide > 0){
		DISPHIDE.style.display = "block";
		DISPLABOR.style.display = "block";
		DISPARTISAN.style.display = "block";
	}
	if(Tool2 > 0){
		AGRIB.style.display = "inline-block";
		ARCHB.style.display = "inline-block";
		DISPTOOL2.style.display = "block";
	}
	if(Rock > 0){
		DISPROCK.style.display = "block";
	}
	if(Wood > 0){
		DISPWOOD.style.display = "block";
	}
	if(Rock > 0 && Wood > 0){
		DISPARTIFICER.style.display = "block";
	}
	if(Tool3 > 0){
		STONEB.style.display = "inline-block";
		DISPTOOL3.style.display = "block";
	}
	if(Tool4 > 0){
		COPPERB.style.display = "inline-block";
		DISPTOOL4.style.display = "block";
	}
	if(Tool5 > 0){
		BRONZEB.style.display = "inline-block";
		DISPTOOL5.style.display = "block";
	}
	if(Lumber > 0 && Stones > 0){
		DISPBUILDER.style.display = "block";
	}
	if(Lumber > 0){
		DISPLUMBER.style.display = "block";
	}
	if(Stones > 0){
		DISPSTONE.style.display = "block";
	}
	if(Builders > 0){
		DISPSMELTER.style.display = "block";
		DISPCOPPERORE.style.display = "block";
	}
	if(CopperBars > 0){
		DISPWRIGHT.style.display = "block";
		DISPCOPPERBARS.style.display = "block";
	}
	if(Leather > 0){
		DISPLEATHER.style.display = "block";
	}
	if(Tin > 0){
		DISPTIN.style.display = "block";
		DISPBSMELTER.style.display = "block";
	}
	if(Bronze > 0){
		DISPSMITH.style.display = "block";
		DISPBRONZE.style.display = "block";
	}
}
function Add(type, n){
	if(type == 'Gatherer'){
		var NGATHER = document.getElementById("NGATHER").value;
		if (Unemployed >= n*NGATHER && Gatherers + n*NGATHER >= 0){
			Gatherers = Gatherers + n*NGATHER;
		}
	}
	if(type == 'Craftsman'){
		var NCRAFT = document.getElementById("NCRAFT").value;
		if (Unemployed >= n*NCRAFT && Craftsmen + n*NCRAFT >= 0){
			Craftsmen = Craftsmen + n*NCRAFT;
		}
	}
	if(type == 'Hunter'){
		var NHUNT = document.getElementById("NHUNT").value;
		if (Unemployed >= n*NHUNT && Hunters + n*NHUNT >= 0 && Tool1 >= n*NHUNT){
			Hunters = Hunters + n*NHUNT;
			Tool1 = Tool1 - n*NHUNT;
		}
	}
	if(type == 'Laborer'){
		var NLABOR = document.getElementById("NLABOR").value;
		if (Unemployed >= n*NLABOR && Laborers + n*NLABOR >= 0 && Tool1 >= n*NLABOR){
			Laborers = Laborers + n*NLABOR;
			Tool1 = Tool1 - n*NLABOR;
		}
	}
	if(type == 'Artisan'){
		var NART = document.getElementById("NART").value;
		if (Unemployed >= n*NART && Artisans + n*NART >= 0 && Tool1 >= n*NART){
			Artisans = Artisans + n*NART;
			Tool1 = Tool1 - n*NART;
		}
	}
	if(type == 'Farmer'){
		var NFARM = document.getElementById("NFARM").value;
		if (Unemployed >= n*NFARM && Farmers + n*NFARM >= 0 && Tool2 >= n*NFARM){
			Farmers = Farmers + n*NFARM;
			Tool2 = Tool2 - n*NFARM;
		}
	}
	if(type == 'Cutter'){
		var NCUT = document.getElementById("NCUT").value;
		if (Unemployed >= n*NCUT && Cutters + n*NCUT >= 0 && Tool2 >= n*NCUT){
			Cutters = Cutters + n*NCUT;
			Tool2 = Tool2 - n*NCUT;
		}
	}
	if(type == 'Digger'){
		var NDIG = document.getElementById("NDIG").value;
		if (Unemployed >= n*NDIG && Diggers + n*NDIG >= 0 && Tool2 >= n*NDIG){
			Diggers = Diggers + n*NDIG;
			Tool2 = Tool2 - n*NDIG;
		}
	}
	if(type == 'Artificer'){
		var NARTIFICE = document.getElementById("NARTIFICE").value;
		if (Unemployed >= n*NARTIFICE && Artificers + n*NARTIFICE >= 0 && Tool2 >= n*NARTIFICE){
			Artificers = Artificers + n*NARTIFICE;
			Tool2 = Tool2 - n*NARTIFICE;
		}
	}
	if(type == 'Carpenter'){
		var NCARP = document.getElementById("NCARP").value;
		if (Unemployed >= n*NCARP && Carpenters + n*NCARP >= 0 && Tool3 >= n*NCARP){
			Carpenters = Carpenters + n*NCARP;
			Tool3 = Tool3 - n*NCARP;
		}
	}
	if(type == 'Mason'){
		var NMASON = document.getElementById("NMASON").value;
		if (Unemployed >= n*NMASON && Masons + n*NMASON >= 0 && Tool3 >= n*NMASON){
			Masons = Masons + n*NMASON;
			Tool3 = Tool3 - n*NMASON;
		}
	}
	if(type == 'Builder'){
		var NBUILD = document.getElementById("NBUILD").value;
		if (Unemployed >= n*NBUILD && Builders + n*NBUILD >= 0 && Tool3 >= n*NBUILD){
			Builders = Builders + n*NBUILD;
			Tool3 = Tool3 - n*NBUILD;
		}
	}
	if(type == 'Smelter'){
		var NSMELT = document.getElementById("NSMELT").value;
		if (Unemployed >= n*NSMELT && Smelters + n*NSMELT >= 0 && Tool3 >= n*NSMELT && Furnaces >= Smelters + n*NSMELT){
			Smelters = Smelters + n*NSMELT;
			Tool3 = Tool3 - n*NSMELT;
		}
	}
	if(type == 'Wright'){
		var NWRIGHT = document.getElementById("NWRIGHT").value;
		if (Unemployed >= n*NWRIGHT && Wrights + n*NWRIGHT >= 0 && Tool3 >= n*NWRIGHT && Forges >= Wrights + n*NWRIGHT){
			Wrights = Wrights + n*NWRIGHT;
			Tool3 = Tool3 - n*NWRIGHT;
		}
	}
	if(type == 'Furnace'){
		var NFURN = document.getElementById("NFURN").value;
		if (Stones >= 10*NFURN*n && Lumber >= 5*NFURN*n){
			Furnaces = Furnaces + n*NFURN;
			Stones = Stones - 10*NFURN*n;
			Lumber = Lumber - 5*NFURN*n;
		}
	}
	if(type == 'Forge'){
		var NFORGE = document.getElementById("NFORGE").value;
		if (Stones >= 20*NFORGE*n){
			Forges = Forges + n*NFORGE;
			Stones = Stones - n*NFORGE*20;
		}
	}
	if(type == 'Trapper'){
		var NTRAP = document.getElementById("NTRAP").value;
		if (Unemployed >= n*NTRAP && Trappers + n*NTRAP >= 0 && Tool4 >= n*NTRAP){
			Trappers = Trappers + n*NTRAP;
			Tool4 = Tool4 - n*NTRAP;
		}
	}
	if(type == 'Tanner'){
		var NTAN = document.getElementById("NTAN").value;
		if (Unemployed >= n*NTAN && Tanners + n*NTAN >= 0 && Tool4 >= n*NTAN){
			Tanners = Tanners + n*NTAN;
			Tool4 = Tool4 - n*NTAN;
		}
	}
	if(type == 'Lumberjack'){
		var NLUMBERJ = document.getElementById("NLUMBERJ").value;
		if (Unemployed >= n*NLUMBERJ && Lumberjacks + n*NLUMBERJ >= 0 && Tool4 >= n*NLUMBERJ){
			Lumberjacks = Lumberjacks + n*NLUMBERJ;
			Tool4 = Tool4 - n*NLUMBERJ;
		}
	}
	if(type == 'Miner'){
		var NMINE = document.getElementById("NMINE").value;
		if (Unemployed >= n*NMINE && Miners + n*NMINE >= 0 && Tool4 >= n*NMINE){
			Miners = Miners + n*NMINE;
			Tool4 = Tool4 - n*NMINE;
		}
	}
	if(type == 'AlloyFurnace'){
		var NALLOYFURN = document.getElementById("NALLOYFURN").value;
		if (Stones >= 100*NALLOYFURN*n && Lumber >= 25*NALLOYFURN*n){
			AlloyFurnaces = AlloyFurnaces + n*NALLOYFURN;
			Stones = Stones - 100*NALLOYFURN*n;
			Lumber = Lumber - 25*NALLOYFURN*n;
		}
	}
	if(type == 'BForge'){
		var NBFORGE = document.getElementById("NBFORGE").value;
		if (Stones >= 250*NBFORGE*n && Lumber >= 50*NBFORGE*n){
			BForges = BForges + n*NBFORGE;
			Stones = Stones - 250*NBFORGE*n;
			Lumber = Lumber - 50*NBFORGE*n;
		}
	}
	if(type == 'BSmelter'){
		var NBSMELT = document.getElementById("NBSMELT").value;
		if (Unemployed >= n*NBSMELT && BSmelters + n*NBSMELT >= 0 && Tool4 >= n*NBSMELT && AlloyFurnaces >= BSmelters + n*NBSMELT){
			BSmelters = BSmelters + n*NBSMELT;
			Tool4 = Tool4 - n*NBSMELT;
		}
	}
	if(type == 'Smith'){
		var NSMITH = document.getElementById("NSMITH").value;
		if (Unemployed >= n*NSMITH && Smiths + n*NSMITH >= 0 && Tool4 >= n*NSMITH && BForges >= Smiths + n*NSMITH){
			Smiths = Smiths + n*NSMITH;
			Tool4 = Tool4 - n*NSMITH;
		}
	}
}
function Unemployment(){
	Unemployed = Math.floor(Population) - Gatherers;
	Unemployed = Unemployed - Craftsmen;
	Unemployed = Unemployed - Hunters;
	Unemployed = Unemployed - Laborers;
	Unemployed = Unemployed - Artisans;
	Unemployed = Unemployed - Farmers;
	Unemployed = Unemployed - Cutters;
	Unemployed = Unemployed - Diggers;
	Unemployed = Unemployed - Artificers;
	Unemployed = Unemployed - Carpenters;
	Unemployed = Unemployed - Masons;
	Unemployed = Unemployed - Builders;
	Unemployed = Unemployed - Smelters;
	Unemployed = Unemployed - Wrights;
	Unemployed = Unemployed - Trappers;
	Unemployed = Unemployed - Tanners;
	Unemployed = Unemployed - Lumberjacks;
	Unemployed = Unemployed - Miners;
	Unemployed = Unemployed - BSmelters;
	Unemployed = Unemployed - Smiths;
}
function Save(){
	var save = {
		Population: Population,
		Food: Food,
		Thatch: Thatch,
		Hide: Hide,
		Tool1: Tool1,
		Tool2: Tool2,
		Tool3: Tool3,
		Tool4: Tool4,
		Gatherers: Gatherers,
		Craftsmen: Craftsmen,
		Hunters: Hunters,
		Laborers: Laborers,
		Artisans: Artisans,
		Shelter: Shelter,
		Farmers: Farmers,
		Cutters: Cutters,
		Diggers: Diggers,
		Masons: Masons,
		Carpenters: Carpenters,
		Smelters: Smelters,
		Wrights: Wrights,
		Furnaces: Furnaces,
		Forges: Forges,
		Wood: Wood,
		Rock: Rock,
		Lumber: Lumber,
		Stones: Stones,
		Artificers: Artificers,
		Builders: Builders,
		CopperBars: CopperBars,
		CopperOre: CopperOre,
		Leather: Leather,
		Tin: Tin,
		Bronze: Bronze,
		Tool5: Tool5,
		Trappers: Trappers,
		Tanners: Tanners,
		Lumberjacks: Lumberjacks,
		Miners: Miners,
		BSmelters: BSmelters,
		Smiths: Smiths,
		AlloyFurnaces: AlloyFurnaces,
		BForges: BForges
	};
	localStorage.setItem("save",JSON.stringify(save));
};
function Load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (savegame !== null){
	if (typeof savegame.Population !== "undefined") Population = savegame.Population;
	if (typeof savegame.Food !== "undefined") Food = savegame.Food;
	if (typeof savegame.Thatch !== "undefined") Thatch = savegame.Thatch;
	if (typeof savegame.Hide !== "undefined") Hide = savegame.Hide;
	if (typeof savegame.Tool1 !== "undefined") Tool1 = savegame.Tool1;
	if (typeof savegame.Tool2 !== "undefined") Tool2 = savegame.Tool2;
	if (typeof savegame.Tool3 !== "undefined") Tool3 = savegame.Tool3;
	if (typeof savegame.Tool4 !== "undefined") Tool4 = savegame.Tool4;
	if (typeof savegame.Gatherers !== "undefined") Gatherers = savegame.Gatherers;
	if (typeof savegame.Craftsmen !== "undefined") Craftsmen = savegame.Craftsmen;
	if (typeof savegame.Hunters !== "undefined") Hunters = savegame.Hunters;
	if (typeof savegame.Laborers !== "undefined") Laborers = savegame.Laborers;
	if (typeof savegame.Artisans !== "undefined") Artisans = savegame.Artisans;
	if (typeof savegame.Shelter !== "undefined") Shelter = savegame.Shelter;
	if (typeof savegame.Farmers !== "undefined") Farmers = savegame.Farmers;
	if (typeof savegame.Cutters !== "undefined") Cutters = savegame.Cutters;
	if (typeof savegame.Diggers !== "undefined") Diggers = savegame.Diggers;
	if (typeof savegame.Masons !== "undefined") Masons = savegame.Masons;
	if (typeof savegame.Carpenters !== "undefined") Carpenters = savegame.Carpenters;
	if (typeof savegame.Smelters !== "undefined") Smelters = savegame.Smelters;
	if (typeof savegame.Wrights !== "undefined") Wrights = savegame.Wrights;
	if (typeof savegame.Furnaces !== "undefined") Furnaces = savegame.Furnaces;
	if (typeof savegame.Forges !== "undefined") Forges = savegame.Forges;
	if (typeof savegame.Artificers !== "undefined") Artificers = savegame.Artificers;
	if (typeof savegame.Wood !== "undefined") Wood = savegame.Wood;
	if (typeof savegame.Rock !== "undefined") Rock = savegame.Rock;
	if (typeof savegame.Lumber !== "undefined") Lumber = savegame.Lumber;
	if (typeof savegame.Stones !== "undefined") Stones = savegame.Stones;
	if (typeof savegame.Builders !== "undefined") Builders = savegame.Builders;
	if (typeof savegame.CopperOre !== "undefined") CopperOre = savegame.CopperOre;
	if (typeof savegame.CopperBars !== "undefined") CopperBars = savegame.CopperBars;
	if (typeof savegame.Leather !== "undefined") Leather = savegame.Leather;
	if (typeof savegame.Tin !== "undefined") Tin = savegame.Tin;
	if (typeof savegame.Bronze !== "undefined") Bronze = savegame.Bronze;
	if (typeof savegame.Tool5 !== "undefined") Tool5 = savegame.Tool5;
	if (typeof savegame.Trappers !== "undefined") Trappers = savegame.Trappers;
	if (typeof savegame.Tanners !== "undefined") Tanners = savegame.Tanners;
	if (typeof savegame.Lumberjacks !== "undefined") Lumberjacks = savegame.Lumberjacks;
	if (typeof savegame.Miners !== "undefined") Miners = savegame.Miners;
	if (typeof savegame.BSmelters !== "undefined") BSmelters = savegame.BSmelters;
	if (typeof savegame.Smiths !== "undefined") Smiths = savegame.Smiths;
	if (typeof savegame.AlloyFurnaces !== "undefined") AlloyFurnaces = savegame.AlloyFurnaces;
	if (typeof savegame.BForges !== "undefined") BForges = savegame.BForges;
	}
};
function WipeSave(){
	localStorage.removeItem("save");
};
function Loop(){
	Gather();
	Populate();
	Unemployment();
	AchievementCheck();
	UpdateDisp();
}
