export let Project = class {
  constructor(
    title,
    image,
    href,
    city,
    country,
    amount_donated,
    amount_goal,
    progress_percentage,
    donation_count,
    days_left
  ) {
    this.title = title;
    this.image = image;
    this.href = href;
    this.city = city;
    this.country = country;
    this.amount_donated = amount_donated;
    this.amount_goal = amount_goal;
    this.progress_percentage = progress_percentage;
    this.donation_count = donation_count;
    this.days_left = days_left;
  }
};
