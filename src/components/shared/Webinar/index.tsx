import React from "react";

/**
 * Intended to handle some kind of integration with online seminars
 * like clickmeeting.com
 * @returns 
 */
const Webinar: React.FC = () => {
  return <>
    <script type="text/javascript" src="https://embed.clickmeeting.com/widgets_embed.html?r=4w2Gac&amp;param_project=account_panel&amp;template=standard&amp;expanded=1"></script>
    Room embed
    <script type="text/javascript" src="https://embed.clickmeeting.com/embed_conference.html?r=1718290216709831&amp;w=1024&amp;h=768"></script>
  </>;

}

export default Webinar;