# ui-selector

---
###好友选择器
````html

<section class="ui-selector">
  <header class="ui-border-b">
    <h3>选择好友</h3>
  </header>
  <div class="ui-selector-content" style="display:">
      <ul>
        <li class=" ui-selector-item active">
          <h3 class="ui-border-b">
            <p>最近在玩的好友</p><span class="ui-txt-info">11</span>
          </h3>
          <ul class="ui-list ui-list-link ui-border-b">
            <li>
              <div class="ui-avatar-s">
                <span style="background-image:url(../img/ava1.png)"></span>
              </div>
              <div class="ui-list-info ui-border-b"><h4>飞翔的企鹅</h4></div>
            </li>
            <li>
              <div class="ui-avatar-s">
                <span style="background-image:url(../img/ava1.png)"></span>
              </div>
              <div class="ui-list-info ui-border-b"><h4>飞翔的企鹅</h4></div>
            </li>
          </ul>
        </li>
        <li class=" ui-selector-item">
          <h3 class="ui-border-b">
            <p>最近在玩的好友</p><span class="ui-txt-info">11</span>
          </h3>
          <ul class="ui-list ui-list-link ui-border-b">
            <li>
              <div class="ui-avatar-s">
                <span style="background-image:url(../img/ava1.png)"></span>
              </div>
              <div class="ui-list-info ui-border-b"><h4>飞翔的企鹅</h4></div>
            </li>
            <li>
              <div class="ui-avatar-s">
                <span style="background-image:url(../img/ava1.png)"></span>
              </div>
              <div class="ui-list-info ui-border-b"><h4>飞翔的企鹅</h4></div>
            </li>
          </ul>
        </li>
        <li class=" ui-selector-item">
          <h3 class="ui-border-b"><i class="arrow"></i>
            <p>最近在玩的好友</p><span class="ui-txt-info">11</span>
          </h3>
          <ul class="ui-list ui-list-link ui-border-b">
            <li>
              <div class="ui-avatar-s">
                <span style="background-image:url(../img/ava1.png)"></span>
              </div>
              <div class="ui-list-info ui-border-b"><h4>飞翔的企鹅</h4></div>
            </li>
            <li>
              <div class="ui-avatar-s">
                <span style="background-image:url(../img/ava1.png)"></span>
              </div>
              <div class="ui-list-info ui-border-b"><h4>飞翔的企鹅</h4></div>
            </li>
            <li>
              <div class="ui-avatar-s">
                <span style="background-image:url(../img/ava1.png)"></span>
              </div>
              <div class="ui-list-info ui-border-b"><h4>飞翔的企鹅</h4></div>
            </li>
            <li>
              <div class="ui-avatar-s">
                <span style="background-image:url(../img/ava1.png)"></span>
              </div>
              <div class="ui-list-info ui-border-b"><h4>飞翔的企鹅</h4></div>
            </li>
          </ul>
        </li>
      </ul>
  </div>
</section>

````
<!-- ###带搜索的好友选择器
````html

<div  class="ui-searchbox-wrap">
    <div class="ui-searchbox">
        <i class="ui-icon-search"></i>
        <div>搜索号码（2-10位）</div>
        <div class="ui-searchbox-input" style="display:none"><input value="" type="tel" placeholder="搜索号码（2-10位）" autocapitalize="off"></div>
        <i class="ui-icon-close" style="display:none"></i>
    </div>
    <button class="ui-searchbox-cancel" style="display:none">取消</button>
</div>
<div class="mod-content">
  <ul class="ui-list ui-border-b" style="display:none">
      <li class="active">
          <div class="ui-list-thumb  ui-avatar">
              <span style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
          </div>
          <div class="ui-list-info ui-border-t">飞翔的企鹅</div>
      </li>
      <li>
          <div class="ui-list-thumb ui-avatar">
              <span style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
          </div>
          <div class="ui-list-info ui-border-t">飞翔的企鹅</div>
      </li>
      <li>
          <div class="ui-list-thumb  ui-avatar">
              <span  style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
          </div>
          <div class="ui-list-info ui-border-t">飞翔的企鹅</div>
      </li>
  </ul>
  <ul class="ui-select-user">
      <li class="ui-select-user-item active">
          <h3 class="ui-border-b"><i class="arrow"></i>最近在玩的好友</h3>
          <ul class="ui-list ui-border-b">
              <li class="active">
                  <div class="ui-list-thumb  ui-avatar">
                      <span style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
                  </div>
                  <div class="ui-list-info ui-border-t">飞翔的企鹅</div>
              </li>
              <li>
                  <div class="ui-list-thumb ui-avatar">
                      <span style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
                  </div>
                  <div class="ui-list-info ui-border-t">飞翔的企鹅</div>
              </li>
              <li>
                  <div class="ui-list-thumb  ui-avatar">
                      <span  style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
                  </div>
                  <div class="ui-list-info ui-border-t">飞翔的企鹅</div>
              </li>
          </ul>
      </li>
      <li class="ui-select-user-item">
          <h3 class="ui-userselect-top ui-border-b"><i class="arrow"></i>鹅厂工友们</h3>
          <ul class="ui-list ui-border-b">
              <li>
                  <div class="ui-list-thumb  ui-avatar">
                      <span  style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
                  </div>
                  <div class="ui-list-info ui-border-t">飞翔的企鹅</div>
              </li>
              <li>
                  <div class="ui-list-thumb  ui-avatar">
                      <span  style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
                  </div>
                  <div class="ui-list-info ui-border-t">飞翔的企鹅</div>
              </li>
          </ul>
      </li>
  </ul>
</div>
```` -->