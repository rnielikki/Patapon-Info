# getHandle

Gets handle of the whole generator.

## Code Information

- **Name**: `getHandle`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 15 00`
- **Assembly Address in Memory** : `0x8b5d9c8`

## Parameters

- `(int)generator_identifier` *(8 bytes)* : Identifier of the generator, 2nd parameter of [create](./create.md).
- `(int *)destination` *(8 bytes)* : Variable to *store* the generator handle.

## Example

Here is one example in hex:

```25 1f 15 00 / 02 00 00 00 / 00 00 00 00 / 08 00 00 00 / 1a 00 00 00```

Which is interpreted as:

```c
getHandle((int)0, ((global)int *)giVar26)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5d9c8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0x2c8);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (iVar3 == 0) {
    *puVar2 = 0xffffffff;
  }
  else {
    uVar4 = Get_Generator_HandleID(iVar3,*puVar1);
    *puVar2 = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

