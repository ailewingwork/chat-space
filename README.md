# chat-space DB設計

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|string|null: false,foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups :through groups_users
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|image|string|null:false|
### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|text|integer|null: false, foreign_key: true|
### Association
- has_many : messages
- belongs_to :user :through groups_use