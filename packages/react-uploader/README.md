# Uploadcare React Uploader

<a href="https://uploadcare.com/?utm_source=github&utm_campaign=uploadcare-js-api-clients">
    <img align="right" width="64" height="64"
      src="https://ucarecdn.com/edfdf045-34c0-4087-bbdd-e3834921f890/userpiccircletransparent.svg"
      alt="">
</a>

Uploadcare React Uploader. Allows you to use Uploader in React applications according to React canons.


### (@TODO: Add a link to the documentation)

## Install

```
npm i @uploadcare/react-uploader
```

## Usage

```jsx
import { FileUploaderRegular } from "@uploadcare/react-uploader";

<FileUploaderRegular pubkey="YOUR_PUBLIC_KEY"/>;
```

## File Uploader API

It is possible to get ref on UploadCtxProvider via `ref`. In this way it is possible to additional uploader management
methods.

```jsx
import React, { useRef } from "react";
import {
    FileUploaderRegular,
    UploadCtxProvider
} from "@uploadcare/react-uploader";

const uploaderRef = useRef<InstanceType<UploadCtxProvider> | null>(null);

<FileUploaderRegular refUploadCtxProvider={uploaderRef} pubkey="YOUR_PUBLIC_KEY"/>;
```

## Events

Events in React Uploader are the same as in blocks, see the [documentation][uc-docs-events].
The principle of converting events from blocks to React Uploader:

1. All events in React Uploader start with `on`.
2. All events in React Uploader in `camelCase`.

Example:

```jsx
import { FileUploaderRegular } from "@uploadcare/react-uploader";

<FileUploaderRegular
    pubkey="YOUR_PUBLIC_KEY"
    onModalOpen={() => {
        console.log('modal-open')
    }}
/>
```

### Table of events

| Events blocks          | Events React Uploader  |
|------------------------|------------------------|
| file-added             | onFileAdded            |
| file-removed           | onFileRemoved          |
| file-upload-start      | onFileUploadStart      |
| file-upload-progress   | onFileUploadProgress   |
| file-upload-success    | onFileUploadSuccess    |
| file-upload-failed     | onFileUploadFailed     |
| file-url-changed       | onFileUrlChanged       |
| modal-open             | onModalOpen            |
| modal-close            | onModalClose           |
| done-click             | onDoneClick            |
| upload-click           | onUploadClick          |
| activity-change        | onActivityChange       |
| common-upload-start    | onCommonUploadStart    |
| common-upload-progress | onCommonUploadProgress |
| common-upload-success  | onCommonUploadSuccess  |
| common-upload-failed   | onCommonUploadFailed   |
| change                 | onChange               |
| group-created          | onGroupCreated         |

## Security issues

If you think you ran into something in Uploadcare libraries that might have
security implications, please hit us up at
[bugbounty@uploadcare.com][uc-email-bounty] or Hackerone.

We'll contact you personally in a short time to fix an issue through co-op and
prior to any public disclosure.

## Feedback

Issues and PRs are welcome. You can provide your feedback or drop us a support
request at [hello@uploadcare.com][uc-email-hello].

[uc-email-bounty]: mailto:bugbounty@uploadcare.com

[uc-email-hello]: mailto:hello@uploadcare.com

[badge-stack-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat

[badge-stack-url]: https://stackshare.io/uploadcare/stacks/

[uc-docs-events]: https://uploadcare.com/docs/file-uploader/events/
