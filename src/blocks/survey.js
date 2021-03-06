exports.surveyBlocks = (channelId, groupId) => {
    return [
        {
            type: "header",
            text: {
                type: "plain_text",
                text: "Daily Scrum Supporter",
                emoji: true
            }
        },
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: `<!subteam^${groupId}>\nJot down and share your progress !`
            }
        },
        {
            type: "actions",
            block_id: channelId,
            elements: [
                {
                    type: "button",
                    text: {
                        type: "plain_text",
                        text: "Report",
                        emoji: true
                    },
                    value: "report",
                    action_id: "open_survey_modal"
                }
            ]
        }
    ]
};
