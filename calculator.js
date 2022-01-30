        var num = 2;
        var num2 = 2;
        var num3 = 2;
        var addAct=()=>{
            var table=document.getElementById("tab");
            var tr=document.createElement("tr");
            var td1=document.createElement("td");
            td1.innerText="Activity" + String(num);

            var td2=document.createElement("td");
            td2.innerText="A" + String(num);

            var td3=document.createElement("td");
            var inp=document.createElement("input");
            inp.id="inp" + String(num);
            td3.appendChild(inp);
            
            var td4=document.createElement("td");
            var inp2=document.createElement("input");
            var inp3=document.createElement("input");
            var divide=document.createElement("String");

            divide.innerText="/";
            inp2.id="inpu" + String(num2);
            inp3.id="inpue" + String(num3);
            td4.appendChild(inp2);
            td4.appendChild(divide);
            td4.appendChild(inp3);

            var td5=document.createElement("td");
            td5.id = "percent" + String(num);
            

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            table.appendChild(tr);


            num = num + 1;
            num2 = num2 + 1;
            num3 = num3 + 1;
            
        }

        var weighted=()=>{
            var sum = 0;
            var sum2 = 0;

            for (var i = 0; i < num - 1; i++){
                var tempW=document.getElementById("inp" + String(i + 1));
                sum=Number(tempW.value) + sum;

                var tempPercent=document.getElementById("percent" + String(i + 1));
                var tempInpu=document.getElementById("inpu" + String(i + 1));
                var tempInpue=document.getElementById("inpue" + String(i + 1));
                var tempInp=document.getElementById("inp" + String(i + 1));

                var result=Number(tempInpu.value) / Number(tempInpue.value);
                var res=result * Number(tempInp.value);
                sum2=sum2 + res;
                tempPercent.innerText=String(result);
            }

            sum2=sum2/sum;
            var tempResult=document.getElementById("Res");
            tempResult.innerText += ":" + String(sum2);
        }

        var mean=()=>{
            var res = 0;
            for (var i = 0; i < num - 1; i++){
                var tempPercent=document.getElementById("percent" + String(i + 1));
                var tempInpu=document.getElementById("inpu" + String(i + 1));
                var tempInpue=document.getElementById("inpue" + String(i + 1));
                var tempInp=document.getElementById("inp" + String(i + 1));

                var result=Number(tempInpu.value) / Number(tempInpue.value);
                res = res + result;

            }

            res = res / (num - 1);
            var tempResult=document.getElementById("Res");
            tempResult.innerText += ":" + String(res);
        }