# registConstGimmick

Defines a structure gimmick. This also can be a spawn point.

## Code Information

- **Name**: `registConstGimmick`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 bf 00`
- **Assembly Address in Memory** : `0x8923ddc`

## Parameters

- `(int)gimmick_id` *(8 bytes)* : ID of the gimmick, from [`generatorparam`](./guide/reference-table.md#generatorparam).
   - **If it is not a gimmick, the game will crash**
- `(int)level` *(8 bytes)* : Level of the gimmick.
- `(int)hitbox_layer` *(8 bytes)* : [Hitbox layer](./guide/reference-table.md#hitbox-layers) of the gimmick.
- `(int)x_pos` *(8 bytes)* : X position of the gimmick, as PSP pixels.
- `(int)y_pos` *(8 bytes)* : Y position of the gimmick, as PSP pixels.
- `(int)z_index` *(8 bytes)* : Render priority, the higher the value is, the more top the gimmick is. usually 0~1 is normal value.
- `(bool)Var6` *(8 bytes)* : Boolean, please describe what this does. Might be visual related.
- `(undefined4)Var7` *(8 bytes)* : Boolean, please describe what this does.
- `(undefined4)Var8` *(8 bytes)* : Boolean, please describe what this does.
- `(int)itemtable_id` *(8 bytes)* : [Item table ID](./beginappearitem.md) to give as reward, when gimmick is destroyed.
- `(int)gimmick_identifier` *(8 bytes)* : Id to register. Can be used with e.g. [setModeEx](./setmodeex.md), [gimmick_getHandle](./gimmick_gethandle.md).

## Example

Here is one example in hex:

```25 16 bf 00 / 02 00 00 00 / 17 01 00 00 / 08 00 00 00 / 32 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / dc 05 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 90 01 00 00 / 02 00 00 00 / a0 86 01 00```

Which is interpreted as:

```c
registConstGimmick((int)279, ((global)int *)giVar50, (int)1, (int)1500, (int)0, (int)0, (int)1, (int)1, (int)0, (int)400, (int)100000)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08923ddc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int *piVar4;
  int *piVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  undefined4 *puVar8;
  undefined4 *puVar9;
  undefined4 *puVar10;
  undefined4 *puVar11;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  puVar8 = (undefined4 *)Pac_Get_Param(param_2,7,1,4);
  puVar9 = (undefined4 *)Pac_Get_Param(param_2,8,1,4);
  puVar10 = (undefined4 *)Pac_Get_Param(param_2,9,1,4);
  puVar11 = (undefined4 *)Pac_Get_Param(param_2,10,1,4);
  FUN_089f05bc((float)*piVar4,(float)*piVar5,*(int *)(*(int *)(param_1 + 0x10) + 0x118) + 0x7e44,
               *puVar1,*puVar2,*puVar3,*puVar6,*puVar7,*puVar8,*puVar9,*puVar10,*puVar11);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

