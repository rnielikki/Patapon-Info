# setModelLowerHeight

Moves unit, squad or troop model's Y position.

## Code Information

- **Name**: `setModelLowerHeight`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 66 00`
- **Assembly Address in Memory** : `0x89181d4`

## Parameters

- `(int *)handle` *(8 bytes)* : [Handle](./guide/how-to-get-a-handle.md) of the model.
- `(bool)move_children` *(8 bytes)* : 1 moves the model with children. 0 moves only self.
- `(float)pos_y` *(8 bytes)* : Y position of the model to set, as PSP pixels.

## Example

Here is one example in hex:

```25 17 66 00 / 08 00 00 00 / 68 00 00 00 / 02 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 00 c2```

Which is interpreted as:

```c
setModelLowerHeight(((global)int *)giVar104, (int)1, (float)-32)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089181d4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  undefined4 uVar9;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  if (iVar4 != 0) {
    iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
    if (iVar5 == 9) {
      if (*(int *)(iVar4 + 200) == 0) {
        iVar5 = *piVar2;
      }
      else {
        *(bool *)(*(int *)(iVar4 + 200) + 0x165) = *piVar2 == 0;
        iVar5 = *piVar2;
      }
      if (iVar5 == 0) {
        uVar9 = 0;
      }
      else {
        uVar9 = *puVar3;
      }
      *(undefined4 *)(iVar4 + 0x164) = uVar9;
    }
    else {
      iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
      if (iVar5 == 3) {
        iVar5 = FUN_088c5340(iVar4);
        iVar8 = 0;
        if (0 < iVar5) {
          do {
            iVar6 = FUN_088c5348(iVar4,iVar8);
            if (iVar6 != 0) {
              if (*(int *)(iVar6 + 200) == 0) {
                iVar7 = *piVar2;
              }
              else {
                *(bool *)(*(int *)(iVar6 + 200) + 0x165) = *piVar2 == 0;
                iVar7 = *piVar2;
              }
              if (iVar7 == 0) {
                uVar9 = 0;
              }
              else {
                uVar9 = *puVar3;
              }
              *(undefined4 *)(iVar6 + 0x164) = uVar9;
            }
            iVar8 = iVar8 + 1;
          } while (iVar8 < iVar5);
        }
      }
      else {
        iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
        if (iVar5 == 2) {
          if (*piVar2 == 0) {
            FUN_088e3444(iVar4);
          }
          else {
            FUN_088e3268(*puVar3,iVar4);
          }
        }
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

