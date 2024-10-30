# getTalkFlag

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getTalkFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 42 00`
- **Assembly Address in Memory** : `0x894d304`

## Parameters

- `(uint)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 42 00 / 02 00 00 00 / 03 00 00 00 / 08 00 00 00 / 5d 00 00 00```

Which is interpreted as:

```c
getTalkFlag((int)3, ((global)int *)giVar93)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894d304(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  uint *puVar2;
  uint *puVar3;
  int iVar4;
  byte *pbVar5;
  uint uVar6;
  uint uVar7;
  
  iVar1 = FUN_0883c070(param_2);
  puVar2 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,1,1,4);
  iVar4 = Save::Get_Save_BaseAddr(1);
  uVar7 = *puVar2 & 7;
  uVar6 = *puVar2 >> 3;
  if (((int)(uint)*(byte *)((*puVar3 >> 3) + *(int *)(iVar4 + 0x50) + 0x2b008) >> (*puVar3 & 7) & 1U
      ) == 0) {
    pbVar5 = (byte *)(*(int *)(iVar1 + 4) + uVar6);
    *pbVar5 = *pbVar5 & ((byte)(1 << uVar7) ^ 0xff);
  }
  else {
    pbVar5 = (byte *)(*(int *)(iVar1 + 4) + uVar6);
    *pbVar5 = *pbVar5 | (byte)(1 << uVar7);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

