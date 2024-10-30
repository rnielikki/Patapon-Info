# addHit

Adds a hitbox to a node.

## Code Information

- **Name**: `addHit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 3f 00`
- **Assembly Address in Memory** : `0x8915308`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(int *)destination` *(8 bytes)* : Variable to *store* the hitbox ID. Stores 0 if the target to add is invalid.
- `(float)x_offset` *(8 bytes)* : X Offset from the node.
- `(float)y_offset` *(8 bytes)* : Y Offset from the node.
- `(float)x_size` *(8 bytes)* : X Size of the hitbox.
- `(float)y_size` *(8 bytes)* : Y Size of the hitbox.
- `(int *)node_id` *(8 bytes)* : ID of the node, obtained from [getNodeIndex](./getnodeindex.md).

## Example

Here is one example in hex:

```25 17 3f 00 / 04 00 00 00 / 15 00 00 00 / 04 00 00 00 / 31 00 00 00 / 10 00 00 00 / 00 00 80 c1 / 10 00 00 00 / 00 00 20 41 / 10 00 00 00 / 00 00 00 42 / 10 00 00 00 / 00 00 f0 41 / 08 00 00 00 / 5b 00 00 00```

Which is interpreted as:

```c
addHit((int *)iVar21, (int *)iVar49, (float)-16, (float)10, (float)32, (float)30, ((global)int *)giVar91)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08915308(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  undefined4 *puVar7;
  int iVar8;
  undefined4 uVar9;
  int iVar10;
  int iVar11;
  undefined *local_30;
  int local_2c;
  undefined4 local_28;
  undefined4 local_20;
  undefined4 local_1c;
  undefined4 local_18;
  undefined4 local_14;
  undefined4 local_10;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  *puVar2 = 0;
  if (*piVar1 != -1) {
    iVar8 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar8 == 0) {
      iVar8 = 0;
    }
    iVar11 = *(int *)(iVar8 + 200);
    if (iVar11 != 0) {
      local_28 = 0;
      local_30 = &LAB_088e4e24;
      local_1c = *puVar4;
      local_20 = *puVar3;
      local_14 = *puVar6;
      local_18 = *puVar5;
      local_10 = *puVar7;
      iVar10 = *(int *)(iVar8 + 0xd0);
      local_2c = iVar8;
      if (iVar10 != 0) {
        if (*(int *)(iVar10 + 0xa4) == 0) {
          *(int *)(iVar10 + 0x10) = iVar8;
          (**(code **)(*(int *)(*(int *)(iVar8 + 0xd0) + 4) + 0x2c))();
          uVar9 = FUN_088dd198(*(undefined4 *)(iVar8 + 0xd0),local_10,&local_18,&local_20,local_30,
                               local_2c,local_28,0);
        }
        else {
          uVar9 = Set_Hitbox(iVar10 + 0xa0,&local_30);
          iVar8 = Set_Collision(iVar10 + 0xa0,uVar9);
          *(int *)(iVar8 + 0x28) = iVar11;
          *(undefined4 *)(iVar8 + 0x2c) = local_10;
          *(undefined4 *)(iVar8 + 0x30) = 0;
          *(undefined4 *)(iVar8 + 0x34) = 0;
        }
        *puVar2 = uVar9;
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
