/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "ABI33_0_0ImageManager.h"

#import <ReactABI33_0_0/ABI33_0_0RCTImageLoader.h>

#import "ABI33_0_0RCTImageManager.h"

namespace facebook {
namespace ReactABI33_0_0 {

ImageManager::ImageManager(void *platformSpecificCounterpart) {
  self_ = (__bridge_retained void *)[[ABI33_0_0RCTImageManager alloc]
      initWithImageLoader:(__bridge ABI33_0_0RCTImageLoader *)
                              platformSpecificCounterpart];
}

ImageManager::~ImageManager() {
  CFRelease(self_);
  self_ = nullptr;
}

ImageRequest ImageManager::requestImage(const ImageSource &imageSource) const {
  ABI33_0_0RCTImageManager *imageManager = (__bridge ABI33_0_0RCTImageManager *)self_;
  return [imageManager requestImage:imageSource];
}

} // namespace ReactABI33_0_0
} // namespace facebook
