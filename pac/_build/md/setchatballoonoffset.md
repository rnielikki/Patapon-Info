# setChatBalloonOffset

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setChatBalloonOffset`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 2e 00`
- **Assembly Address in Memory** : `0x8b50118`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 1c 2e 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 20 41 / 10 00 00 00 / 00 00 50 41```

Which is interpreted as:

```c
setChatBalloonOffset((int)0, (float)10, (float)13)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b50118(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 uVar4;
  int iVar5;
  undefined4 local_10;
  undefined4 local_c;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  uVar4 = Save::Get_Save_BaseAddr(1);
  iVar5 = Save::Get_BaseAddr__0x78(uVar4,1);
  local_10 = *puVar2;
  local_c = *puVar3;
  FUN_089cfaec(*(undefined4 *)(*(int *)(iVar5 + 100) + 0x18c),*puVar1,&local_10);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

