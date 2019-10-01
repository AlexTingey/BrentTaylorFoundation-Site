export class Counter {
  private imgNames: string[];
  count: number;
  constructor(){
    this.count = 0;
    this.imgNames = ['../assets/imgs/Brent_at_Utah_game_as_Student_Vet_of_the_Year',
    '../assets/imgs/Brent_honor_guard_BYU football_game_2005',
    '../assets/imgs/Brent_honor_guard_BYU_Graduation_2006',
    '../assets/imgs/Brent_honor_guard_walking_BYU_grad_2006',
    '../assets/imgs/Brent_in_front_of_BYU_Wall_of_Honor',
    '../assets/imgs/Brent_Meg_BYU_graduation',
    '../assets/imgs/Football_game_2012_Student_Vet_of_the_Year',
    '../assets/imgs/Jacob_in_BYUtes_hat',
    '../assets/imgs/meg_brent_BYU',
    '../assets/imgs/with_kids_at_BYU_game',
    '../assets/imgs/with_three_oldest_kids_at_a_2017_BYU_Home_football_game'];
    this.count = 0;

  }

  getImges(): string[]{
    return this.imgNames;
  }

  getCount(): number{
    return this.count;
  }

  modCount(count: number): number{
    return this.imgNames.length % count;
  }
  incrementCount() {
    this.count += 1;
  }


}
