  const joinButton = document.getElementById('join');
  const infoButton = document.getElementById('Information');
  const officersButton = document.getElementById('officers');
  const achievementsButton = document.getElementById('achievements');
  
  joinButton.addEventListener('click', function() {
    const name = prompt('Thank you for joining, What is your name? ') || ('USER');
    const welcome = document.getElementById('aws');
    welcome.innerText = `Welcome to AWS Club Learning JRU CH, ${name}!`;
    alert('Thank you for your interest in joining AWS Club! '+ name);
  });

  infoButton.addEventListener('click', function() {
    const info = 'AWS Club Information:\n\n' +
                 '* Learn cloud computing with Amazon Web Services\n' +
                 '* Hands-on workshops and certifications\n' +
                 '* Connect with industry professionals\n' +
                 '* Build real-world projects\n\n' +
                 '  Meeting Schedule: ---';
    alert(info);
  });
  
  officersButton.addEventListener('click', function() {
    const officers = 'AWS Club Officers: \n\n' +
                     'President: \n' +
                     'Vice President: \n' +
                     'Secretary: \n' +
                     'Treasurer: \n' +
                     'Technical Lead: \n';
    alert(officers);
  });
  
  achievementsButton.addEventListener('click', function() {
    const achievements ='AWS Certified Members\n' +
                        'Workshop Participants\n' +
                        'Partnerships';
    alert(achievements);
  });

