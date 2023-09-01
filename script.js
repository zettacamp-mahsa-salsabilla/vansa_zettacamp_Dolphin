
// validate form inputs before submitting data
function validateForm(){
    let nameBook = document.getElementById("nameBook").value;
    let totalCount = document.getElementById("totalCount").value;
    let authorBook = document.getElementById("authorBook").value;
    let descriptionBook = document.getElementById("descriptionBook").value;


    if(nameBook == ""){
        alert("Name Book is required");
        return false;
    }

    if(totalCount == ""){
        alert("Count Book is required");
        return false;
    }
    else if(totalCount < 1){
        alert("Count Book must not be zero or less than zero");
        return false;
    }

    if(authorBook == ""){
        alert("Author Book is required");
        return false;
    }

    if(descriptionBook == ""){
        alert("Description Book is required");
        return false;
    }
    return true;
}

// to show data from local storage
function showData(){
    // let bookLists;
    if(localStorage.getItem('bookLists') == null){
        bookLists = [];
    }
    else{
        bookLists = JSON.parse(localStorage.getItem('bookLists'));
    }

    let html = "";
    bookLists.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.nameBook + "</td>";
        html += "<td>" + element.totalCount + "</td>";
        html += "<td>" + element.authorBook + "</td>";
        html += "<td>" + element.descriptionBook + "</td>";
        html += 
        '<td><button onclick = "deleteData(' + 
        index +
        ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + 
        index +
        ')" class="btn btn-warning m-2">Edit</button></td>';
        html +="</tr>";
    });

    document.querySelector("#bookTable tbody").innerHTML = html;
}

// loads all data from local storage when document or page loaded
document.onload = showData();

// to add data to local storage
function addData(){
    // if form is validate
    if(validateForm() == true){
        let nameBook = document.getElementById("nameBook").value;
        let totalCount = document.getElementById("totalCount").value;
        let authorBook = document.getElementById("authorBook").value;
        let descriptionBook = document.getElementById("descriptionBook").value;

        let bookLists;
        if(localStorage.getItem("bookLists") == null){
        bookLists = [];
        }
        else {
        bookLists = JSON.parse(localStorage.getItem("bookLists"));
        }

        bookLists.push({
            nameBook : nameBook,
            totalCount : totalCount,
            authorBook : authorBook,
            descriptionBook : descriptionBook,
        });
        
        localStorage.setItem("bookLists", JSON.stringify (bookLists));
        showData();
        document.getElementById("nameBook").value = "";
        document.getElementById("totalCount").value = "";
        document.getElementById("authorBook").value = "";
        document.getElementById("descriptionBook").value = "";
    }
}

//to delete data from local storage
function deleteData(index){
    let bookLists;
    if(localStorage.getItem("bookLists") == null){
        bookLists = [];
    }
    else{
        bookLists = JSON.parse(localStorage.getItem("bookLists"));
    }

    bookLists.splice(index, 1);
    localStorage.setItem("bookLists", JSON.stringify(bookLists));
    showData();
}

// to update data from local storage
function updateData(index){
    // submit button will hide and update button will show for updating of data in local storage
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    let bookLists;
    if(localStorage.getItem("bookLists") == null){
        bookLists = [];
    }
    else{
        bookLists = JSON.parse(localStorage.getItem("bookLists"));
    }

    document.getElementById("nameBook").value = bookLists[index].nameBook;
    document.getElementById("totalCount").value = bookLists[index].totalCount;
    document.getElementById("authorBook").value = bookLists[index].authorBook;
    document.getElementById("descriptionBook").value = bookLists[index].descriptionBook;

    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){
        bookLists[index].nameBook = document.getElementById("nameBook").value;
        bookLists[index].totalCount = document.getElementById("totalCount").value;
        bookLists[index].authorBook = document.getElementById("authorBook").value;
        bookLists[index].descriptionBook = document.getElementById("descriptionBook").value;

        localStorage.setItem("bookLists", JSON.stringify(bookLists));

        showData();
        document.getElementById("nameBook").value = "";
        document.getElementById("totalCount").value = "";
        document.getElementById("authorBook").value = "";
        document.getElementById("descriptionBook").value = "";

        // update button will hide and submit button will show 
        document.getElementById("Submit").style.display = "block";
        document.getElementById("Update").style.display = "none";
        }
    }
}