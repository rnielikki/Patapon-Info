# multiAddMapIcon

Adds an icon to the VS map.

## Code Information

- **Name**: `multiAddMapIcon`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0e 00`
- **Assembly Address in Memory** : `0x8919a64`

## Parameters

- `(int *)handle` *(8 bytes)* : Gimmick handle.
- `(undefined4)Var1` *(8 bytes)* : Please describe. 0 deletes the icon. Incorrect value might crash the game.

## Example

Here is one example in hex:

```25 16 0e 00 / 04 00 00 00 / 0f 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
multiAddMapIcon((int *)iVar15, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08919a64(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  undefined4 local_40;
  undefined4 local_3c;
  undefined4 local_38;
  undefined4 local_34;
  undefined4 local_30;
  undefined4 local_2c;
  undefined4 local_28;
  undefined4 local_24;
  undefined4 local_20;
  undefined4 local_1c;
  undefined4 local_18;
  undefined4 local_14;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 10)) &&
      (iVar3 != 0)) &&
     (((*(uint *)(iVar3 + 400) < 4 && (*(int *)(param_1 + 0x10) != 0)) &&
      (iVar4 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar4 != 0)))) {
    iVar4 = *(int *)(*(int *)(iVar4 + 0x2c) + 0x54);
    switch(*puVar2) {
    case 0:
    case 4:
    case 0xc:
      iVar5 = func_0x08b2aa18(iVar4);
      if (iVar5 != 0) {
        (**(code **)(*(int *)(iVar5 + 0x10) + 0x44))
                  (iVar5,*(undefined4 *)(iVar4 + 0x14),iVar3,iVar4 + 0x4500,*puVar2);
      }
      break;
    case 1:
      iVar5 = func_0x08b2ab98(iVar4);
      if (iVar5 != 0) {
        local_8 = 0;
        local_4 = 0;
        local_c = 0;
        local_10 = 0xc1000000;
        (**(code **)(*(int *)(iVar5 + 0x10) + 0x44))
                  (iVar5,*(undefined4 *)(iVar4 + 0x14),iVar3,iVar4 + 0x4500,1,1,&local_8,&local_10);
      }
      break;
    case 2:
      iVar5 = func_0x08b2ab98(iVar4);
      if (iVar5 != 0) {
        local_18 = 0;
        local_14 = 0;
        local_20 = 0;
        local_1c = 0;
        (**(code **)(*(int *)(iVar5 + 0x10) + 0x44))
                  (iVar5,*(undefined4 *)(iVar4 + 0x14),iVar3,iVar4 + 0x4500,0,2,&local_18,&local_20)
        ;
      }
      break;
    case 3:
    case 6:
    case 7:
    case 8:
      iVar5 = func_0x08b2ab98(iVar4);
      if (iVar5 != 0) {
        local_38 = 0;
        local_34 = 0;
        local_40 = 0;
        local_3c = 0;
        (**(code **)(*(int *)(iVar5 + 0x10) + 0x44))
                  (iVar5,*(undefined4 *)(iVar4 + 0x14),iVar3,iVar4 + 0x4500,*puVar2,0,&local_38,
                   &local_40);
      }
      break;
    case 9:
      iVar5 = func_0x08b2ac28(iVar4);
      if (iVar5 != 0) {
        (**(code **)(*(int *)(iVar5 + 0x10) + 0x44))
                  (iVar5,*(undefined4 *)(iVar4 + 0x14),iVar3,iVar4 + 0x4500);
      }
      break;
    case 10:
    case 0xb:
      iVar5 = func_0x08b2ab98(iVar4);
      if (iVar5 != 0) {
        local_28 = 0;
        local_24 = 0;
        local_30 = 0;
        local_2c = 0;
        (**(code **)(*(int *)(iVar5 + 0x10) + 0x44))
                  (iVar5,*(undefined4 *)(iVar4 + 0x14),iVar3,iVar4 + 0x4500,*puVar2,2,&local_28,
                   &local_30);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

