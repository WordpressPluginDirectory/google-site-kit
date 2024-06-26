<?php

/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
namespace Google\Site_Kit_Dependencies\Google\Service\SubscribewithGoogle;

class BusinessPredicates extends \Google\Site_Kit_Dependencies\Google\Model
{
    /**
     * @var bool
     */
    public $canSell;
    /**
     * @var bool
     */
    public $supportsSiteKit;
    /**
     * @param bool
     */
    public function setCanSell($canSell)
    {
        $this->canSell = $canSell;
    }
    /**
     * @return bool
     */
    public function getCanSell()
    {
        return $this->canSell;
    }
    /**
     * @param bool
     */
    public function setSupportsSiteKit($supportsSiteKit)
    {
        $this->supportsSiteKit = $supportsSiteKit;
    }
    /**
     * @return bool
     */
    public function getSupportsSiteKit()
    {
        return $this->supportsSiteKit;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\SubscribewithGoogle\BusinessPredicates::class, 'Google\\Site_Kit_Dependencies\\Google_Service_SubscribewithGoogle_BusinessPredicates');
