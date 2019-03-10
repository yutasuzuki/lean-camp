## columnの追加
bin/rails g migration AddColumnToProject deleted_at:datetime

## tableのcolumnの並べ替え
alter table `テーブル名` modify `移動させたいcolumn` `移動させたいcolumnの型` after `どこのcolumn`
alter table projects modify user_id bigint(20) after id;

alter table lean_canvas modify project_id bigint(20) after user_id;

## 
UPDATE lean_canvas SET project_id=1 WHERE id=3;