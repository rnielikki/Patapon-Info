# clearAbnormalStatus

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `clearAbnormalStatus`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 4d 00`
- **Assembly Address in Memory** : `0x8916194`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 4d 00 / 04 00 00 00 / 02 00 00 00 / 02 00 00 00 / ff ff ff ff / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
clearAbnormalStatus((int *)iVar2, (int)-1, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08916194(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int *piVar3;
  int iVar4;
  int iVar5;
  undefined uStack64;
  byte local_3f;
  undefined4 local_38;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (iVar4 != 0) {
      iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
      if (iVar5 == 9) {
        iVar4 = iVar4 + 0x180;
        local_10 = 0;
        local_c = 0;
        local_8 = 0;
        local_4 = 0;
        Syscall::Kernel::Kernel_Memset(&uStack64,0,0x40);
        local_38 = 0xffffffff;
        local_3f = local_3f & 0xf6 | 9;
        switch(*puVar2) {
        case 0:
          Damage::Status::Cure_StatusEffect_From(iVar4,0,*piVar3 != 0);
          break;
        case 1:
          Damage::Status::Cure_StatusEffect_From(iVar4,1,*piVar3 != 0);
          break;
        case 2:
          Damage::Status::Cure_StatusEffect_From(iVar4,2,*piVar3 != 0);
          break;
        case 3:
          Damage::Status::Cure_StatusEffect_From(iVar4,3,*piVar3 != 0);
          break;
        case 4:
          Damage::Status::Cure_StatusEffect_From(iVar4,4,*piVar3 != 0);
          break;
        case 6:
          Damage::Status::Cure_StatusEffect_From(iVar4,6,*piVar3 != 0);
          break;
        case 0xffffffff:
          Damage::Status::Cure_StatusEffect_From(iVar4,8,*piVar3 != 0);
        }
      }
      else {
        iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
        if (iVar5 == 3) {
          switch(*puVar2) {
          case 0:
            FUN_088c6e60(iVar4,0,*piVar3 != 0);
            break;
          case 1:
            FUN_088c6e60(iVar4,1,*piVar3 != 0);
            break;
          case 2:
            FUN_088c6e60(iVar4,2,*piVar3 != 0);
            break;
          case 3:
            FUN_088c6e60(iVar4,3,*piVar3 != 0);
            break;
          case 4:
            FUN_088c6e60(iVar4,4,*piVar3 != 0);
            break;
          case 6:
            FUN_088c6e60(iVar4,6,*piVar3 != 0);
            break;
          case 0xffffffff:
            FUN_088c6e60(iVar4,8,*piVar3 != 0);
          }
        }
        else {
          iVar5 = (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
          if (iVar5 == 2) {
            switch(*puVar2) {
            case 0:
              FUN_088e3740(iVar4,0,*piVar3 != 0);
              break;
            case 1:
              FUN_088e3740(iVar4,1,*piVar3 != 0);
              break;
            case 2:
              FUN_088e3740(iVar4,2,*piVar3 != 0);
              break;
            case 3:
              FUN_088e3740(iVar4,3,*piVar3 != 0);
              break;
            case 4:
              FUN_088e3740(iVar4,4,*piVar3 != 0);
              break;
            case 6:
              FUN_088e3740(iVar4,6,*piVar3 != 0);
              break;
            case 0xffffffff:
              FUN_088e3740(iVar4,8,*piVar3 != 0);
            }
          }
        }
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

