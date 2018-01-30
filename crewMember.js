class CrewMember {
  constructor(position) {
    this.position = position;
  }

  currentShip() {
    if(this.ship) {
      return this.ship;
    } else {
      return "Looking for a Rig";
    }
  }

  engageWarpDrive() {
    if (this.position === "Pilot" && this.ship){
      return;
    } else {
      return "had no effect";
    }
  }

  setsInvisibility() {
    if (this.position === "Defender" && this.ship){
      this.ship.cloak = 'engaged';
    } else {
      return "had no effect";
    }
  }

  chargePhasers() {
    if (this.position === "Gunner" && this.ship){
      return;
    } else {
      return "had no effect";
    }
  }

}
