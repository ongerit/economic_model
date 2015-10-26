'use strict';

angular.module('ongerit.EconomicModels')

  .controller('MainCtrl', function($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;
		
		$scope.patients ={
			value:" "
		}
		
		$scope.variability = {
			value:" "
		}
		
		$scope.oldPrice = {
			value:" "
		}
		
		$scope.newPrice = {
			value:" "
		}
		
		$scope.westernBlotPrice= {
			value:" "
		}
		$scope.oldVidasAssays = function(){
			return "((.313)*((47)*(oldPrice.value|number)+(94)*(westernBlotPrice.value|number))/(150))*(patients.value|number)"
		}
		
		$scope.wbConfirmation ={
			value: "((.687)*((103)*(oldPrice.value|number)+(0)*(westernBlotPrice.value|number))/(150))*(patients.value|number)"
		}
		
  });
	
	//Clear form responses
	function clearResponses(){
		$('tbody').find('input:text').val('');
	}
	
	
	// .directives('firstTotal', function(){
	// 	return{
	// 		template: "Only in america"
	// 	};
	//
	// })
	


	// function calculate() {
	//
	// //ADDRESS EMPTY USER INPUT
	// if (document.getElementById('s_j11').value == "") {
	// document.getElementById('s_j11').value = "0";
	// }
	// if (document.getElementById('s_j13').value == "") {
	// document.getElementById('s_j13').value = "0";
	// }
	// if (document.getElementById('s_j15').value == "") {
	// document.getElementById('s_j15').value = "0";
	// }
	// if (document.getElementById('s_j17').value == "") {
	// document.getElementById('s_j17').value = "0";
	// }
	// if (document.getElementById('s_j19').value == "") {
	// document.getElementById('s_j19').value = "0";
	// }
	//
	// //SUMMARY TAB: GET INPUT VALUES
	// var s_j11_input = document.getElementById("s_j11").value;
	// var s_j13_input = document.getElementById("s_j13").value;
	// var s_j15_input = document.getElementById("s_j15").value;
	// var s_j17_input = document.getElementById("s_j17").value;
	// var s_j19_input = document.getElementById("s_j19").value;
	// var s_j11 = parseFloat(s_j11_input);
	// var s_j13 = parseFloat(s_j13_input) / 100;
	// var s_j15 = parseFloat(s_j15_input);
	// var s_j17 = parseFloat(s_j17_input);
	// var s_j19 = parseFloat(s_j19_input);
	//
	// //CALCULATION TAB: VALUES CLMN E
	// var c_e14 = 47;
	// var c_e15 = 103;
	// var c_e20 = 35;
	// var c_e21 = 51;
	// var c_e22 = 214;
	// var c_e31 = 47;
	// var c_e32 = 103;
	// var c_e37 = 35;
	// var c_e38 = 51;
	// var c_e39 = 214;
	// var c_e45 = 47;
	// var c_e46 = 103;
	// var c_e51 = 35;
	// var c_e52 = 51;
	// var c_e53 = 214;
	//
	// //CALCULATION TAB: VALUES CLMN F
	// var c_f14 = 0.313;
	// var c_f15 = 0.687;
	// var c_f20 = 0.117;
	// var c_f21 = 0.170;
	// var c_f22 = 0.713;
	// var c_f31 = 0.313;
	// var c_f32 = 0.687;
	// var c_f37 = 0.117;
	// var c_f38 = 0.170;
	// var c_f39 = 0.713;
	// var c_f45 = 0.313;
	// var c_f46 = 0.687;
	// var c_f51 = 0.117;
	// var c_f52 = 0.170;
	// var c_f53 = 0.713;
	//
	// //CALCULATION TAB: VALUES CLMN G
	// var c_g14 = 94;
	// var c_g15 = 0;
	// var c_g20 = 35;
	// var c_g21 = 51;
	// var c_g22 = 0;
	// var c_g31 = 94;
	// var c_g32 = 0;
	// var c_g37 = 35;
	// var c_g38 = 51;
	// var c_g39 = 0;
	// var c_g45 = 94;
	// var c_g46 = 0;
	// var c_g51 = 35;
	// var c_g52 = 51;
	// var c_g53 = 0;
	//
	// //INPUT TAB: VALUES CLMN F
	// var i_f14 = 0.313;
	// var i_f15 = 0.687;
	// var i_f22 = 0.117;
	// var i_f23 = 0.170;
	// var i_f24 = 0.713;
	// var i_f28 = 21.08;
	// var i_f29 = 21.08;
	// var i_f30 = 23.18;
	// var i_f35 = 23.18;
	// var i_f36_f48 = 23.18; //grabs all values between Input F36 & F48
	//
	// //CALCULATIONS TAB: CALCULATIONS FOR CLMN J
	// var c_j14 = (c_f14*(c_e14*s_j15+c_g14*s_j19)/150);
	// var c_j15 = (c_f15*(c_e15*s_j15+c_g15*s_j19)/150);
	// var c_j16 = (c_j14+c_j15);
	// var c_j20 = (c_f20*(c_e20*s_j17+c_g20*s_j19)/150);
	// var c_j21 = (c_f21*(c_e21*s_j17+c_g21*s_j19)/150);
	// var c_j22 = (c_f22*(c_e22*s_j17+c_g22*s_j19)/150);
	// var c_j23 = (c_j20+c_j21+c_j22);
	//
	// //CALCULATIONS TAB: CALCULATIONS FOR CLMN K
	// var c_k14 = (c_f14*(i_f29*c_e14+c_g14*i_f30)/150);
	// var c_k15 = (c_f15*(i_f29*c_e15+c_g15*i_f30)/150);
	// var c_k16 = (c_k14+c_k15);
	// var c_k20 = (c_f20*(c_e20*i_f28+c_g20*i_f30)/150);
	// var c_k21 = (c_f21*(c_e21*i_f28+c_g21*i_f30)/150);
	// var c_k22 = (c_f22*(c_e22*i_f28+c_g22*i_f30)/150);
	// var c_k23 = (c_k20+c_k21+c_k22);
	//
	// //CALCULATIONS TAB: CALCULATIONS FOR CLMN L
	// var c_l14 = (c_k14-c_j14);
	// var c_l15 = (c_k15-c_j15);
	// var c_l16 = (c_l14+c_l15);
	// var c_l20 = (c_k20-c_j20);
	// var c_l21 = (c_k21-c_j21);
	// var c_l22 = (c_k22-c_j22);
	// var c_l23 = (c_l20+c_l21+c_l22);
	//
	// //CALCULATIONS TAB: CALCULATIONS FOR CLMN N
	// var c_n14 = (c_f14*(c_e14*s_j15+c_g14*s_j19)/150*s_j11);
	// var c_n15 = (c_f15*(c_e15*s_j15+c_g15*s_j19)/150*s_j11);
	// var c_n16 = (c_n14+c_n15);
	// var c_n20 = (c_f20*(s_j17*c_e20+c_g20*s_j19)/150*s_j11);
	// var c_n21 = (c_f21*(s_j17*c_e21+c_g21*s_j19)/150*s_j11);
	// var c_n22 = (c_f22*(s_j17*c_e22+c_g22*s_j19)/150*s_j11);
	// var c_n23 = (c_n20+c_n21+c_n22);
	// var c_n31 = (c_f31*(c_e31*s_j15+c_g31*(s_j19-s_j19*s_j13))/150*s_j11);
	// var c_n32 = (c_f32*(c_e32*s_j15+c_g32*(s_j19-s_j19*s_j13))/150*s_j11);
	// var c_n33 = (c_n31+c_n32);
	// var c_n37 = (c_f37*(s_j17*c_e37+c_g37*(s_j19-s_j19*s_j13))/150*s_j11);
	// var c_n38 = (c_f38*(s_j17*c_e38+c_g38*(s_j19-s_j19*s_j13))/150*s_j11);
	// var c_n39 = (c_f39*(s_j17*c_e39+c_g39*(s_j19-s_j19*s_j13))/150*s_j11);
	// var c_n40 = (c_n37+c_n38+c_n39);
	// var c_n45 = (c_f45*(c_e45*s_j15+c_g45*(s_j19+s_j19*s_j13))/150*s_j11);
	// var c_n46 = (c_f46*(c_e46*s_j15+c_g46*(s_j19+s_j19*s_j13))/150*s_j11);
	// var c_n47 = (c_n45+c_n46);
	// var c_n51 = (c_f51*(s_j17*c_e51+c_g51*(s_j19+s_j19*s_j13))/150*s_j11);
	// var c_n52 = (c_f52*(s_j17*c_e52+c_g52*(s_j19+s_j19*s_j13))/150*s_j11);
	// var c_n53 = (c_f53*(s_j17*c_e53+c_g53*(s_j19+s_j19*s_j13))/150*s_j11);
	// var c_n54 = (c_n51+c_n52+c_n53);
	//
	// //CALCULATIONS TAB: CALCULATIONS FOR CLMN O
	// var c_o14 = (c_f14*(c_e14*i_f29+i_f30*c_g14)/150*s_j11);
	// var c_o15 = (c_f15*(c_e15*i_f29+i_f30*c_g15)/150*s_j11);
	// var c_o16 = (c_o14+c_o15);
	// var c_o20 = (c_f20*(c_e20*i_f28+c_g20*i_f30)/150*s_j11);
	// var c_o21 = (c_f21*(c_e21*i_f28+c_g21*i_f30)/150*s_j11);
	// var c_o22 = (c_f22*(c_e22*i_f28+c_g22*i_f30)/150*s_j11);
	// var c_o23 = (c_o20+c_o21+c_o22);
	// var c_o31 = (c_f31*(c_e31*i_f29+i_f30*c_g31)/150*s_j11);
	// var c_o32 = (c_f32*(c_e32*i_f29+i_f30*c_g32)/150*s_j11);
	// var c_o33 = (c_o31+c_o32);
	// var c_o37 = (c_f37*(c_e37*i_f28+c_g37*i_f30)/150*s_j11);
	// var c_o38 = (c_f38*(c_e38*i_f28+c_g38*i_f30)/150*s_j11);
	// var c_o39 = (c_f39*(c_e39*i_f28+c_g39*i_f30)/150*s_j11);
	// var c_o40 = (c_o37+c_o38+c_o39);
	// var c_o45 = (c_f45*(c_e45*i_f29+i_f30*c_g45)/150*s_j11);
	// var c_o46 = (c_f46*(c_e46*i_f29+i_f30*c_g46)/150*s_j11);
	// var c_o47 = (c_o45+c_o46);
	// var c_o51 = (c_f51*(c_e51*i_f28+c_g51*i_f30)/150*s_j11);
	// var c_o52 = (c_f52*(c_e52*i_f28+c_g52*i_f30)/150*s_j11);
	// var c_o53 = (c_f53*(c_e53*i_f28+c_g53*i_f30)/150*s_j11);
	// var c_o54 = (c_o51+c_o52+c_o53);
	//
	// //CALCULATIONS TAB: CALCULATIONS FOR CLMN P
	// var c_p14 = (c_o14-c_n14);
	// var c_p15 = (c_o15-c_n15);
	// var c_p16 = (c_p14+c_p15);
	// var c_p20 = (c_o20-c_n20);
	// var c_p21 = (c_o21-c_n21);
	// var c_p22 = (c_o22-c_n22);
	// var c_p23 = (c_p20+c_p21+c_p22);
	// var c_p31 = (c_o31-c_n31);
	// var c_p32 = (c_o32-c_n32);
	// var c_p33 = (c_p31+c_p32);
	// var c_p37 = (c_o37-c_n37);
	// var c_p38 = (c_o38-c_n38);
	// var c_p39 = (c_o39-c_n39);
	// var c_p40 = (c_p37+c_p38+c_p39);
	// var c_p45 = (c_o45-c_n45);
	// var c_p46 = (c_o46-c_n46);
	// var c_p47 = (c_p45+c_p46);
	// var c_p51 = (c_o51-c_n51);
	// var c_p52 = (c_o52-c_n52);
	// var c_p53 = (c_o53-c_n53);
	// var c_p54 = (c_p51+c_p52+c_p53);
	//
	// //CALCULATIONS TAB: CALCULATIONS FOR CLMN Q
	// var c_q14 = (c_f14*c_g14/150*s_j11);
	// var c_q15 = (c_f15*c_g15/150*s_j11);
	// var c_q16 = (c_q14+c_q15);
	// var c_q20 = (c_f20*c_g20*s_j11/150);
	// var c_q21 = (c_f21*c_g21*s_j11/150);
	// var c_q22 = (c_f22*c_g22*s_j11/150);
	// var c_q23 = (c_q20+c_q21+c_q22);
	// var c_q31 = (c_f31*c_g31*s_j11/150);
	// var c_q32 = (c_f32*c_g32*s_j11/150);
	// var c_q33 = (c_q31+c_q32);
	// var c_q37 = (c_f37*c_g37*s_j11/150);
	// var c_q38 = (c_f38*c_g38*s_j11/150);
	// var c_q39 = (c_f39*c_g39*s_j11/150);
	// var c_q40 = (c_q37+c_q38+c_q39);
	// var c_q45 = (c_f45*c_g45*s_j11/150);
	// var c_q46 = (c_f46*c_g46*s_j11/150);
	// var c_q47 = (c_q45+c_q46);
	// var c_q51 = (c_f51*c_g51*s_j11/150);
	// var c_q52 = (c_f52*c_g52*s_j11/150);
	// var c_q53 = (c_f53*c_g53*s_j11/150);
	// var c_q54 = (c_q51+c_q52+c_q53);
	//
	// //SUMMARY TAB: CALCULATIONS SUMMARY BOX
	// var s_p28 = (1-c_n16/c_n23) * 100;
	// var s_p33 = (1-c_o16/c_o23) * 100;
	// var s_p38 = (1-c_p16/c_p23) * 100;
	// var s_p43 = (1-c_q23/c_q16) * 100;
	//
	// //SUMMARY TAB: Western Blot Price Variability Impact (Cost, Operating Margin) BOX
	// var s_p73 = (1-c_n33/c_n40) * 100;
	// var s_q73 = (1-c_n47/c_n54) * 100;
	// var s_p78 = (1-c_p33/c_p40) * 100;
	// var s_q78 = (1-c_p47/c_p54) * 100;

	//POPULATE TABLE DATA
	// document.getElementById('cost_1').innerHTML = "$" + (c_n16.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('cost_2').innerHTML = "$" + (c_n23.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('cost_3').innerHTML = (s_p28.toFixed(2)) + "%";
	// if (isNaN(s_p28)) {document.getElementById('cost_3').innerHTML = "0%"}
	// document.getElementById('rev_1').innerHTML = "$" + (c_o16.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('rev_2').innerHTML = "$" + (c_o23.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('rev_3').innerHTML = (s_p33.toFixed(2)) + "%";
	// if (isNaN(s_p33)) {document.getElementById('rev_3').innerHTML = "0%"}
	// document.getElementById('oper_1').innerHTML = "$" + (c_p16.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('oper_2').innerHTML = "$" + (c_p23.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('oper_3').innerHTML = (s_p38.toFixed(2)) + "%";
	// if (isNaN(s_p38)) {document.getElementById('oper_3').innerHTML = "0%"}
	// document.getElementById('west_1').innerHTML = "" + (c_q16.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('west_2').innerHTML = "" + (c_q23.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('west_3').innerHTML = (s_p43.toFixed(2)) + "%";
	// if (isNaN(s_p43)) {document.getElementById('west_3').innerHTML = "0%"}
	// document.getElementById('wb_cost_1').innerHTML = "$" + (c_n33.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('wb_cost_2').innerHTML = "$" + (c_n40.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('wb_cost_3').innerHTML = (s_p73.toFixed(2)) + "%";
	// if (isNaN(s_p73)) {document.getElementById('wb_cost_3').innerHTML = "0%"}
	// document.getElementById('wb_cost_4').innerHTML = "$" + (c_n47.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('wb_cost_5').innerHTML = "$" + (c_n54.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('wb_cost_6').innerHTML = (s_q73.toFixed(2)) + "%";
	// if (isNaN(s_q73)) {document.getElementById('wb_cost_6').innerHTML = "0%"}
	// document.getElementById('wb_margin_1').innerHTML = "$" + (c_p33.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('wb_margin_2').innerHTML = "$" + (c_p40.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	// document.getElementById('wb_margin_3').innerHTML = (s_p78.toFixed(2)) + "%";
	// if (isNaN(s_p78)) {document.getElementById('wb_margin_3').innerHTML = "0%"}
	// document.getElementById('wb_margin_4').innerHTML = "$" + (c_p47.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));