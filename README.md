# Daily Scrum Supporter (DSS)

## Overview

DSS is a Slack App and focuses on managing daily scrums.

There are three features :

### 1.Sending survey forms

DSS sends simple forms to team members. They can write down their progresses, plans, and troubles in this form.  

### 2.Publishing reports

Once all team members have completed their surveys (or the set time comes,) the report including all members' forms is published. It would be used in a daily scrum meeting or for checking progress anytime.  

### 3.Holding daily scrum meetings with keeping time

Once Scrum Master starts a meeting, DSS counts 15 minutes (by default, the duration is set to 15 minutes, but you can change it). The duration has passed, where upon the meeting is ended by DSS.

## Demo

Please see this youtube video.

https://www.youtube.com/watch?v=hgeV8mSlsSc

[![youtube_thumbnail](https://img.youtube.com/vi/hgeV8mSlsSc/0.jpg)](https://www.youtube.com/watch?v=hgeV8mSlsSc)

## Install

### Bolt

[Bolt](https://github.com/slackapi/bolt-js) is used in the backend of the Slack App and requires the Bot User OAuth Access Token and Signing Secret for the Slack App.

Please refer to [Bolt's start guide](https://slack.dev/bolt-js/tutorial/getting-started) for information on how to obtain them.

After obtaining the two values, set the environment variables as follows.

```shell
export SLACK_BOT_TOKEN=xoxb-<your-bot-token>
export SLACK_SIGNING_SECRET=<your-signing-secret>
```

### Google Cloud Platform

This app uses [Google Cloud Scheduler](https://cloud.google.com/scheduler) for scheduling events which send some messages.

You need to set up Google Cloud Platform credentials.

Set an environment variable as follows.
(See [the official documentation](https://cloud.google.com/docs/authentication/production) for details.)

```shell
export GOOGLE_APPLICATION_CREDENTIALS=authentication.json
```

Also, you need to configure Google Cloud Scheduler instances information.

Set an environment variable as follows. `GCP_LACATION_ID` is such as asia-northeast1.

```shell
export GCP_PROJECT_ID=your-project-id
export GCP_LOCATION_ID=your-location
```

### dotenv

In addition, [dotenv](https://github.com/motdotla/dotenv) is used in the backend.

You can also set environment variables by adding a .env file directly under the project root folder.


### Appendix: Slack app manifests

You can install Daily Scrum Supporter with app manifests, `app-manifests.yml`. 

When you use the app manifest, you must replace `$HOST` with the hostname of your slack bot. 

For more information, visit the [Slack official documents](https://api.slack.com/future/development/manifests).


## Usage

After installing the app in your workspace, add it to the channels in which you want to use.

For more information, please refer to the following document

[Add apps to your Slack workspace](https://slack.com/help/articles/202035138-Add-apps-to-your-Slack-workspace)

[Adding your bot user to your Slack channel](https://www.ibm.com/docs/en/z-chatops/1.1.0?topic=slack-adding-your-bot-user-your-channel)

### Settings

When you install this app in a channel, you need to configure them.

* Remind you to submit your report at: The set time for sending survey in the channel every day.  
* You need to submit your report by: The set time for sending report in the channel every day.
* The daily scrum duration (MM:SS): The Duration of daily scrum.  
* Scrum Master: The user assigned as scrum master in the channel.
* User group: The user group for mentions in some messages.

### Extra settings

If you want to set up extra settings, you need to tap "Expand" button and configure them.  

* Zoom API Key: API key for Zoom meetings as daily scrum.
* Zoom API Secret: API secret for Zoom meetings as daily scrum.

For more information on how to get API key and API secret, please refer to [here](https://marketplace.zoom.us/docs/guides/build/jwt-app#generate-app-credentials).

### Additional information about the setting values

#### 1.The Duration of daily scrum

If not set, the value is set to 15 minutes by default.

#### 2.Notification of the start for Daily Scrum Meeting

If the group name is not set, the notification will be sent by @here.

#### 3.Notification of remaining time for Daily Scrum Meeting

If the group name is not set, the notification is sent to the scrum master by @(scrum-master-username).

If the scrum master is not registered, the notification is sent by @here.

#### 4.Zoom API key and API secret

You can also set them in `Process.env.ZOOM_API_KEY` and `Process.env.ZOOM_API_SECRET`, but the setting values take precedence over `process.env`.
