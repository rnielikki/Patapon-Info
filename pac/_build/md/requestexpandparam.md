# requestExpandParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `requestExpandParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 18 00`
- **Assembly Address in Memory** : `0x894ac88`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 18 00 / 02 00 00 00 / 09 00 00 00 / 02 00 00 00 / ff ff ff ff```

Which is interpreted as:

```c
requestExpandParam((int)9, (int)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894ac88(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  int iVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  undefined2 local_8;
  undefined2 local_6;
  undefined2 local_4;
  undefined2 local_2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar5 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar4 = *puVar1;
  uVar2 = Save::Get_Save_BaseAddr(1);
  iVar3 = Save::Get_BaseAddr__0x78(uVar2,0);
  uVar2 = *(undefined4 *)(iVar3 + 0xa4);
  local_8 = (undefined2)uVar5;
  local_6 = (undefined2)uVar4;
  local_4 = 0;
  local_2 = 0;
  FUN_08a0eaec(uVar2,&local_8);
  FUN_08a0d7fc(uVar2,1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

