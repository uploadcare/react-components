# Uploadcare React Uploader

<a href="https://uploadcare.com/?utm_source=github&utm_campaign=uploadcare-js-api-clients">
    <img align="right" width="64" height="64"
      src="https://ucarecdn.com/edfdf045-34c0-4087-bbdd-e3834921f890/userpiccircletransparent.svg"
      alt="">
</a>

Welcome to the Uploadcare React Uploader documentation!
This library allows you to seamlessly integrate Uploadcare file uploader into your React applications while adhering to
React principles.

[![Build Status][badge-build]][build-url]
[![NPM version][npm-img]][npm-url]
[![GitHub release][badge-release-img]][badge-release-url]
[![Uploadcare stack on StackShare][badge-stack-img]][badge-stack-url]

* [Summary about project](#summary-about-project)
* [Quick Features](#quick-features)
* [Install](#install)
* [Common](#common)
    * [Usage](#usage)
        * [Regular](#regular)
        * [Inline](#inline)
        * [Minimal](#minimal)
    * [Props API](#props-api)
    * [Styles](#styles)
    * [File Uploader API](#file-uploader-api)
    * [Events](#events)
* [Security issues](#security-issues)
* [Feedback](#feedback)

## Summary about project

This documentation provides guidance on how to use the Uploadcare React Uploader in your projects, along with details
about its features, installation process, usage examples, customization options, event handling, and security
considerations.

## Quick Features

- Seamless integration with React applications
- Three different upload options: Regular, Inline, and Minimal
- Customizable styles
- Access to File Uploader API
- Comprehensive event handling

## Install

```bash
npm i @uploadcare/react-uploader
```

## Usage

The Uploadcare React Uploader offers three main components for integration.
Each component serves specific use cases and can be easily implemented into your project.

### Regular

```jsx
import {FileUploaderRegular} from "@uploadcare/react-uploader";

<FileUploaderRegular pubkey="YOUR_PUBLIC_KEY"/>;
```

### Inline

```jsx
import {FileUploaderInline} from "@uploadcare/react-uploader";

<FileUploaderInline pubkey="YOUR_PUBLIC_KEY"/>;
```

### Minimal

```jsx
import {FileUploaderMinimal} from "@uploadcare/react-uploader";

<FileUploaderMinimal pubkey="YOUR_PUBLIC_KEY"/>;
```

## Props API

An easy way to connect React-Uploader to your project and utilize the available API props.
We provide a full set of props that are used in blocks. For review we suggest you to look at
the [documentation](uc-docs-file-uploader-options).

## Styles

You can customize the appearance of the React uploader using the className prop, which allows you to add custom CSS
classes to the uploader `FileUploader[Regular | Minimal | Inline]` wrapper.

```jsx
import {FileUploaderRegular} from "@uploadcare/react-uploader";

<FileUploaderRegular className="fileUploaderWrapper" pubkey="YOUR_PUBLIC_KEY"/>;
```

```css
.fileUploaderWrapper lr-file-uploader-regular {
}
```

## File Uploader API

For convenience, we provide the ability to access the File Uploader API using `apiRef`.
You can see what methods are available in `apiRef` in the [documentation][uc-docs-file-uploader-api].
It is important to note that we now pass all InstanceType from UploadCtxProvider.

```jsx
import React, {useRef, useEffect} from "react";
import {
    FileUploaderRegular,
    UploadCtxProvider
} from "@uploadcare/react-uploader";

const Example = () => {
    const uploaderRef = useRef < InstanceType < UploadCtxProvider > | null > (null);


    <FileUploaderRegular apiRef={uploaderRef} pubkey="YOUR_PUBLIC_KEY"/>;
}
```

## Events

Events in React Uploader are the same as in blocks, see the [documentation][uc-docs-events].
The principle of converting events from blocks to React Uploader:

1. All events in React Uploader start with `on`.
2. All events in React Uploader in `camelCase`.

Example:

```jsx
import {FileUploaderRegular} from "@uploadcare/react-uploader";

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

[badge-release-img]: https://img.shields.io/github/release/uploadcare/react-components.svg

[badge-release-url]: https://github.com/uploadcare/react-components/releases

[npm-img]: http://img.shields.io/npm/v/@uploadcare/react-uploader.svg

[npm-url]: https://www.npmjs.com/package/@uploadcare/react-uploader

[badge-build]: https://github.com/uploadcare/react-components/actions/workflows/checks.yml/badge.svg

[build-url]: https://github.com/uploadcare/react-components/actions/workflows/checks.yml

[uc-docs-events]: https://uploadcare.com/docs/file-uploader/events/

[uc-docs-file-uploader-api]: https://uploadcare.com/docs/file-uploader/api

[uc-docs-file-uploader-options]: https://uploadcare.com/docs/file-uploader/options/
