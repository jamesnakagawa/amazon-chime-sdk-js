// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import ApplicationMetadata from '../applicationmetadata/ApplicationMetadata';

/**
 * [[SignalingClientJoin]] contains settings for the Join SignalFrame.
 */
export default class SignalingClientJoin {
  /** Initializes a SignalingClientJoin with the given properties.
   *
   * @param maxVideos The maximum number of video tiles to send.
   * @param sendBitrates Whether the server should send Bitrates messages.
   * @param applicationMetadata [[ApplicationMetadata]].
   */
  constructor(
    public maxVideos: number,
    public sendBitrates: boolean,
    public readonly applicationMetadata?: ApplicationMetadata
  ) {}
}
