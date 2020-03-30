# 首页

## 整理布局

```html
@extends('layouts.app')

@section('content')
  <div class="index-index container">
    <div class="row">
      <div class="col-md-9">
        <div class="posts card">
          <ul class="list-group list-group-flush">
            @foreach($posts as $post)
              <li class="post list-group-item">
                <div class="post-title">
                  <a class="text-dark">{{ $post->title }}</a>
                </div>
                <div class="post-info g-flex g-flex-middle">
                  <span class="badge badge-primary">{{ $post->category->alias }}</span>
                  <span class="ml-1 mr-1">/</span>
                  <span>{{ $post->user->name }}</span>
                  <span class="ml-1 mr-1">/</span>
                  <span>{{ $post->created_at->diffForHumans() }}</span>
                </div>
              </li>
            @endforeach
          </ul>
        </div>

        <div class="pagination mt-3">
          {{ $posts->links() }}
        </div>
      </div>

      <div class="col-md-3">
        <button class="btn btn-primary btn-block">创作新帖子</button>

        <div class="card categories mt-3">
          <div class="card-header">热门分类</div>
          <ul class="list-group list-group-flush">
            @foreach($categories as $category)
              <li class="post list-group-item p-2">
                <span>{{ $category->alias }}</span>
              </li>
            @endforeach
          </ul>
        </div>

        <div class="card categories mt-3">
          <div class="card-header">热门标签</div>
          <div class="card-body p-3">
            @foreach($tags as $tag)
              <span class="d-inline-block pb-1 mr-1">
                <button type="button"
                        class="btn btn-sm btn-outline-secondary">{{ $tag->name }}
                </button>
              </span>
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
```

效果如下:

![](~@assets/turning-index.png)
