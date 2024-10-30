# multi_waitGoAhead1

This is called twice. Once while setting up, and once the the mission is ready.

## Code Information

- **Name**: `multi_waitGoAhead1`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 b2 00`
- **Assembly Address in Memory** : `0x891b054`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 b2 00```

Which is interpreted as:

```c
multi_waitGoAhead1()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
//Jumps to 0x0891af04, setting 3rd parameter to 1
void FUN_0891af04(int param_1,undefined4 param_2,undefined4 param_3)

{
  undefined4 uVar1;
  int iVar2;
  int iVar3;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  iVar3 = *(int *)(iVar2 + 100);
  iVar2 = Is_Multi(iVar3);
  if (iVar2 != 0) {
    iVar2 = *(int *)(param_1 + 0x10);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    if (*(int *)(iVar2 + 0x44) != 0xd) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    if (*(char *)(iVar3 + 0xa6) != '\0') {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  iVar2 = Get_Execution_Pause_Phase(param_2);
  if (iVar2 == 0) {
    iVar2 = Is_Multi(iVar3);
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    Pause_Execution(param_2,1);
    iVar2 = FUN_08987190(iVar3,param_3);
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  iVar2 = FUN_089872b0(iVar3,param_3);
  if (iVar2 != 0) {
    Set_Execution_Pause_Phase(iVar3,param_3);
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

