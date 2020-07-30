
    const correctans = ['A','A','A','A'];
    const form = document.querySelector('.form');
    console.log(form);
    form.addEventListener('submit', e => {
        e.preventDefault();
        let useranswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
        let score = 0;
        window.scrollTo(0,0);
        useranswer.forEach((answer,index)=>{
            if(answer === correctans[index]){
                score +=25;
            }
        })
        let percent = document.querySelector('.percent');
        let disp = percent.querySelector('.change');
        console.log(disp);
        disp.innerHTML = `${score}%`;
        percent.style.display = 'block';
        console.log('i am here');
        let answer = 0;
        let timer = setInterval(() => {
            if(answer === score){
                clearInterval(timer);
            }else{
                answer++;
            }
        },10);
    });

