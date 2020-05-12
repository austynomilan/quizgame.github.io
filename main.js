
    // declearation of variables
    var btn1 =$('#btn1'),
        btn2 =$('#btn2'),
        btn3 =$('#btn3'),
        btn4 =$('#btn4'),
        btn5 =$('#btn5'),
        right1 =$('#right1'),
        wrong1 =$('#wrong1'),
        right2 =$('#right2'),
        wrong2 =$('#wrong2'),
        right3 =$('#right3'),
        wrong3 =$('#wrong3'),
        right4 =$('#right4'),
        wrong4 =$('#wrong4'),
        right5 =$('#right5'),
        wrong5 =$('#wrong5'),
        first_question = $('#first_question'),
        second_question = $('#second_question'),
        third_question = $('#third_question'),
        fourth_question = $('#fourth_question'),
        fifth_question = $('#fifth_question'),
        final_result = $('#final_result'),
        text1=$('#text1'),
        text2=$('#text2'),
        text3=$('#text3'),
        text4=$('#text4');

        //function
        function changeColor() {
            text2.addClass('grnn'); 
         }
        function changeColor1() {
            text1.addClass('rdd'); 
        }
        function changeColor3() {
            text3.addClass('rdd'); 
        }
        function changeColor4() {
            text4.addClass('rdd');  
        }

    
        function change1() {
            first_question.hide();
             second_question.show();
        }
        function change2() {
            third_question.show();
             second_question.hide();
        }
        function change3() {
            third_question.hide();
             fourth_question.show();
        }
        function change4() {
            fifth_question.show();
             fourth_question.hide();
        }
        function change5() {
            fifth_question.hide();
            score_section.hide();
            final_result.show();
        }

