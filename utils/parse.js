//import { Project } from "../models/project";

import cheerio from "cheerio";

export function parseBetterPlace(betterplaceJson) {
  let projects = [];
  betterplaceJson.data.map((project) =>
    projects.push({
      title: project.title,
      image: project.profile_picture.links[0].href,
      href: project.links[0].href,
      city: project.city ?? "",
      country: project.country ?? "",
      amount_donated: (project.donated_amount_in_cents / 100).toFixed(2),
      amount_goal: ((project.donated_amount_in_cents + project.open_amount_in_cents) / 100).toFixed(2) + " €",
      progress_percentage: project.progress_percentage,
      donation_count: project.donations_count,
      days_left: 9999,
      platform: "betterplace.org",
    })
  );
  return projects;
}

export function parseEcoCrowd(htmlString) {
  const $ = cheerio.load(htmlString);

  let projects = [];
  $("#loop_scroll article").each(function (index, element) {
    projects.push({
      title: $(element).find("div.product_excerpt_content_main > div.entry_header > h2 > a").text(),
      image: $(element).find(".product_excerpt_img img").attr("src"),
      href: $(element).find(".product_href").attr("href"),
      city: $(element)
        .find("div.product_excerpt_content > div.clearfix > div.entry_location.clearfix > span:nth-child(2)")
        .text()
        .toString()
        .split(",")[0],
      country: mapCountryCode(
        $(element)
          .find("div.product_excerpt_content > div.clearfix > div.entry_location.clearfix > span:nth-child(2)")
          .text()
          .toString()
          .split(",")[1]
      ),
      amount_donated: $(element)
        .find("div.product_excerpt_footer.clearfix > div.percent_pledged_meta.clearfix > p")
        .text(),
      amount_goal: $(element).find(".purchases_total > p").text(),
      progress_percentage: $(element).find(".progress_bar > span").css("width").replace("%", ""),
      donation_count: 9999,
      days_left: $(element).find(".project_remain > p").text(),
      platform: "ecocrowd.de",
    });
  });
  return projects;
}

function mapCountryCode(code) {
  if (code.includes("DE")) return "Deutschland";
  if (code.includes("CH")) return "Schweiz";
  if (code.includes("AT")) return " Österreich";
}
