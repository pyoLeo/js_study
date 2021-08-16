/**
 * 
 */
$(document).ready(function() {
	$("#addBtn").on("click", function() {
		addRow();
	});

	$("#delBtn").on("click", function() {
		delRow();
		calTotal();
	});
	
	$("#allSel").on("click", function() {
		allRowCheck(); 
	});
	
	$(".dataSelect").on("click", function() {
		rowUncheck();
	});
	
	$("#calBtn").on("click", function() {
		calTotal();
	});

})

function allRowCheck() {
	if($("#allSel").prop("checked")) { 
		$("input[type=checkbox]").prop("checked",true); 
	} else {
		$("input[type=checkbox]").prop("checked",false); 
	}
}

function rowUncheck() {
	if($("input[type=checkbox]:checked").length != $("input[type=checkbox]").length) {
		$("#allSel").prop("checked", false);
	} else {
		$("#allSel").prop("checked", true);
	}
}

function addRow() {
	let addRow = "<tr><td><input type='checkbox' class='dataSelect' checked></td>"
	addRow += "<td><input type='text' class='pName'></td>"
	addRow += "<td><input type='number' class='pCnt'></td>"
	addRow += "<td><input type='number' class='pPrice'></td></tr>"

	$("#addArea").append(addRow);
}

function delRow() {
	$("#dataArea input[type='checkbox']:checked").parent().parent().remove();
}


function calTotal() {
	let tPrice = 0;
	let tCnt = 0;
	let tot = 0;
	
	let cntRow = $(".pCnt");
	let priceRow = $(".pPrice");
	for (let i = 0; i < cntRow.length; i++) {
		tCnt = Number(cntRow[i].value);
		tPrice = Number(priceRow[i].value);
		
		tot += tCnt * tPrice;
	}
	
	$("#totalPrice").empty();
	$("#totalPrice").append(tot + "원");
}