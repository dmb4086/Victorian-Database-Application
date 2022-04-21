
 const publisherBookArray=[];
 const publisherPublisherArray=[];
 const publisheridBookidArray=[];
 
 
 const authorBookArray=[];
 const authorAuthorArray=[];
 const authoridBookidArray=[];
 
 function matchPublisherBook(){ //match publisher info to book info and push it to publisheridBookidArray[]
 
     publisherBookArray.forEach(x=>{// loop through publisherBookArray[]
 
         publisherPublisherArray.forEach(y=>{// loop through publisherPublisherArray[]
 
             if(x[1] == y[1]){ // if publisher data mathces, create publisherBook object and add bookid and publisherid to it, then push object to array[]
                 let publisherBook ={};
                 publisherBook.bookid = x[0];
                 publisherBook.publisherid=y[0];
                 publisheridBookidArray.push(publisherBook);
             }
         });
 
     });
 
 }
 
 function matchAuthorBook(){//match author info to book info and push it to authoridBookidArray[]
 
     authorBookArray.forEach(x=>{//loop thorugh authorBookArray[]
 
         authorAuthorArray.forEach(y=>{// loop through authorAuthorArray[]
 
             if(x[1] == y[1]){// if author info matches, create authorBook object and add bookid and authorid to it, then push object to array[]
                 let authorBook ={};
                 authorBook.bookid = x[0];
                 authorBook.authorid=y[0];
                 authoridBookidArray.push(authorBook);
             }
         });
 
     });
 
 }
   
 
   function splitPublisher(word){//split publisher fucntion
            var s = word[0].split(':');//split on ':' to seperate location from publisher
            var publish = 'Unknown';
       if(s[1]){
             publish = s[1].trim();
       }
     return [publish,s[0],word[0]];// return split sections along with non-split in array
     
   }
 
   function splitAuthor(_a){//split author fucntion
 
     var regexpYears = /\b(\d{4})(\-*)(\d*)\b/g; //regex matching at least four digits.  will also match four digits with a dash or four digits with a dash and more digits
     var regexpAuthor =  /\b[^\d]+\b/g;// regex matching a name
     var years = ["Unknown"];
     var author = [];
     var aa="";
    
     String.prototype.replaceAt = function(index, replacement) {//fucntion that replaces a value at an index
       return this.substr(0, index) + replacement + this.substr(index + replacement.length);
     }
 
     if(_a.includes("M''Crie")){
       aa=_a.replaceAt(67,",");
       _a = aa;
     }
 
     var a = _a.split(';');// split on ';'
    
    a.forEach(x=>{// loop through split
     
 
      years = x.match(regexpYears)?x.match(regexpYears):["Unknown"]; 
      author = x.match(regexpAuthor);
         
      if(author[0].length == 0 ){
       years[0] = years+"-Unk";
     }
 
          
    });
         
   return [author[0], years[0]];
 
   }
 
   function fixdescriptionandnotes(word){
     
    word = word.replace(/'+/g, "''"); 
    word =  word.replace(/"/g, ""); 
    word =   word.trim();
    word = word.replace(/\?+/g,'Unknown');
    word = word.length==0?"Unknown":word;
    
     return word;
  }
  function fixtypeandgenre(word){
 
     word.replace(/["]+/g, ''); 
     word.replace(/[']+/g, "''"); 
     word.trim();
     
     if(word.includes("?")){
 
         word="U";
     }else if(word == 'unknown'){
         word="U";
     }else if(word==''){
         word = "U";
     }else if(word.length>2){
         word="U"
     }
     return word;
  }
 
  module.exports = {fixdescriptionandnotes, fixtypeandgenre, matchAuthorBook,matchPublisherBook, splitAuthor, splitPublisher,authorAuthorArray,authorBookArray, authoridBookidArray,  publisherBookArray, publisherPublisherArray, publisheridBookidArray}